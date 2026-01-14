'use client'

import { cn } from '@/lib/utils'

interface GridFieldProps {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
  accent?: boolean
  scale?: 'small' | 'medium' | 'large'
  pattern?: 'grid' | 'hex' | 'radial'
}

export function GridField({
  className,
  intensity = 'subtle',
  accent = false,
  scale = 'medium',
  pattern = 'grid',
}: GridFieldProps) {
  const intensityStyles = {
    subtle: 'opacity-10',
    medium: 'opacity-20',
    strong: 'opacity-30',
  }

  const scaleStyles = {
    small: 'grid-small',
    medium: 'grid-medium',
    large: 'grid-large',
  }

  const patternStyles = {
    grid: 'grid-pattern',
    hex: 'grid-hex',
    radial: 'grid-radial',
  }

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none',
        scaleStyles[scale],
        patternStyles[pattern],
        intensityStyles[intensity],
        accent && 'grid-accent',
        className
      )}
      aria-hidden="true"
    />
  )
}

