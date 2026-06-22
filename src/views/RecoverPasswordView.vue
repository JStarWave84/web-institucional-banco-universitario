<script setup>
import { nextTick, ref } from 'vue'

const step = ref(1)
const email = ref('')
const code = ref(['', '', '', '', '', ''])
const newPassword = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const codeRefs = ref([])

const steps = [
  { label: 'Correo', subtitle: 'Envía tu código', icon: '1' },
  { label: 'Código', subtitle: 'Verifica tu cuenta', icon: '2' },
  { label: 'Contraseña', subtitle: 'Crea una nueva', icon: '3' },
]

const stepTitles = [
  'Recuperar Contraseña',
  'Verificar Código',
  'Nueva Contraseña',
]

const stepDescriptions = [
  'Introduce tu correo institucional para recibir un código de verificación.',
  'Ingresa el código que recibiste por correo para continuar con el restablecimiento.',
  'Crea una contraseña segura y confírmala para volver a acceder.',
]

function goToStep(target) {
  step.value = target
}

function submitStep() {
  if (step.value === 1) {
    step.value = 2
    nextTick(() => {
      if (codeRefs.value[0]) {
        codeRefs.value[0].focus()
      }
    })
    return
  }

  if (step.value === 2) {
    step.value = 3
    return
  }

  if (step.value === 3) {
    // Aquí iría la lógica de restablecimiento real.
    step.value = 1
    email.value = ''
    code.value = ['', '', '', '', '', '']
    newPassword.value = ''
    confirmPassword.value = ''
    return
  }
}

function onCodeInput(index, event) {
  const value = event.target.value.replace(/[^0-9]/g, '')
  code.value[index] = value.slice(-1)
  if (value && index < code.value.length - 1) {
    codeRefs.value[index + 1]?.focus()
  }
}

function onCodeKeydown(index, event) {
  if (event.key === 'Backspace' && !code.value[index] && index > 0) {
    codeRefs.value[index - 1]?.focus()
  }
}
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f0f8f7] via-white to-[#e8f6f5] p-8">
    <div class="w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div class="relative p-10 md:p-16 flex flex-col justify-center gap-8" style="background: radial-gradient(circle at top right, rgba(42,164,141,0.18) 0%, rgba(255,255,255,0.85) 45%);">
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900">Recupera tu acceso</h1>
          <p class="mt-4 text-sm md:text-base text-slate-600 max-w-lg">
            Sigue los tres pasos para restablecer tu contraseña de forma segura. Mantén tu cuenta protegida con un código de verificación y una nueva contraseña robusta.
          </p>
        </div>

        <div class="bg-white/80 rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div class="text-xs uppercase tracking-[0.2em] text-teal-700 font-semibold">Banco Universitario</div>
          <p class="mt-3 text-sm text-slate-600">
            Si no tienes acceso a tu correo institucional, contacta al soporte de tu campus para verificar tu identidad.
          </p>
        </div>
      </div>

      <div class="p-10 md:p-16 flex items-center justify-center">
        <div class="w-full max-w-lg">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Recuperación</p>
              <h2 class="text-2xl font-extrabold text-slate-900">Restablecer Contraseña</h2>
            </div>
            <router-link
              to="/bancaenlinea/login"
              class="text-sm font-medium text-slate-600 hover:text-teal-700"
            >Volver al inicio</router-link>
          </div>

          <div class="mb-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div class="flex items-center justify-between gap-2">
              <template v-for="(item, index) in steps" :key="item.label">
                <div class="flex-1 min-w-0">
                  <button
                    type="button"
                    @click="goToStep(index + 1)"
                    class="w-full text-left"
                  >
                    <div
                      :class="[
                        'flex items-center gap-3 rounded-3xl px-4 py-3 transition',
                        step === index + 1 ? 'bg-teal-700 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100',
                      ]"
                    >
                      <div
                        :class="[
                          'flex h-9 w-9 items-center justify-center rounded-full border',
                          step === index + 1 ? 'border-white bg-white/15' : 'border-slate-300 bg-white text-slate-700',
                        ]"
                      >
                        {{ item.icon }}
                      </div>
                      <div class="min-w-0">
                        <div class="text-xs font-semibold leading-4 truncate">{{ item.label }}</div>
                        <div class="text-[11px] text-slate-500 truncate">{{ item.subtitle }}</div>
                      </div>
                    </div>
                  </button>
                </div>
              </template>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-teal-700">Paso {{ step }} de 3</p>
              <h3 class="mt-3 text-xl font-semibold text-slate-900">{{ stepTitles[step - 1] }}</h3>
              <p class="mt-2 text-sm text-slate-500">{{ stepDescriptions[step - 1] }}</p>
            </div>

            <form @submit.prevent="submitStep" class="mt-8 space-y-6">
              <template v-if="step === 1">
                <label class="block">
                  <span class="text-xs font-medium text-slate-600">Correo Electrónico</span>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="ejemplo@universidad.edu"
                    class="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                    required
                  />
                </label>
                <div class="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 border border-slate-200">
                  Usaremos tu correo institucional para enviarte un código de verificación de 6 dígitos.
                </div>
              </template>

              <template v-if="step === 2">
                <div class="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 border border-slate-200">
                  Verifica tu código enviado a <span class="font-semibold text-slate-900">{{ email || 'tu correo' }}</span>.
                </div>
                <div class="grid grid-cols-6 gap-3 mt-4">
                  <input
                    v-for="(digit, index) in code"
                    :key="index"
                    ref="el => codeRefs.value[index] = el"
                    v-model="code[index]"
                    @input="onCodeInput(index, $event)"
                    @keydown="onCodeKeydown(index, $event)"
                    type="text"
                    inputmode="numeric"
                    maxlength="1"
                    class="h-14 w-full rounded-3xl border border-slate-200 bg-slate-100 text-center text-xl font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                    required
                  />
                </div>
              </template>

              <template v-if="step === 3">
                <label class="block">
                  <span class="text-xs font-medium text-slate-600">Nueva Contraseña</span>
                  <div class="relative mt-2">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      v-model="newPassword"
                      placeholder="••••••••••••"
                      class="w-full rounded-3xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                      required
                    />
                    <button
                      type="button"
                      @click="showPassword = !showPassword"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                    >
                      {{ showPassword ? 'Ocultar' : 'Mostrar' }}
                    </button>
                  </div>
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600">Confirmar Contraseña</span>
                  <div class="relative mt-2">
                    <input
                      :type="showConfirmPassword ? 'text' : 'password'"
                      v-model="confirmPassword"
                      placeholder="••••••••••••"
                      class="w-full rounded-3xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                      required
                    />
                    <button
                      type="button"
                      @click="showConfirmPassword = !showConfirmPassword"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                    >
                      {{ showConfirmPassword ? 'Ocultar' : 'Mostrar' }}
                    </button>
                  </div>
                </label>

                <div class="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 border border-slate-200">
                  <ul class="space-y-2">
                    <li>• Mínimo 12 caracteres</li>
                    <li>• Incluye números y símbolos</li>
                    <li>• No uses contraseñas fáciles de adivinar</li>
                  </ul>
                </div>
              </template>

              <button
                type="submit"
                class="w-full rounded-full bg-teal-700 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-teal-800 transition"
              >
                {{ step === 1 ? 'Enviar Código' : step === 2 ? 'Verificar' : 'Restablecer Contraseña' }}
              </button>
            </form>

            <div class="mt-6 text-center text-sm text-slate-500">
              <router-link to="/bancaenlinea/login" class="font-medium text-teal-700 hover:underline">
                Volver al Inicio de Sesión
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rounded-3xl {
  border-radius: 28px;
}
</style>
