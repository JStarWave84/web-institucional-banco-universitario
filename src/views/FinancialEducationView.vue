<script setup>
import { CirclePlay, TrendingUp, CreditCard, PiggyBank, GraduationCap } from '@lucide/vue'
</script>

<template>
  <!--(Sección 1) Hero-->
  <section class="pt-20 pb-32 bg-brand-bg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
      <div class="flex flex-col gap-6">
        <span
          class="text-brand-primary bg-teal-300/30 px-4 py-2 uppercase text-[14px] font-bold rounded-4xl w-max"
          >Oasis Académico</span
        >
        <h1 class="font-extrabold text-[42px] md:text-[72px] leading-11 md:leading-18">
          Tu futuro <br />
          <span class="text-[#00928b]">Financieramente</span> <br />
          Brillante.
        </h1>

        <div class="pt-2 w-full md:w-lg">
          <p class="text-[18px] md:text-[18px] leading-7 text-page-text">
            No solo guardamos tu dinero, cultivamos tu conocimiento. Domina el arte del ahorro, la
            inversión y el crédito responsable con programas diseñados para la vida universitaria.
          </p>
        </div>

        <div class="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
          <a
            href="#"
            class="bg-brand-primary text-white font-bold leading-7 px-8 py-4 rounded-4xl shadow-lg hover:bg-brand-secondary transition-colors w-full sm:w-auto text-center"
          >
            Inscribirse a Talleres
          </a>
          <a
            href="#"
            class="bg-gray-200 text-brand-primary font-bold leading-7 px-8 py-4 flex items-center justify-center gap-2 rounded-4xl hover:bg-brand-primary hover:text-white transition-colors w-full sm:w-auto"
          >
            <CirclePlay /> Explorar Recursos
          </a>
        </div>
      </div>
      <div class="relative group">
        <img
          src="../assets/img/fe-1.png"
          alt="Ilustración de estudiantes"
          class="w-full rounded-[48px] shadow-lg object-cover relative z-10"
        />
        <div
          class="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-6 lg:bottom-12 z-20 bg-white rounded-4xl shadow-xl px-6 py-6 flex gap-4 w-72 md:w-81"
        >
          <div>
            <h3 class="text-[14px] leading-5 text-brand-primary font-bold">+2,500 Estudiantes</h3>
            <p class="text-page-text text-[12px] leading-4">
              Capacitados en educación financiera este semestre.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--(Sección 2) Programas de Formación-->
  <section class="py-24 bg-brand-bg-secondary">
    <div class="container mx-auto px-6">
      <div class="mb-12">
        <h2 class="text-brand-primary font-extrabold text-[36px] mb-2">Programas de Formación</h2>
        <p class="text-page-text text-lg max-w-2xl">
          Descubre una ruta de aprendizaje adaptada a tus necesidades financieras, desde lo básico
          hasta estrategias avanzadas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="md:col-span-2 bg-gray-50 p-10 rounded-[40px] flex flex-col justify-between relative overflow-hidden group"
        >
          <div class="relative z-10">
            <div class="bg-white p-3 rounded-2xl w-max mb-6 shadow-sm">
              <TrendingUp class="text-brand-primary" />
            </div>
            <h3 class="text-2xl font-bold text-brand-primary mb-4">Inversión para Principiantes</h3>
            <p class="text-page-text max-w-sm mb-6">
              Aprende a hacer que tu dinero trabaje para ti. Analizaremos fondos mutuales, acciones
              y diversificación de bajo riesgo.
            </p>
            <span class="text-sm font-bold text-teal-600 bg-teal-100 px-4 py-2 rounded-full"
              >Próximo inicio: 15 de Octubre</span
            >
          </div>
          <div
            class="absolute right-0 bottom-0 opacity-20 group-hover:opacity-40 transition-opacity"
          >
            <TrendingUp :size="200" />
          </div>
        </div>

        <div class="bg-brand-primary p-10 rounded-[40px] text-white flex flex-col justify-between">
          <CreditCard :size="40" class="mb-6 text-white" />
          <div>
            <h3 class="text-2xl font-bold mb-4 text-white">Crédito Responsable</h3>
            <p class="text-teal-50/90 mb-8">
              Cómo construir un historial crediticio sólido sin caer en deudas innecesarias durante
              tu carrera.
            </p>
            <button
              class="bg-[#007D78] text-white hover:bg-[#00928b] transition-colors w-full py-3 rounded-2xl font-bold"
            >
              Ver Grabación
            </button>
          </div>
        </div>

        <div class="bg-teal-50 p-10 rounded-[40px]">
          <PiggyBank class="text-brand-primary mb-4" :size="32" />
          <h3 class="text-xl font-bold text-brand-primary mb-2">Ahorro Inteligente</h3>
          <p class="text-page-text text-sm mb-6">
            Técnicas de presupuesto para optimizar tus ingresos en menor tiempo.
          </p>
          <a href="#" class="text-brand-primary font-bold text-sm underline">Ver detalles</a>
        </div>

        <div
          class="md:col-span-2 bg-[#E0F7F6] p-10 rounded-[40px] flex items-center justify-between"
        >
          <div class="max-w-md">
            <h3 class="text-2xl font-bold text-brand-primary mb-2">
              Capacitaciones para Egresados
            </h3>
            <p class="text-page-text">
              Preparación financiera para la transición al mundo laboral y planes de retiro joven.
            </p>
            <button
              class="mt-6 bg-white text-brand-primary px-6 py-2 rounded-full font-bold text-sm shadow-sm"
            >
              PRÓXIMAMENTE
            </button>
          </div>
          <GraduationCap :size="80" class="text-teal-200 hidden sm:block" />
        </div>
      </div>
    </div>
  </section>

  <!--(Sección 3) Historias de Éxito-->
  <section class="px-6 py-24 bg-brand-bg"></section>
</template>
