import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('El correo electrónico no es válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
})

export const forgotPasswordSchema = z.object({
  email: z.email('El correo electrónico no es válido'),
})

export const changePasswordSchema = z.object({
  password: z.string().min(1, 'La contraseña actual es requerida'),
  new_password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[0-9]/, 'Debe incluir al menos un número')
    .regex(/[^a-zA-Z0-9]/, 'Debe incluir al menos un símbolo'),
})

export const resetPasswordSchema = z.object({
  email: z.email('El correo electrónico no es válido'),
  code: z
    .string()
    .length(6, 'El código debe tener exactamente 6 dígitos')
    .regex(/^\d+$/, 'El código debe contener solo números'),
  new_password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[0-9]/, 'Debe incluir al menos un número')
    .regex(/[^a-zA-Z0-9]/, 'Debe incluir al menos un símbolo'),
})
