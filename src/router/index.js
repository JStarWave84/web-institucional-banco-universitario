import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'educacion-financiera',
          name: 'FinancialEducation',
          component: () => import('../views/FinancialEducationView.vue'),
        },
        {
          path: 'alianzas',
          name: 'Alianzas',
          component: () => import('../views/AlianzasView.vue'),
        },
        {
          path: 'sobre-nosotros',
          name: 'SobreNosotros',
          component: () => import('../views/SobreNosotrosView.vue'),
        },
        {
          path: 'contacto',
          name: 'Contact',
          component: () => import('../views/ContactView.vue'),
        },
      ],
    },
    {
      path: '/bancaenlinea',
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: 'crear-cuenta',
          name: 'CrearCuenta',
          component: () => import('../views/CrearCuentaView.vue'),
        },
        {
          path: '',
          component: () => import('../layouts/AuthLayout.vue'),
          children: [
            {
              path: 'dashboard',
              name: 'Dashboard',
              component: () => import('../views/OnlineBanking/DashboardView.vue'),
            },
            {
              path: 'seguridad',
              name: 'Seguridad',
              component: () => import('../views/OnlineBanking/SecurityView.vue'),
            },
            {
              path: 'contactos',
              name: 'Contactos_Banco',
              component: () => import('../views/OnlineBanking/Contact_BankViews.vue'),
            },
            {
              path: 'movimientos',
              name: 'Movimientos',
              component: () => import('../views/OnlineBanking/Movements.vue'),
            },
            {
              path: 'transferir',
              name: 'Transferir',
              component: () => import('../views/OnlineBanking/TransferView.vue'),
            },
          ],
        },
      ],
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
