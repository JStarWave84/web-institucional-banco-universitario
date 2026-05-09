<script setup>
import { CirclePlay, ShieldCheck } from '@lucide/vue'
</script>

<template>
  <section class="pt-20 pb-32">
    <div class="flex items-center gap-12 px-6">
      <div class="flex flex-col gap-6">
        <span
          class="text-brand-primary bg-teal-300/30 px-4 py-2 uppercase text-[14px] font-bold rounded-4xl w-max"
          >El Banco de la Nueva Generación</span
        >
        <h1 class="font-extrabold text-[72px] leading-18">
          Tu futuro <br />
          <span class="text-[#00928b]">comienza aquí</span>
        </h1>

        <div class="pt-2 w-lg">
          <p class="text-[20px] leading-7 text-page-text">
            Diseñado específicamente para el ecosistema académico. Gestiona tus finanzas, recibe tu
            beca y paga tu matrícula con la agilidad que tu vida universitaria exige.
          </p>
        </div>

        <div class="flex pt-4 gap-4">
          <a
            href="#"
            class="bg-brand-primary text-white font-bold leading-7 px-8 py-4 rounded-4xl hover:bg-brand-secondary transition-colors"
          >
            Abre tu cuenta ahora
          </a>
          <a
            href="#"
            class="bg-gray-200 text-brand-primary font-bold leading-7 px-8 py-4 flex items-center gap-2 rounded-4xl hover:bg-brand-primary hover:text-white transition-colors"
          >
            <CirclePlay /> Ver tutorial
          </a>
        </div>
      </div>
      <div>
        <img
          src="../assets/img/hero-image.jpg"
          alt="Imagen de estudiantes universitarios usando el banco"
          class="w-full max-w-lg rounded-[48px] shadow-lg object-cover"
        />
        <!-- Highlight Card -->
        <div
          class="rounded-4xl shadow-lg px-6 py-6 flex gap-4 relative -left-6 -top-18 bg-white w-81"
        >
          <div class="bg-teal-300 rounded-4xl p-2 flex items-center">
            <ShieldCheck class="text-brand-primary" />
          </div>
          <div>
            <h3 class="text-[14px] leading-5 text-brand-primary font-bold">Seguridad Académica</h3>
            <p class="text-page-text text-[12px] leading-4">
              Protegemos tu patrimonio estudiantil con tecnología de punta.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
