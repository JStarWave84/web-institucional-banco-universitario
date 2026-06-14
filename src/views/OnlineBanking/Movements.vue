<script setup>
import { Download, Search } from '@lucide/vue'
</script>

<template>
  <main class="flex flex-col m-10 w-244 max-w-5xl h-218 gap-8">
    <!--Header Section-->
    <section class="flex justify-between w-244 h-28 mb-4">
      <div class="flex flex-col w-[443.42px] h-26 gap-2">
        <h1 class="text-[48px] font-extrabold text-[#004649]">Movimientos</h1>
        <p class="text-[#3F4949]">
          Sigue el flujo de tu dinero. Filtra por categorías académicas o gastos diarios.
        </p>
      </div>

      <button
        class="flex justify-center w-35 h-12 self-end rounded-full px-6 py-3 gap-4 bg-[#E1E3E4] text-[#191C1D] font-bold"
      >
        <div class="w-4 h-4"><Download /></div>
        <span>Exportar</span>
      </button>
    </section>

    <!--Search & Filter-->
    <section class="flex items-center w-244 h-13 gap-2 py-1 px-6 rounded-full bg-white">
      <div class="flex items-center justify-center w-6 h-6">
        <Search class="w-4.5 h-4.5 text-[#6F7979]" />
      </div>

      <input
        placeholder="Buscar por ingreso o egreso..."
        class="w-227.5 h-11 px-3 py-3 text-[#6F7979] outline-0"
      />
    </section>

    <!--Transaction List-->
    <ul class="w-244 h-136 gap-4">
      <!--Data Transaction-->
      <div class="flex w-244 h-4 px-2 gap-4">
        <span class="w-[141.33px] text-[#6F7979] text-[12px] font-bold uppercase"
          >hoy, 13 de junio
        </span>

        <div></div>
      </div>
    </ul>

    <!--More results-->
    <div class="flex items-end justify-center w-244 h-17 mt-4">
      <button
        class="w-[231.55px] h-13 px-8 py-4 rounded-full bg-[#E7E8E9] text-[#191C1D] text-[14px] font-bold"
      >
        Cargar más movimientos
      </button>
    </div>
  </main>
</template>
