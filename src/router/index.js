import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/sobre-nosotros',
      name: 'SobreNosotros',
      component: () => import('../views/SobreNosotrosView.vue'),
    },
  ],
})

export default router
