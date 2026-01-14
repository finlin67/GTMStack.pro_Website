import type { HeroBackgroundVariant } from '@/components/ui/HeroBackground'

const HERO_BACKGROUND_VARIANTS: HeroBackgroundVariant[] = [
  'contentFlow',
  'branchingPaths',
  'orbitingNodes',
  'funnelStages',
  'dashboardPulse',
  'growthCurve',
  'networkSync',
  'neuralFlow',
]

export const HERO_BACKGROUND_PRESETS: Record<string, HeroBackgroundVariant> = {
  '/': 'growthCurve',

  '/expertise': 'neuralFlow',
  '/expertise/strategy-insights': 'branchingPaths',
  '/expertise/demand-growth': 'funnelStages',
  '/expertise/content-engagement': 'contentFlow',
  '/expertise/systems-operations': 'networkSync',
  '/expertise/strategy': 'branchingPaths',
  '/expertise/analytics': 'dashboardPulse',
  '/expertise/automation': 'neuralFlow',
  '/expertise/optimization': 'growthCurve',

  '/industries': 'orbitingNodes',

  '/case-studies': 'dashboardPulse',

  '/projects': 'dashboardPulse',

  '/services/content-marketing': 'contentFlow',
  '/services/email': 'contentFlow',
  '/services/omnichannel': 'contentFlow',
  '/services/social-media': 'contentFlow',
  '/services/video-creative': 'contentFlow',
  '/services/demand-generation': 'funnelStages',
  '/services/paid-advertising': 'funnelStages',
  '/services/events': 'funnelStages',
  '/services/seo': 'growthCurve',
  '/services/growth-marketing': 'growthCurve',
  '/services/abm': 'orbitingNodes',
  '/services/customer-marketing': 'orbitingNodes',
  '/services/lifecycle-marketing': 'orbitingNodes',
  '/services/cx': 'dashboardPulse',
  '/services/customer-experience': 'dashboardPulse',
  '/services/market-research': 'dashboardPulse',
  '/services/ai': 'neuralFlow',
  '/services/marketing-automation': 'neuralFlow',
  '/services/marketing-operations': 'networkSync',
  '/services/martech': 'networkSync',
  '/services/sales-enablement': 'networkSync',

  '/about': 'branchingPaths',
  '/contact': 'networkSync',
  '/resume': 'growthCurve',
}

function stableHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

export function getHeroBackgroundVariant(
  pathname: string
): HeroBackgroundVariant {
  if (HERO_BACKGROUND_PRESETS[pathname]) {
    return HERO_BACKGROUND_PRESETS[pathname]
  }

  const hash = stableHash(pathname)
  return HERO_BACKGROUND_VARIANTS[hash % HERO_BACKGROUND_VARIANTS.length]
}

export function getServiceHeroBackgroundPreset(
  route: string
): HeroBackgroundVariant | undefined {
  return HERO_BACKGROUND_PRESETS[route]
}

export const SERVICE_HERO_BACKGROUND_PRESETS = HERO_BACKGROUND_PRESETS
