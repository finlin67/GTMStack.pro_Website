/* eslint-disable import/no-duplicates */
'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { AnimationShell } from './AnimationShell'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type Engine = 'scan' | 'flow'
export type Mode = 'card' | 'hero'

const SEOKeywordDiscovery = dynamic(
  () => import('../../src/components/animations/SEOKeywordDiscovery'),
  { ssr: false, suspense: true }
)

const DemandGenerationHero = dynamic(
  () => import('../../src/components/animations/DemandGenerationHero'),
  { ssr: false, suspense: true }
)

interface HeroAnimationProps {
  engine: Engine
  mode?: Mode
  className?: string
}

export function HeroAnimation({ engine, mode = 'hero', className }: HeroAnimationProps) {
  const shouldReduceMotion = useReducedMotion()
  const Animation = engine === 'scan' ? SEOKeywordDiscovery : DemandGenerationHero

  return (
    <AnimationShell
      mode={mode}
      className={cn(className)}
      data-reduced-motion={shouldReduceMotion ? 'true' : undefined}
    >
      {shouldReduceMotion ? (
        <LoadingState reducedMotion mode={mode} />
      ) : (
        <Suspense fallback={<LoadingState mode={mode} />}>
          <Animation mode={mode} />
        </Suspense>
      )}
    </AnimationShell>
  )
}

interface LoadingStateProps {
  mode?: Mode
  reducedMotion?: boolean
}

function LoadingState({ mode = 'hero', reducedMotion }: LoadingStateProps) {
  const pulse = reducedMotion ? '' : 'animate-pulse'
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full',
        mode === 'card' ? 'p-4' : 'p-6'
      )}
    >
      <div
        className={cn(
          'w-3/4 h-3/4 rounded-xl bg-white/10 border border-white/10',
          pulse
        )}
      />
    </div>
  )
}

