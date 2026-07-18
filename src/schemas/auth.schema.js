import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('El correo electrónico no es válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
})

export const registerSchema = z
  .object({
    first_name: z
      .string()
      .min(1, 'El nombre es requerido')
      .max(40, 'Máximo 40 caracteres')
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+$/, 'El nombre solo debe contener letras'),
    last_name: z
      .string()
      .min(1, 'Los apellidos son requeridos')
      .max(40, 'Máximo 40 caracteres')
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+$/, 'Los apellidos solo deben contener letras'),
    document_number: z
      .string()
      .min(1, 'El número de documento es requerido')
      .max(9, 'Máximo 9 caracteres')
      .regex(/^\d+$/, 'El documento solo debe contener números'),
    birth_date: z.string().min(1, 'La fecha de nacimiento es requerida'),
    phone_number: z
      .string()
      .min(11, 'El teléfono es requerido')
      .max(11, 'El teléfono debe tener 11 dígitos')
      .regex(/^\d+$/, 'El teléfono solo debe contener números'),
    email: z.email('El correo electrónico no es válido'),
    password: z
      .string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(16, 'La contraseña debe tener máximo 16 caracteres')
      .regex(/[0-9]/, 'Debe incluir al menos un número')
      .regex(/[^a-zA-Z0-9]/, 'Debe incluir al menos un símbolo'),
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
