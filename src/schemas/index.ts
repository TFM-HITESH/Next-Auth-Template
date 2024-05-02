import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(1, 'Password is required')
})

export type LoginSchema = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(6, 'Mininum 6 characters required'),
  name: z.string().min(1, 'Name is required')
})

export type RegisterSchema = z.infer<typeof registerSchema>

export const resetSchema = z.object({
  email: z.string().email('Email is required'),
})

export type ResetSchema = z.infer<typeof resetSchema>