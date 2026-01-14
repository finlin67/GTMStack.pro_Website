// Maps slugs from expertise, industries, and case studies to right-side hero image paths.
// Images live in /public/images/heroes.

export const heroVisualMap: Record<string, string> = {
  // EXPERTISE
  "account-based-marketing": "/images/heroes/placeholder.svg",
  "ai-in-marketing": "/images/heroes/placeholder.svg",
  "attribution-and-measurement": "/images/heroes/placeholder.svg",
  "bi-data-engineering": "/images/heroes/placeholder.svg",
  "channel-partner-marketing": "/images/heroes/placeholder.svg",
  "content-marketing": "/images/heroes/placeholder.svg",
  "content-strategy-systems": "/images/heroes/placeholder.svg",
  "customer-experience": "/images/heroes/placeholder.svg",
  "customer-marketing": "/images/heroes/placeholder.svg",
  "data-governance": "/images/heroes/placeholder.svg",
  "demand-generation": "/images/heroes/placeholder.svg",
  "digital-marketing": "/images/heroes/placeholder.svg",
  "event-field-marketing": "/images/heroes/placeholder.svg",
  "growth-marketing": "/images/heroes/placeholder.svg",
  "lifecycle-marketing": "/images/heroes/placeholder.svg",
  "marketing-analytics-reporting": "/images/heroes/placeholder.svg",
  "marketing-operations": "/images/heroes/placeholder.svg",
  "martech-optimization": "/images/heroes/placeholder.svg",
  "omnichannel-marketing": "/images/heroes/placeholder.svg",
  "paid-advertising": "/images/heroes/placeholder.svg",
  "product-marketing": "/images/heroes/placeholder.svg",
  "revenue-operations": "/images/heroes/placeholder.svg",
  "sales-enablement-alignment": "/images/heroes/placeholder.svg",
  "search-engine-optimization": "/images/heroes/placeholder.svg",
  "social-media": "/images/heroes/placeholder.svg",

  // INDUSTRIES
  "financial-services": "/images/heroes/placeholder.svg",
  "manufacturing": "/images/heroes/placeholder.svg",
  "technology-saas": "/images/heroes/placeholder.svg",
  "retail-ecommerce": "/images/heroes/placeholder.svg",
  "healthcare": "/images/heroes/placeholder.svg",
  "public-sector-education": "/images/heroes/placeholder.svg",
  "supply-chain-logistics": "/images/heroes/placeholder.svg",
  "energy-utilities": "/images/heroes/placeholder.svg",

  // CASE STUDIES
  "abm-system-launch-prgx": "/images/heroes/placeholder.svg",
  "enterprise-abm-activation-red-hat": "/images/heroes/placeholder.svg",
  "end-to-end-abm-framework-amcs": "/images/heroes/placeholder.svg",
  "revenue-analytics-dashboard-salesforce": "/images/heroes/placeholder.svg",
  "content-and-seo-infrastructure-crowd-factory-marketo": "/images/heroes/placeholder.svg",
  "event-to-store-lift-retail": "/images/heroes/placeholder.svg",
  "singles-and-doubles-playbook-salesforce": "/images/heroes/placeholder.svg",
  "career-world-interactive-resume": "/images/heroes/placeholder.svg",
  "data-qa-integrity-pipeline-salesforce": "/images/heroes/placeholder.svg",
  "abm-journey-discrete-manufacturing-prgx": "/images/heroes/placeholder.svg",
  "sales-cloud-global-campaigns-salesforce": "/images/heroes/placeholder.svg",
};

// Fallback images by kind
export const heroVisualFallbacks: Record<string, string> = {
  expertise: "/images/heroes/placeholder.svg",
  industries: "/images/heroes/placeholder.svg",
  projects: "/images/heroes/placeholder.svg",
};

/**
 * Get hero image path for a slug, with fallback by kind if slug not found
 */
export function getHeroImage(slug: string | undefined, kind?: 'expertise' | 'industries' | 'projects'): string | null {
  if (!slug) return null
  
  // First try the map
  if (heroVisualMap[slug]) {
    return heroVisualMap[slug]
  }
  
  // Fallback by kind if provided
  if (kind && heroVisualFallbacks[kind]) {
    return heroVisualFallbacks[kind]
  }
  
  return null
}
