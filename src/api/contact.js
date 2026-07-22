import api from './api'

export const getContacts = (params = {}) =>
  api.get('/v1/client/contact', { params })

export const getContact = (id) =>
  api.get(`/v1/client/contact/${id}`)

export const createContact = (data) =>
  api.post('/v1/client/contact', data)

export const updateContact = (id, data) =>
  api.patch(`/v1/client/contact/${id}`, data)

export const deleteContact = (id) =>
  api.delete(`/v1/client/contact/${id}`)
