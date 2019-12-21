import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Apollo from "../package/apollo/index.js"
import "../package/value"
import "../package/excel/xlsx"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$api = new Apollo("/api")
Vue.prototype.$auth = new Apollo("/auth")
Vue.use(ElementUI);



new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
