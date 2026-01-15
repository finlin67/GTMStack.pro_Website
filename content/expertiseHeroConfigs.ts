export type ExpertiseHeroEngine = 'scan' | 'flow'
export type ExpertiseHeroAccent = 'blue' | 'indigo' | 'cyan' | 'emerald'
export type HeroTileMode = 'tile' | 'config' | 'custom'

export type ExpertiseHeroConfig = {
  engine: ExpertiseHeroEngine
  accent: ExpertiseHeroAccent
  metrics: { label: string; value: string }[]
  tagline: string
  heroTileMode?: HeroTileMode
}

export const expertiseHeroConfigs: Record<string, ExpertiseHeroConfig> = {
  'content-marketing': {
    engine: 'flow',
    accent: 'blue',
    metrics: [
      { label: 'YoY unique visitors', value: '164%' },
      { label: 'QoQ net-new leads', value: '43%' },
      { label: 'SEO + content spine', value: 'Structured' },
    ],
    tagline: 'Authoritative content systems tuned for GEO/SEO and campaign lift.',
  },
  'email-marketing': {
    engine: 'scan',
    accent: 'indigo',
    metrics: [
      { label: 'SQL lift', value: '+65%' },
      { label: 'MQL→SQL conversion', value: '180%+' },
    ],
    tagline: 'Lifecycle email that proves contribution and keeps signal tight.',
  },
  'omnichannel-marketing': {
    engine: 'flow',
    accent: 'cyan',
    metrics: [
      { label: 'Play cadence', value: 'Sequenced' },
      { label: 'Channels aligned', value: 'Multithreaded' },
      { label: 'Attribution ready', value: 'Yes' },
    ],
    tagline: 'Coordinated cross-channel plays with measurable signal paths.',
  },
  'social-media-marketing': {
    engine: 'scan',
    accent: 'blue',
    metrics: [
      { label: 'Engagement lift', value: '+25%' },
      { label: 'Category POV', value: 'Sharp' },
    ],
    tagline: 'Thought-leadership programs that compound reach and authority.',
  },
  'video-marketing': {
    engine: 'flow',
    accent: 'indigo',
    metrics: [
      { label: 'Formats shipped', value: 'Live + on-demand' },
      { label: 'Lifecycle fit', value: 'Mapped' },
    ],
    tagline: 'Video motions that fuel demand, sales enablement, and product proof.',
  },
  'demand-generation': {
    engine: 'scan',
    accent: 'cyan',
    metrics: [
      { label: 'Pipeline growth', value: '25%+' },
      { label: 'MQL→SQL lift', value: '180%' },
      { label: 'Spend efficiency', value: 'Tuned' },
    ],
    tagline: 'Signal-led demand plays that scale pipeline with defendable ROI.',
  },
  seo: {
    engine: 'flow',
    accent: 'emerald',
    metrics: [
      { label: 'Organic traffic', value: '+60%' },
      { label: 'Authority spine', value: 'Pillars' },
    ],
    tagline: 'Search systems combining technical SEO, GEO, and content authority.',
  },
  'growth-marketing': {
    engine: 'scan',
    accent: 'blue',
    metrics: [
      { label: 'SQL lift', value: '+65%' },
      { label: 'Test velocity', value: 'High' },
    ],
    tagline: 'Experiment-led growth loops tied to pipeline and payback windows.',
  },
  'paid-advertising-sem': {
    engine: 'flow',
    accent: 'indigo',
    metrics: [
      { label: 'MQL→SQL', value: '180%' },
      { label: 'CPA change', value: '-25%' },
    ],
    tagline: 'Performance programs with clean routing, creative sprints, and guardrails.',
  },
  'event-marketing': {
    engine: 'flow',
    accent: 'blue',
    metrics: [
      { label: 'ABM + field', value: 'Linked' },
      { label: 'Pipeline clarity', value: 'Tight' },
    ],
    tagline: 'Events and field plays that prove influence and accelerate deals.',
  },
  'account-based-marketing-abm': {
    engine: 'scan',
    accent: 'indigo',
    metrics: [
      { label: '90d pipeline', value: '$1.2M' },
      { label: 'YoY pipeline', value: '+87%' },
      { label: 'MQL→SQL', value: '180%' },
    ],
    tagline: 'ABM operating systems with shared ICP, signals, and orchestration.',
  },
  'customer-experience-cx': {
    engine: 'flow',
    accent: 'emerald',
    metrics: [
      { label: 'NRR lift', value: '25+ pts' },
      { label: 'Churn reduction', value: '-40%' },
    ],
    tagline: 'Experience-led motions that protect NRR and surface proactive signals.',
  },
  'customer-marketing': {
    engine: 'scan',
    accent: 'blue',
    metrics: [
      { label: 'Expansion plays', value: 'Activated' },
      { label: 'Advocacy', value: 'In-market' },
    ],
    tagline: 'Post-sale programs for adoption, expansion, and reference velocity.',
  },
  'lifecycle-marketing': {
    engine: 'flow',
    accent: 'cyan',
    metrics: [
      { label: 'Time-to-signal', value: 'Faster' },
      { label: 'Journeys', value: 'Instrumented' },
    ],
    tagline: 'Lifecycle design that keeps routing, scoring, and comms aligned.',
  },
  'market-research': {
    engine: 'scan',
    accent: 'indigo',
    metrics: [
      { label: 'Voice of customer', value: 'Looped' },
      { label: 'ICP clarity', value: 'Tight' },
    ],
    tagline: 'Decision-grade research that anchors messaging, ICP, and roadmap.',
  },
  'ai-in-marketing': {
    engine: 'flow',
    accent: 'emerald',
    metrics: [
      { label: 'Conversion lift', value: '+40%' },
      { label: 'Cost per acquisition', value: '-25%' },
    ],
    tagline: 'Governed AI and agentic workflows that raise quality and speed.',
  },
  'marketing-automation': {
    engine: 'flow',
    accent: 'cyan',
    metrics: [
      { label: 'Reporting cycle', value: '4d → 2h' },
      { label: 'Journeys', value: 'Governed' },
    ],
    tagline: 'Automation that routes cleanly, measures clearly, and scales safely.',
  },
  'marketing-operations': {
    engine: 'scan',
    accent: 'blue',
    metrics: [
      { label: 'Ops time saved', value: '30+ hrs/mo' },
      { label: 'Data health', value: '+30%' },
    ],
    tagline: 'Foundational ops: data quality, routing, QA, and instrumentation.',
  },
  'martech-optimization': {
    engine: 'flow',
    accent: 'indigo',
    metrics: [
      { label: 'Stack sprawl', value: 'Reduced' },
      { label: 'QA guardrails', value: 'Enforced' },
    ],
    tagline: 'Right-sized stacks with clean integrations and measurable value.',
  },
  'sales-enablement': {
    engine: 'scan',
    accent: 'blue',
    metrics: [
      { label: 'Battlecards', value: 'Live' },
      { label: 'Ramp time', value: 'Faster' },
    ],
    tagline: 'Enablement that aligns narrative, plays, and proof for sales teams.',
  },
} as const

export const getExpertiseHeroConfig = (slug: string) => expertiseHeroConfigs[slug]

