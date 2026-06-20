<script setup>
import { Download, Search, ArrowUpRight, ArrowDownLeft } from '@lucide/vue'
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
    <ul class="flex flex-col w-244 h-136 gap-4">
      <!--Data Transaction-->
      <div class="flex items-center w-244 h-4 px-2 gap-4">
        <span class="w-[141.33px] text-[#6F7979] text-center text-[12px] font-bold uppercase"
          >hoy, 13 de junio
        </span>

        <div class="w-[832.67px] h-px bg-[#E7E8E9]"></div>
      </div>

      <!--Modelo para los diferentes movimientos-->

      <!--Transaction Negative-->
      <li class="flex justify-between w-244 h-20 p-4 rounded-xl shadow-sm bg-white">
        <!--Info-->
        <div class="flex w-[196.77px] h-12 gap-4">
          <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-[#BA1A1A]/10">
            <ArrowUpRight class="text-[#BA1A1A]" />
          </div>

          <div class="flex flex-col w-[132.77px] h-10.5 gap-0.5">
            <span class="h-6 text-[#191C1D] font-bold">Consumo</span>
            <span class="h-4 text-[#3F4949] text-[12px]">14:20 • Pago con tarjeta</span>
          </div>
        </div>

        <!--Amouth-->
        <div class="flex flex-col w-[91.31px] h-9.75 text-right">
          <span class="text-[#BA1A1A] font-bold">-Bs. 45.20</span>
          <span class="text-[#6F7979] text-[10px] font-bold">Saldo: Bs. 1,194.80</span>
        </div>
      </li>

      <!--Transaction Positive-->
      <li class="flex justify-between w-244 h-20 p-4 rounded-xl shadow-sm bg-white">
        <!--Info-->
        <div class="flex w-[196.77px] h-12 gap-4">
          <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-[#006A65]/10">
            <ArrowDownLeft class="text-[#006A65]" />
          </div>

          <div class="flex flex-col w-[132.77px] h-10.5 gap-0.5">
            <span class="h-6 text-[#191C1D] font-bold whitespace-nowrap">Beca Universitario</span>
            <span class="h-4 text-[#3F4949] text-[12px] whitespace-nowrap"
              >11:00 • Transferencia recibida</span
            >
          </div>
        </div>

        <!--Amouth-->
        <div class="flex flex-col w-[91.31px] h-9.75 text-right">
          <span class="text-[#006A65] font-bold whitespace-nowrap">+Bs. 850.00</span>
          <span class="text-[#6F7979] text-[10px] font-bold">Saldo: Bs. 1,240.00</span>
        </div>
      </li>
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
