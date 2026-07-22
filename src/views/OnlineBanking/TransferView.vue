<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { createMovement, searchAccount } from '@/api/transfer'
import { getContacts } from '@/api/contact'
import {
  ArrowRight,
  CreditCard,
  UserSearch,
  Lock,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  CircleCheck,
  CircleX,
} from '@lucide/vue'
import AppDialog from '@/components/AppDialog.vue'

const router = useRouter()
const authStore = useAuthStore()
const { balance, loadingBalance, user } = storeToRefs(authStore)

const currentStep = ref(1)
const accountNumber = ref('')
const amount = ref(null)
const concept = ref('')
const selectedContactName = ref('')

const searchingAccount = ref(false)
const accountFound = ref(null)
const accountError = ref('')

const submitting = ref(false)
const submitError = ref('')
const showErrorDialog = ref(false)

let searchTimeout = null

const contactos = ref([])
const loadingContacts = ref(true)

function maskAccount(account) {
  if (!account) return ''
  return `**** ${account.slice(-4)}`
}

function selectContact(contact) {
  accountNumber.value = contact.account_number
  selectedContactName.value = contact.alias
}

onMounted(() => {
  const state = history.state || {}
  if (state.account_number) {
    accountNumber.value = state.account_number
    history.replaceState(null, '')
  }

  getContacts({ page: 1, page_size: 20 })
    .then((res) => {
      contactos.value = res.data.data || []
    })
    .catch(() => {
      contactos.value = []
    })
    .finally(() => {
      loadingContacts.value = false
    })
})

function doSearchAccount() {
  const num = accountNumber.value.replace(/\s/g, '')
  if (num.length !== 20) {
    accountFound.value = null
    accountError.value = ''
    return
  }

  searchingAccount.value = true
  accountError.value = ''

  searchAccount(num)
    .then((res) => {
      accountFound.value = res.data.data
      accountError.value = ''
    })
    .catch((err) => {
      accountFound.value = null
      const msg = err.response?.data?.message || ''
      if (msg.includes('no encontrada')) {
        accountError.value = 'Cuenta no encontrada'
      } else if (msg.includes('validación')) {
        accountError.value = 'El número de cuenta debe tener 20 dígitos'
      } else {
        accountError.value = msg || 'Error al buscar la cuenta'
      }
    })
    .finally(() => {
      searchingAccount.value = false
    })
}

watch(accountNumber, () => {
  accountError.value = ''
  if (searchTimeout) clearTimeout(searchTimeout)
  const num = accountNumber.value.replace(/\s/g, '')
  if (num.length === 20) {
    searchTimeout = setTimeout(doSearchAccount, 400)
  } else {
    accountFound.value = null
    if (num.length > 0 && num.length < 20) {
      accountError.value = ''
    }
  }
})

function nextStep() {
  if (currentStep.value < 3) currentStep.value++
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}

function goToDashboard() {
  router.push('/bancaenlinea/dashboard')
}

function confirmTransfer() {
  submitting.value = true
  submitError.value = ''

  createMovement(Number(amount.value), accountNumber.value.replace(/\s/g, ''), concept.value)
    .then((res) => {
      const data = res.data.data
      router.push({
        name: 'TransferenciaExitosa',
        state: {
          id: data.id,
          amount: data.amount,
          account_number: data.account_number,
          description: data.description,
          created_at: data.created_at,
          balance: data.balance,
          recipientName: accountFound.value
            ? `${accountFound.value.first_name} ${accountFound.value.last_name}`
            : selectedContactName.value || '',
        },
      })
    })
    .catch((err) => {
      const msg = err.response?.data?.message || 'Error al realizar la transferencia'
      submitError.value = msg
      showErrorDialog.value = true
    })
    .finally(() => {
      submitting.value = false
    })
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES',
    minimumFractionDigits: 2,
  }).format(value)
}

const destinatarioDisplay = computed(() => {
  if (accountFound.value) {
    return `${accountFound.value.first_name} ${accountFound.value.last_name}`
  }
  return selectedContactName.value || accountNumber.value || '—'
})

const canGoNextStep1 = computed(() => {
  return !!accountFound.value
})
</script>

<template>
  <section class="m-10 max-w-236 w-full flex flex-col gap-8">
    <div class="flex flex-col gap-1">
      <h1 class="font-extrabold text-[40px] text-brand-primary leading-10 tracking-[-1px]">
        Transferir fondos.
      </h1>
      <p class="text-[16px] leading-6 text-page-text">
        Envía dinero de forma instantánea a cuentas del Banco Universitario o a otras entidades sin
        comisiones académicas.
      </p>
    </div>

    <div class="flex items-center gap-4 py-2">
      <div class="inline-flex items-center gap-3">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full"
          :class="currentStep >= 1 ? 'bg-brand-primary' : 'bg-[#e7e8e9]'"
        >
          <span
            class="font-bold text-xs text-center leading-4"
            :class="currentStep >= 1 ? 'text-[#a8eff3]' : 'text-bank-gray-dark'"
            >1</span
          >
        </div>
        <span
          class="text-sm leading-5 whitespace-nowrap"
          :class="currentStep >= 1 ? 'font-bold text-[#004649]' : 'font-medium text-bank-gray-dark'"
          >Destinatario</span
        >
      </div>
      <div class="w-8 h-px bg-[#bec8c94c]"></div>
      <div class="inline-flex items-center gap-3" :class="currentStep < 2 ? 'opacity-40' : ''">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full"
          :class="currentStep >= 2 ? 'bg-brand-primary' : 'bg-[#e7e8e9]'"
        >
          <span
            class="font-bold text-xs text-center leading-4"
            :class="currentStep >= 2 ? 'text-[#a8eff3]' : 'text-bank-gray-dark'"
            >2</span
          >
        </div>
        <span
          class="text-sm leading-5 whitespace-nowrap"
          :class="currentStep >= 2 ? 'font-bold text-[#004649]' : 'font-medium text-bank-gray-dark'"
          >Monto</span
        >
      </div>
      <div class="w-8 h-px bg-[#bec8c94c]"></div>
      <div class="inline-flex items-center gap-3" :class="currentStep < 3 ? 'opacity-40' : ''">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-full"
          :class="currentStep >= 3 ? 'bg-brand-primary' : 'bg-[#e7e8e9]'"
        >
          <span
            class="font-bold text-xs text-center leading-4"
            :class="currentStep >= 3 ? 'text-[#a8eff3]' : 'text-bank-gray-dark'"
            >3</span
          >
        </div>
        <span
          class="text-sm leading-5 whitespace-nowrap"
          :class="currentStep >= 3 ? 'font-bold text-[#004649]' : 'font-medium text-bank-gray-dark'"
          >Confirmar</span
        >
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-8 flex flex-col gap-6">
        <div class="flex flex-col gap-4 p-6 bg-[#f3f4f5] rounded-xl">
          <span class="font-bold text-page-text text-xs tracking-[0.60px] leading-4">
            DESDE MI CUENTA
          </span>
          <div
            class="flex items-center justify-between p-4 bg-white rounded-xl border border-transparent"
          >
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 flex items-center justify-center bg-teal-50 rounded-full">
                <CreditCard class="w-5 h-4 text-brand-primary" />
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-bank-gray-dark text-sm leading-5">
                  Cuenta Corriente Estudiantil
                </span>
                <p class="font-normal text-page-text text-xs leading-4">
                  {{ user?.accountNumber ? `**** ${user.accountNumber.slice(-4)}` : '**** 4920' }}
                  &bull; Saldo:
                  {{ loadingBalance ? '...' : formatCurrency(balance) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col p-8 bg-white rounded-xl shadow-[0px_1px_2px_#0000000d]">
          <div v-if="currentStep === 1" class="flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <span class="font-bold text-page-text text-sm leading-5"> Número de Cuenta </span>
              <div class="relative">
                <input
                  v-model="accountNumber"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  maxlength="20"
                  class="w-full rounded-full bg-[#e7e8e9] px-6 py-4.25 pr-14 text-base text-[#6f7979] outline-none transition focus:bg-[#dee2e6]"
                />
                <div
                  class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
                >
                  <Loader2
                    v-if="searchingAccount"
                    class="w-[20.5px] h-[19.5px] text-brand-primary animate-spin"
                  />
                  <UserSearch
                    v-else
                    class="w-[20.5px] h-[19.5px] text-brand-primary"
                  />
                </div>
              </div>
              <div v-if="searchingAccount" class="flex items-center gap-1.5 px-1">
                <Loader2 class="w-3.5 h-3.5 text-brand-primary animate-spin" />
                <span class="text-xs text-page-text">Buscando cuenta...</span>
              </div>
              <div
                v-else-if="accountFound"
                class="flex items-center gap-1.5 px-1"
              >
                <CircleCheck class="w-3.5 h-3.5 text-emerald-600" />
                <span class="text-xs font-medium text-emerald-700">
                  {{ accountFound.first_name }} {{ accountFound.last_name }}
                </span>
              </div>
              <div v-else-if="accountError" class="flex items-center gap-1.5 px-1">
                <CircleX class="w-3.5 h-3.5 text-red-500" />
                <span class="text-xs font-medium text-red-600">{{ accountError }}</span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button
                @click="goToDashboard"
                class="px-8 py-4 rounded-full font-bold text-page-text text-base hover:bg-[#e7e8e9] transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                @click="nextStep"
                :disabled="!canGoNextStep1"
                class="flex items-center gap-2 px-12 py-4 rounded-full bg-linear-to-br from-[#004649] to-brand-primary text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div v-if="currentStep === 2" class="flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <span class="font-bold text-page-text text-sm leading-5"> Monto a transferir </span>
              <div class="relative">
                <span
                  class="absolute left-6 top-1/2 -translate-y-1/2 text-page-text font-bold text-base"
                  >Bs.</span
                >
                <input
                  v-model="amount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  class="w-full rounded-full bg-[#e7e8e9] pl-14 pr-6 py-4.25 text-base text-bank-gray-dark font-bold outline-none transition focus:bg-[#dee2e6] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <span class="font-bold text-page-text text-sm leading-5"> Concepto </span>
              <input
                v-model="concept"
                type="text"
                placeholder="Ej: Pago de colegiatura"
                class="w-full rounded-full bg-[#e7e8e9] px-6 py-4.25 text-base text-[#6f7979] outline-none transition focus:bg-[#dee2e6]"
              />
            </div>

            <div class="flex items-center justify-between pt-4">
              <button
                @click="prevStep"
                class="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-page-text text-base hover:bg-[#e7e8e9] transition-colors cursor-pointer"
              >
                <ArrowLeft class="w-4 h-4" />
                Atrás
              </button>
              <button
                @click="nextStep"
                :disabled="!amount || amount <= 0"
                class="flex items-center gap-2 px-12 py-4 rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div v-if="currentStep === 3" class="flex flex-col gap-8">
            <div class="flex flex-col gap-4 p-6 bg-[#f3f4f5] rounded-xl">
              <div class="flex justify-between items-center pb-4 border-b border-[#bec8c966]">
                <span class="font-medium text-page-text text-sm"> Destinatario </span>
                <span class="font-bold text-bank-gray-dark text-sm text-right">
                  {{ destinatarioDisplay }}
                </span>
              </div>
              <div class="flex justify-between items-center pb-4 border-b border-[#bec8c966]">
                <span class="font-medium text-page-text text-sm"> N° de Cuenta </span>
                <span class="font-bold text-bank-gray-dark text-sm">
                  {{ accountNumber || '—' }}
                </span>
              </div>
              <div class="flex justify-between items-center pb-4 border-b border-[#bec8c966]">
                <span class="font-medium text-page-text text-sm">Monto</span>
                <span class="font-bold text-bank-gray-dark text-sm">
                  {{ amount ? formatCurrency(Number(amount)) : '—' }}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium text-page-text text-sm"> Concepto </span>
                <span class="font-bold text-bank-gray-dark text-sm text-right max-w-[60%] break-words">
                  {{ concept || '—' }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button
                @click="prevStep"
                :disabled="submitting"
                class="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-page-text text-base hover:bg-[#e7e8e9] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft class="w-4 h-4" />
                Atrás
              </button>
              <button
                @click="confirmTransfer"
                :disabled="submitting"
                class="flex items-center gap-2 px-12 py-4 rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Loader2 v-if="submitting" class="w-4 h-4 animate-spin" />
                <CheckCircle2 v-else class="w-4 h-4" />
                {{ submitting ? 'Procesando...' : 'Confirmar Transferencia' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-4 flex flex-col gap-6">
        <div class="flex flex-col gap-6 p-6 bg-[#f3f4f5] rounded-xl">
          <div class="flex items-center justify-between">
            <span class="font-bold text-bank-gray-dark text-sm leading-5">
              Contactos Frecuentes
            </span>
            <button class="font-bold text-teal-700 text-xs text-center leading-4 cursor-pointer">
              Ver todos
            </button>
          </div>

          <div v-if="loadingContacts" class="flex items-center justify-center gap-1 py-4">
            <Loader2 class="w-3.5 h-3.5 text-brand-primary animate-spin" />
            <span class="text-[12px] text-page-text">Cargando...</span>
          </div>
          <div v-else-if="contactos.length === 0" class="py-4 text-center">
            <span class="text-[12px] text-page-text">Sin contactos</span>
          </div>
          <div v-else class="flex flex-col gap-4">
            <div
              v-for="contacto in contactos.slice(0, 4)"
              :key="contacto.id"
              @click="selectContact(contacto)"
              class="flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-colors cursor-pointer"
            >
              <div
                class="w-10 h-10 rounded-full bg-linear-to-tr from-slate-700 to-slate-900 flex items-center justify-center shrink-0"
              >
                <span class="text-white font-bold text-xs">{{ (contacto.alias || '?').charAt(0) }}</span>
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-bank-gray-dark text-xs leading-4">
                  {{ contacto.alias }}
                </span>
                <span class="font-normal text-page-text text-[10px] leading-3.75">
                  {{ maskAccount(contacto.account_number) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex flex-col gap-2 p-6 bg-brand-primary rounded-xl overflow-hidden">
          <div class="flex items-center gap-[7.99px]">
            <Lock class="w-[9.33px] h-[12.25px] text-[#a8eff3]" />
            <span class="font-bold text-[#a8eff3] text-sm leading-5"> Transferencia Segura </span>
          </div>
          <p class="text-[#90d6dbcc] text-xs leading-[19.5px]">
            Tus transacciones están protegidas por encriptación de grado bancario. Nunca compartas
            tu código dinámico.
          </p>
          <ShieldCheck
            class="absolute -right-4 -bottom-4 w-12 h-[64.5px] text-white opacity-10 pointer-events-none"
          />
        </div>
      </div>
    </div>
  </section>

  <AppDialog
    :is-open="showErrorDialog"
    type="error"
    title="Error en la transferencia"
    :message="submitError"
    @close="showErrorDialog = false"
  />
</template>
