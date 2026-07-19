<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Eye, EyeOff, Lock, User, Loader2 } from '@lucide/vue'
import { registerClient } from '@/api/auth'
import { registerSchema } from '@/schemas/auth.schema'

const router = useRouter()

const form = reactive({
  first_name: '',
  last_name: '',
  document_number: '',
  birth_date: '',
  phone_number: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
})

const errors = reactive({})
const loading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const clearError = (field) => {
  if (errors[field]) delete errors[field]
}

const submit = async () => {
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!form.termsAccepted) {
    errors.terms = 'Debes aceptar los Términos y Condiciones'
    return
  }

  const result = registerSchema.safeParse(form)

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const field = issue.path[0]
      errors[field] = issue.message
    })
    return
  }

  loading.value = true

  try {
    const birthDateISO = new Date(result.data.birth_date + 'T00:00:00Z').toISOString()

    await registerClient(
      result.data.first_name,
      result.data.last_name,
      result.data.document_number,
      birthDateISO,
      result.data.phone_number,
      result.data.email,
      result.data.password
    )

    router.push('/bancaenlinea/login')
  } catch (error) {
    if (error.response?.status === 409) {
      const field = error.response?.data?.errors?.[0]
      if (field?.email) {
        errors.email = 'Este correo ya está registrado'
      } else if (field?.document_number) {
        errors.document_number = 'Este número de documento ya está registrado'
      } else {
        errors.global = 'El usuario ya existe'
      }
    } else {
      errors.global = error.response?.data?.message || 'Error al crear la cuenta'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="min-h-screen bg-white">
    <div class="mx-auto max-w-360">
      <div class="grid lg:grid-cols-[0.42fr_0.58fr] min-h-screen">
        <!--Visual Content-->
        <div
          class="relative overflow-hidden bg-[#055151] text-white flex flex-col justify-between p-10 sm:p-14 lg:p-16"
        >
          <div class="absolute inset-0 opacity-40">
            <img
              src="../assets/img/campus.jpg"
              alt="Fachada de universidad"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-linear-to-b from-[#055151]/30 to-[#033636]/95"></div>

          <div class="relative space-y-12 z-10">
            <div class="flex items-center gap-2"></div>

            <div class="space-y-6 pt-8">
              <h1
                class="text-4xl font-extrabold leading-15 tracking-[-2.4px] sm:text-5xl lg:text-6xl text-white"
              >
                Tu futuro <br />
                financiero <br />
                empieza <span class="text-[#7ee2cd]">aquí.</span>
              </h1>
              <p class="max-w-[320px] text-[15px] leading-relaxed text-white/80">
                Diseñado exclusivamente para la comunidad académica. Sin comisiones, con beneficios
                reales.
              </p>
            </div>
          </div>

          <div
            class="relative z-10 rounded-2xl bg-white/10 p-6 border border-white/10 backdrop-blur-md max-w-md mt-12"
          >
            <div class="flex gap-4 items-center">
              <div
                class="h-10 w-10 overflow-hidden rounded-full bg-white/80 backdrop-blur-md shrink-0"
              >
                <div class="bg-linear-to-tr from-amber-400 to-orange-500 h-full w-full"></div>
              </div>
              <div>
                <p class="text-xs leading-relaxed text-white/90 font-medium">
                  "La mejor decisión que tomé al entrar a la uni. Las transferencias son
                  instantáneas."
                </p>
                <p class="mt-1 text-[11px] text-white/60 font-semibold">
                  — Sofía R., Estudiante de Arquitectura
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--Registration Form-->
        <div class="bg-white px-8 py-12 sm:px-16 lg:px-24 flex flex-col justify-center">
          <div class="max-w-xl w-full mx-auto">
            <!--Info-->
            <div class="mb-10">
              <h2 class="text-4xl font-extrabold text-slate-900 tracking-tight">Crea tu cuenta</h2>
              <p class="mt-2 text-sm text-slate-500 font-medium">
                Completa tus datos para activar el Plan Académico Flux.
              </p>
            </div>

            <!--Warning/Error API-->
            <p
              v-if="errors.global"
              class="mb-4 rounded-full bg-red-50 px-4 py-3 text-xs font-medium text-red-600"
            >
              {{ errors.global }}
            </p>

            <!--Form-->
            <form class="space-y-6" @submit.prevent="submit">
              <!--Personal Info Section-->
              <div class="space-y-4">
                <div
                  class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  <User size="16" class="text-[#055151]" />
                  Información Personal
                </div>

                <!--Input Name/Last Name-->
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Nombre(s)</span>

                    <input
                      v-model="form.first_name"
                      type="text"
                      placeholder="Ej. Mateo"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      :class="{ 'ring-2 ring-red-400': errors.first_name }"
                      @input="clearError('first_name')"
                    />

                    <p v-if="errors.first_name" class="text-xs text-red-500 ml-2">
                      {{ errors.first_name }}
                    </p>
                  </label>

                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Apellidos</span>

                    <input
                      v-model="form.last_name"
                      type="text"
                      placeholder="Ej. García"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      :class="{ 'ring-2 ring-red-400': errors.last_name }"
                      @input="clearError('last_name')"
                    />

                    <p v-if="errors.last_name" class="text-xs text-red-500 ml-2">
                      {{ errors.last_name }}
                    </p>
                  </label>
                </div>

                <!--Input Id/Date-->
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Número de Documento</span>

                    <input
                      v-model="form.document_number"
                      type="text"
                      placeholder="Ej. 12345678"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      :class="{ 'ring-2 ring-red-400': errors.document_number }"
                      @input="clearError('document_number')"
                    />

                    <p v-if="errors.document_number" class="text-xs text-red-500 ml-2">
                      {{ errors.document_number }}
                    </p>
                  </label>

                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Fecha de Nacimiento</span>

                    <input
                      v-model="form.birth_date"
                      type="date"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      :class="{ 'ring-2 ring-red-400': errors.birth_date }"
                      @input="clearError('birth_date')"
                    />

                    <p v-if="errors.birth_date" class="text-xs text-red-500 ml-2">
                      {{ errors.birth_date }}
                    </p>
                  </label>
                </div>
              </div>

              <!--Contact & Security Section-->
              <div class="space-y-4 pt-2">
                <div
                  class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  <Lock size="16" class="text-[#055151]" />
                  Contacto y seguridad
                </div>

                <!--Input Phone & Email-->
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Teléfono</span>

                    <input
                      v-model="form.phone_number"
                      type="tel"
                      placeholder="Ej. 04145433902"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      :class="{ 'ring-2 ring-red-400': errors.phone_number }"
                      @input="clearError('phone_number')"
                    />

                    <p v-if="errors.phone_number" class="text-xs text-red-500 ml-2">
                      {{ errors.phone_number }}
                    </p>
                  </label>

                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Correo Electrónico</span>

                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      :class="{ 'ring-2 ring-red-400': errors.email }"
                      @input="clearError('email')"
                    />

                    <p v-if="errors.email" class="text-xs text-red-500 ml-2">{{ errors.email }}</p>
                  </label>
                </div>

                <!--Input Password-->
                <div class="space-y-4">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Contraseña</span>

                    <div class="relative">
                      <input
                        v-model="form.password"
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="Mínimo 8 caracteres"
                        class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 pr-12 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                        :class="{ 'ring-2 ring-red-400': errors.password }"
                        @input="clearError('password')"
                      />

                      <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer"
                      >
                        <EyeOff v-if="showPassword" class="h-5 w-5" />
                        <Eye v-else class="h-5 w-5" />
                      </button>
                    </div>

                    <p v-if="errors.password" class="text-xs text-red-500 ml-2">
                      {{ errors.password }}
                    </p>
                  </label>

                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1"
                      >Confirma tu Contraseña</span
                    >

                    <div class="relative">
                      <input
                        v-model="form.confirmPassword"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="Mínimo 8 caracteres"
                        class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 pr-12 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                        :class="{ 'ring-2 ring-red-400': errors.confirmPassword }"
                        @input="clearError('confirmPassword')"
                      />
                      <button
                        type="button"
                        @click="showConfirmPassword = !showConfirmPassword"
                        class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer"
                      >
                        <EyeOff v-if="showConfirmPassword" class="h-5 w-5" />
                        <Eye v-else class="h-5 w-5" />
                      </button>
                    </div>

                    <p v-if="errors.confirmPassword" class="text-xs text-red-500 ml-2">
                      {{ errors.confirmPassword }}
                    </p>
                  </label>
                </div>
              </div>

              <!--Button Terms and Submission-->
              <div class="pt-2">
                <div class="flex items-start justify-center px-2 gap-3 text-slate-600 select-none">
                  <input
                    v-model="form.termsAccepted"
                    type="checkbox"
                    class="mt-1 h-4 w-4 rounded-full border-slate-300 text-[#055151] focus:ring-[#055151]"
                    @change="clearError('terms')"
                  />

                  <span class="w-[506.66px] pr-[40.16px] text-[14px] leading-normal font-medium">
                    Acepto los
                    <a href="#" class="font-semibold text-brand-primary underline"
                      >Términos y Condiciones</a
                    >
                    y la
                    <a href="#" class="font-semibold text-brand-primary underline"
                      >Política de Privacidad</a
                    >
                    de Banco Universitario.
                  </span>
                </div>
                <p v-if="errors.terms" class="text-xs text-red-500 ml-2 text-center font-semibold">
                  {{ errors.terms }}
                </p>
              </div>

              <!--Button Create Account-->
              <div class="pt-2">
                <button
                  type="submit"
                  class="w-full rounded-full bg-[#055151] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#055151]/20 cursor-pointer transition hover:bg-[#033636] flex items-center justify-center gap-2"
                  :disabled="loading"
                >
                  <Loader2 v-if="loading" class="w-5 h-5 animate-spin" />
                  {{ loading ? 'Creando cuenta...' : 'Crear mi cuenta' }}
                  <span v-if="!loading">→</span>
                </button>
              </div>

              <!--Return to Login-->
              <p class="text-center text-xs text-slate-500 font-medium">
                ¿Ya tienes cuenta?
                <router-link
                  to="/bancaenlinea/login"
                  class="font-bold text-[#055151] hover:underline"
                  >Inicia sesión aquí</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
