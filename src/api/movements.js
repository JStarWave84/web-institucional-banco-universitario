import api from './api'

export const getMovements = async (params = { page: 1, page_size: 20 }) => {
  const response = await api.get('/v1/client/movement', { params })
  return response.data
}
