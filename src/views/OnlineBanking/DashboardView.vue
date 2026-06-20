<script setup>
const balance = 'Bs. 12,450.00'
const fechaActual = '12 de Abril 2025'
</script>

<template>
  <section class="m-10 max-w-[944px] w-full flex flex-col gap-8">
    <div class="flex justify-between items-start w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-extrabold text-[40px] text-bank-gray-dark leading-10 tracking-[-1px]">
          Tu Estado Académico
        </h1>
        <p class="text-[16px] leading-6 text-page-text">
          Resumen financiero para tu semestre actual.
        </p>
      </div>
      <div
        class="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm"
      >
        <span class="text-xs font-semibold text-gray-400">{{ fechaActual }}</span>
      </div>
    </div>

    <div
      class="relative w-full bg-gradient-to-br from-[#064E3B] to-[#022C22] p-10 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between min-h-[240px]"
    >
      <div class="flex flex-col gap-2 z-10">
        <span class="text-emerald-300/80 text-[14px] font-medium tracking-wide uppercase">
          Balance Disponible
        </span>
        <h2 class="text-white font-black text-[54px] tracking-tight leading-none">
          {{ balance }}
        </h2>
      </div>
      <div class="z-10">
        <button
          class="bg-teal-200 hover:bg-teal-300 text-teal-950 font-bold px-6 py-3 rounded-full text-[14px] transition-all duration-200 shadow-sm cursor-pointer"
        >
          Ver mis datos
        </button>
      </div>
      <div
        class="absolute -right-16 -bottom-16 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"
      ></div>
    </div>
  </section>
</template>
