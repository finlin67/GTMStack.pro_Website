import type { TileVariant } from '@/components/ui/HeroTileAnimation.client'
import { createSeededRandom } from './seededRandom'

const slugToTileVariant: Record<string, TileVariant> = {
  'content-marketing': 'contentFlow',
  'content-strategy': 'contentFlow',
  'content-operations': 'contentFlow',
  'content-strategy-systems': 'contentFlow',
  
  'email-marketing': 'emailBranching',
  'lifecycle-marketing': 'emailBranching',
  'email-operations': 'emailBranching',
  'marketing-automation': 'emailBranching',
  
  'omnichannel-marketing': 'omnichannelNodes',
  'omnichannel': 'omnichannelNodes',
  'integrated-campaigns': 'omnichannelNodes',
  'customer-journey': 'omnichannelNodes',
  'channel-partner-marketing': 'omnichannelNodes',
  
  'social-media': 'socialOrbit',
  'social-media-marketing': 'socialOrbit',
  'community-marketing': 'socialOrbit',
  'influencer-marketing': 'socialOrbit',
  
  'video-creative': 'videoHeatmap',
  'video-marketing': 'videoHeatmap',
  'youtube-marketing': 'videoHeatmap',
  'creative-services': 'videoHeatmap',
  
  'demand-generation': 'funnelStages',
  'lead-generation': 'funnelStages',
  'pipeline-acceleration': 'funnelStages',
  'conversion-optimization': 'funnelStages',
  'account-based-marketing': 'funnelStages',
  'account-based-marketing-abm': 'funnelStages',
  'event-marketing': 'funnelStages',
  'event-field-marketing': 'funnelStages',
  
  'seo': 'seoUplift',
  'organic-search': 'seoUplift',
  'content-seo': 'seoUplift',
  'technical-seo': 'seoUplift',
  'search-engine-optimization': 'seoUplift',
  
  'growth-marketing': 'growthExperiments',
  'experimentation': 'growthExperiments',
  'cro': 'growthExperiments',
  'product-led-growth': 'growthExperiments',
  'a-b-testing': 'growthExperiments',
  'product-marketing': 'growthExperiments',
  
  'paid-advertising': 'paidRoasFlow',
  'paid-media': 'paidRoasFlow',
  'ppc': 'paidRoasFlow',
  'performance-marketing': 'paidRoasFlow',
  'programmatic': 'paidRoasFlow',
  'paid-advertising-sem': 'paidRoasFlow',
  
  'marketing-operations': 'martechSync',
  'martech': 'martechSync',
  'marketing-technology': 'martechSync',
  'crm-integration': 'martechSync',
  'data-integration': 'martechSync',
  'marketing-analytics-reporting': 'martechSync',
  'revenue-operations': 'martechSync',
  'sales-enablement-alignment': 'martechSync',
  'ai-in-marketing': 'martechSync',
  'digital-marketing': 'martechSync',
  'martech-optimization': 'martechSync',
  'sales-enablement': 'martechSync',
  'data-governance': 'martechSync',
  'bi-data-engineering': 'martechSync',
  'attribution-and-measurement': 'martechSync',
  
  'customer-experience': 'omnichannelNodes',
  'customer-experience-cx': 'omnichannelNodes',
  'customer-marketing': 'omnichannelNodes',
  'market-research': 'growthExperiments',
}

const allVariants: TileVariant[] = [
  'contentFlow',
  'emailBranching',
  'omnichannelNodes',
  'socialOrbit',
  'videoHeatmap',
  'funnelStages',
  'seoUplift',
  'growthExperiments',
  'paidRoasFlow',
  'martechSync',
]

export function getTileVariantForSlug(slug: string): TileVariant {
  const mapped = slugToTileVariant[slug]
  if (mapped) {
    return mapped
  }
  
  const rng = createSeededRandom(slug)
  return rng.randChoice(allVariants)
}

export function getTileVariantForPath(pathname: string): TileVariant {
  const slug = pathname.split('/').filter(Boolean).pop() || pathname
  return getTileVariantForSlug(slug)
}
