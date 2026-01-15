'use client'

import React from 'react'
import { useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { HeroAnimation } from '@/components/animations/HeroAnimation'
import { HeroVisual } from '@/components/ui/HeroVisual.client'
import { HeroTileAnimation, TileVariant } from '@/components/ui/HeroTileAnimation.client'
import { ExpertiseHeroConfig } from '@/content/expertiseHeroConfigs'
import { getTileVariantForPath } from '@/lib/heroTilePresets'

const DEBUG_TILE = true

interface ExpertiseHeroVisualProps {
  animation?: React.ReactNode
  config?: ExpertiseHeroConfig
  borderClassName: string
  tileVariant?: TileVariant
}

export function ExpertiseHeroVisual({ animation, config, borderClassName, tileVariant }: ExpertiseHeroVisualProps) {
  const shouldReduceMotion = useReducedMotion()
  const pathname = usePathname() || ''

  const resolvedTileVariant = tileVariant || getTileVariantForPath(pathname)

  const getRenderMode = () => {
    if (config?.useEngine) return 'CONFIG_ENGINE'
    if (animation) return 'CUSTOM_ANIMATION'
    return 'TILE_FALLBACK'
  }

  const renderContent = () => {
    if (config?.useEngine) {
      return <HeroAnimation engine={config.engine} mode="hero" />
    }
    if (animation) {
      return animation
    }
    return (
      <HeroTileAnimation
        variant={resolvedTileVariant}
        seed={pathname}
        intensity="medium"
      />
    )
  }

  return (
    <div className="relative hidden lg:block">
      <div className="absolute -left-10 -top-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-drift-slow" />
      <div
        className={`relative mx-auto aspect-square max-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden ${borderClassName}`}
        data-reduced-motion={shouldReduceMotion ? 'true' : undefined}
      >
        {DEBUG_TILE && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-50 font-mono max-w-[200px]">
            <div className="font-bold">TILE DEBUG ON</div>
            <div className="truncate">path: {pathname}</div>
            <div>variant: {resolvedTileVariant}</div>
            <div>mode: {getRenderMode()}</div>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  )
}

