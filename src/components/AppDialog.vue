<script setup>
import { CircleCheck, CircleX, TriangleAlert } from '@lucide/vue'

defineProps({
  isOpen: { type: Boolean, default: false },
  type: { type: String, default: 'success' },
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  buttonText: { type: String, default: 'Aceptar' },
  cancelText: { type: String, default: 'Cancelar' },
  confirmText: { type: String, default: 'Eliminar' },
})

const emit = defineEmits(['close', 'confirm'])

function close() {
  emit('close')
}

function handleConfirm() {
  emit('confirm')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in"
      @click.self="close"
    >
      <div
        class="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-scale-in"
      >
        <div class="flex flex-col items-center gap-4 p-8 text-center">
          <CircleCheck
            v-if="type === 'success'"
            class="w-16 h-16 text-emerald-500"
          />
          <TriangleAlert
            v-else-if="type === 'confirm'"
            class="w-16 h-16 text-amber-500"
          />
          <CircleX
            v-else
            class="w-16 h-16 text-red-500"
          />
          <h3 class="font-bold text-lg text-slate-800">
            {{ title }}
          </h3>
          <p class="text-[14px] text-page-text leading-relaxed">
            {{ message }}
          </p>

          <template v-if="type === 'confirm'">
            <div class="flex items-center gap-3 mt-2 w-full">
              <button
                @click="close"
                class="flex-1 px-8 py-3 rounded-xl text-sm font-semibold text-bank-gray-dark bg-[#e7e8e9] hover:bg-[#d0d2d3] transition-colors cursor-pointer"
              >
                {{ cancelText }}
              </button>
              <button
                @click="handleConfirm"
                class="flex-1 px-8 py-3 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
              >
                {{ confirmText }}
              </button>
            </div>
          </template>

          <button
            v-else
            @click="close"
            class="mt-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
            :class="
              type === 'success'
                ? 'bg-brand-primary hover:bg-brand-secondary'
                : 'bg-red-600 hover:bg-red-700'
            "
          >
            {{ buttonText }}
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
