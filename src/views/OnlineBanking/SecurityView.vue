<script setup>
import { ref, watch, computed } from 'vue'
import { EyeOff, Info, RotateCcwKey, X, CircleCheck, CircleX } from '@lucide/vue'
import { changePasswordSchema } from '@/schemas/auth.schema'
import { updatePassword } from '@/api/auth'

const hideAccount = ref(localStorage.getItem('bank_hide_account') !== 'false')
watch(hideAccount, (val) => localStorage.setItem('bank_hide_account', val))

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const errors = ref({})
const loading = ref(false)
const showSuccessDialog = ref(false)
const showErrorDialog = ref(false)
const dialogMessage = ref('')

const passwordMinLength = computed(() => newPassword.value.length >= 8)
const passwordHasNumber = computed(() => /[0-9]/.test(newPassword.value))
const passwordHasSymbol = computed(() => /[^a-zA-Z0-9]/.test(newPassword.value))

function submitPasswordChange() {
  errors.value = {}
  dialogMessage.value = ''
  loading.value = true

  if (newPassword.value !== confirmPassword.value) {
    errors.value.confirm_password = 'Las contraseñas no coinciden.'
    loading.value = false
    return
  }

  const result = changePasswordSchema.safeParse({
    password: currentPassword.value,
    new_password: newPassword.value,
  })

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors.value[issue.path[0]] = issue.message
    })
    loading.value = false
    return
  }

  updatePassword(result.data.password, result.data.new_password)
    .then((res) => {
      showSuccessDialog.value = true
      currentPassword.value = ''
      newPassword.value = ''
      confirmPassword.value = ''
    })
    .catch((err) => {
      const status = err.response?.status
      if (status === 401) {
        dialogMessage.value = 'Usuario no autorizado, credenciales incorrectas.'
      } else {
        dialogMessage.value = err.response?.data?.message || 'Error al actualizar la contraseña.'
      }
      showErrorDialog.value = true
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <section class="m-10 max-w-236 flex flex-col gap-10">
    <div class="flex flex-col gap-2">
      <h1 class="font-extrabold text-[48px] text-bank-gray-dark leading-12 tracking-[-1.2px]">
        Configuración de Seguridad
      </h1>
      <p class="text-[18px] leading-7 text-page-text">
        Administra la protección de tus activos académicos y financieros.
      </p>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <div class="bg-white col-span-7 flex flex-col gap-8 px-8 py-8 rounded-xl">
        <div class="flex gap-4">
          <div class="flex flex-col justify-center items-center rounded-xl bg-teal-300/30 p-3">
            <EyeOff class="text-brand-primary w-5.5 h-5.5" />
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-[20px] leading-7 text-bank-gray-dark">
              Privacidad de Cuenta
            </h3>
            <p class="text-[14px] leading-5 text-page-text">
              Controla que información es visible en tu pantalla.
            </p>
          </div>
        </div>

        <div class="bg-brand-bg-secondary flex justify-between p-6 rounded-xl">
          <div class="flex flex-col gap-1">
            <p class="font-bold text-[16px] leading-6 text-brand-primary">
              Ocultar Número de Cuenta
            </p>
            <p class="text-[12px] leading-4 text-page-text">
              Tu número de cuenta se mostrará como ****4829
            </p>
          </div>
          <label class="inline-flex items-center cursor-pointer select-none">
            <input type="checkbox" v-model="hideAccount" class="sr-only peer" />

            <div
              class="relative w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:inset-s-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-primary"
            ></div>
          </label>
        </div>

        <div class="flex gap-3 px-2">
          <div class="flex flex-col justify-center items-center">
            <Info class="text-brand-primary w-5 h-5" />
          </div>
          <div class="flex flex-col pe-[33.05px]">
            <p class="text-[14px] leading-5 text-page-text">
              Ocultar tu número de cuenta previene miradas indiscretas en espacios públicos o
              bibliotecas.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white col-span-5 flex flex-col gap-8 px-8 pt-8 pb-8 rounded-xl">
        <div class="flex items-center gap-4">
          <div class="flex flex-col justify-center items-center rounded-xl bg-brand-primary p-3">
            <RotateCcwKey class="text-teal-300 w-5 h-5" />
          </div>
          <h3 class="font-bold text-[20px] leading-7 text-bank-gray-dark">Cambiar Contraseña</h3>
        </div>

        <form @submit.prevent="submitPasswordChange" class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label
              for="password"
              class="px-1 font-bold text-[12px] text-page-text leading-4 tracking-[1.2px] uppercase"
              >Contraseña Actual</label
            >
            <input
              v-model="currentPassword"
              type="password"
              placeholder="••••••"
              id="password"
              :disabled="loading"
              class="w-full rounded-full bg-[#e9ecef] px-6 py-4.25 text-sm text-page-text outline-none transition focus:bg-[#dee2e6] disabled:opacity-50"
            />
            <p v-if="errors.password" class="text-[12px] text-red-600 px-1">{{ errors.password }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="newPassword"
              class="px-1 font-bold text-[12px] text-page-text leading-4 tracking-[1.2px] uppercase"
              >Nueva Contraseña</label
            >
            <input
              v-model="newPassword"
              type="password"
              placeholder="••••••"
              id="newPassword"
              :disabled="loading"
              class="w-full rounded-full bg-[#e9ecef] px-6 py-4.25 text-sm text-page-text outline-none transition focus:bg-[#dee2e6] disabled:opacity-50"
            />
            <p v-if="errors.new_password" class="text-[12px] text-red-600 px-1">{{ errors.new_password }}</p>
            <div class="flex flex-col gap-1 px-1 mt-1">
              <span
                class="text-[12px] font-medium transition-colors duration-200"
                :class="passwordMinLength ? 'text-[#085f63]' : 'text-gray-500'"
              >
                {{ passwordMinLength ? '✓' : '○' }} Mínimo 8 caracteres
              </span>
              <span
                class="text-[12px] font-medium transition-colors duration-200"
                :class="passwordHasNumber ? 'text-[#085f63]' : 'text-gray-500'"
              >
                {{ passwordHasNumber ? '✓' : '○' }} Incluye números y símbolos
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="confirmPassword"
              class="px-1 font-bold text-[12px] text-page-text leading-4 tracking-[1.2px] uppercase"
              >Confirmar Nueva Contraseña</label
            >
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="••••••"
              id="confirmPassword"
              :disabled="loading"
              class="w-full rounded-full bg-[#e9ecef] px-6 py-4.25 text-sm text-page-text outline-none transition focus:bg-[#dee2e6] disabled:opacity-50"
            />
            <p v-if="errors.confirm_password" class="text-[12px] text-red-600 px-1">{{ errors.confirm_password }}</p>
          </div>

          <div class="flex flex-col mt-4">
            <button
              type="submit"
              :disabled="loading"
              class="bg-brand-primary px-16.25 py-4 rounded-full shadow-md font-bold text-[16px] leading-6 text-white hover:bg-brand-secondary transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? 'Actualizando...' : 'Actualizar Contraseña' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Diálogo de éxito -->
  <Teleport to="body">
    <div
      v-if="showSuccessDialog"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in"
      @click.self="showSuccessDialog = false"
    >
      <div class="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-scale-in">
        <div class="flex flex-col items-center gap-4 p-8 text-center">
          <CircleCheck class="w-16 h-16 text-emerald-500" />
          <h3 class="font-bold text-lg text-slate-800">Contraseña actualizada</h3>
          <p class="text-[14px] text-page-text leading-relaxed">
            Contraseña actualizada con éxito
          </p>
          <button
            @click="showSuccessDialog = false"
            class="mt-2 px-8 py-3 rounded-xl text-sm font-semibold text-white bg-brand-primary hover:bg-brand-secondary transition-colors cursor-pointer"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- Diálogo de error -->
  <Teleport to="body">
    <div
      v-if="showErrorDialog"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in"
      @click.self="showErrorDialog = false"
    >
      <div class="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-scale-in">
        <div class="flex flex-col items-center gap-4 p-8 text-center">
          <CircleX class="w-16 h-16 text-red-500" />
          <h3 class="font-bold text-lg text-slate-800">Error</h3>
          <p class="text-[14px] text-page-text leading-relaxed">
            {{ dialogMessage }}
          </p>
          <button
            @click="showErrorDialog = false"
            class="mt-2 px-8 py-3 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
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
