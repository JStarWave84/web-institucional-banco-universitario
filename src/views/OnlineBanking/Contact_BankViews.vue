<script setup>
import { Plus, Search, LayoutGrid, ListFilter, ArrowRight, UserPlus, Pen, Trash } from '@lucide/vue'
</script>

<template>
  <main class="flex flex-col m-10 w-236 max-w-6xl h-[1189.5px] gap-8">
    <!--Editorial Header-->
    <section class="flex justify-between w-236 h-30 mb-4">
      <div class="flex flex-col w-106.75 h-26 gap-2">
        <h2 class="text-[48px] font-extrabold text-[#191C1D]">Mis Contactos</h2>
        <p class="text-[#3F4949]">
          Gestiona tus destinatarios frecuentes para transferencias instantáneas y pagos académicos.
        </p>
      </div>

      <div class="flex justify-centerw-[211.88px] h-14 self-end">
        <button
          class="flex rounded-full px-8 py-4 gap-4 bg-[linear-gradient(104.16deg,#004649_0%,#085F63_100%)] text-white shadow-[0px_4px_6px_-4px_#0000001A]"
        >
          <div class="w-3.5 h-3.5"><Plus /></div>
          <span>Nuevo Contacto</span>
        </button>
      </div>
    </section>

    <!--Search & Filter Area-->
    <div class="flex h-[103.5px] rounded-3xl gap-4 p-6 bg-[#F3F4F5]">
      <div
        class="flex items-center w-[712.77px] h-13 min-w-75 gap-2 pt-4 pr-6 pb-4.25 pl-4 rounded-full bg-white"
      >
        <div class="flex items-center justify-center w-6 h-6">
          <Search class="w-4.5 h-4.5 text-[#6F7979]" />
        </div>
        <input placeholder="Buscar por nombre o cuenta" class="w-[712.77px] h-13" />
      </div>

      <div class="flex w-[167.23px] h-[55.5px] gap-2">
        <button
          class="flex items-center justify-center w-[109.24px] px-6 py-4.5 gap-2 rounded-full bg-[#E1E3E4] text-[#191C1D]"
        >
          <ListFilter class="w-5 h-5" />
          <snap class="font-bold text-[14px]">Filtros</snap>
        </button>

        <button
          class="flex items-center justify-center w-12.5 h-12.5 mb-4 rounded-full bg-[#E1E3E4]"
        >
          <LayoutGrid class="w-5 h-5 text-[#191C1D]" />
        </button>
      </div>
    </div>

    <!--Info Contacts-->
    <div class="grid grid-cols-3 h-152.5 gap-6">
      <!--Add Contacts-->
      <div
        class="flex flex-col items-center w-[298.67px] h-62.5 min-h-62.5 py-15.75 px-6 gap-4 top-78 rounded-4xl border-2 border-dashed border-[#BEC8C9] row-start-2 col-start-1 col-span-1 row-span-1"
      >
        <div class="flex items-center justify-center w-16 h-16 rounded-full bg-[#E7E8E9]">
          <UserPlus class="w-[27.5px] h-7 text-[#6F7979]" />
        </div>

        <div class="flex flex-col items-center justify-center w-[147.11px] h-10">
          <span class="w-[101.64px] h-6 font-bold text-[16px] text-[#191C1D]">Añadir nuevo</span>
          <span class="w-[147.11px] h-6 text-[12px] text-[#3F4949]">Registra una nueva cuenta</span>
        </div>
      </div>

      <!--Contact Card3-->
      <div
        class="w-[298.67px] h-72 pt-6 px-6 pb-7 rounded-4xl bg-[white] border-2 border-[#A8EFF3] shadow-[0px_1px_2px_0px_#0000000D] row-start-1 col-start-3 col-span-1 row-span-1"
      >
        <div class="w-[250.67px] h-22 mb-2">
          <div class="flex justify-between h-15.5">
            <div
              class="w-16 h-16 rounded-2xl pt-[15.5px] pb-[16.5px] bg-[#85F5ED] text-center text-[#00201E] font-bold text-[24px]"
            >
              CR
            </div>

            <div
              class="flex items-center justify-center w-[68.47px] h-5.75 px-2 py-1 gap-1 rounded-md bg-[#A8EFF3]"
            >
              <span class="font-black text-[10px] text-[#002021]">FRECUENTE</span>
            </div>
          </div>
        </div>

        <div class="w-[250.67px]">
          <div class="flex flex-col h-18 mb-7">
            <h3 class="h-7 font-bold text-[20px] text-[#191C1D]">Carlos Ruiz</h3>
            <span class="h-5 text-[14px] text-[#3F4949]">**** 1102</span>
            <span class="h-6 mt-1 text-[14px] text-[#6F7979]">Cena grupo estudio</span>
          </div>
        </div>

        <button
          class="w-[250.67px] h-11 py-3 rounded-xl bg-linear-to-r from-[#004649] to-[#085F63] font-bold text-[14px] text-white"
        >
          Enviar Dinero
        </button>
      </div>

      <!--Contact Card2-->
      <div
        class="w-[298.67px] h-72 rounded-4xl pt-6 px-6 pb-7 bg-white shadow-[0px_1px_2px_0px_#0000000D] row-start-1 col-start-2 col-span-1 row-span-1"
      >
        <div class="w-[250.67px] h-22 mb-2">
          <div class="flex justify-between h-15.5">
            <div
              class="w-16 h-16 rounded-2xl pt-[15.5px] pb-[16.5px] bg-[#85F5ED] text-center text-[#00201E] font-bold text-[24px]"
            >
              VP
            </div>

            <div class="w-17.5 h-8.5 gap-1">
              <button class="w-8.5 h-8.5 rounded-full p-2">
                <Pen class="w-4.5 h-4.5 text-[#6F7979]" />
              </button>

              <button class="w-8 h-8.5 rounded-full p-2">
                <trash class="w-4.5 h-4.5 text-[#BA1A1A]" />
              </button>
            </div>
          </div>
        </div>

        <div class="w-[250.67px]">
          <div class="flex flex-col h-18 mb-7">
            <h3 class="h-7 font-bold text-[20px] text-[#191C1D]">Valeria Peña</h3>
            <span class="h-5 text-[14px] text-[#3F4949]">**** 4490</span>
            <span class="h-6 mt-1 text-[14px] text-[#6F7979]">Materiales arquitectura</span>
          </div>
        </div>

        <button
          class="w-[250.67px] h-11 py-3 rounded-xl bg-[#E7E8E9] font-bold text-[14px] text-[#004649]"
        >
          Enviar Dinero
        </button>
      </div>

      <!--Contact Card1-->
      <div
        class="w-[298.67px] h-72 rounded-4xl pt-6 px-6 pb-7 bg-white shadow-[0px_1px_2px_0px_#0000000D] row-start-1 col-start-1 col-span-1 row-span-1"
      >
        <div class="w-[250.67px] h-22 mb-2">
          <div class="flex justify-between h-15.5">
            <div
              class="w-16 h-16 rounded-2xl pt-[15.5px] pb-[16.5px] bg-[#085F63] text-center text-[#90D6DB] font-bold text-[24px]"
            >
              CH
            </div>

            <div class="w-17.5 h-8.5 gap-1">
              <button class="w-8.5 h-8.5 rounded-full p-2">
                <Pen class="w-4.5 h-4.5 text-[#6F7979]" />
              </button>

              <button class="w-8 h-8.5 rounded-full p-2">
                <trash class="w-4.5 h-4.5 text-[#BA1A1A]" />
              </button>
            </div>
          </div>
        </div>

        <div class="w-[250.67px]">
          <div class="flex flex-col h-18 mb-7">
            <h3 class="h-7 font-bold text-[20px] text-[#191C1D]">Chela</h3>
            <span class="h-5 text-[14px] text-[#3F4949]">**** 9012</span>
            <span class="h-6 mt-1 text-[14px] text-[#6F7979]">Cafetin decanato</span>
          </div>
        </div>

        <button
          class="w-[250.67px] h-11 py-3 rounded-xl bg-[#E7E8E9] font-bold text-[14px] text-[#004649]"
        >
          Enviar Dinero
        </button>
      </div>
    </div>

    <!--Info Additionals -->
    <section class="flex h-65 rounded-[48px] p-10 bg-[#004649]">
      <div></div>

      <div class="flex flex-col w-216 h-45 gap-4">
        <h3 class="h-9 text-white font-extrabold text-[30px]">Transferencias en un Tap</h3>

        <div class="w-[384px] h-17 mb-4 opacity-90">
          <span class="w-[366.41px] h-13 text-[#A8EFF3]"
            >Organiza tus contactos universitarios para agilizar tus pagos en el campus y gastos
            compartidos.</span
          >
        </div>

        <button
          class="flex w-[214.6px] h-11 px-6 py-3 gap-2 rounded-full bg-[#A8EFF3] text-[#002021]"
        >
          <p class="h-5 w-[149.27x] font-bold text-[14px]">Ver Tutorial de Grupos</p>
          <div class="w-2 h-2"><ArrowRight /></div>
        </button>
      </div>
    </section>
  </main>
</template>
