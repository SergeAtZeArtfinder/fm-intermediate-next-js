'use client'

import React from 'react'
import { useFormState } from 'react-dom'
import { Input } from '@nextui-org/react'
import Link from 'next/link'

import { registerUser } from '@/lib/actions/auth'
import SubmitButton from './SubmitButton'

const initialState: { message: string | null } = { message: null }

const SignUpForm = (): JSX.Element => {
  const [formState, action] = useFormState(registerUser, initialState)

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign up</h3>
      <Input fullWidth size="lg" placeholder="Email" name="email" required />
      <Input
        name="password"
        fullWidth
        size="lg"
        type="password"
        placeholder="Password"
        required
      />

      {formState?.message && (
        <p className="text-red-500">{formState.message}</p>
      )}
      <SubmitButton>Sign up</SubmitButton>

      <div>
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>
    </form>
  )
}

export default SignUpForm
