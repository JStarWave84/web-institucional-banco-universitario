<script setup>
import { ref } from 'vue'
import { ArrowRight, CreditCard, User, Lock, ArrowLeft, CheckCircle2 } from '@lucide/vue'

// Estado del formulario
const pasoActual = ref(1)

// Datos del formulario
const clabeDestino = ref('')
const montoTransferencia = ref('')

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

// Funciones de navegación
const avanzarPaso = () => {
  if (pasoActual.value < 3) {
    pasoActual.value++
  } else {
    alert('¡Transferencia realizada con éxito!')
    // Aquí puedes resetear el flujo o redirigir
    pasoActual.value = 1
    clabeDestino.value = ''
    montoTransferencia.value = ''
  }
}

const retrocederPaso = () => {
  if (pasoActual.value > 1) {
    pasoActual.value--
  }
}

const seleccionarContacto = (ultimo) => {
  if (pasoActual.value === 1) {
    clabeDestino.value = `0000 0000 0000 ${ultimo}`
  }
}
</script>

<template>
  <section class="m-10 flex-1 font-sans">
    <div class="max-w-[1200px] mx-auto flex flex-col gap-12 xl:flex-row">

      <!-- COLUMNA IZQUIERDA: Formulario principal -->
      <div class="flex-1 flex flex-col gap-10">

        <!-- Cabecera y Pasos -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <h1 class="font-extrabold text-[44px] text-[#02252A] leading-tight tracking-tight">Transferir fondos.</h1>
            <p class="max-w-xl text-[#52666A] text-[15px] leading-relaxed">
              Envía dinero de forma instantánea a cuentas del Banco Universitario o a otras entidades sin comisiones académicas.
            </p>
          </div>

          <!-- Indicadores de Pasos Reactivos -->
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-3">
              <span :class="[
                'w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300',
                pasoActual >= 1 ? 'bg-[#064E3B] text-white' : 'border border-[#CBD5E1] text-[#94A3B8]'
              ]">1</span>
              <span :class="['text-sm transition-colors duration-300', pasoActual >= 1 ? 'text-[#02252A] font-bold' : 'text-[#94A3B8] font-medium']">Destinatario</span>
            </div>
            <div class="w-12 h-px bg-[#E2E8F0]"></div>
            <div class="flex items-center gap-3">
              <span :class="[
                'w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300',
                pasoActual >= 2 ? 'bg-[#064E3B] text-white' : 'border border-[#CBD5E1] text-[#94A3B8]'
              ]">2</span>
              <span :class="['text-sm transition-colors duration-300', pasoActual >= 2 ? 'text-[#02252A] font-bold' : 'text-[#94A3B8] font-medium']">Monto</span>
            </div>
            <div class="w-12 h-px bg-[#E2E8F0]"></div>
            <div class="flex items-center gap-3">
              <span :class="[
                'w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300',
                pasoActual === 3 ? 'bg-[#064E3B] text-white' : 'border border-[#CBD5E1] text-[#94A3B8]'
              ]">3</span>
              <span :class="['text-sm transition-colors duration-300', pasoActual === 3 ? 'text-[#02252A] font-bold' : 'text-[#94A3B8] font-medium']">Confirmar</span>
            </div>
          </div>
        </div>

        <!-- Contenedor del Formulario -->
        <div class="rounded-[32px] bg-white border border-slate-100 p-10 flex flex-col gap-10 shadow-sm min-h-[440px] justify-between">

          <div class="flex flex-col gap-10">
            <!-- Sección fija: Desde mi cuenta -->
            <div class="rounded-2xl bg-[#F4F6F6] px-8 pt-10 pb-6 relative">
              <span class="absolute top-4 left-8 text-[11px] font-bold text-[#52666A] tracking-wider uppercase">Desde mi cuenta</span>
              <div class="flex items-center gap-4 mt-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-50">
                <div class="w-12 h-12 rounded-xl bg-[#E6F4F0] text-[#064E3B] flex items-center justify-center">
                  <CreditCard class="w-6 h-6" />
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-[#02252A] text-base">{{ cuenta.nombre }}</span>
                  <span class="text-sm text-[#52666A]">**** {{ cuenta.numero }} · Saldo: {{ cuenta.saldo }}</span>
                </div>
              </div>
            </div>

            <!-- PASO 1: Destinatario -->
            <div v-if="pasoActual === 1" class="flex flex-col gap-3 transition-opacity duration-300">
              <label class="text-base font-bold text-[#02252A]" for="clabe">
                Número de Cuenta / CLABE
              </label>
              <div class="relative">
                <input
                  id="clabe"
                  v-model="clabeDestino"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  class="w-full rounded-full bg-[#EAECEE] px-8 py-5 text-lg text-[#02252A] placeholder:text-[#94A3B8] focus:outline-none"
                />
                <div class="absolute right-6 top-1/2 -translate-y-1/2 text-[#52666A]">
                  <User class="w-6 h-6" />
                </div>
              </div>
            </div>

            <!-- PASO 2: Monto -->
            <div v-if="pasoActual === 2" class="flex flex-col gap-3 transition-opacity duration-300">
              <label class="text-base font-bold text-[#02252A]" for="monto">
                Monto a Transferir
              </label>
              <div class="relative">
                <input
                  id="monto"
                  v-model="montoTransferencia"
                  type="number"
                  placeholder="0.00"
                  class="w-full rounded-full bg-[#EAECEE] px-8 py-5 text-lg text-[#02252A] placeholder:text-[#94A3B8] focus:outline-none"
                />
                <div class="absolute right-6 top-1/2 -translate-y-1/2 text-[#52666A] font-bold text-lg">
                  Bs.
                </div>
              </div>
            </div>

            <!-- PASO 3: Confirmar -->
            <div v-if="pasoActual === 3" class="flex flex-col gap-4 border border-emerald-100 rounded-2xl bg-emerald-50/50 p-6 transition-opacity duration-300">
              <h3 class="text-base font-bold text-[#02252A] flex items-center gap-2">
                <CheckCircle2 class="w-5 h-5 text-[#064E3B]" /> Resumen de la operación
              </h3>
              <div class="grid grid-cols-2 gap-y-3 text-sm mt-2">
                <span class="text-[#52666A]">Cuenta Origen:</span>
                <span class="font-bold text-[#02252A]">**** {{ cuenta.numero }}</span>

                <span class="text-[#52666A]">Destinatario / CLABE:</span>
                <span class="font-bold text-[#02252A] break-all">{{ clabeDestino || 'No especificado' }}</span>

                <span class="text-[#52666A] border-t border-dashed border-slate-200 pt-2 mt-1">Total a enviar:</span>
                <span class="font-extrabold text-[#064E3B] text-base border-t border-dashed border-slate-200 pt-2 mt-1">Bs. {{ parseFloat(montoTransferencia || 0).toFixed(2) }}</span>
              </div>
            </div>
          </div>

          <!-- Acciones e Historial de Navegación -->
          <div class="flex items-center justify-between mt-4">
            <button
              type="button"
              @click="retrocederPaso"
              :disabled="pasoActual === 1"
              :class="[
                'text-base font-bold flex items-center gap-2 transition',
                pasoActual === 1 ? 'text-[#94A3B8] cursor-not-allowed opacity-50' : 'text-[#02252A] hover:opacity-80'
              ]"
            >
              <ArrowLeft v-if="pasoActual > 1" class="w-4 h-4" />
              {{ pasoActual === 1 ? 'Cancelar' : 'Atrás' }}
            </button>
            <button
              type="button"
              @click="avanzarPaso"
              :disabled="pasoActual === 1 ? !clabeDestino : pasoActual === 2 ? !montoTransferencia : false"
              class="inline-flex items-center gap-2 justify-center rounded-full bg-[#064E3B] px-10 py-4 text-base font-bold text-white shadow-md hover:bg-[#043427] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ pasoActual === 3 ? 'Confirmar y Enviar' : 'Siguiente paso' }}
              <ArrowRight v-if="pasoActual < 3" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- COLUMNA DERECHA: Contactos y Seguridad -->
      <aside class="xl:w-[380px] flex flex-col gap-6">

        <!-- Contactos Frecuentes -->
        <div class="rounded-[32px] bg-[#F4F6F6] p-8 shadow-sm flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-bold text-[#02252A]">Contactos Frecuentes</h2>
            <button type="button" class="text-sm font-bold text-[#064E3B] hover:underline">Ver todos</button>
          </div>

          <div class="flex flex-col gap-4">
            <button
              v-for="contacto in contactos"
              :key="contacto.id"
              @click="seleccionarContacto(contacto.ultimo)"
              :disabled="pasoActual !== 1"
              class="flex items-center gap-4 text-left w-full rounded-2xl p-1 transition hover:bg-white/50 focus:outline-none disabled:opacity-70 disabled:hover:bg-transparent"
            >
              <!-- Avatar Oscuro Estilo Imagen -->
              <div class="h-14 w-14 rounded-full bg-gradient-to-b from-[#1C2826] to-[#0A1110] border border-slate-700/30 flex items-center justify-center text-xs font-bold text-white shadow-inner flex-shrink-0">
                {{ contacto.id }}
              </div>
              <div class="flex flex-col">
                <p class="font-bold text-[#02252A] text-sm leading-tight">{{ contacto.nombre }}</p>
                <p class="text-xs text-[#52666A] mt-0.5">**** {{ contacto.ultimo }}</p>
              </div>
            </button>
          </div>
        </div>

        <!-- Tarjeta de Transferencia Segura -->
        <div class="relative overflow-hidden rounded-[32px] bg-[#0A5C5A] p-8 text-white shadow-sm flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <Lock class="w-5 h-5 text-emerald-300" />
            <span class="text-base font-bold">Transferencia Segura</span>
          </div>
          <p class="text-xs leading-relaxed text-emerald-50/90">
            Tus transacciones están protegidas por encriptación de grado bancario. Nunca compartas tu código dinámico.
          </p>
        </div>
      </aside>

    </div>
  </section>
</template>
