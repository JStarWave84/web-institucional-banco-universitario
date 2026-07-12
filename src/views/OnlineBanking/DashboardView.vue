<script setup>
import { ref, onMounted } from 'vue'
import { SlidersHorizontal, Calendar, Loader2 } from '@lucide/vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { getMovements } from '@/api/movements'
import RecentsMovementsItem from '@/components/RecentsMovementsItem.vue'
import FilterDialog from '@/components/FilterDialog.vue'
import UserDataDialog from '@/components/UserDataDialog.vue'

const authStore = useAuthStore()

const movements = ref([])
const loadingMovements = ref(true)
const isFilterOpen = ref(false)
const isUserDataOpen = ref(false)

const { balance, loadingBalance, user } = storeToRefs(authStore)

function maskAccount(account) {
  if (!account) return ''
  const hidden = localStorage.getItem('bank_hide_account') !== 'false'
  return hidden ? `****${account.slice(-4)}` : account
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES',
    minimumFractionDigits: 2,
  }).format(value)
}

const timeToday = new Intl.DateTimeFormat('es-VE', {
  dateStyle: 'long',
}).format(new Date())

const apiParams = ref({
  page: 1,
  page_size: 10, // Limitamos a 10 para vista rápida de Dashboard
})

const fetchTransactions = async () => {
  try {
    loadingMovements.value = true
    const response = await getMovements(apiParams.value)
    movements.value = response.data // Guarda el arreglo de movimientos
  } catch (error) {
    console.error('Error al cargar movimientos:', error)
  } finally {
    loadingMovements.value = false
  }
}

const handleApplyFilters = (newParams) => {
  apiParams.value = newParams
  fetchTransactions()
}

const contactosFrecuentes = [
  { id: 1, nombre: 'Mateo G.', avatar: '' },
  { id: 2, nombre: 'Sofia L.', avatar: '' },
  { id: 3, nombre: 'Lucas V.', avatar: '' },
  { id: 4, nombre: 'Elena R.', avatar: '' },
]

onMounted(() => {
  authStore.fetchBalance()
  fetchTransactions()
})
</script>

<template>
  <section class="m-10 max-w-236 w-full flex flex-col gap-8">
    <div class="flex justify-between items-start w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-extrabold text-[40px] text-brand-primary leading-10 tracking-[-1px]">
          Tu Estado Académico
        </h1>
        <p class="text-[16px] leading-6 text-page-text">
          Resumen financiero para tu semestre actual.
        </p>
      </div>
      <div
        class="flex items-center gap-2 bg-brand-bg-secondary text-brand-primary px-4 py-2 rounded-xl"
      >
        <Calendar class="w-4 h-4" />
        <span class="text-xs font-semibold">{{ timeToday }}</span>
      </div>
    </div>

    <div
      class="relative w-full bg-linear-to-br from-[#064E3B] to-[#022C22] p-10 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between min-h-60"
    >
      <div class="flex flex-col gap-2 z-10">
        <span class="text-emerald-300/80 text-[14px] font-medium tracking-wide uppercase">
          Balance Disponible
        </span>
        <h2 class="text-white font-bold text-[54px] tracking-tight leading-none">
          {{ loadingBalance ? 'Cargando...' : formatCurrency(balance) }}
        </h2>
      </div>
      <div class="flex items-center gap-3 z-10">
        <button
          @click="isUserDataOpen = true"
          class="bg-teal-200 hover:bg-teal-300 text-teal-950 font-bold px-6 py-3 rounded-full text-[14px] transition-all duration-200 shadow-sm cursor-pointer"
        >
          Ver mis datos
        </button>
        <span class="text-emerald-300/80 text-[14px] font-mono tracking-wider select-all">
          Cuenta: {{ maskAccount(user?.accountNumber) }}
        </span>
      </div>
      <div
        class="absolute -right-16 -bottom-16 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"
      ></div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-[18px] text-bank-gray-dark">Contactos Frecuentes</h3>
        <button class="text-brand-primary font-bold text-[14px] hover:underline cursor-pointer">
          Ver Todos
        </button>
      </div>

      <div class="flex items-center gap-6">
        <div class="flex flex-col items-center gap-2">
          <button
            class="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 border border-dashed border-gray-300 flex justify-center items-center text-gray-500 text-xl font-medium transition-colors cursor-pointer"
          >
            +
          </button>
          <span class="text-[12px] font-medium text-page-text">Nuevo</span>
        </div>

        <div
          v-for="contacto in contactosFrecuentes"
          :key="contacto.id"
          class="flex flex-col items-center gap-2"
        >
          <div
            class="w-14 h-14 rounded-full bg-slate-800 border-2 border-white shadow-sm overflow-hidden flex justify-center items-center"
          >
            <img
              v-if="contacto.avatar"
              :src="contacto.avatar"
              alt="Avatar"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full bg-linear-to-tr from-slate-700 to-slate-900 flex justify-center items-center"
            >
              <span class="text-white font-bold text-xs">{{ contacto.nombre.charAt(0) }}</span>
            </div>
          </div>
          <span class="text-[12px] font-medium text-bank-gray-dark">{{ contacto.nombre }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col gap-6">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-[18px] text-bank-gray-dark">Actividad Reciente</h3>
        <button
          @click="isFilterOpen = true"
          class="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-[14px] font-semibold text-page-text hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <SlidersHorizontal class="w-4 h-4 text-gray-500" />
          Filtrar
        </button>
      </div>

      <FilterDialog
        :is-open="isFilterOpen"
        :initial-multiplier="String(apiParams.multiplier || '')"
        :initial-page-size="apiParams.page_size"
        @close="isFilterOpen = false"
        @apply="handleApplyFilters"
      />

      <UserDataDialog :open="isUserDataOpen" @close="isUserDataOpen = false" />

      <div class="flex flex-col">
        <div v-if="loadingMovements">
          <div class="flex justify-center items-center gap-1 py-6">
            <Loader2 class="animate-spin text-brand-primary" />
            <span class="text-page-text text-[14px] font-medium">Cargando movimientos...</span>
          </div>
        </div>

        <div v-if="movements.length === 0 && !loadingMovements">
          <div class="flex justify-center items-center gap-1 py-6">
            <span class="text-page-text text-[14px] font-medium">No hay movimientos recientes</span>
          </div>
        </div>

        <RecentsMovementsItem
          v-for="movement in movements"
          :key="movement.id"
          :transaction="movement"
        />
      </div>

      <div class="flex justify-center mt-2">
        <router-link
          to="movimientos"
          class="text-brand-primary font-bold text-[14px] hover:underline cursor-pointer"
        >
          Ver Historial Completo
        </router-link>
      </div>
    </div>
  </section>
</template>
