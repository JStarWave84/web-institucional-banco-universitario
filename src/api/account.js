import api from './api'

export const getAccountBalance = async () => {
  const response = await api.get('/v1/client/user/balance')
  return response.data
}
