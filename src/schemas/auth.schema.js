import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('El correo electrónico no es válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
})

export const registerSchema = z
  .object({
    first_name: z.string().min(1, 'El nombre es requerido').max(40, 'Máximo 40 caracteres'),
    last_name: z.string().min(1, 'Los apellidos son requeridos').max(40, 'Máximo 40 caracteres'),
    document_number: z
      .string()
      .min(1, 'El número de documento es requerido')
      .max(20, 'Máximo 20 caracteres'),
    birth_date: z.string().min(1, 'La fecha de nacimiento es requerida'),
    phone_number: z.string().min(1, 'El teléfono es requerido').max(20, 'Máximo 20 caracteres'),
    email: z.email('El correo electrónico no es válido'),
    password: z
      .string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(16, 'La contraseña debe tener máximo 16 caracteres'),
    confirmPassword: z.string().min(1, 'Confirma tu contraseña'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
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
