import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/text-cutter',
      name: 'text-cutter',
      component: () => import('../views/TextCutter.vue')
    },


    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: ()=> import('../views/NotFound.vue') 
    },
  ]
})

export default router
