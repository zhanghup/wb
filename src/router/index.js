import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
    path: '/form',
    name: 'form',
    component: () => import( '../views/form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
