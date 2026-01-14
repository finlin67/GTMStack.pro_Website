import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  background?: 'white' | 'slate' | 'gradient' | 'dark'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

const backgroundStyles = {
  white: 'bg-white',
  slate: 'bg-slate-50',
  gradient: 'bg-gradient-to-b from-slate-50 to-white bg-mesh',
  dark: 'bg-slate-900 text-white',
}

const paddingStyles = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
}

export function Section({
  children,
  className,
  containerClassName,
  background = 'white',
  padding = 'lg',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
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

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-3 md:space-y-4',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs md:text-sm font-semibold text-brand-600 tracking-[0.2em] uppercase text-slate-700">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

