export type HeroVisualVariant = 'signatureConstellation'

export type HeroVisual = {
  image?: string
  video?: string
  useAbstract?: boolean
  alt?: string
  motif?: 'topo' | 'signal' | 'pathway' | 'grid' | 'none'
  pathwaySvg?: string
  variant?: HeroVisualVariant
}

export const HERO_VISUALS = {
  defaults: {
    topLevel: { useAbstract: true, motif: 'topo' } satisfies HeroVisual,
    subLevel: { useAbstract: true, motif: 'signal' } satisfies HeroVisual,
    detail: { useAbstract: true, motif: 'grid' } satisfies HeroVisual,
  },
  expertise: {
    'content-engagement': { image: '/abstract/hero-content.webp', motif: 'pathway' } satisfies HeroVisual,
    'demand-growth': { image: '/abstract/hero-growth.webp', motif: 'signal' } satisfies HeroVisual,
    'strategy-insights': { image: '/abstract/hero-strategy.webp', motif: 'topo' } satisfies HeroVisual,
    'systems-operations': { image: '/abstract/hero-systems.webp', motif: 'grid' } satisfies HeroVisual,
  },
  industries: {
    fintech: { image: '/abstract/hero-fintech.webp', motif: 'signal' } satisfies HeroVisual,
    healthtech: { image: '/abstract/hero-healthtech.webp', motif: 'topo' } satisfies HeroVisual,
  },
  caseStudies: {
    default: { image: '/abstract/hero-caseStudies.webp', motif: 'pathway' } satisfies HeroVisual,
  },
} as const

