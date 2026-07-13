<script setup>
import { Search, Shield, ArrowRight } from '@lucide/vue'

const cuenta = {
  nombre: 'Cuenta Corriente Estudiantil',
  numero: '4920',
  saldo: 'Bs. 12,450.00',
}

const contactos = [
  { id: 1, nombre: 'María Rodríguez', ultimo: '4920' },
  { id: 2, nombre: 'Carlos Mendoza', ultimo: '1182' },
  { id: 3, nombre: 'Lucía Ferreyra', ultimo: '0031' },
]
</script>

<template>
  <section class="m-10 flex-1">
    <div class="max-w-[1200px] mx-auto flex flex-col gap-8 xl:flex-row">
      <div class="flex-1 flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-3">
            <h1 class="font-extrabold text-[42px] text-bank-gray-dark leading-tight">Transferir fondos.</h1>
            <p class="max-w-2xl text-page-text text-[16px] leading-7">
              Envía dinero de forma instantánea a cuentas del Banco Universitario o a otras entidades sin comisiones académicas.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <div class="flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-800">
              <span class="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-700 text-white">1</span>
              Destinatario
            </div>
            <div class="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-500">
              <span class="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400">2</span>
              Monto
            </div>
            <div class="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-500">
              <span class="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400">3</span>
              Confirmar
            </div>
          </div>
        </div>

        <div class="rounded-[32px] bg-white border border-slate-100 p-8 shadow-sm flex flex-col gap-8">
          <div class="rounded-[28px] bg-slate-50 border border-slate-100 p-6 shadow-sm">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ArrowRight class="w-5 h-5" />
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold text-bank-gray-dark">{{ cuenta.nombre }}</span>
                <span class="text-sm text-slate-500">**** {{ cuenta.numero }} · Saldo: {{ cuenta.saldo }}</span>
              </div>
            </div>
          </div>

          <div class="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">
            <label class="block text-sm font-semibold text-bank-gray-dark mb-3" for="clabe">
              Número de Cuenta / CLABE
            </label>
            <div class="relative">
              <input
                id="clabe"
                type="text"
                placeholder="0000 0000 0000 0000"
                class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 pr-14 text-slate-700 placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm hover:bg-emerald-200 transition"
              >
                <Search class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              class="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-bank-gray-dark transition hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full bg-bank-green px-9 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
            >
              Siguiente paso
            </button>
          </div>
        </div>
      </div>

      <aside class="flex-[0.45] flex flex-col gap-6">
        <div class="rounded-[32px] bg-white border border-slate-100 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-lg font-bold text-bank-gray-dark">Contactos Frecuentes</h2>
            <button type="button" class="text-sm font-semibold text-brand-primary hover:underline">Ver todos</button>
          </div>
          <div class="space-y-3">
            <article
              v-for="contacto in contactos"
              :key="contacto.id"
              class="flex items-center gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {{ contacto.nombre.charAt(0) }}
              </div>
              <div>
                <p class="font-semibold text-bank-gray-dark">{{ contacto.nombre }}</p>
                <p class="text-sm text-slate-500">**** {{ contacto.ultimo }}</p>
              </div>
            </article>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-[32px] bg-[#064E3B] p-6 text-white shadow-sm">
          <div class="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div class="relative flex items-center gap-3 mb-4">
            <Shield class="w-5 h-5 text-emerald-200" />
            <span class="text-sm font-semibold">Transferencia Segura</span>
          </div>
          <p class="text-sm leading-6 text-emerald-100">
            Tus transacciones están protegidas por encriptación de grado bancario. Nunca compartas tu código dinámico.
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>
