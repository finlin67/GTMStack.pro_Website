'use client'

import React from 'react'
import { useReducedMotion } from 'framer-motion'
import { HeroAnimation } from '@/components/animations/HeroAnimation'
import { HeroVisual } from '@/components/ui/HeroVisual.client'
import { ExpertiseHeroConfig } from '@/content/expertiseHeroConfigs'

interface ExpertiseHeroVisualProps {
  animation?: React.ReactNode
  config?: ExpertiseHeroConfig
  borderClassName: string
}

export function ExpertiseHeroVisual({ animation, config, borderClassName }: ExpertiseHeroVisualProps) {
  const shouldReduceMotion = useReducedMotion()

  const renderAnimation = () => {
    if (config) {
      return <HeroAnimation engine={config.engine} mode="hero" />
    }
    return animation
  }

  return (
    <div className="relative hidden lg:block">
      <div className="absolute -left-10 -top-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-drift-slow" />
      {(shouldReduceMotion && config) || animation || config ? (
        <div
          className={`mx-auto aspect-square max-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 flex items-center justify-center ${borderClassName}`}
          data-reduced-motion={shouldReduceMotion ? 'true' : undefined}
        >
          {renderAnimation()}
        </div>
      ) : (
        <HeroVisual image="/abstract/hero-04.jpg" pathwaySvg="/motifs/pathway.svg" />
      )}
    </div>
  )
}

