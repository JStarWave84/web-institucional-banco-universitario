import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

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
          meta: { guest: true },
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: 'crear-cuenta',
          name: 'CrearCuenta',
          component: () => import('../views/CreateAccountsView.vue'),
        },
        {
          path: 'recover-password',
          name: 'RecoverPassword',
          component: () => import('../views/RecoverPasswordView.vue'),
        },
        {
          path: '',
          component: () => import('../layouts/AuthLayout.vue'),
          children: [
            {
              path: 'dashboard',
              name: 'Dashboard',
              meta: { requiresAuth: true },
              component: () => import('../views/OnlineBanking/DashboardView.vue'),
            },
            {
              path: 'seguridad',
              name: 'Seguridad',
              meta: { requiresAuth: true },
              component: () => import('../views/OnlineBanking/SecurityView.vue'),
            },
            {
              path: 'contactos',
              name: 'Contactos_Banco',
              meta: { requiresAuth: true },
              component: () => import('../views/OnlineBanking/Contact_BankViews.vue'),
            },
            {
              path: 'movimientos',
              name: 'Movimientos',
              meta: { requiresAuth: true },
              component: () => import('../views/OnlineBanking/Movements.vue'),
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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' })
  } else if (to.meta.guest && authStore.isAuthenticated) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
