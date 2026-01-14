'use client'

import dynamic from 'next/dynamic'

// Re-export the same named exports, but loaded client-only.
export const FadeIn = dynamic(
  () => import('./FadeIn').then((m) => m.FadeIn),
  { ssr: false }
)

export const StaggerContainer = dynamic(
  () => import('./FadeIn').then((m) => m.StaggerContainer),
  { ssr: false }
)

export const StaggerItem = dynamic(
  () => import('./FadeIn').then((m) => m.StaggerItem),
  { ssr: false }
)


