import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Apollo from "../package/apollo/index.js"
import "../package/value"


Vue.config.productionTip = false
Vue.prototype.$api = new Apollo("/api")
Vue.prototype.$auth = new Apollo("/auth")

new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')

// var a = {
//   a:{
//     name:"站点",
//     devices:[{
//       id:1,
//       name:"设备1"
//     },{
//       id:2,
//       name:"设备12",
//       sensors:[{
//         id:3,
//         name:"压力"
//       },{
//         id:4,
//         name:"流量"
//       }]
//     }]
//   }
// }