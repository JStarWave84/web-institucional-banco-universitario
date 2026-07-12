<script setup>
import {
  LayoutDashboard,
  ReceiptText,
  SendHorizontal,
  Shield,
  Users,
  ArrowRightFromLine,
} from '@lucide/vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const { user } = storeToRefs(authStore)

const handleLogout = () => {
  authStore.logout()
  router.push('/bancaenlinea/login')
}

const links = [
  { name: 'Dashboard', path: 'dashboard', icon: LayoutDashboard },
  { name: 'Movimientos', path: 'movimientos', icon: ReceiptText },
  { name: 'Transferir', path: 'transferir', icon: SendHorizontal },
  { name: 'Seguridad', path: 'seguridad', icon: Shield },
  { name: 'Contactos_Banco', path: 'contactos', icon: Users, label: 'Contactos' },
]
</script>

<template>
  <aside
    class="bg-bank-gray flex flex-col justify-between max-w-[256px] p-4 h-screen overflow-y-auto z-40"
  >
    <div class="flex flex-col gap-2">
      <div class="flex flex-col px-4 py-6">
        <img src="@/assets/img/logo-no-background.png" width="224" alt="Logo Banco Universitario" />
      </div>
      <div class="flex flex-col px-4 pb-8">
        <div class="flex items-center gap-3">
          <div>
            <span
              class="w-10 h-10 rounded-full flex justify-center items-center bg-brand-primary text-white"
            >
              {{ user.firstName?.charAt(0).toUpperCase() }}
            </span>
          </div>
          <div>
            <span class="font-bold text-[14px] leading-5">Hola, {{ user.firstName }}</span>
          </div>
        </div>
      </div>
      <nav class="flex flex-col gap-1">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
          class="flex gap-3 text-[#64748B] px-4 py-3 hover:bg-teal-300/30 hover:text-brand-primary transition-all duration-200 hover:translate-x-1 rounded-xl"
          :class="{ 'bg-teal-300/30 text-brand-primary translate-x-1': $route.name === link.name }"
        >
          <component :is="link.icon" class="w-4.5 h-4.5" />
          <span class="font-medium text-[14px] leading-5">{{ link.label || link.name }}</span>
        </router-link>
      </nav>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col px-4 pb-6">
        <button
          @click="handleLogout"
          class="flex gap-3 px-4 py-3 rounded-xl hover:bg-red-200 transition-colors duration-200 cursor-pointer"
        >
          <ArrowRightFromLine class="w-4.5 h-4.5 text-red-600" />
          <span class="font-semibold text-[14px] leading-5 text-red-600">Cerrar sesión</span>
        </button>
      </div>
    </div>
  </aside>
</template>
