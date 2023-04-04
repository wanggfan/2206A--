import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import NotFound from "../views/404.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/users.vue')
    },
    
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
