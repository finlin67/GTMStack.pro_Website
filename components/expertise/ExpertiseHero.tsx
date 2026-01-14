import React from 'react'
import Link from 'next/link'
import { ExpertiseItem, Pillar } from '@/lib/types'
import { SectionDark } from '@/components/layout/SectionDark'
import { StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { FadeIn } from '@/components/motion/FadeIn'
import { TopoBackdrop, PathwayOverlay } from '@/components/motifs'
import { ExpertiseHeroVisual } from './ExpertiseHeroVisual.client'
import { ExpertiseHeroConfig, ExpertiseHeroAccent } from '@/content/expertiseHeroConfigs'

type AccentTheme = {
  overlay: string
  border: string
  primary: string
  secondary: string
}

const accentThemes: Record<ExpertiseHeroAccent, AccentTheme> = {
  blue: {
    overlay: 'from-blue-900/20',
    border: 'border-blue-400/30',
    primary: 'bg-blue-500 hover:bg-blue-400',
    secondary: 'border-blue-400/40 hover:bg-blue-400/10',
  },
  indigo: {
    overlay: 'from-indigo-900/20',
    border: 'border-indigo-400/30',
    primary: 'bg-indigo-500 hover:bg-indigo-400',
    secondary: 'border-indigo-400/40 hover:bg-indigo-400/10',
  },
  cyan: {
    overlay: 'from-cyan-900/20',
    border: 'border-cyan-400/30',
    primary: 'bg-cyan-500 hover:bg-cyan-400',
    secondary: 'border-cyan-400/40 hover:bg-cyan-400/10',
  },
  emerald: {
    overlay: 'from-emerald-900/20',
    border: 'border-emerald-400/30',
    primary: 'bg-emerald-500 hover:bg-emerald-400',
    secondary: 'border-emerald-400/40 hover:bg-emerald-400/10',
  },
}

const defaultTheme: AccentTheme = accentThemes.blue

interface ExpertiseHeroProps {
  item: ExpertiseItem
  pillar?: Pillar
  animation?: React.ReactNode
  config?: ExpertiseHeroConfig
  icon?: React.ComponentType<{ className?: string }>
}

export function ExpertiseHero({
  item,
  pillar,
  animation,
  config,
  icon: Icon,
}: ExpertiseHeroProps) {
  const theme = (config ? accentThemes[config.accent] : undefined) ?? defaultTheme
  const metrics = config?.metrics ?? []
  const tagline = config?.tagline ?? item.description

  return (
    <SectionDark
      variant="hero"
      motif="pathway"
      padding="lg"
      className="overflow-hidden"
      containerClassName="relative"
      accentOrb
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <TopoBackdrop intensity="subtle" variant="sparse" />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <PathwayOverlay intensity="subtle" paths="simple" accent />
      </div>
      <div className={`absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-r ${theme.overlay}`} />

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <StaggerContainer className="space-y-6">
          <StaggerItem>
            <nav className="flex items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <Link href="/expertise" className="hover:text-white transition-colors">
                Expertise
              </Link>
              {pillar && (
                <>
                  <span className="text-slate-500">/</span>
                  <Link href={pillar.href} className="hover:text-white transition-colors">
                    {pillar.title}
                  </Link>
                </>
              )}
            </nav>
          </StaggerItem>

          <StaggerItem>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold backdrop-blur-sm">
              {Icon && <Icon className="w-4 h-4 text-white" />}
              <span className="text-xs uppercase tracking-[0.12em] text-slate-200">{config?.engine ?? 'scan'}</span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span>{item.pillarLabel}</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              {item.title}
            </h1>
          </StaggerItem>

          {tagline && (
            <StaggerItem>
              <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">{tagline}</p>
            </StaggerItem>
          )}

          <StaggerItem>
            <div className="flex flex-wrap gap-3">
              <a
                href="#route"
                className={`btn text-brand-900 px-6 py-3 text-base rounded-xl shadow-glow transition-all duration-300 ${theme.primary} text-white`}
              >
                View route map
              </a>
              <a
                href="/contact"
                className={`btn bg-white/10 text-white px-6 py-3 text-base rounded-xl backdrop-blur-sm transition-all duration-300 ${theme.secondary}`}
                style={{ borderWidth: 1 }}
              >
                Book a call
              </a>
            </div>
          </StaggerItem>

          {metrics.length > 0 && (
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`rounded-xl border bg-white/5 p-4 text-white/90 backdrop-blur-sm ${theme.border}`}
                  >
                    <div className="text-sm text-slate-200">{metric.label}</div>
                    <div className="text-2xl font-semibold text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          )}

          {item.tags && item.tags.length > 0 && (
            <StaggerItem>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="badge badge-brand">
                    {tag}
                  </span>
                ))}
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>

        <FadeIn delay={0.25}>
          <ExpertiseHeroVisual animation={animation} config={config} borderClassName={theme.border} />
        </FadeIn>
      </div>
    </SectionDark>
  )
}

