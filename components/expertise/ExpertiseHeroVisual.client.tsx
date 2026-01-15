'use client'

import React from 'react'
import { useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { HeroTileAnimation, TileVariant } from '@/components/ui/HeroTileAnimation.client'
import { ExpertiseHeroConfig } from '@/content/expertiseHeroConfigs'
import { getTileVariantForPath } from '@/lib/heroTilePresets'

const DEBUG_TILE = true

type ResolvedMode = 'CUSTOM_ANIMATION' | 'TILE_ANIMATION'

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

  const resolvedMode: ResolvedMode = animation ? 'CUSTOM_ANIMATION' : 'TILE_ANIMATION'

  const renderContent = () => {
    if (resolvedMode === 'CUSTOM_ANIMATION' && animation) {
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
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-50 font-mono max-w-[220px]">
            <div className="font-bold">TILE DEBUG ON</div>
            <div className="truncate">path: {pathname}</div>
            <div>variant: {resolvedTileVariant}</div>
            <div>mode: {resolvedMode}</div>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  )
}

