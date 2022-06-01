import { createRouter, createWebHistory } from 'vue-router'

const routes = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
