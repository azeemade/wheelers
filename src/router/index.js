import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WheelView from '../views/WheelView.vue'
import SuccessView from '../views/SuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wheel',
      name: 'wheel',
      component: WheelView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
  ]
})

export default router
