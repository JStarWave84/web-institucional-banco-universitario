import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginClient } from '@/api/auth'
import { getAccountBalance } from '@/api/account'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(sessionStorage.getItem('bank_jwt') || null)
  const user = ref(JSON.parse(sessionStorage.getItem('bank_user')) || null)
  const loading = ref(false)

  const balance = ref(0)
  const lastBalanceUpdate = ref('')
  const loadingBalance = ref(false)

  // Getter para proteger rutas en Vue Router
  const isAuthenticated = computed(() => !!token.value)

  // Acción para procesar el Login
  const login = async (credentials) => {
    loading.value = true
    try {
      const { email, password } = credentials
      const response = await loginClient(email, password)

      const jwtToken = response.data.jwt
      const userData = {
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        email: response.data.email,
        documentNumber: response.data.document_number,
        accountNumber: response.data.account_number,
        phoneNumber: response.data.phone_number,
        birthDate: response.data.birth_date,
      }

      // Guardar en el estado de Pinia (Memoria volátil de la app)
      token.value = jwtToken
      user.value = userData

      // Guardar en sessionStorage (Se borra al cerrar la pestaña)
      sessionStorage.setItem('bank_jwt', jwtToken)
      sessionStorage.setItem('bank_user', JSON.stringify(userData))

      await fetchBalance()

      return response.data
    } catch (error) {
      logout() // Limpiar residuos en caso de fallo
      throw error
    } finally {
      loading.value = false
    }
  }

  // Acción para obtener el balance de la cuenta
  const fetchBalance = async () => {
    if (!token.value) return
    loadingBalance.value = true
    try {
      const response = await getAccountBalance()
      balance.value = response.data.balance
      lastBalanceUpdate.value = response.data.last_time
    } catch (error) {
      console.error('Error al actualizar el balance en Pinia:', error)
      throw error
    } finally {
      loadingBalance.value = false
    }
  }

  // Acción para cerrar sesión de forma segura
  const logout = () => {
    token.value = null
    user.value = null
    balance.value = 0
    lastBalanceUpdate.value = ''
    sessionStorage.removeItem('bank_jwt')
    sessionStorage.removeItem('bank_user')
  }

  return {
    token,
    user,
    loading,
    balance,
    lastBalanceUpdate,
    loadingBalance,
    isAuthenticated,
    login,
    logout,
    fetchBalance,
  }
})
