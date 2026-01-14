'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'

interface HeroProps {
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
}

export function Hero({
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
}: HeroProps) {
  const isLarge = size === 'large'
  const isCentered = align === 'center'

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        isLarge
          ? 'pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40'
          : 'pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28',
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-3xl" />

      <div className="container-width relative">
        <StaggerContainer
          className={cn(
            'max-w-4xl',
            isCentered && 'mx-auto text-center'
          )}
        >
          {label && (
            <StaggerItem>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                {label}
              </span>
            </StaggerItem>
          )}

          <StaggerItem>
            <h1
              className={cn(
                'font-display font-bold tracking-tight text-slate-900 text-balance',
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
                  <span className="text-gradient">{titleHighlight}</span>
                </>
              )}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p
              className={cn(
              'mt-6 text-slate-600 leading-relaxed md:leading-relaxed',
                isLarge ? 'text-lg md:text-xl max-w-2xl' : 'text-lg',
                isCentered && 'mx-auto'
              )}
            >
              {description}
            </p>
          </StaggerItem>

          {(primaryCta || secondaryCta) && (
            <StaggerItem>
              <div
                className={cn(
                  'mt-8 flex flex-wrap gap-4',
                  isCentered && 'justify-center'
                )}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="btn btn-primary px-6 py-3 text-base rounded-xl group"
                  >
                    {primaryCta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="btn btn-secondary px-6 py-3 text-base rounded-xl"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </StaggerItem>
          )}

          {children && (
            <StaggerItem className="mt-12">
              {children}
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>
    </section>
  )
}

interface PageHeroProps {
  title: string
  description?: string
  breadcrumbs?: { label: string; href: string }[]
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-width relative">
        <StaggerContainer className="max-w-5xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <StaggerItem>
              <nav className="flex items-center gap-2 text-sm mb-4">
                {breadcrumbs.map((crumb, index) => (
                  <span key={crumb.href} className="flex items-center gap-2">
                    {index > 0 && <span className="text-slate-300">/</span>}
                    <Link
                      href={crumb.href}
                      className="text-slate-500 hover:text-brand-600 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  </span>
                ))}
              </nav>
            </StaggerItem>
          )}

          <StaggerItem>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>
          </StaggerItem>

          {description && (
            <StaggerItem>
              <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl">
                {description}
              </p>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>
    </section>
  )
}

