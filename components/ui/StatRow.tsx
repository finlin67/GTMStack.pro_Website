'use client'

import { StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'

interface Stat {
  value: string
  label: string
  description?: string
}

interface StatRowProps {
  stats: Stat[]
  variant?: 'default' | 'card' | 'inline'
  className?: string
}

export function StatRow({ stats, variant = 'default', className }: StatRowProps) {
  if (variant === 'inline') {
    return (
      <div className={cn('flex flex-wrap items-center gap-8 md:gap-12', className)}>
        {stats.map((stat, index) => (
          <div key={index} className="flex items-baseline gap-2">
            <span className="text-3xl md:text-4xl font-bold text-brand-600">{stat.value}</span>
            <span className="text-sm text-slate-600">{stat.label}</span>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <StaggerContainer
        className={cn(
          'grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',
          className
        )}
      >
        {stats.map((stat, index) => (
          <StaggerItem key={index}>
            <div className="card p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-slate-900">{stat.label}</p>
              {stat.description && (
                <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    )
  }

  return (
    <StaggerContainer
      className={cn(
        'grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12',
        className
      )}
    >
      {stats.map((stat, index) => (
        <StaggerItem key={index} className="text-center lg:text-left">
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            {stat.value}
          </p>
          <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">
            {stat.label}
          </p>
          {stat.description && (
            <p className="text-sm text-slate-500 mt-1">{stat.description}</p>
          )}
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

interface StatHighlightProps {
  value: string
  label: string
  prefix?: string
  suffix?: string
  className?: string
}

export function StatHighlight({
  value,
  label,
  prefix,
  suffix,
  className,
}: StatHighlightProps) {
  return (
    <div className={cn('text-center', className)}>
      <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        {prefix && <span className="text-slate-400">{prefix}</span>}
        <span className="text-gradient">{value}</span>
        {suffix && <span className="text-slate-400">{suffix}</span>}
      </p>
      <p className="text-lg text-slate-600 mt-3">{label}</p>
    </div>
  )
}

