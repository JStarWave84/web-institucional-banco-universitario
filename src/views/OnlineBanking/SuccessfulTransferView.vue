<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  CircleCheck,
  Receipt,
  Download,
  Share2,
  UserPlus,
  Check,
  ShieldCheck,
  Loader2,
} from '@lucide/vue'
import { createContact } from '@/api/contact'
import AppDialog from '@/components/AppDialog.vue'

const router = useRouter()

const alias = ref('')
const description = ref('')
const saving = ref(false)

const showSuccessDialog = ref(false)
const showErrorDialog = ref(false)
const errorMessage = ref('')

const transferData = computed(() => {
  const state = history.state || {}
  return {
    id: state.id || '—',
    amount: state.amount || 0,
    account_number: state.account_number || '—',
    description: state.description || '—',
    created_at: state.created_at || null,
    recipientName: state.recipientName || '—',
  }
})

function formatCurrency(value) {
  return new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES',
    minimumFractionDigits: 2,
  }).format(value)
}

function formatDate(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  return d.toLocaleString('es-VE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function goToDashboard() {
  router.push('/bancaenlinea/dashboard')
}

function guardarContacto() {
  saving.value = true

  createContact({
    alias: alias.value || transferData.value.recipientName,
    account_number: transferData.value.account_number,
    description: description.value,
  })
    .then(() => {
      showSuccessDialog.value = true
    })
    .catch((err) => {
      errorMessage.value = err.response?.data?.message || 'Error al guardar el contacto'
      showErrorDialog.value = true
    })
    .finally(() => {
      saving.value = false
    })
}

function closeSuccess() {
  showSuccessDialog.value = false
  goToDashboard()
}
</script>

<template>
  <section class="m-10 max-w-236 w-full flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <div class="w-14 h-14 flex items-center justify-center bg-teal-200 rounded-full">
        <CircleCheck class="w-7 h-7 text-brand-primary" />
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="font-extrabold text-[40px] text-brand-primary leading-10 tracking-[-1px]">
          Transferencia realizada con éxito
        </h1>
        <p class="text-[16px] leading-6 text-page-text max-w-xl">
          Tu dinero ha sido enviado correctamente. Hemos notificado al destinatario sobre esta
          operación.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-7 flex flex-col">
        <div
          class="relative flex flex-col gap-8 p-8 bg-white rounded-xl shadow-[0px_1px_2px_#0000000d] overflow-hidden"
        >
          <div
            class="absolute -top-16 -right-16 w-32 h-32 bg-[#a8eff333] rounded-full blur-[32px] pointer-events-none"
          ></div>

          <div class="flex items-center gap-2">
            <Receipt class="w-5 h-5 text-bank-gray-dark" />
            <h2 class="font-bold text-bank-gray-dark text-xl leading-7">Detalles del Comprobante</h2>
          </div>

          <div class="grid grid-cols-2 gap-x-12 gap-y-8">
            <div class="flex flex-col gap-1">
              <span class="font-bold text-page-text text-xs tracking-[0.60px] leading-4">
                MONTO TRANSFERIDO
              </span>
              <span class="font-bold text-brand-primary text-3xl leading-9">
                {{ formatCurrency(transferData.amount) }}
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-bold text-page-text text-xs tracking-[0.60px] leading-4">
                FECHA Y HORA
              </span>
              <span class="font-semibold text-bank-gray-dark text-lg leading-7">
                {{ formatDate(transferData.created_at) }}
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-bold text-page-text text-xs tracking-[0.60px] leading-4">
                DESTINATARIO
              </span>
              <span class="font-semibold text-bank-gray-dark text-lg leading-7">
                {{ transferData.recipientName }}
              </span>
              <span class="font-normal text-page-text text-sm leading-5">
                {{ transferData.account_number }}
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-bold text-page-text text-xs tracking-[0.60px] leading-4">
                REFERENCIA
              </span>
              <span class="font-semibold text-bank-gray-dark text-lg leading-7">
                {{ transferData.id }}
              </span>
            </div>
            <div class="col-span-2 flex flex-col gap-1">
              <span class="font-bold text-page-text text-xs tracking-[0.60px] leading-4">
                CONCEPTO
              </span>
              <span class="font-semibold text-bank-gray-dark text-lg leading-7">
                {{ transferData.description }}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4 pt-8 border-t border-[#e1e3e44c]">
            <button
              class="flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
            >
              <Download class="w-4 h-4" />
              Descargar Comprobante
            </button>
            <button
              class="flex items-center gap-2 px-8 py-3 rounded-full bg-[#e1e3e4] text-bank-gray-dark font-bold text-base hover:bg-[#d0d2d3] transition-colors cursor-pointer"
            >
              <Share2 class="w-4 h-4" />
              Compartir
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-5 flex flex-col gap-6 p-8 bg-[#e1e3e480] rounded-xl backdrop-blur-[2px]">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center bg-brand-primary rounded-full">
            <UserPlus class="w-[22px] h-4 text-[#a8eff3]" />
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-bank-gray-dark text-xl leading-7">Guardar Contacto</h3>
            <p class="font-normal text-page-text text-sm leading-5">
              Añade a {{ transferData.recipientName }} a tu lista frecuente
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <span class="font-bold text-page-text text-xs tracking-[1.20px] leading-4">
              ALIAS DEL CONTACTO
            </span>
            <input
              v-model="alias"
              type="text"
              placeholder="Ej. Ana Depto"
              class="w-full rounded-full bg-white px-6 py-4.25 text-base text-[#6f797980] outline-none transition focus:bg-[#f5f5f5]"
            />
          </div>

          <div class="flex flex-col gap-2">
            <span class="font-bold text-page-text text-xs tracking-[1.20px] leading-4">
              DESCRIPCIÓN (OPCIONAL)
            </span>
            <textarea
              v-model="description"
              placeholder="Añade una nota para recordar quién es..."
              rows="3"
              class="w-full rounded-xl bg-white px-6 py-4 text-base text-[#6f797980] outline-none transition focus:bg-[#f5f5f5] resize-none"
            ></textarea>
          </div>

          <div class="flex flex-col gap-3 pt-4">
            <button
              @click="guardarContacto"
              :disabled="saving"
              class="flex items-center justify-center gap-2 px-6 py-4 w-full rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Loader2 v-if="saving" class="w-[18px] h-[18px] animate-spin" />
              <Check v-else class="w-[18px] h-[18px]" />
              {{ saving ? 'Guardando...' : 'Guardar y Finalizar' }}
            </button>
            <button
              @click="goToDashboard"
              class="flex items-center justify-center px-6 py-3 w-full rounded-full font-bold text-page-text text-base hover:bg-[#d0d2d3] transition-colors cursor-pointer"
            >
              Omitir por ahora
            </button>
          </div>
        </div>

        <div class="flex items-start gap-3 pt-6 pb-4 px-4 bg-[#085f631a] rounded-lg">
          <ShieldCheck class="w-4 h-5 text-brand-primary shrink-0 mt-0.5" />
          <p class="text-[#004649] text-xs leading-[19.5px]">
            <span class="font-bold">Transacción Asegurada.</span>
            Esta operación cuenta con el respaldo de Banco Universitario y cumple con los protocolos
            de seguridad académica 2026.
          </p>
        </div>
      </div>
    </div>
  </section>

  <AppDialog
    :is-open="showSuccessDialog"
    type="success"
    title="Contacto guardado"
    message="El contacto se ha agregado a tu lista correctamente."
    @close="closeSuccess"
  />

  <AppDialog
    :is-open="showErrorDialog"
    type="error"
    title="Error"
    :message="errorMessage"
    @close="showErrorDialog = false"
  />
</template>
