<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  Plus,
  Search,
  ListFilter,
  UserPlus,
  Pen,
  Trash2,
  ArrowRight,
  Loader2,
  X,
} from '@lucide/vue'
import { getContacts, createContact, updateContact, deleteContact } from '@/api/contact'
import AppDialog from '@/components/AppDialog.vue'
import ContactDialog from '@/components/ContactDialog.vue'

const router = useRouter()

const contacts = ref([])
const loading = ref(true)
const searching = ref(false)
const searchQuery = ref('')

const pagination = ref({ page: 1, page_size: 12 })
const showFilters = ref(false)

const showContactDialog = ref(false)
const editingContact = ref(null)
const submitting = ref(false)

const showDeleteDialog = ref(false)
const deletingContact = ref(null)

const showErrorDialog = ref(false)
const errorMessage = ref('')
const showSuccessDialog = ref(false)
const successMessage = ref('')

function fetchContacts(params) {
  loading.value = true
  const query = { ...pagination.value }
  if (params?.alias !== undefined) query.alias = params.alias
  else if (searchQuery.value) query.alias = searchQuery.value

  getContacts(query)
    .then((res) => {
      contacts.value = res.data.data || []
    })
    .catch((err) => {
      errorMessage.value = err.response?.data?.message || 'Error al cargar contactos'
      showErrorDialog.value = true
    })
    .finally(() => {
      loading.value = false
      searching.value = false
    })
}

function doSearch() {
  searching.value = true
  pagination.value.page = 1
  fetchContacts({ alias: searchQuery.value })
}

function handleKeydown(e) {
  if (e.key === 'Enter') doSearch()
}

function applyFilters() {
  showFilters.value = false
  pagination.value.page = 1
  fetchContacts()
}

function changePage(delta) {
  const newPage = pagination.value.page + delta
  if (newPage < 1) return
  pagination.value.page = newPage
  fetchContacts()
}

onMounted(() => {
  fetchContacts()
})

function getInitials(name) {
  if (!name) return '?'
  return name.charAt(0).toUpperCase()
}

function openCreateDialog() {
  editingContact.value = null
  showContactDialog.value = true
}

function openEditDialog(contact) {
  editingContact.value = contact
  showContactDialog.value = true
}

function handleSaveContact(data) {
  submitting.value = true

  const action = editingContact.value
    ? updateContact(editingContact.value.id, data)
    : createContact(data)

  action
    .then(() => {
      showContactDialog.value = false
      successMessage.value = editingContact.value
        ? 'Contacto actualizado con éxito'
        : 'Contacto registrado con éxito'
      showSuccessDialog.value = true
      fetchContacts()
    })
    .catch((err) => {
      const msg = err.response?.data?.message || 'Error al guardar el contacto'
      errorMessage.value = msg
      showErrorDialog.value = true
    })
    .finally(() => {
      submitting.value = false
    })
}

function confirmDelete(contact) {
  deletingContact.value = contact
  showDeleteDialog.value = true
}

function handleDelete() {
  if (!deletingContact.value) return
  submitting.value = true

  deleteContact(deletingContact.value.id)
    .then(() => {
      showDeleteDialog.value = false
      deletingContact.value = null
      successMessage.value = 'Contacto eliminado con éxito'
      showSuccessDialog.value = true
      fetchContacts()
    })
    .catch((err) => {
      showDeleteDialog.value = false
      errorMessage.value = err.response?.data?.message || 'Error al eliminar el contacto'
      showErrorDialog.value = true
    })
    .finally(() => {
      submitting.value = false
    })
}

function maskAccount(account) {
  if (!account) return ''
  return `**** ${account.slice(-4)}`
}

function goToTransfer(contact) {
  router.push({
    name: 'Transferir',
    state: { account_number: contact.account_number },
  })
}
</script>

<template>
  <section class="m-10 max-w-236 w-full flex flex-col gap-8">
    <div class="flex justify-between items-start w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-extrabold text-[40px] text-brand-primary leading-10 tracking-[-1px]">
          Mis Contactos
        </h1>
        <p class="text-[16px] leading-6 text-page-text">
          Gestiona tus destinatarios frecuentes para transferencias instantáneas y pagos académicos.
        </p>
      </div>
      <button
        @click="openCreateDialog"
        class="flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
      >
        <Plus class="w-3.5 h-3.5" />
        Nuevo Contacto
      </button>
    </div>

    <div class="flex items-center gap-4 p-6 bg-[#f3f4f5] rounded-xl">
      <div class="flex items-center flex-1 gap-2 px-6 py-4.25 rounded-full bg-white">
        <Search class="w-4.5 h-4.5 text-[#6f7979] shrink-0" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar por alias"
          class="w-full bg-transparent text-base text-bank-gray-dark outline-none placeholder:text-[#6f7979]"
          @keydown="handleKeydown"
        />
      </div>
      <button
        @click="doSearch"
        :disabled="searching"
        class="flex items-center gap-2 px-6 py-4.25 rounded-full bg-[#e1e3e4] text-bank-gray-dark font-bold text-[14px] hover:bg-[#d0d2d3] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Loader2 v-if="searching" class="w-5 h-5 animate-spin" />
        <Search v-else class="w-5 h-5" />
        Buscar
      </button>
      <button
        @click="showFilters = true"
        class="flex items-center gap-2 px-6 py-4.25 rounded-full bg-[#e1e3e4] text-bank-gray-dark font-bold text-[14px] hover:bg-[#d0d2d3] transition-colors cursor-pointer"
      >
        <ListFilter class="w-5 h-5" />
        Filtros
      </button>
    </div>

    <div v-if="loading" class="flex items-center justify-center gap-2 py-16">
      <Loader2 class="w-5 h-5 text-brand-primary animate-spin" />
      <span class="text-page-text text-[14px] font-medium">Cargando contactos...</span>
    </div>

    <div
      v-else-if="contacts.length === 0"
      class="flex flex-col items-center justify-center gap-4 py-16"
    >
      <UserPlus class="w-12 h-12 text-[#bec8c9]" />
      <span class="text-page-text text-[16px] font-medium">No tienes contactos</span>
      <button
        @click="openCreateDialog"
        class="px-8 py-3 rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-sm hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
      >
        Añadir tu primer contacto
      </button>
    </div>

    <div v-else class="flex flex-col gap-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          @click="openCreateDialog"
          class="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-dashed border-[#bec8c9] hover:bg-white/50 transition-colors min-h-64 cursor-pointer"
        >
          <div class="w-16 h-16 flex items-center justify-center rounded-full bg-[#e7e8e9]">
            <UserPlus class="w-[27.5px] h-7 text-[#6f7979]" />
          </div>
          <div class="flex flex-col items-center gap-1">
            <span class="font-bold text-[16px] text-bank-gray-dark">Añadir nuevo</span>
            <span class="text-[12px] text-page-text">Registra una nueva cuenta</span>
          </div>
        </div>

        <div
          v-for="contact in contacts"
          :key="contact.id"
          class="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-[0px_1px_2px_#0000000d]"
        >
          <div class="flex items-start justify-between">
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-[24px]"
              :class="contact.id % 2 === 0 ? 'bg-[#85f5ed] text-[#00201e]' : 'bg-brand-primary text-[#90d6db]'"
            >
              {{ getInitials(contact.alias) }}
            </div>
            <div class="flex items-center gap-1">
              <button
                @click="openEditDialog(contact)"
                class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-[#e7e8e9] transition-colors cursor-pointer"
              >
                <Pen class="w-4 h-4 text-[#6f7979]" />
              </button>
              <button
                @click="confirmDelete(contact)"
                class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-[#ffb1b1] transition-colors cursor-pointer"
              >
                <Trash2 class="w-4 h-4 text-[#ba1a1a]" />
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <h3 class="font-bold text-[20px] text-bank-gray-dark">
              {{ contact.alias }}
            </h3>
            <span class="text-[14px] text-page-text">
              {{ maskAccount(contact.account_number) }}
            </span>
            <span v-if="contact.description" class="text-[14px] text-[#6f7979] mt-1">
              {{ contact.description }}
            </span>
          </div>

          <button
            @click="goToTransfer(contact)"
            class="w-full py-3 rounded-xl font-bold text-[14px] transition-all cursor-pointer"
            :class="contact.id % 2 === 0
              ? 'bg-[#e7e8e9] text-[#004649] hover:bg-[#d0d2d3]'
              : 'bg-linear-to-r from-[#004649] to-[#085f63] text-white hover:brightness-110'"
          >
            Enviar Dinero
          </button>
        </div>
      </div>

      <div class="flex items-center justify-between pt-2">
        <span class="text-[14px] text-page-text">
          Página {{ pagination.page }} &mdash; {{ pagination.page_size }} por página
        </span>
        <div class="flex items-center gap-2">
          <button
            @click="changePage(-1)"
            :disabled="pagination.page <= 1 || loading"
            class="px-5 py-2.5 rounded-full bg-[#e7e8e9] text-bank-gray-dark font-bold text-[13px] hover:bg-[#d0d2d3] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span class="text-[14px] font-bold text-bank-gray-dark min-w-[2ch] text-center">
            {{ pagination.page }}
          </span>
          <button
            @click="changePage(1)"
            :disabled="loading || contacts.length < pagination.page_size"
            class="px-5 py-2.5 rounded-full bg-[#e7e8e9] text-bank-gray-dark font-bold text-[13px] hover:bg-[#d0d2d3] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>

    <div class="flex h-65 rounded-[48px] p-10 bg-brand-primary">
      <div class="flex flex-col gap-4 max-w-lg">
        <h3 class="text-white font-extrabold text-[30px]">Transferencias en un Tap</h3>
        <p class="text-[#a8eff3] opacity-90">
          Organiza tus contactos universitarios para agilizar tus pagos en el campus y gastos
          compartidos.
        </p>
        <button
          class="flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-[#a8eff3] text-[#002021] font-bold text-[14px] hover:brightness-110 transition-all cursor-pointer"
        >
          Ver Tutorial de Grupos
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div
      v-if="showFilters"
      class="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in"
      @click.self="showFilters = false"
    >
      <div class="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-scale-in">
        <div class="flex items-center justify-between p-6 pb-0">
          <h3 class="font-bold text-xl text-bank-gray-dark">Filtros</h3>
          <button
            @click="showFilters = false"
            class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e7e8e9] transition-colors cursor-pointer"
          >
            <X class="w-4 h-4 text-page-text" />
          </button>
        </div>

        <div class="flex flex-col gap-5 p-6">
          <div class="flex flex-col gap-2">
            <span class="font-bold text-page-text text-xs tracking-[1.20px] leading-4">
              RESULTADOS POR PÁGINA
            </span>
            <div class="flex items-center gap-2">
              <button
                @click="pagination.page_size = 12"
                class="flex-1 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer"
                :class="pagination.page_size === 12
                  ? 'bg-brand-primary text-white shadow-[0px_4px_6px_-4px_#0000001a]'
                  : 'bg-[#e7e8e9] text-bank-gray-dark hover:bg-[#d0d2d3]'"
              >
                12
              </button>
              <button
                @click="pagination.page_size = 24"
                class="flex-1 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer"
                :class="pagination.page_size === 24
                  ? 'bg-brand-primary text-white shadow-[0px_4px_6px_-4px_#0000001a]'
                  : 'bg-[#e7e8e9] text-bank-gray-dark hover:bg-[#d0d2d3]'"
              >
                24
              </button>
              <button
                @click="pagination.page_size = 48"
                class="flex-1 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer"
                :class="pagination.page_size === 48
                  ? 'bg-brand-primary text-white shadow-[0px_4px_6px_-4px_#0000001a]'
                  : 'bg-[#e7e8e9] text-bank-gray-dark hover:bg-[#d0d2d3]'"
              >
                48
              </button>
            </div>
          </div>

          <button
            @click="applyFilters"
            class="w-full py-3.5 rounded-full bg-linear-to-br from-[#004649] to-[#085f63] text-white font-bold text-base hover:brightness-110 transition-all cursor-pointer shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  </Teleport>

  <ContactDialog
    :is-open="showContactDialog"
    :contact="editingContact"
    @close="showContactDialog = false"
    @save="handleSaveContact"
  />

  <AppDialog
    :is-open="showDeleteDialog"
    type="confirm"
    title="Eliminar contacto"
    :message="`¿Estás seguro de eliminar a ${deletingContact?.alias || 'este contacto'}?`"
    confirm-text="Eliminar"
    @close="showDeleteDialog = false"
    @confirm="handleDelete"
  />

  <AppDialog
    :is-open="showSuccessDialog"
    type="success"
    :title="successMessage"
    message=""
    @close="showSuccessDialog = false"
  />

  <AppDialog
    :is-open="showErrorDialog"
    type="error"
    title="Error"
    :message="errorMessage"
    @close="showErrorDialog = false"
  />
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-fade-in { animation: fadeIn 0.2s ease-out; }
.animate-scale-in { animation: scaleIn 0.2s ease-out; }
</style>
