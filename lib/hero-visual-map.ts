// Maps slugs from expertise, industries, and case studies to right-side hero image paths.

// Images live in /public/images/heroes and subdirectories.

// Using placeholder.svg provides a nice gradient animation even without actual images.



export const heroVisualMap: Record<string, string> = {

  // EXPERTISE - using expertise subfolder

  "account-based-marketing": "/images/heroes/expertise/abm.webp",

  "ai-in-marketing": "/images/heroes/expertise/ai.webp",

  "attribution-and-measurement": "/images/heroes/expertise/attribution.webp",

  "bi-data-engineering": "/images/heroes/expertise/data-engineering.webp",

  "channel-partner-marketing": "/images/heroes/expertise/partner.webp",

  "content-marketing": "/images/heroes/expertise/content.webp",

  "content-strategy-systems": "/images/heroes/expertise/content-systems.webp",

  "customer-experience": "/images/heroes/expertise/cx.webp",

  "customer-marketing": "/images/heroes/expertise/customer-marketing.webp",

  "data-governance": "/images/heroes/expertise/data-governance.webp",

  "demand-generation": "/images/heroes/expertise/demand.webp",

  "digital-marketing": "/images/heroes/expertise/digital.webp",

  "event-field-marketing": "/images/heroes/expertise/event.webp",

  "growth-marketing": "/images/heroes/expertise/growth.webp",

  "lifecycle-marketing": "/images/heroes/expertise/lifecycle.webp",

  "marketing-analytics-reporting": "/images/heroes/expertise/analytics.webp",

  "marketing-operations": "/images/heroes/expertise/ops.webp",

  "martech-optimization": "/images/heroes/expertise/martech.webp",

  "omnichannel-marketing": "/images/heroes/expertise/omnichannel.webp",

  "paid-advertising": "/images/heroes/expertise/paid.webp",

  "product-marketing": "/images/heroes/expertise/product.webp",

  "revenue-operations": "/images/heroes/expertise/revops.webp",

  "sales-enablement-alignment": "/images/heroes/expertise/sales.webp",

  "search-engine-optimization": "/images/heroes/expertise/seo.webp",

  "social-media": "/images/heroes/expertise/social.webp",



  // INDUSTRIES - using industries subfolder

  "financial-services": "/images/heroes/industries/financial.webp",

  "manufacturing": "/images/heroes/industries/manufacturing.webp",

  "technology-saas": "/images/heroes/industries/saas.webp",

  "retail-ecommerce": "/images/heroes/industries/retail.webp",

  "healthcare": "/images/heroes/industries/healthcare.webp",

  "public-sector-education": "/images/heroes/industries/public-sector.webp",

  "supply-chain-logistics": "/images/heroes/industries/supplychain.webp",

  "energy-utilities": "/images/heroes/industries/energy.webp",



  // CASE STUDIES / PROJECTS - using projects subfolder

  "abm-system-launch-prgx": "/images/heroes/projects/abm-launch.webp",

  "enterprise-abm-activation-red-hat": "/images/heroes/projects/red-hat.webp",

  "end-to-end-abm-framework-amcs": "/images/heroes/projects/amcs.webp",

  "revenue-analytics-dashboard-salesforce": "/images/heroes/projects/analytics-dashboard.webp",

  "content-and-seo-infrastructure-crowd-factory-marketo": "/images/heroes/projects/seo-content.webp",

  "event-to-store-lift-retail": "/images/heroes/projects/event-retail.webp",

  "singles-and-doubles-playbook-salesforce": "/images/heroes/projects/sd-playbook.webp",

  "career-world-interactive-resume": "/images/heroes/projects/career-world.webp",

  "data-qa-integrity-pipeline-salesforce": "/images/heroes/projects/data-qa.webp",

  "abm-journey-discrete-manufacturing-prgx": "/images/heroes/projects/manufacturing-journey.webp",

  "sales-cloud-global-campaigns-salesforce": "/images/heroes/projects/sales-cloud.webp",

};



// Fallback images by kind - using placeholder.svg which has nice animated gradients

export const heroVisualFallbacks: Record<string, string> = {

  expertise: "/images/heroes/expertise-default.webp",

  industries: "/images/heroes/industries-default.webp",

  projects: "/images/heroes/projects-default.webp",

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