import type { HeroVisual } from './heroVisuals'

/**
 * Default hero visual images per page type.
 * Used when no explicit rightVisual is provided to HeroDark or when rightVisual lacks an image.
 */
export const HERO_VISUAL_DEFAULTS: Record<string, HeroVisual> = {
  expertise: {
    image: '/images/heroes/expertise-default.webp',
  },
  industries: {
    image: '/images/heroes/industries-default.webp',
  },
  projects: {
    image: '/images/heroes/projects-default.webp',
  },
  caseStudies: {
    image: '/images/heroes/projects-default.webp',
  },
} as const

/**
 * Get default hero visual for a page type.
 * @param pageType - 'expertise' | 'industries' | 'projects' | 'caseStudies'
 * @returns HeroVisual object with default image, or undefined if no default
 */
export function getDefaultHeroVisual(pageType: string): HeroVisual | undefined {
  return HERO_VISUAL_DEFAULTS[pageType]
}

/**
 * Ensure a hero visual has an image by merging with page type default if needed.
 * @param rightVisual - The provided rightVisual (may be undefined or missing image)
 * @param pageType - 'expertise' | 'industries' | 'projects' | 'caseStudies'
 * @returns HeroVisual with image guaranteed (from rightVisual or default)
 */
export function ensureHeroVisualWithImage(
  rightVisual: HeroVisual | undefined | null,
  pageType: string
): HeroVisual | undefined {
  const defaultVisual = getDefaultHeroVisual(pageType)
  
  // If rightVisual is provided and has an image, use it
  if (rightVisual?.image) {
    return rightVisual
  }
  
  // If rightVisual is provided but has no image, merge with default
  if (rightVisual && defaultVisual) {
    return {
      ...rightVisual,
      image: defaultVisual.image,
    }
  }
  
  // If no rightVisual, use default
  return defaultVisual
}

