<script setup>
import { ref, watch } from 'vue'
import { X } from '@lucide/vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  contact: { type: Object, default: null },
})

const emit = defineEmits(['close', 'save'])

const alias = ref('')
const accountNumber = ref('')
const description = ref('')
const saving = ref(false)

const isEditing = ref(false)

watch(
  () => props.isOpen,
  (open) => {
    saving.value = false
    if (open) {
      if (props.contact) {
        isEditing.value = true
        alias.value = props.contact.alias || ''
        accountNumber.value = props.contact.account_number || ''
        description.value = props.contact.description || ''
      } else {
        isEditing.value = false
        alias.value = ''
        accountNumber.value = ''
        description.value = ''
      }
    }
  }
)

const isValid = () => {
  if (!alias.value.trim()) return false
  if (!isEditing.value && accountNumber.value.replace(/\s/g, '').length !== 20) return false
  return true
}

function close() {
  if (!saving.value) emit('close')
}

function handleSave() {
  if (!isValid()) return
  saving.value = true

  const data = {
    alias: alias.value.trim(),
    description: description.value.trim(),
  }

  if (!isEditing.value) {
    data.account_number = accountNumber.value.replace(/\s/g, '')
  }

  emit('save', data)
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
        class="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-scale-in"
      >
        <div class="flex items-center justify-between p-6 pb-0">
          <h3 class="font-bold text-xl text-bank-gray-dark">
            {{ isEditing ? 'Editar Contacto' : 'Nuevo Contacto' }}
          </h3>
          <button
            @click="close"
            class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e7e8e9] transition-colors cursor-pointer"
          >
            <X class="w-4 h-4 text-page-text" />
          </button>
        </div>

        <form
          @submit.prevent="handleSave"
          class="flex flex-col gap-5 p-6"
        >
          <div class="flex flex-col gap-2">
            <span class="font-bold text-page-text text-xs tracking-[1.20px] leading-4">
              ALIAS
            </span>
            <input
              v-model="alias"
              type="text"
              placeholder="Ej. Chela"
              class="w-full rounded-full bg-[#e7e8e9] px-6 py-4.25 text-base text-bank-gray-dark outline-none transition focus:bg-[#dee2e6]"
            />
          </div>

          <div class="flex flex-col gap-2">
            <span class="font-bold text-page-text text-xs tracking-[1.20px] leading-4">
              N° DE CUENTA
            </span>
            <input
              v-if="!isEditing"
              v-model="accountNumber"
              type="text"
              placeholder="0000 0000 0000 0000 0000"
              maxlength="20"
              class="w-full rounded-full bg-[#e7e8e9] px-6 py-4.25 text-base text-bank-gray-dark outline-none transition focus:bg-[#dee2e6]"
            />
            <div
              v-else
              class="w-full rounded-full bg-[#e7e8e9] px-6 py-4.25 text-base text-[#6f7979] select-all"
            >
              {{ accountNumber }}
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <span class="font-bold text-page-text text-xs tracking-[1.20px] leading-4">
              DESCRIPCIÓN (OPCIONAL)
            </span>
            <textarea
              v-model="description"
              placeholder="Añade una nota para recordar quién es..."
              rows="3"
              class="w-full rounded-xl bg-[#e7e8e9] px-6 py-4 text-base text-bank-gray-dark outline-none transition focus:bg-[#dee2e6] resize-none"
            ></textarea>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <button
              type="button"
              @click="close"
              class="flex-1 px-8 py-3.5 rounded-full font-bold text-page-text text-base hover:bg-[#e7e8e9] transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              :disabled="!isValid() || saving"
              class="flex-1 px-8 py-3.5 rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ saving ? 'Guardando...' : 'Guardar' }}
            </button>
          </div>
        </form>
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
