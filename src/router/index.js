import { createRouter, createWebHistory } from "vue-router";
import authRoutes from '../modules/auth/routes'
import store from '../store'

const routes = [...authRoutes]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters.checkAuth
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router