// Content collection types

export interface ExpertiseItem {
  slug: string
  title: string
  description?: string
  pillar?: 'content-engagement' | 'demand-growth' | 'strategy-insights' | 'systems-operations'
  pillarLabel?: string
  tags?: string[]
  icon?: string
  featured?: boolean
  order?: number
  positioning?: string
  challenges?: string[]
  modern_plays?: string[]
  proof?: {
    company?: string
    role?: string
    outcome: string
    metrics?: string
  }
  relevant_expertise_slugs?: string[]
  relevant_case_study_slugs?: string[]
}

export interface IndustryItem {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  icon: string
  stats: { label: string; value: string }[]
  featured?: boolean
  // New fields for detail page
  positioning?: string // 1-line positioning statement
  gtmRealities?: string[] // 3-5 bullets about GTM realities in this vertical
  proof?: Array<{
    company?: string
    role?: string
    outcome: string
    metrics?: string
  }> // Proof bullets with company/role + outcome metrics
  playbook?: string[] // Playbook bullets (used when proof is empty)
  featuredExpertise?: string[] // Slugs of featured expertise items
  featuredCaseStudies?: string[] // Slugs of featured case studies
}

export interface CaseStudyItem {
  slug: string
  title: string
  client: string
  description: string
  challenge: string
  solution: string
  results: string[]
  tags: string[]
  industry: string
  expertise: string[]
  metrics: { label: string; value: string; change?: string }[]
  featured?: boolean
  year: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

// Pillar definition
export interface Pillar {
  id: string
  title: string
  description: string
  href: string
  icon: string
  color: string
}

export const PILLARS: Pillar[] = [
  {
    id: 'content-engagement',
    title: 'Content & Engagement',
    description: 'Content marketing, email, omnichannel, social, and video that drive engagement and conversion.',
    href: '/expertise/content-engagement',
    icon: 'FileText',
    color: 'brand',
  },
  {
    id: 'demand-growth',
    title: 'Demand & Growth',
    description: 'Demand generation, SEO, growth marketing, paid advertising, and events that scale pipeline.',
    href: '/expertise/demand-growth',
    icon: 'TrendingUp',
    color: 'emerald',
  },
  {
    id: 'strategy-insights',
    title: 'Strategy & Insights',
    description: 'ABM frameworks, customer experience, lifecycle marketing, and market research that inform strategy.',
    href: '/expertise/strategy-insights',
    icon: 'Target',
    color: 'accent',
  },
  {
    id: 'systems-operations',
    title: 'Systems & Operations',
    description: 'Marketing automation, operations, martech optimization, AI, and sales enablement that power execution.',
    href: '/expertise/systems-operations',
    icon: 'Settings',
    color: 'brand',
  },
]

