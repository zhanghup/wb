import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Apollo from "../package/apollo/index.js"
import "../package/value"
import "../package/excel/xlsx"


Vue.config.productionTip = false
Vue.prototype.$api = new Apollo("/api")
Vue.prototype.$auth = new Apollo("/auth")



new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
