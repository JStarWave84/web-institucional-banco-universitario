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
