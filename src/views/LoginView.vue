<script setup>
import { ref } from 'vue'
import { GraduationCap } from '@lucide/vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

function submit(e) {
  e.preventDefault()
}
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f0f8f7] via-white to-[#e8f6f5] p-8"
  >
    <div
      class="w-full max-w-6xl rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white"
    >
      <div
        class="relative bg-teal-800 text-white p-10 md:p-16 flex flex-col justify-between overflow-hidden"
      >
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-[#a8eff3]">
            Tu futuro <br />en flujo.
          </h1>
          <p class="mt-4 text-sm text-teal-100 max-w-md">
            La banca diseñada para la generación que nunca se detiene. Gestiona tus becas, gastos de
            campus y ahorros en un solo lugar.
          </p>
        </div>

        <div class="mt-8 z-1">
          <div
            class="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-start gap-3 shadow-md max-w-md"
          >
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              👤
            </div>
            <div>
              <div class="text-xs">
                “El aliado perfecto para que el presupuesto rinda hasta el último día del semestre.”
              </div>
              <div class="mt-2 text-[11px] opacity-80">— Mateo, Estudiante de Ingeniería</div>
            </div>
          </div>
        </div>

        <div class="absolute -right-50 -bottom-30 z-0">
          <GraduationCap class="w-150 h-150 text-brand-secondary opacity-40" />
        </div>
      </div>

      <div class="p-10 md:p-16 bg-white flex flex-col justify-center">
        <div class="max-w-md w-full mx-auto">
          <h2 class="text-2xl font-extrabold text-slate-800">Bienvenido de nuevo</h2>
          <p class="mt-2 text-sm text-slate-500">Ingresa tus credenciales universitarias.</p>

          <form @submit="submit" class="mt-8 space-y-6">
            <label class="block">
              <span class="text-xs font-medium text-slate-600">Email</span>
              <div class="mt-1 relative">
                <input
                  v-model="email"
                  type="text"
                  placeholder="ej. 2024-12345"
                  class="w-full rounded-full border border-transparent bg-slate-100 px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                />
                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">@</span>
              </div>
            </label>

            <label class="block">
              <span class="text-xs font-medium text-slate-600">Contraseña</span>
              <div class="mt-1 relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  placeholder="••••••••"
                  class="w-full rounded-full border border-transparent bg-slate-100 px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  <svg
                    v-if="!showPassword"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.396M6.6 6.6A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.99 9.99 0 01-4.1 5.163M3 3l18 18"
                    />
                  </svg>
                </button>
              </div>
            </label>

            <div>
              <button
                type="submit"
                class="w-full rounded-full bg-teal-700 px-6 py-3 text-base font-semibold text-white shadow-md cursor-pointer hover:bg-teal-800"
              >
                Iniciar Sesión
              </button>
            </div>

            <p class="mt-4 text-center text-sm text-slate-500">
              <router-link
                to="/bancaenlinea/recover-password"
                class="font-medium text-teal-700 hover:underline"
              >¿Olvidaste tu contraseña?</router-link>
            </p>

            <p class="text-center text-sm text-slate-500">
              ¿Eres nuevo en el campus?
              <router-link
                to="/bancaenlinea/crear-cuenta"
                class="font-medium text-teal-700 hover:underline"
                >Crea tu cuenta</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- floating help button -->
    <button
      class="fixed right-8 bottom-8 w-12 h-12 rounded-full bg-teal-700 text-white shadow-lg flex items-center justify-center"
    >
      ?
    </button>
  </section>
</template>

<style scoped>
.rounded-2xl {
  border-radius: 22px;
}
</style>
