'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionLightProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  id?: string
  variant?: 'white' | 'slate'
}

const paddingStyles = {
  none: '',
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28',
  lg: 'py-24 md:py-32 lg:py-40',
  xl: 'py-32 md:py-40 lg:py-48',
}

export function SectionLight({
  children,
  className,
  containerClassName,
  padding = 'lg',
  id,
  variant = 'white',
}: SectionLightProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        variant === 'white' ? 'bg-white' : 'bg-slate-50',
        'text-slate-900',
        paddingStyles[padding],
        className
      )}
    >
      <div className={cn('container-width', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

