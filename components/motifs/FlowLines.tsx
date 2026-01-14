'use client'

import { cn } from '@/lib/utils'

interface FlowLinesProps {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
  accent?: boolean
  direction?: 'horizontal' | 'vertical' | 'radial'
  curvature?: 'straight' | 'curved' | 'organic'
}

export function FlowLines({
  className,
  intensity = 'subtle',
  accent = false,
  direction = 'horizontal',
  curvature = 'curved',
}: FlowLinesProps) {
  const intensityStyles = {
    subtle: 'opacity-15',
    medium: 'opacity-30',
    strong: 'opacity-45',
  }

  const directionStyles = {
    horizontal: 'flow-horizontal',
    vertical: 'flow-vertical',
    radial: 'flow-radial',
  }

  const curvatureStyles = {
    straight: 'flow-straight',
    curved: 'flow-curved',
    organic: 'flow-organic',
  }

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none',
        directionStyles[direction],
        curvatureStyles[curvature],
        intensityStyles[intensity],
        accent && 'flow-accent',
        className
      )}
      aria-hidden="true"
    />
  )
}

