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
    {
      path: '/alianzas',
      name: 'Alianzas',
      component: () => import('../views/AlianzasView.vue'),
    },
    {
      path: '/sobre-nosotros',
      name: 'SobreNosotros',
      component: () => import('../views/SobreNosotrosView.vue'),
    },
    {
      path: '/contacto',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
