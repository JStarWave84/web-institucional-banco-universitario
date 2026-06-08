<script setup>
import { Eye, Lock, Mail, Phone, User, CalendarDays, CreditCard, CheckCircle } from '@lucide/vue'
</script>

<template>
  <section class="min-h-screen bg-white">
    <div class="mx-auto max-w-360">
      <div class="grid lg:grid-cols-[0.42fr_0.58fr] min-h-screen">
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
                  “La mejor decisión que tomé al entrar a la uni. Las transferencias son
                  instantáneas.”
                </p>
                <p class="mt-1 text-[11px] text-white/60 font-semibold">
                  — Sofía R., Estudiante de Arquitectura
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white px-8 py-12 sm:px-16 lg:px-24 flex flex-col justify-center">
          <div class="max-w-xl w-full mx-auto">
            <div class="mb-10">
              <h2 class="text-4xl font-extrabold text-slate-900 tracking-tight">Crea tu cuenta</h2>
              <p class="mt-2 text-sm text-slate-500 font-medium">
                Completa tus datos para activar el Plan Académico Flux.
              </p>
            </div>

            <form class="space-y-6">
              <div class="space-y-4">
                <div
                  class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  <User size="16" class="text-[#055151]" />
                  Información Personal
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Nombre(s)</span>
                    <input
                      type="text"
                      placeholder="Ej. Mateo"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                    />
                  </label>
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Apellidos</span>
                    <input
                      type="text"
                      placeholder="Ej. García"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                    />
                  </label>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Número de Documento</span>
                    <input
                      type="text"
                      placeholder="Ej. 12345678"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                    />
                  </label>
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Fecha de Nacimiento</span>
                    <input
                      type="date"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                    />
                  </label>
                </div>
              </div>

              <div class="space-y-4 pt-2">
                <div
                  class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  <Lock size="16" class="text-[#055151]" />
                  Contacto y seguridad
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Teléfono</span>
                    <input
                      type="tel"
                      placeholder="Ej. 55 1234 5678"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                    />
                  </label>
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Correo Electrónico</span>
                    <input
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                    />
                  </label>
                </div>

                <div class="space-y-4">
                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1">Contraseña</span>
                    <div class="relative">
                      <input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 pr-12 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      />
                      <Eye
                        class="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 cursor-pointer"
                      />
                    </div>
                  </label>

                  <label class="space-y-1.5 block">
                    <span class="text-xs font-bold text-slate-700 ml-1"
                      >Confirma tu Contraseña</span
                    >
                    <div class="relative">
                      <input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        class="w-full rounded-full bg-[#e9ecef] px-5 py-3.5 pr-12 text-sm text-slate-900 outline-none transition focus:bg-[#dee2e6]"
                      />
                      <Eye
                        class="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 cursor-pointer"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div class="pt-2">
                <label class="flex items-start gap-3 text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    class="mt-1 h-4 w-4 rounded-full border-slate-300 text-[#055151] focus:ring-[#055151]"
                  />
                  <span class="text-xs leading-normal font-medium">
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
                </label>
              </div>

              <div class="pt-2">
                <button
                  type="button"
                  class="w-full rounded-full bg-[#055151] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#055151]/20 cursor-pointer transition hover:bg-[#033636] flex items-center justify-center gap-2"
                >
                  Crear mi cuenta
                  <span>→</span>
                </button>
              </div>

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
