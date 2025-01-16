'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { COOKIE_NAME } from '@/constants'
import { signin, signup } from '../authTools'

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const registerUser = async (
  prevState: Record<string, unknown>,
  formData: FormData,
) => {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  try {
    const { token } = await signup(data)
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you up' }
  }
  redirect('/dashboard')
}

export const signinUser = async (
  prevState: Record<string, unknown>,
  formData: FormData,
) => {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  try {
    const { token } = await signin(data)
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you in' }
  }
  redirect('/dashboard')
}
