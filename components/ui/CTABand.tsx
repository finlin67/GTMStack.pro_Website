'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'

interface CTABandProps {
  title: string
  description?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'default' | 'dark' | 'gradient'
  className?: string
}

export function CTABand({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
  className,
}: CTABandProps) {
  const variantStyles = {
    default: 'bg-slate-50 border-y border-slate-200/60',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 text-white',
  }

  const buttonStyles = {
    default: {
      primary: 'btn btn-primary',
      secondary: 'btn btn-ghost text-slate-600 hover:text-slate-900',
    },
    dark: {
      primary: 'btn bg-white text-slate-900 hover:bg-slate-100 shadow-lg',
      secondary: 'btn text-slate-300 hover:text-white hover:bg-white/10',
    },
    gradient: {
      primary: 'btn bg-white text-brand-700 hover:bg-white/90 shadow-lg',
      secondary: 'btn text-white/90 hover:text-white hover:bg-white/10',
    },
  }

  return (
    <section className={cn(variantStyles[variant], 'py-16 md:py-20 lg:py-24', className)}>
      <div className="container-width">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              {variant === 'gradient' && (
                <Sparkles className="w-6 h-6 mb-3 opacity-80" />
              )}
              <h2
                className={cn(
                  'font-display text-2xl md:text-3xl font-bold tracking-tight',
                  variant === 'default' ? 'text-slate-900' : ''
                )}
              >
                {title}
              </h2>
              {description && (
                <p
                  className={cn(
                    'mt-2 text-lg',
                    variant === 'default' ? 'text-slate-600' : 'opacity-90'
                  )}
                >
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={primaryCta.href}
                className={cn(
                  buttonStyles[variant].primary,
                  'px-6 py-3 text-base rounded-xl group'
                )}
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    buttonStyles[variant].secondary,
                    'px-6 py-3 text-base rounded-xl'
                  )}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

