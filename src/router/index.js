import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cart' },
  { path: '/cart', name: 'Cart', component: Cart }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
