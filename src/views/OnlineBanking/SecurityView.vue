<script setup>
import { EyeOff, Info, RotateCcwKey } from '@lucide/vue'
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
            <input type="checkbox" class="sr-only peer" />

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

        <form class="flex flex-col gap-4" action="">
          <div class="flex flex-col gap-2">
            <label
              for="password"
              class="px-1 font-bold text-[12px] text-page-text leading-4 tracking-[1.2px] uppercase"
              >Constraseña Actual</label
            >
            <input
              type="password"
              placeholder="••••••"
              id="password"
              class="w-full rounded-full bg-[#e9ecef] px-6 py-4.25 text-sm text-page-text outline-none transition focus:bg-[#dee2e6]"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="newPassword"
              class="px-1 font-bold text-[12px] text-page-text leading-4 tracking-[1.2px] uppercase"
              >Nueva Constraseña</label
            >
            <input
              type="password"
              placeholder="••••••"
              id="newPassword"
              class="w-full rounded-full bg-[#e9ecef] px-6 py-4.25 text-sm text-page-text outline-none transition focus:bg-[#dee2e6]"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="confirmPassword"
              class="px-1 font-bold text-[12px] text-page-text leading-4 tracking-[1.2px] uppercase"
              >Confirmar Nueva Constraseña</label
            >
            <input
              type="password"
              placeholder="••••••"
              id="confirmPassword"
              class="w-full rounded-full bg-[#e9ecef] px-6 py-4.25 text-sm text-page-text outline-none transition focus:bg-[#dee2e6]"
            />
          </div>

          <div class="flex flex-col mt-4">
            <button
              class="bg-brand-primary px-16.25 py-4 rounded-full shadow-md font-bold text-[16px] leading-6 text-white hover:bg-brand-secondary transition-colors duration-200 cursor-pointer"
            >
              Actualizar Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
