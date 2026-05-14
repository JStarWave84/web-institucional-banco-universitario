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
      path: '/educacion-financiera',
      name: 'FinancialEducation',
      component: () => import('../views/FinancialEducationView.vue'),
    },
  ],
})

export default router
