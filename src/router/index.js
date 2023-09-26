import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookie } from '../Composables/Cookie'

const { findCookie } = useCookie()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      //implement protected routes
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      beforeEnter: () => {
        const accessToken = findCookie('access_token')
        if (!accessToken) {
          return false
        }
        return true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
