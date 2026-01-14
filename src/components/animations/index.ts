// Marketing Animations - Export all animation components
import MarketingFunnel from './MarketingFunnel'
import SEOKeywordDiscovery from './SEOKeywordDiscovery'
import ContentMarketing from './ContentMarketing'
import EmailMarketingHero from './EmailMarketingHero'
import ContentMarketingHero from './ContentMarketingHero'
import DemandGenerationHero from './DemandGenerationHero'
import SEOHero from './SEOHero'
import SocialMediaHero from './SocialMediaHero'
import PaidAdvertisingHero from './PaidAdvertisingHero'

export { 
  MarketingFunnel, 
  SEOKeywordDiscovery, 
  ContentMarketing,
  EmailMarketingHero,
  ContentMarketingHero,
  DemandGenerationHero,
  SEOHero,
  SocialMediaHero,
  PaidAdvertisingHero,
}

// Animation metadata for the gallery
export interface AnimationMeta {
  id: string
  name: string
  description: string
  component: React.ComponentType
}

export const animations: AnimationMeta[] = [
  {
    id: 'marketing-funnel',
    name: 'Marketing Funnel',
    description: 'Isometric funnel visualization with animated data particles converting to revenue',
    component: MarketingFunnel,
  },
  {
    id: 'seo-keyword-discovery',
    name: 'SEO Keyword Discovery',
    description: 'Magnifying glass scanning a document to discover and highlight keywords',
    component: SEOKeywordDiscovery,
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    description: 'Text typing on a screen that transforms into paper airplanes flying off to reach audiences',
    component: ContentMarketing,
  },
  {
    id: 'social-media',
    name: 'Social Media Network',
    description: 'Connected network nodes with pulsing data and floating engagement icons',
    component: SocialMediaHero,
  },
  {
    id: 'paid-advertising',
    name: 'Paid Advertising',
    description: 'Bid chips flowing toward a target with successful hits highlighted',
    component: PaidAdvertisingHero,
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    description: 'Animated envelope with paper plane emerging, flying in an arc, and returning',
    component: EmailMarketingHero,
  },
  {
    id: 'content-pipeline',
    name: 'Content Pipeline',
    description: 'Content creation pipeline showing flow from source document to multiple distribution channels',
    component: ContentMarketingHero,
  },
  {
    id: 'demand-generation',
    name: 'Demand Generation',
    description: 'Pipeline funnel flow visualization with animated prospects converting through awareness, consideration, and decision stages',
    component: DemandGenerationHero,
  },
  {
    id: 'seo-hero',
    name: 'SEO Rankings Climb',
    description: 'Search rankings visualization showing a website climbing from position #5 to #1 with optimization tools',
    component: SEOHero,
  },
]
