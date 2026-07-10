import api from './api'

export const loginClient = async (email, password) => {
  const response = await api.post('/v1/public/client/user/login', {
    email,
    password,
  })
  return response.data
}

export const registerClient = async (
  first_name,
  last_name,
  document_number,
  birth_date,
  phone_number,
  email,
  password
) => {
  const response = await api.post('/v1/public/client/user/register', {
    first_name,
    last_name,
    document_number,
    birth_date,
    phone_number,
    email,
    password,
  })
  return response.data
}

export const forgotPassword = async (email) => {
  const response = await api.post('/v1/public/client/user/forgot-password', { email })
  return response.data
}

export const updatePassword = async (password, new_password) => {
  const response = await api.patch('/v1/client/user/password', { password, new_password })
  return response.data
}

export const resetPassword = async (email, code, new_password) => {
  const response = await api.post('/v1/public/client/user/reset-password', {
    email,
    code,
    new_password,
  })
  return response.data
}
