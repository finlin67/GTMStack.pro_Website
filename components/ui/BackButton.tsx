'use client'

import { useRouter } from 'next/navigation'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type BackButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  children: ReactNode
}

export function BackButton({ children, ...buttonProps }: BackButtonProps) {
  const router = useRouter()

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? 'button'}
      onClick={() => router.back()}
    >
      {children}
    </button>
  )
}


