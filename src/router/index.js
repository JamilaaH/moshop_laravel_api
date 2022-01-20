import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/back',
    name:'Back', 
    component: () => import(/* webpackChunkName: "back" */ '../views/Back.vue'),
    meta: { requiresAuth: true },
    redirect: {
      name:"Dashboard",
    },

  },
  {
    path:'/dashboard',
    name:'Dashboard', 
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { requiresAuth: true }

  },
  {
    path:'/login',
    name:'Login', 
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
