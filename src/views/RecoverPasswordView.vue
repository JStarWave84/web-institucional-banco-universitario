<script setup>
import { nextTick, ref, computed } from 'vue'
import { forgotPasswordSchema, resetPasswordSchema } from '@/schemas/auth.schema'
import { forgotPassword, resetPassword } from '@/api/auth'

const step = ref(1)
const email = ref('')
const code = ref(['', '', '', '', '', ''])
const newPassword = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const errors = ref({})
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

const passwordMinLength = computed(() => newPassword.value.length >= 8)
const passwordHasNumber = computed(() => /[0-9]/.test(newPassword.value))
const passwordHasSymbol = computed(() => /[^a-zA-Z0-9]/.test(newPassword.value))

const steps = [
  { label: 'Correo', icon: '1' },
  { label: 'Código', icon: '2' },
  { label: 'Contraseña', icon: '3' },
]

const stepTitles = ['Recuperar Contraseña', 'Verificar Código', 'Nueva Contraseña']

const originalStepDescriptions = [
  'Introduce tu correo electrónico institucional para recibir un código de verificación y restablecer tu acceso.',
  'Para tu seguridad, hemos enviado un código de confirmación de 6 dígitos. Por favor, ingrésalo a continuación.',
  'Crea una contraseña robusta para continuar navegando.',
]
const stepDescriptions = ref([...originalStepDescriptions])

function goToStep(target) {
  errors.value = {}
  errorMsg.value = ''
  step.value = target
  if (target <= 1) {
    stepDescriptions.value = [...originalStepDescriptions]
  }
}

async function submitStep() {
  errors.value = {}
  errorMsg.value = ''
  loading.value = true

  if (step.value === 1) {
    const result = forgotPasswordSchema.safeParse({ email: email.value })

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        errors.value[issue.path[0]] = issue.message
      })
      loading.value = false
      return
    }

    try {
      const res = await forgotPassword(result.data.email)
      stepDescriptions.value[1] = res.message
      step.value = 2
      nextTick(() => {
        document.querySelector('input')?.focus()
      })
    } catch (err) {
      stepDescriptions.value = [...originalStepDescriptions]
      errorMsg.value = err.response?.data?.message || 'Error al enviar el código. Intenta de nuevo.'
    } finally {
      loading.value = false
    }
    return
  }

  if (step.value === 2) {
    const codeString = code.value.join('')
    if (codeString.length !== 6) {
      errorMsg.value = 'Debes ingresar el código completo de 6 dígitos.'
      loading.value = false
      return
    }
    step.value = 3
    loading.value = false
    return
  }

  if (step.value === 3) {
    if (newPassword.value !== confirmPassword.value) {
      errors.value['confirm_password'] = 'Las contraseñas no coinciden.'
      loading.value = false
      return
    }

    const result = resetPasswordSchema.safeParse({
      email: email.value,
      code: code.value.join(''),
      new_password: newPassword.value,
    })

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        errors.value[issue.path[0]] = issue.message
      })
      loading.value = false
      return
    }

    try {
      const response = await resetPassword(
        result.data.email,
        result.data.code,
        result.data.new_password
      )
      successMsg.value = response.message || 'Contraseña restablecida con éxito.'
    } catch (err) {
      const apiMessage = err.response?.data?.message
      if (apiMessage?.toLowerCase().includes('código')) {
        errorMsg.value = apiMessage
        step.value = 2
        nextTick(() => {
          document.querySelector('input')?.focus()
        })
      } else {
        errorMsg.value = apiMessage || 'Error al restablecer la contraseña. Intenta de nuevo.'
      }
    } finally {
      loading.value = false
    }
    return
  }
}

function resetForm() {
  step.value = 1
  email.value = ''
  code.value = ['', '', '', '', '', '']
  newPassword.value = ''
  confirmPassword.value = ''
  errors.value = {}
  errorMsg.value = ''
  successMsg.value = ''
  stepDescriptions.value = [...originalStepDescriptions]
}

function onCodeInput(index, event) {
  const raw = event.data || event.target.value
  const digit = raw.replace(/[^0-9]/g, '').slice(-1)
  if (!digit) {
    event.target.value = ''
    code.value[index] = ''
    return
  }
  event.target.value = digit
  code.value[index] = digit
  const inputs = event.currentTarget?.form?.querySelectorAll('input')
  if (inputs && index < 5) inputs[index + 1]?.focus()
}

function onCodeKeydown(index, event) {
  const inputs = event.currentTarget?.form?.querySelectorAll('input')
  if (event.key === 'Backspace') {
    if (code.value[index]) {
      event.target.value = ''
      code.value[index] = ''
    } else if (index > 0 && inputs) {
      inputs[index - 1].value = ''
      code.value[index - 1] = ''
      inputs[index - 1]?.focus()
    }
  }
}
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center bg-[#f7f9fa] relative overflow-hidden font-sans p-6 selection:bg-teal-800/20"
  >
    <!-- Orbes decorativos de fondo -->
    <div
      class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#2aa48d]/10 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#2aa48d]/10 blur-3xl pointer-events-none"
    ></div>

    <div class="w-full max-w-135 flex flex-col items-center z-10">
      <!-- LOGO BANCO UNIVERSITARIO -->
      <div>
        <img src="@/assets/img/logo-no-background.png" width="251" alt="Logo Banco Universitario" />
      </div>

      <!-- STEPPER / INDICADOR DE PASOS -->
      <div class="w-full max-w-[320px] my-8 relative flex items-center justify-between">
        <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0"></div>

        <template v-for="(item, index) in steps" :key="item.label">
          <div class="flex flex-col items-center z-10 relative">
            <button
              type="button"
              disabled
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border transition-all duration-300',
                step > index + 1
                  ? 'bg-[#0a5c53] border-[#0a5c53] text-white'
                  : step === index + 1
                    ? 'bg-[#002e2c] border-[#002e2c] text-white shadow-md scale-110'
                    : 'bg-[#e2e8f0] border-transparent text-slate-500',
              ]"
            >
              <span v-if="step > index + 1">✓</span>
              <span v-else>{{ item.icon }}</span>
            </button>
            <span
              :class="[
                'text-[11px] font-medium mt-1.5 absolute top-8 whitespace-nowrap',
                step === index + 1 ? 'text-[#0a5c53] font-bold' : 'text-slate-400',
              ]"
            >
              {{ item.label }}
            </span>
          </div>
        </template>
      </div>

      <!-- CARD PRINCIPAL -->
      <div
        class="w-full bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100/50 p-10 mt-2"
      >
        <div class="text-left mb-8">
          <!-- Tag de Seguridad exclusivo del paso 2 -->
          <div
            v-if="step === 2"
            class="inline-block bg-[#6bf1dc]/40 text-[#004d40] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3"
          >
            SEGURIDAD
          </div>
          <h2 class="text-2xl font-bold text-[#06332e] tracking-tight">
            {{ stepTitles[step - 1] }}
          </h2>
          <p class="mt-2 text-[13px] text-slate-500 leading-relaxed">
            {{ stepDescriptions[step - 1] }}
          </p>
        </div>

        <form :key="step" @submit.prevent="submitStep" class="space-y-6">
          <!-- Error Message -->
          <div
            v-if="errorMsg"
            class="rounded-2xl bg-red-50 border border-red-200 p-4 text-[13px] text-red-700 font-medium"
          >
            {{ errorMsg }}
          </div>

          <!-- Success Message -->
          <div
            v-if="successMsg"
            class="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-[13px] text-emerald-700 font-medium"
          >
            {{ successMsg }}
            <router-link
              to="/bancaenlinea/login"
              class="block mt-3 text-center rounded-3xl bg-[#005149] px-6 py-3 text-sm font-semibold text-white hover:bg-[#00433d] transition-colors"
            >
              Volver al Inicio de Sesión
            </router-link>
          </div>

          <!-- PASO 1: CORREO -->
          <template v-if="step === 1 && !successMsg">
            <div class="space-y-2">
              <label class="text-xs font-bold text-[#06332e] tracking-wide block"
                >Correo Electrónico</label
              >
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  v-model="email"
                  type="email"
                  placeholder="ejemplo@universidad.edu"
                  :disabled="loading"
                  class="w-full rounded-2xl bg-[#eaeaec] border-none px-12 py-3.5 text-sm text-slate-800 placeholder-slate-400/80 focus:outline-none focus:ring-2 focus:ring-[#0a5c53]/20 transition-all disabled:opacity-50"
                />
              </div>
              <p v-if="errors.email" class="text-[12px] text-red-600 mt-1 px-1">
                {{ errors.email }}
              </p>
            </div>
          </template>

          <!-- PASO 2: CÓDIGO -->
          <template v-if="step === 2 && !successMsg">
            <div class="grid grid-cols-6 gap-2.5 my-6">
              <input
                v-for="(digit, index) in code"
                :key="index"
                @input="onCodeInput(index, $event)"
                @keydown="onCodeKeydown(index, $event)"
                type="text"
                inputmode="numeric"
                maxlength="1"
                :disabled="loading"
                class="h-14 w-full rounded-xl bg-[#eaeaec] border-none text-center text-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0a5c53]/20 transition-all disabled:opacity-50"
              />
            </div>
            <p v-if="errors.code" class="text-[12px] text-red-600 mt-1 px-1">
              {{ errors.code }}
            </p>
          </template>

          <!-- PASO 3: NUEVA CONTRASEÑA -->
          <template v-if="step === 3 && !successMsg">
            <div class="space-y-4">
              <div class="space-y-2">
                <label class="text-xs font-bold text-[#06332e] tracking-wide block"
                  >Nueva Contraseña</label
                >
                <div class="relative">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="newPassword"
                    placeholder="••••••••"
                    :disabled="loading"
                    class="w-full rounded-2xl bg-[#eaeaec] border-none pl-5 pr-12 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0a5c53]/20 transition-all disabled:opacity-50"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </div>
                <p v-if="errors.new_password" class="text-[12px] text-red-600 mt-1 px-1">
                  {{ errors.new_password }}
                </p>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold text-[#06332e] tracking-wide block"
                  >Confirmar Contraseña</label
                >
                <div class="relative">
                  <input
                    :type="showConfirmPassword ? 'text' : 'password'"
                    v-model="confirmPassword"
                    placeholder="••••••••"
                    :disabled="loading"
                    class="w-full rounded-2xl bg-[#eaeaec] border-none pl-5 pr-12 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0a5c53]/20 transition-all disabled:opacity-50"
                  />
                  <button
                    type="button"
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </div>
                <p v-if="errors.confirm_password" class="text-[12px] text-red-600 mt-1 px-1">
                  {{ errors.confirm_password }}
                </p>
              </div>

              <!-- Requisitos de la contraseña -->
              <div class="rounded-2xl bg-[#f1f3f5] p-4 text-[13px] space-y-2.5">
                <div
                  class="flex items-center gap-2 transition-colors duration-200"
                  :class="passwordMinLength ? 'text-[#085f63]' : 'text-slate-500'"
                >
                  <div
                    :class="[
                      'w-4 h-4 rounded-full flex items-center justify-center text-[9px] border transition-all duration-200',
                      passwordMinLength
                        ? 'bg-[#085f63] border-[#085f63] text-white'
                        : 'border-slate-400',
                    ]"
                  >
                    <span v-if="passwordMinLength">✓</span>
                  </div>
                  <span>Mínimo 8 caracteres</span>
                </div>
                <div
                  class="flex items-center gap-2 transition-colors duration-200"
                  :class="
                    passwordHasNumber && passwordHasSymbol ? 'text-[#085f63]' : 'text-slate-500'
                  "
                >
                  <div
                    :class="[
                      'w-4 h-4 rounded-full flex items-center justify-center text-[9px] border transition-all duration-200',
                      passwordHasNumber && passwordHasSymbol
                        ? 'bg-[#085f63] border-[#085f63] text-white'
                        : 'border-slate-400',
                    ]"
                  >
                    <span v-if="passwordHasNumber && passwordHasSymbol">✓</span>
                  </div>
                  <span>Incluye números y símbolos</span>
                </div>
              </div>
            </div>
          </template>

          <!-- BOTÓN PRINCIPAL ACCIÓN -->
          <button
            v-if="!successMsg"
            type="submit"
            :disabled="loading"
            class="w-full rounded-3xl bg-[#005149] px-6 py-4 text-sm font-semibold text-white shadow-md hover:bg-[#00433d] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <svg
              v-if="loading"
              class="w-4 h-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>{{
              step === 1 ? 'Enviar Código' : step === 2 ? 'Verificar' : 'Restablecer Contraseña'
            }}</span>
            <svg
              v-if="step === 1 && !loading"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </form>

        <!-- VOLVER AL INICIO DE SESIÓN -->
        <div v-if="!successMsg" class="mt-6 text-center">
          <router-link
            to="/bancaenlinea/login"
            class="text-xs font-bold text-[#0a5c53] hover:underline flex items-center justify-center gap-1.5"
          >
            <svg
              v-if="step === 1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-3.5 h-3.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Volver al Inicio de Sesión
          </router-link>
        </div>
      </div>

      <!-- BANNER DE SOPORTE / CONSEJO DE SEGURIDAD (Cambia dinámicamente según el paso) -->
      <div
        v-if="step === 1"
        class="w-full mt-6 rounded-[24px] bg-[#f5f3e9] border border-[#ebdcb9]/40 p-5 flex gap-4 text-left"
      >
        <div class="text-[#b08722] shrink-0 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 1 1 1.063 1.063l-.041.02a.75.75 0 0 1-1.064-1.063ZM12 20.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z"
            />
          </svg>
        </div>
        <div>
          <h4 class="text-xs font-bold text-[#634d11]">¿No tienes acceso a tu correo?</h4>
          <p class="text-[11px] text-[#7c6628] mt-1 leading-relaxed">
            Contacta con la oficina de administración de tu campus para verificar tu identidad de
            forma presencial.
          </p>
        </div>
      </div>

      <div
        v-if="step === 2"
        class="w-full mt-6 rounded-[24px] bg-[#f1f3f5] border-l-4 border-slate-400 p-5 flex gap-4 text-left"
      >
        <div class="text-slate-600 shrink-0 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 0v1.5"
            />
          </svg>
        </div>
        <div>
          <h4 class="text-xs font-bold text-slate-800">Consejo de seguridad</h4>
          <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">
            Nunca compartas este código con nadie. El Banco Universitario nunca te pedirá tu código
            por teléfono o correo electrónico.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Reseteos de fuentes y suavizados específicos */
section {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
