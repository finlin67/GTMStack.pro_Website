'use client'

const DEBUG_HERO_VARIANT = true

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { FadeIn, HoverScale, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'
import { TopoBackdrop, PathwayOverlay, SignalField } from '@/components/motifs'
import { HeroAbstract } from '@/components/visuals/HeroAbstract'
import type { HeroVisual as HeroVisualType } from '@/lib/heroVisuals'
import { heroVisualFallbacks, heroVisualMap } from '@/lib/hero-visual-map'
import { heroOverlayMap } from '@/lib/hero-overlay-map'
import { heroVisualPresets } from '@/lib/hero-visual-presets'
import { HeroBackground, type HeroBackgroundVariant, type HeroBackgroundIntensity } from '@/components/ui/HeroBackground'
import { getHeroBackgroundVariant } from '@/lib/heroPresets'

function getDefaultIntensity(pathname: string): HeroBackgroundIntensity {
  if (pathname === '/') return 'medium'
  if (pathname.startsWith('/expertise')) return 'medium'
  if (pathname.startsWith('/industries')) return 'medium'
  if (pathname.startsWith('/case-studies')) return 'medium'
  if (pathname.startsWith('/projects')) return 'medium'
  return 'medium'
}

const HeroVisual = dynamic(
  () => import('@/components/ui/HeroVisual').then((m) => m.HeroVisual),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-900/30 via-slate-900/20 to-cyan-900/20 animate-pulse" />
    ),
  }
)

interface HeroDarkProps {
  label?: string
  title: string
  titleHighlight?: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  align?: 'left' | 'center'
  size?: 'default' | 'large'
  className?: string
  children?: React.ReactNode
  motif?: 'topo' | 'pathway' | 'signal' | 'grid' | 'none' | 'flow'
  rightVisual?: React.ReactNode | HeroVisualType
  backgroundVariant?: HeroBackgroundVariant
  backgroundIntensity?: HeroBackgroundIntensity
  slug?: string
  kind?: 'expertise' | 'industries' | 'projects'
}

export function HeroDark({
  label,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  align = 'center',
  size = 'default',
  className,
  children,
  motif = 'topo',
  backgroundVariant,
  backgroundIntensity,
  rightVisual,
  slug,
  kind,
}: HeroDarkProps) {
  const isLarge = size === 'large'
  const isCentered = align === 'center'
  const pathname = usePathname() ?? (slug ? `/${kind ?? 'expertise'}/${slug}` : '/')

  const resolvedBackgroundVariant = backgroundVariant ?? getHeroBackgroundVariant(pathname)
  const resolvedIntensity = backgroundIntensity ?? getDefaultIntensity(pathname)

  const autoImage = slug
    ? (heroVisualMap[slug] ?? (kind ? heroVisualFallbacks[kind] : undefined))
    : undefined
  const autoOverlay = slug ? heroOverlayMap[slug] : undefined

  const preset = kind ? heroVisualPresets[kind] : undefined
  const presetClassName = preset?.className

  let resolvedRightVisual: React.ReactNode | null = null

  // If rightVisual isn't provided, always render HeroVisual for slug pages (even if image is undefined)
  if (rightVisual === undefined || rightVisual === null) {
    if (slug) {
      resolvedRightVisual = (
        <HeroVisual image={autoImage} pathwaySvg={autoOverlay} className={presetClassName} />
      )
    } else {
      resolvedRightVisual = null
    }
  } else if (
    React.isValidElement(rightVisual) ||
    typeof rightVisual === 'string' ||
    typeof rightVisual === 'number'
  ) {
    resolvedRightVisual = rightVisual
  } else {
    const visualObject = rightVisual as HeroVisualType
    if (visualObject.useAbstract) {
      const variant = size === 'large' ? 'topLevel' : 'detail'
      resolvedRightVisual = <HeroAbstract variant={variant} />
    } else if (visualObject.variant) {
      resolvedRightVisual = (
        <HeroVisual
          variant={visualObject.variant}
          className={presetClassName}
        />
      )
    } else {
      resolvedRightVisual = (
        <HeroVisual
          image={visualObject.image}
          pathwaySvg={visualObject.pathwaySvg}
          className={presetClassName}
        />
      )
    }
  }

  // For slug pages, never allow the right visual to collapse to null.
  // Even if autoImage is undefined, HeroVisual will render its decorative/skeleton state.
  if (slug && (resolvedRightVisual === null || resolvedRightVisual === undefined)) {
    resolvedRightVisual = (
      <HeroVisual image={autoImage} pathwaySvg={autoOverlay} className={presetClassName} />
    )
  }

  // IMPORTANT: Always render the right visual column wrapper to keep SSR/CSR DOM identical.
  // The content inside can change, but the wrapper must always exist.
  const hasRightVisual = true

  const MotifComponent = {
    topo: TopoBackdrop,
    pathway: PathwayOverlay,
    signal: SignalField,
    grid: () => null,
    none: () => null,
    flow: () => null,
  }[motif]

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        'bg-gradient-to-b from-slate-950 via-brand-950 to-slate-950',
        'text-white',
        isLarge
          ? 'pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40'
          : 'pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28',
        className
      )}
    >
      {DEBUG_HERO_VARIANT && (
        <div className="absolute top-4 left-4 z-50 px-3 py-1.5 text-xs font-mono bg-white/10 border border-white/15 rounded backdrop-blur-sm pointer-events-none">
          <div className="text-white/70">{pathname}</div>
          <div className="text-cyan-300">{resolvedBackgroundVariant}</div>
        </div>
      )}
      <HeroBackground variant={resolvedBackgroundVariant} intensity={resolvedIntensity} seed={pathname} />

      {/* Ambient gradient orbs with drift */}
      <div className="absolute z-0 top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-3xl animate-drift-slow pointer-events-none" />
      <div className="absolute z-0 top-20 right-1/4 w-[400px] h-[400px] bg-cool-400/15 rounded-full blur-3xl animate-drift-medium pointer-events-none" />
      <div className="absolute z-0 bottom-0 left-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl animate-drift-fast pointer-events-none" />

      {/* Motif overlay */}
      {motif === 'topo' && <TopoBackdrop intensity="subtle" variant="sparse" />}
      {motif === 'pathway' && <PathwayOverlay intensity="subtle" paths="simple" accent />}
      {motif === 'signal' && <SignalField intensity="subtle" pattern="constellation" density="sparse" />}

      <div className="container-width relative z-10">
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
            hasRightVisual && 'lg:grid-cols-[1.2fr_1fr]'
          )}
        >
          {/* Left: Text Content */}
          <StaggerContainer
            className={cn(
              hasRightVisual ? 'max-w-none' : 'max-w-4xl',
              isCentered && !hasRightVisual && 'mx-auto text-center'
            )}
          >
            {label && (
              <StaggerItem>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                  {label}
                </span>
              </StaggerItem>
            )}

            <StaggerItem>
              <h1
                className={cn(
                  'font-display font-bold tracking-tight text-white text-balance',
                  isLarge
                    ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                    : 'text-3xl md:text-4xl lg:text-5xl',
                  'leading-tight'
                )}
              >
                {title}
                {titleHighlight && (
                  <>
                    {' '}
                    <span className="bg-gradient-to-r from-brand-400 via-cool-400 to-cyan-400 bg-clip-text text-transparent">
                      {titleHighlight}
                    </span>
                  </>
                )}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p
                className={cn(
                  'mt-6 text-slate-300 leading-relaxed',
                  isLarge ? 'text-lg md:text-xl max-w-2xl' : 'text-lg',
                  isCentered && !hasRightVisual && 'mx-auto'
                )}
              >
                {description}
              </p>
            </StaggerItem>

            {(primaryCta || secondaryCta) && (
              <StaggerItem>
                <StaggerContainer
                  className={cn(
                    'mt-8 flex flex-wrap gap-4',
                    isCentered && !hasRightVisual && 'justify-center'
                  )}
                >
                  {primaryCta && (
                    <StaggerItem>
                      <HoverScale scale={1.01}>
                        <Link
                          href={primaryCta.href}
                          className="btn bg-brand-500 text-white hover:bg-brand-400 px-6 py-3 text-base rounded-xl group shadow-glow transition-all duration-300 hover:shadow-glow-violet"
                        >
                          {primaryCta.label}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </HoverScale>
                    </StaggerItem>
                  )}
                  {secondaryCta && (
                    <StaggerItem>
                      <HoverScale scale={1.01}>
                        <Link
                          href={secondaryCta.href}
                          className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-3 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
                        >
                          {secondaryCta.label}
                        </Link>
                      </HoverScale>
                    </StaggerItem>
                  )}
                </StaggerContainer>
              </StaggerItem>
            )}

            {children && (
              <StaggerItem className="mt-12">
                {children}
              </StaggerItem>
            )}
          </StaggerContainer>

          {/* Right: Visual (always render wrapper to prevent hydration mismatch) */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand-900/20 to-slate-900/40 backdrop-blur-sm shadow-glow-violet">
              <div className="absolute inset-0">
                {resolvedRightVisual ?? (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 via-cool-400/30 to-cyan-400/30 animate-float" />
                )}
              </div>
              {/* Diagonal glow overlay behind the frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/18 via-cool-400/14 to-cyan-400/16 mix-blend-screen pointer-events-none" />
              
              {/* Decorative accent orbs */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-400/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-400/25 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}