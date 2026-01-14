'use client'

import dynamic from 'next/dynamic'

export const HeroVisual = dynamic(
  () => import('./HeroVisual').then((m) => m.HeroVisual),
  { ssr: false }
)


