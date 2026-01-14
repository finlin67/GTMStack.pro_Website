'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionDarkProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  id?: string
  variant?: 'hero' | 'stats' | 'theater' | 'cta' | 'default'
  motif?: 'topo' | 'pathway' | 'signal' | 'flow' | 'none'
  motifIntensity?: 'subtle' | 'medium' | 'strong'
  accentOrb?: boolean
}

const paddingStyles = {
  none: '',
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28',
  lg: 'py-24 md:py-32 lg:py-40',
  xl: 'py-32 md:py-40 lg:py-48',
}

export function SectionDark({
  children,
  className,
  containerClassName,
  padding = 'lg',
  id,
  variant = 'default',
  motif = 'none',
  motifIntensity = 'subtle',
  accentOrb = false,
}: SectionDarkProps) {
  const MotifComponent = {
    topo: () => (
      <div className="absolute inset-0 topo-default opacity-10 pointer-events-none" />
    ),
    pathway: () => (
      <div className="absolute inset-0 pathway-simple opacity-10 pointer-events-none" />
    ),
    signal: () => (
      <div className="absolute inset-0 signal-constellation opacity-15 pointer-events-none" />
    ),
    flow: () => (
      <div className="absolute inset-0 flow-curved opacity-10 pointer-events-none" />
    ),
    none: () => null,
  }[motif]

  // Variant-specific background treatments
  const variantStyles = {
    hero: 'bg-gradient-to-b from-slate-950 via-brand-950 to-slate-950',
    stats: 'bg-gradient-to-br from-slate-950 via-brand-900 to-brand-800',
    theater: 'bg-gradient-to-b from-slate-950 via-slate-950 to-brand-950',
    cta: 'bg-gradient-to-br from-brand-900 via-brand-800 via-brand-700 to-brand-950',
    default: 'bg-gradient-to-b from-slate-950 via-brand-950 to-slate-950',
  }

  // Noise texture for stats variant
  const noiseTexture = variant === 'stats' ? (
    <div 
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }}
    />
  ) : null

  // Theater header strip for case studies
  const theaterHeader = variant === 'theater' ? (
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none" />
  ) : null

  // Warm spark edge for CTA (only at one edge - bottom right)
  const warmSparkEdge = variant === 'cta' ? (
    <>
      <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-tl from-gold-400/20 via-accent-500/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-gold-400/30 to-transparent" />
    </>
  ) : null

  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden',
        variantStyles[variant],
        'text-white',
        paddingStyles[padding],
        className
      )}
    >
      {/* Noise texture (stats variant) */}
      {noiseTexture}

      {/* Theater header strip (theater variant) */}
      {theaterHeader}

      {/* Warm spark edges (cta variant) */}
      {warmSparkEdge}

      {/* Ambient gradient orbs */}
      {accentOrb && (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl animate-drift-slow" />
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-cool-500/10 rounded-full blur-3xl animate-drift-medium" />
          {variant === 'cta' && (
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-500/6 rounded-full blur-3xl animate-drift-fast" />
          )}
          {variant !== 'cta' && (
            <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-3xl animate-drift-fast" />
          )}
        </>
      )}

      {/* Motif overlay */}
      <MotifComponent />

      {/* Content */}
      <div className={cn('container-width relative z-10', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

