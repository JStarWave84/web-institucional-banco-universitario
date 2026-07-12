<script setup>
import { X } from '@lucide/vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

defineProps({
  open: Boolean,
})
const emit = defineEmits(['close'])

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

function formatDate(date) {
  if (!date) return 'No registrado'
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in"
      @click.self="emit('close')"
    >
      <div class="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-scale-in">
        <div class="flex justify-between items-center p-5 border-b border-gray-100">
          <h3 class="font-bold text-lg text-slate-800">Mis Datos</h3>
          <button
            @click="emit('close')"
            class="p-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div class="p-6 space-y-5">
          <div class="flex items-center justify-center mb-6">
            <div
              class="w-20 h-20 rounded-full bg-brand-primary text-white flex items-center justify-center text-3xl font-bold"
            >
              {{ user?.firstName?.charAt(0) }}{{ user?.lastName?.charAt(0) }}
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <p class="text-xs font-semibold text-page-text uppercase tracking-wider mb-1">
                Nombre completo
              </p>
              <p class="text-[15px] font-bold text-bank-gray-dark">
                {{ user?.firstName }} {{ user?.lastName }}
              </p>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
              <p class="text-xs font-semibold text-page-text uppercase tracking-wider mb-1">
                Correo electrónico
              </p>
              <p class="text-[15px] font-bold text-bank-gray-dark">
                {{ user?.email }}
              </p>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
              <p class="text-xs font-semibold text-page-text uppercase tracking-wider mb-1">
                Cédula de identidad
              </p>
              <p class="text-[15px] font-bold text-bank-gray-dark">
                {{ user?.documentNumber }}
              </p>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
              <p class="text-xs font-semibold text-page-text uppercase tracking-wider mb-1">
                Teléfono
              </p>
              <p class="text-[15px] font-bold text-bank-gray-dark">
                {{ user?.phoneNumber || 'No registrado' }}
              </p>
            </div>
            <div class="w-full h-px bg-gray-100"></div>
            <div>
              <p class="text-xs font-semibold text-page-text uppercase tracking-wider mb-1">
                Fecha de nacimiento
              </p>
              <p class="text-[15px] font-bold text-bank-gray-dark">
                {{ formatDate(user?.birthDate) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-fade-in { animation: fadeIn 0.2s ease-out; }
.animate-scale-in { animation: scaleIn 0.2s ease-out; }
</style>
