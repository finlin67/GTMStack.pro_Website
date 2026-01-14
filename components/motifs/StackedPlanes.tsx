'use client'

import { cn } from '@/lib/utils'

interface StackedPlanesProps {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
  accent?: boolean
  layers?: 3 | 4 | 5
  orientation?: 'horizontal' | 'diagonal' | 'vertical'
}

export function StackedPlanes({
  className,
  intensity = 'subtle',
  accent = false,
  layers = 4,
  orientation = 'diagonal',
}: StackedPlanesProps) {
  const intensityStyles = {
    subtle: 'opacity-30',
    medium: 'opacity-50',
    strong: 'opacity-70',
  }

  const orientationStyles = {
    horizontal: 'planes-horizontal',
    diagonal: 'planes-diagonal',
    vertical: 'planes-vertical',
  }

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none',
        orientationStyles[orientation],
        intensityStyles[intensity],
        accent && 'planes-accent',
        className
      )}
      aria-hidden="true"
      style={{
        '--plane-layers': layers,
      } as React.CSSProperties}
    />
  )
}

