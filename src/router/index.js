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
      component: WheelView,
      meta: {
        requiresEmail: true,
      }
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView,
      meta: {
        requiresEmail: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresEmail)) {
    if (localStorage.getItem('email') == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router
