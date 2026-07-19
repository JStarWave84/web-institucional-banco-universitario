<script setup>
import {
  CirclePlay,
  TrendingUp,
  CreditCard,
  PiggyBank,
  Award,
  FileSpreadsheet,
  BookType,
} from '@lucide/vue'
</script>

<template>
  <!--(Sección 1) Hero-->
  <section class="pt-20 pb-16 bg-brand-bg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
      <div class="flex flex-col gap-6">
        <span
          class="text-brand-primary bg-teal-300/30 px-4 py-2 uppercase text-[14px] font-bold rounded-4xl w-max"
          >Oasis Académico</span
        >
        <h1 class="font-extrabold text-[42px] md:text-[72px] leading-[1.1] md:leading-18">
          Tu futuro <br />
          <span class="text-[#00928b] font-normal italic">Financieramente</span> <br />
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Programa Principal -->
        <div class="md:col-span-2 bg-gray-50 rounded-[40px] grid grid-cols-2 p-8 overflow-hidden">
          <div class="flex flex-col justify-between">
            <div class="flex flex-col gap-4">
              <TrendingUp :size="30" class="text-brand-primary" />
              <h3 class="text-[30px] leading-9">Inversión para Principiantes</h3>
              <p class="text-[16px] text-page-text leading-6.5">
                Aprende a hacer que tu dinero trabaje por ti. Analizamos fondos universitarios,
                acciones, y diversificación de bajo riesgo.
              </p>
            </div>

            <div class="flex items-center gap-8">
              <span
                class="rounded-full px-3 py-2 uppercase bg-teal-300/30 text-brand-primary text-[12px] font-bold leading-4"
                >Taller Práctico</span
              >
              <p class="text-[14px] font-bold leading-5 text-brand-primary">
                Próximo: 15 de Octubre
              </p>
            </div>
          </div>
          <div class="relative -mr-8 -mt-8 -mb-8 overflow-hidden hidden md:block rounded-r-[40px]">
            <img
              src="../assets/img/laptop.jpg"
              alt="Laptop"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="bg-brand-primary p-10 rounded-[40px] text-white flex flex-col justify-between">
          <CreditCard :size="40" class="mb-6 text-teal-200" />
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

        <div class="bg-white p-10 rounded-[40px]">
          <PiggyBank class="text-brand-primary mb-4" :size="32" />
          <h3 class="text-xl font-bold text-brand-primary mb-2">Ahorro Inteligente</h3>
          <p class="text-page-text text-sm mb-6">
            Técnicas de presupuesto para optimizar tu beca o ingresos de medio tiempo.
          </p>
          <a href="#" class="text-brand-primary font-bold text-sm underline">Ver detalles</a>
        </div>

        <div
          class="md:col-span-2 bg-linear-to-br from-[#82F2EA] to-white p-10 rounded-[40px] flex items-center justify-between"
        >
          <div class="max-w-md">
            <h3 class="text-2xl font-bold text-brand-primary mb-2">
              Capacitaciones para Egresados
            </h3>
            <p class="text-page-text">
              Preparación financiera para la transición al mundo laboral y jubilación temprana.
            </p>
            <button
              class="mt-6 bg-white text-brand-primary px-6 py-2 rounded-full font-bold text-sm shadow-sm"
            >
              PRÓXIMAMENTE
            </button>
          </div>
          <div class="rounded-full p-8 bg-white/30 border border-white/50">
            <Award :size="60" class="text-brand-primary hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--(Sección 3) Historias de Éxito-->
  <section class="px-6 py-24 bg-brand-bg">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-brand-primary font-extrabold text-[36px]">Historias de Éxito</h2>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div class="bg-white p-12 rounded-4xl shadow-lg relative flex flex-col gap-8">
        <span
          class="absolute -top-6 left-12 text-[#85F5ED] opacity-50 font-['Liberation_Serif'] text-[96px] leading-none select-none"
        >
          “
        </span>

        <p class="text-[18px] leading-relaxed text-page-text">
          "Gracias al taller de inversión del Banco Universitario, pude empezar mi propio portafolio
          con mis ahorros de la beca. Ahora entiendo que el tiempo es mi mejor aliado."
        </p>

        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-bg">
            <img
              src="@/assets/img/andrea.jpg"
              alt="Andrea Martínez"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 class="font-bold text-brand-primary text-[16px]">Andrea Martínez</h4>
            <p class="text-sm text-page-text">Estudiante de Economía</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-10 rounded-4xl shadow-lg relative flex flex-col gap-8">
        <span
          class="absolute -top-6 left-12 text-[#85F5ED] opacity-50 font-['Liberation_Serif'] text-[96px] leading-none select-none"
        >
          “
        </span>

        <p class="text-[18px] leading-relaxed text-page-text">
          "La charla sobre crédito me salvó de tomar malas decisiones financieras. Ahora tengo una
          tarjeta de crédito universitaria que uso para construir mi futuro, no para deudas."
        </p>

        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-bg">
            <img
              src="@/assets/img/carlos.jpg"
              alt="Carlos Ruiz"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 class="font-bold text-brand-primary text-[16px]">Carlos Ruiz</h4>
            <p class="text-sm text-page-text">Estudiante de Ingeniería</p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto">
      <div
        class="bg-brand-primary p-10 rounded-[48px] text-white flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        <div class="max-w-xl text-left w-full">
          <h2 class="text-[32px] font-bold mb-2 text-white">Recursos Gratuitos</h2>
          <p class="text-teal-50/80 text-[18px]">
            Hemos preparado plantillas, guías y hojas de cálculo para que tomes el control hoy
            mismo.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
          <a
            href="#"
            class="flex items-center gap-4 bg-white/10 hover:bg-white/15 px-8 py-4 rounded-full transition-all text-white min-w-68.75 group"
          >
            <FileSpreadsheet class="w-5 h-5 text-[#85F5ED] shrink-0" />
            <div class="text-left">
              <p
                class="font-bold text-[13px] leading-tight group-hover:text-[#85F5ED] transition-colors"
              >
                Planificador de Presupuesto
              </p>
              <p class="text-[10px] opacity-50 font-medium uppercase tracking-wider mt-0.5">
                XLSX • 1.2 MB
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex items-center gap-4 bg-white/10 hover:bg-white/15 px-8 py-4 rounded-full transition-all text-white min-w-68.75 group"
          >
            <BookType class="w-5 h-5 text-[#85F5ED] shrink-0" />
            <div class="text-left">
              <p
                class="font-bold text-[13px] leading-tight group-hover:text-[#85F5ED] transition-colors"
              >
                Guía de Inversión 101
              </p>
              <p class="text-[10px] opacity-50 font-medium uppercase tracking-wider mt-0.5">
                PDF • 4.5 MB
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
