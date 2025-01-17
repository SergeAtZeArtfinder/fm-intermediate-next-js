'use client'

import React, { type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Shell from '@/components/Shell'

interface Props {
  children: ReactNode
  events: ReactNode
  rsvps: ReactNode
}

const DashboardLayout = ({ children, events, rsvps }: Props): JSX.Element => {
  const pathname = usePathname()

  return (
    <Shell>
      {pathname === '/dashboard' ? (
        <div className="flex w-full h-full">
          <div className="w-1/2 border-r border-r-default-50">{rsvps}</div>
          <div className="w-1/2 flex flex-col">
            <div className="border-b border-default-50 h-1/2 w-full">
              {' '}
              {events}
            </div>
            <div className="h-1/2 w-full">{children}</div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </Shell>
  )
}

export default DashboardLayout
