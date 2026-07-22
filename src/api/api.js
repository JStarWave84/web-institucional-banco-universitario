import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'es',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('bank_jwt')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      !error.config.url?.includes('/password') &&
      !error.config.url?.includes('/login') &&
      !error.config.url?.includes('/register')
    ) {
      sessionStorage.removeItem('bank_jwt')
      sessionStorage.removeItem('bank_user')
      window.location.href = '/bancaenlinea/login'
    }
    return Promise.reject(error)
  }
)

export default api
