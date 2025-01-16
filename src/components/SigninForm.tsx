'use client'

import React from 'react'
import { useFormState } from 'react-dom'
import { Input } from '@nextui-org/react'
import Link from 'next/link'

import { signinUser } from '@/lib/actions/auth'
import SubmitButton from './SubmitButton'

const initialState: { message: string | null } = {
  message: null,
}

const SigninForm = (): JSX.Element => {
  const [formState, action] = useFormState(signinUser, initialState)

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />

      {formState?.message && (
        <p className="text-red-500">{formState.message}</p>
      )}
      <SubmitButton>Sign in</SubmitButton>

      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
    </form>
  )
}

export default SigninForm
