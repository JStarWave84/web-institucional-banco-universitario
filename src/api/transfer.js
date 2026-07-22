import api from './api'

export const createMovement = (amount, account_number, description) =>
  api.post('/v1/client/movement', { amount, account_number, description })

export const searchAccount = (account_number) =>
  api.get(`/v1/client/user/account/${account_number}`)
