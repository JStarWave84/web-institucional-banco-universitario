<script setup>
import { ref, computed, onMounted } from 'vue'
import { Download, SlidersHorizontal, Loader2 } from '@lucide/vue'
import { getMovements } from '@/api/movements'
import MovementItem from '@/components/MovementItem.vue'
import FilterDialog from '@/components/FilterDialog.vue'

const movements = ref([])
const loading = ref(false)
const error = ref(false)
const isFilterOpen = ref(false)
const hasMore = ref(true)
const apiParams = ref({ page: 1, page_size: 20 })

const formatDateLabel = (date) => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const toDateStr = (d) => d.toISOString().split('T')[0]
  const day = date.getDate()
  const month = date.toLocaleString('es-VE', { month: 'long' })
  const year = date.getFullYear()

  if (toDateStr(date) === toDateStr(today)) {
    return `hoy, ${day} de ${month}`
  }
  if (toDateStr(date) === toDateStr(yesterday)) {
    return `ayer, ${day} de ${month}`
  }
  return `${day} de ${month} de ${year}`
}

const groupedMovements = computed(() => {
  const groups = {}
  for (const mov of movements.value) {
    const date = new Date(mov.created_at)
    const dateKey = date.toISOString().split('T')[0]
    if (!groups[dateKey]) {
      groups[dateKey] = {
        date: dateKey,
        label: formatDateLabel(date),
        movements: [],
      }
    }
    groups[dateKey].movements.push(mov)
  }
  return Object.values(groups).sort((a, b) => b.date.localeCompare(a.date))
})

const fetchMovements = async () => {
  loading.value = true
  error.value = false
  try {
    const response = await getMovements(apiParams.value)
    const data = response.data
    if (apiParams.value.page === 1) {
      movements.value = data
    } else {
      movements.value = [...movements.value, ...data]
    }
    hasMore.value = data.length === apiParams.value.page_size
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

const loadMore = () => {
  apiParams.value = { ...apiParams.value, page: apiParams.value.page + 1 }
  fetchMovements()
}

const handleApplyFilters = (newParams) => {
  apiParams.value = { ...newParams }
  movements.value = []
  fetchMovements()
}

onMounted(() => {
  fetchMovements()
})
</script>

<template>
  <main class="flex flex-col m-10 w-244 max-w-5xl gap-8">
    <!--Header Section-->
    <section class="flex justify-between w-full h-28 mb-4">
      <div class="flex flex-col w-[443.42px] h-26 gap-2">
        <h1 class="text-[48px] font-extrabold text-[#004649]">Movimientos</h1>
        <p class="text-[#3F4949]">
          Sigue el flujo de tu dinero. Filtra por categorías académicas o gastos diarios.
        </p>
      </div>

      <button
        class="flex justify-center w-35 h-12 self-end rounded-full px-6 py-3 gap-4 bg-[#E1E3E4] text-[#191C1D] font-bold"
      >
        <div class="w-4 h-4"><Download /></div>
        <span>Exportar</span>
      </button>
    </section>

    <!--Filter Button-->
    <section class="flex justify-end w-full">
      <button
        @click="isFilterOpen = true"
        class="flex items-center gap-2 px-6 py-3 rounded-full bg-[#E7E8E9] text-[#191C1D] text-[14px] font-bold cursor-pointer"
      >
        <SlidersHorizontal class="w-4 h-4 text-[#6F7979]" />
        Filtrar
      </button>
    </section>

    <!--Loading State-->
    <div
      v-if="loading && movements.length === 0"
      class="flex items-center justify-center w-full h-40 gap-2"
    >
      <Loader2 class="w-5 h-5 text-[#004649] animate-spin" />
      <span class="text-[#3F4949] text-[14px] font-medium">Cargando movimientos...</span>
    </div>

    <!--Error State-->
    <div
      v-else-if="error && movements.length === 0"
      class="flex items-center justify-center w-full h-40"
    >
      <span class="text-[#BA1A1A] text-[14px] font-medium"
        >Error al cargar movimientos. Intenta de nuevo.</span
      >
    </div>

    <!--Empty State-->
    <div
      v-else-if="!loading && groupedMovements.length === 0"
      class="flex items-center justify-center w-full h-40"
    >
      <span class="text-[#3F4949] text-[14px] font-medium">No hay movimientos</span>
    </div>

    <!--Transaction List-->
    <ul v-else class="flex flex-col w-full gap-4">
      <template v-for="group in groupedMovements" :key="group.date">
        <!--Date Header-->
        <div class="flex items-center w-full h-4 px-2 gap-4">
          <span
            class="w-[141.33px] shrink-0 text-[#6F7979] text-center text-[12px] font-bold uppercase"
          >
            {{ group.label }}
          </span>
          <div class="flex-1 h-px bg-[#E7E8E9]"></div>
        </div>

        <!--Movements-->
        <MovementItem
          v-for="movement in group.movements"
          :key="movement.id"
          :movement="movement"
        />
      </template>
    </ul>

    <!--More results-->
    <div
      v-if="hasMore && !loading"
      class="flex items-end justify-center w-full mt-4"
    >
      <button
        @click="loadMore"
        class="w-[231.55px] h-13 px-8 py-4 rounded-full bg-[#E7E8E9] text-[#191C1D] text-[14px] font-bold cursor-pointer"
      >
        Cargar más movimientos
      </button>
    </div>

    <!--Loading More Spinner-->
    <div
      v-if="loading && movements.length > 0"
      class="flex items-center justify-center w-full gap-2"
    >
      <Loader2 class="w-5 h-5 text-[#004649] animate-spin" />
      <span class="text-[#3F4949] text-[14px] font-medium">Cargando más...</span>
    </div>

    <!--Filter Dialog-->
    <FilterDialog
      :is-open="isFilterOpen"
      :initial-multiplier="String(apiParams.multiplier || '')"
      :initial-page-size="apiParams.page_size"
      @close="isFilterOpen = false"
      @apply="handleApplyFilters"
    />
  </main>
</template>
