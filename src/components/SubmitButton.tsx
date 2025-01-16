'use client'

import React from 'react'
import { Button, ButtonProps } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({
  children,
  ...restButtonProps
}: ButtonProps): JSX.Element => {
  const { pending } = useFormStatus()

  return (
    <Button {...restButtonProps} type="submit" isLoading={pending}>
      {children}
    </Button>
  )
}

export default SubmitButton
