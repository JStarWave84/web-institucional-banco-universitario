<script setup>
import { ref, watch } from 'vue'
import { X } from '@lucide/vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close', 'apply'])

// Estados locales del formulario de filtros
const localFilters = ref({
  multiplier: '', // '' = Todos, '1' = Ingresos, '-1' = Egresos
  page_size: 10, // Por defecto 10
})

const closeDialog = () => {
  emit('close')
}

const applyFilters = () => {
  // Construimos los parámetros limpios para la API
  const cleanParams = {
    page: 1, // Siempre reiniciamos a la página 1 al filtrar
    page_size: Number(localFilters.value.page_size),
  }

  // Solo añadimos el multiplier si el usuario seleccionó una opción específica
  if (localFilters.value.multiplier !== '') {
    cleanParams.multiplier = Number(localFilters.value.multiplier)
  }

  emit('apply', cleanParams)
  closeDialog()
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in"
    >
      <div class="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-scale-in">
        <div class="flex justify-between items-center p-5 border-b border-gray-100">
          <h4 class="font-bold text-lg text-slate-800">Filtrar Movimientos</h4>
          <button
            @click="closeDialog"
            class="p-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div class="p-6 space-y-5">
          <label class="block">
            <span class="text-xs font-semibold text-page-text uppercase tracking-wider"
              >Tipo de Transacción</span
            >
            <select
              v-model="localFilters.multiplier"
              class="mt-2 w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-200 cursor-pointer"
            >
              <option value="">Todos los movimientos</option>
              <option value="1">Créditos (Ingresos / +)</option>
              <option value="-1">Débitos (Egresas / -)</option>
            </select>
          </label>

          <label class="block">
            <span class="text-xs font-semibold text-page-text uppercase tracking-wider"
              >Cantidad de Registros</span
            >
            <select
              v-model="localFilters.page_size"
              class="mt-2 w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-200 cursor-pointer"
            >
              <option :value="5">5 movimientos</option>
              <option :value="10">10 movimientos</option>
              <option :value="20">20 movimientos</option>
              <option :value="50">50 movimientos</option>
            </select>
          </label>
        </div>

        <div class="flex gap-3 p-5 bg-slate-50 border-t border-gray-100 justify-end">
          <button
            @click="closeDialog"
            class="px-4 py-2.5 rounded-xl text-sm font-semibold text-page-text hover:bg-brand-bg-secondary transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            @click="applyFilters"
            class="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-primary hover:bg-brand-secondary transition-colors shadow-xs cursor-pointer"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}
.animate-scale-in {
  animation: scaleIn 0.2s ease-out;
}
</style>
