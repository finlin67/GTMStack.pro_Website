import type { HeroBackgroundVariant } from '@/components/ui/HeroBackground'

// Mapping of service routes to hero background variants, grouped by service metaphor.
export const SERVICE_HERO_BACKGROUND_PRESETS: Record<string, HeroBackgroundVariant> = {
  // Content & Engagement
  '/services/content-marketing': 'contentFlow',
  '/services/email': 'contentFlow',
  '/services/omnichannel': 'contentFlow',
  '/services/social-media': 'contentFlow',
  '/services/video-creative': 'contentFlow',

  // Demand & Growth
  '/services/demand-generation': 'funnelStages',
  '/services/paid-advertising': 'funnelStages',
  '/services/events': 'funnelStages',

  // Organic & growth engines
  '/services/seo': 'growthCurve',
  '/services/growth-marketing': 'growthCurve',

  // Relationship and lifecycle programs
  '/services/abm': 'orbitingNodes',
  '/services/customer-marketing': 'orbitingNodes',
  '/services/lifecycle-marketing': 'orbitingNodes',

  // Experience & insight systems
  '/services/cx': 'dashboardPulse',
  '/services/customer-experience': 'dashboardPulse',
  '/services/market-research': 'dashboardPulse',

  // Intelligent automation
  '/services/ai': 'neuralFlow',
  '/services/marketing-automation': 'neuralFlow',

  // Operating systems & infrastructure
  '/services/marketing-operations': 'networkSync',
  '/services/martech': 'networkSync',
  '/services/sales-enablement': 'networkSync',
}

export function getServiceHeroBackgroundPreset(
  route: string
): HeroBackgroundVariant | undefined {
  return SERVICE_HERO_BACKGROUND_PRESETS[route]
}

