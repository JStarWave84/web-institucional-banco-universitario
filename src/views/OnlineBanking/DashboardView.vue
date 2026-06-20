<script setup>
import { ArrowUpRight, ArrowDownLeft, SlidersHorizontal } from '@lucide/vue'

const balance = 'Bs. 12,450.00'
const fechaActual = '12 de Abril 2025'

const contactosFrecuentes = [
  { id: 1, nombre: 'Mateo G.', avatar: '' },
  { id: 2, nombre: 'Sofia L.', avatar: '' },
  { id: 3, nombre: 'Lucas V.', avatar: '' },
  { id: 4, nombre: 'Elena R.', avatar: '' },
]

const actividadReciente = [
  {
    id: 1,
    tipo: 'consumo',
    titulo: 'Consumo',
    detalles: 'Hoy, 10:45 AM • Almuerzo',
    monto: '-Bs. 4.50',
    esIngreso: false,
    icono: ArrowUpRight,
  },
  {
    id: 2,
    tipo: 'ingreso',
    titulo: 'Beca Universitaria',
    detalles: 'Ayer • Depósito',
    monto: '+Bs. 1,200.00',
    esIngreso: true,
    icono: ArrowDownLeft,
  },
  {
    id: 3,
    tipo: 'consumo',
    titulo: 'Consumo',
    detalles: '24 Oct • Materiales',
    monto: '-Bs. 124.99',
    esIngreso: false,
    icono: ArrowUpRight,
  },
  {
    id: 4,
    tipo: 'consumo',
    titulo: 'Consumo',
    detalles: '22 Oct • Pago compartido',
    monto: '-Bs. 25.00',
    esIngreso: false,
    icono: ArrowUpRight,
  },
]
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

    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-[18px] text-bank-gray-dark">Contactos Frecuentes</h3>
        <button class="text-brand-primary font-bold text-[14px] hover:underline cursor-pointer">
          Ver Todos
        </button>
      </div>

      <div class="flex items-center gap-6">
        <div class="flex flex-col items-center gap-2">
          <button
            class="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 border border-dashed border-gray-300 flex justify-center items-center text-gray-500 text-xl font-medium transition-colors cursor-pointer"
          >
            +
          </button>
          <span class="text-[12px] font-medium text-page-text">Nuevo</span>
        </div>

        <div
          v-for="contacto in contactosFrecuentes"
          :key="contacto.id"
          class="flex flex-col items-center gap-2"
        >
          <div
            class="w-14 h-14 rounded-full bg-slate-800 border-2 border-white shadow-sm overflow-hidden flex justify-center items-center"
          >
            <img
              v-if="contacto.avatar"
              :src="contacto.avatar"
              alt="Avatar"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full bg-gradient-to-tr from-slate-700 to-slate-900 flex justify-center items-center"
            >
              <span class="text-white font-bold text-xs">{{ contacto.nombre.charAt(0) }}</span>
            </div>
          </div>
          <span class="text-[12px] font-medium text-bank-gray-dark">{{ contacto.nombre }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col gap-6">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-[18px] text-bank-gray-dark">Actividad Reciente</h3>
        <button
          class="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-[14px] font-semibold text-page-text hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <SlidersHorizontal class="w-4 h-4 text-gray-500" />
          Filtrar
        </button>
      </div>

      <div class="flex flex-col">
        <div
          v-for="item in actividadReciente"
          :key="item.id"
          class="flex justify-between items-center py-4 border-b border-gray-100 last:border-none"
        >
          <div class="flex items-center gap-4">
            <div
              :class="[
                'w-11 h-11 rounded-xl flex justify-center items-center transition-colors',
                item.esIngreso ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600',
              ]"
            >
              <component :is="item.icono" class="w-5 h-5" />
            </div>
            <div class="flex flex-col">
              <p class="font-bold text-[15px] text-bank-gray-dark">{{ item.titulo }}</p>
              <p class="text-[13px] text-gray-400 font-medium">{{ item.detalles }}</p>
            </div>
          </div>
          <div>
            <span
              :class="[
                'font-bold text-[15px]',
                item.esIngreso ? 'text-emerald-600' : 'text-red-600',
              ]"
            >
              {{ item.monto }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-2">
        <button class="text-brand-primary font-bold text-[14px] hover:underline cursor-pointer">
          Ver Historial Completo
        </button>
      </div>
    </div>
  </section>
</template>
