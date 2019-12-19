import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import tag from 'graphql-tag'
// import { Message } from 'element-ui'


export default class Apollo {
  middlewareLink = new ApolloLink((operation, forward) => {
    const token = sessionStorage.getItem('access_token')
    operation.setContext({
      headers: {
        Authorization: token
      }
    })
    return forward(operation)
  })

  networkError = new onError(r => {
    if (r.networkError) {
      switch (r.networkError.statusCode) {
        case 401: location.href = '/login.html'; return
      }
    }
  })

  constructor(url) {
    if (url) {
      this.Reset(url)
    }
  }


  RegisterLink (link) {
    if (link instanceof ApolloLink) {
      this.middlewareLink = link
    } else {
      console.error("request type ApolloLink")
    }
    return this
  }

  RegisterError (error) {
    if (error instanceof onError) {
      this.networkError = error
    } else {
      console.error("request type onError")
    }
    return this
  }



  Reset (url) {
    let apiLink = new HttpLink({
      uri: url // 请求路径
    })
    this.client = new ApolloClient({
      link: this.middlewareLink.concat(this.networkError.concat(apiLink)),
      cache: new InMemoryCache({
        addTypename: false,
        resultCaching: false
      }),
      defaultOptions: {
        query: {
          fetchPolicy: "network-only"
        }
      },
      connectToDevTools: true
    })
  }


  query (query, vars, complate) {
    return new Promise((resolve, reject) => {
      this.client
        .query({
          query: tag`${query}`,
          variables: { query: vars },
        }).then(r => {
          if (complate && complate instanceof Function) {
            complate()
          }
          resolve(r.data)
        }).catch(r => {
          if (complate && complate instanceof Function) {
            complate()
          }
          reject(r)
        })
    })
  }
  query2 (query, vars, complate) {
    return new Promise((resolve, reject) => {
      this.client
        .query({
          query: tag`${query}`,
          variables: { ...vars },
        }).then(r => {
          if (complate && complate instanceof Function) {
            complate()
          }
          resolve(r.data)
        }).catch(r => {
          if (complate && complate instanceof Function) {
            complate()
          }
          reject(r)
        })
    });
  }
  mutate (query, vars, complate) {
    return new Promise((resolve, reject) => {
      this.client
        .mutate({
          mutation: tag`${query}`,
          variables: vars,
        }).then(r => {
          if (complate && complate instanceof Function) {
            complate()
          }
          resolve(r.data)
        }).catch(r => {
          if (complate && complate instanceof Function) {
            complate()
          }
          reject(r)
        })
    })
  }
}
