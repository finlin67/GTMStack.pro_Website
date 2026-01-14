'use client'

import Link from 'next/link'
import { ArrowRight, Signal, Grid, Compass, Layers, Sparkles } from 'lucide-react'
import { HeroDark } from '@/components/ui/HeroDark'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import { ensureHeroVisualWithImage } from '@/lib/heroVisualDefaults'
import { SectionHeader } from '@/components/layout/Section'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { Card } from '@/components/ui/Card'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { PILLARS } from '@/lib/types'
import { expertiseItems, getExpertiseByPillar } from '@/content/expertise'
import { industryItems } from '@/content/industries'
import { StackedPlanes, PathwayOverlay, SignalField } from '@/components/motifs'

export default function ExpertisePage() {
  const featuredModules = expertiseItems
    .filter((item) => item.featured)
    .slice(0, 8)

  const industryPreview = industryItems.slice(0, 6)

  const proofStats = [
    { value: '$500M+', label: 'Pipeline influenced' },
    { value: '12+', label: 'Years building GTM systems' },
    { value: '50+', label: 'Engagements across GTM stack' },
    { value: '4', label: 'Core pillars aligned' },
  ]

  return (
    <>
      {/* Hero (Dark) */}
      <HeroDark
        align="left"
        motif={HERO_VISUALS.defaults.topLevel.motif || 'topo'}
        title="Full-stack GTM expertise"
        titleHighlight="built as a product"
        description="Strategy, data, automation, and optimization shipped as one operating system—so your GTM runs like a product, not a project."
        primaryCta={{ label: 'Browse expertise', href: '#featured-modules' }}
        secondaryCta={{ label: 'View case studies', href: '/case-studies' }}
        rightVisual={ensureHeroVisualWithImage(HERO_VISUALS.defaults.topLevel, 'expertise')}
      />

      {/* Pillars Overview (Light) */}
      <FadeIn>
      <SectionLight variant="white" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <StackedPlanes intensity="subtle" />
        </div>
        <div className="flex items-center justify-between gap-6 mb-10">
          <SectionHeader
            label="Pillars"
            title="Four pillars, one GTM stack"
            description="Each pillar connects to the next—strategy informs data, data fuels automation, automation powers optimization."
          />
          <Link
            href="/expertise"
            className="hidden md:inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-500 transition-colors"
          >
            View all expertise
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <Link
                href={pillar.href}
                className="relative block rounded-2xl border border-slate-200 bg-white shadow-soft p-5 group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-strong"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-200 via-cool-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {getExpertiseByPillar(pillar.id).length} capabilities
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-brand-700">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>
      </FadeIn>

      {/* Featured Expertise Modules (Dark) */}
      <FadeIn>
      <SectionDark
        id="featured-modules"
        variant="stats"
        motif="signal"
        padding="lg"
        className="overflow-hidden"
        accentOrb
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <SectionHeader
            label="Featured modules"
            title="Stacked expertise you can plug in"
            description="6–8 high-leverage modules designed to interlock—data, automation, plays, and optimization in one stack."
            className="text-white"
          />
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-cyan-100 hover:text-white transition-colors font-semibold"
          >
            Browse all expertise
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <CardGrid columns={3}>
          <StaggerContainer className="contents">
            {featuredModules.map((item) => (
              <StaggerItem key={item.slug}>
                <CardGridItem>
                  <Card
                    title={item.title}
                      description={item.description ?? item.positioning ?? ''}
                    href={`/expertise/${item.slug}`}
                    icon={item.icon}
                    tags={item.tags}
                    badge={item.pillarLabel}
                    variant="featured"
                    className="bg-white/5 border border-white/10 text-white hover:border-cyan-400/40 hover:shadow-glow transition-all duration-300"
                  />
                </CardGridItem>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </CardGrid>
      </SectionDark>
      </FadeIn>

      {/* Expertise by Industry (Light) */}
      <FadeIn>
      <SectionLight variant="slate" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <PathwayOverlay intensity="subtle" paths="simple" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <SectionHeader
            label="Expertise by industry"
            title="Tailored routes by market"
            description="Snapshots of how the stack adapts to key industries—signals, motions, and plays tuned to the market."
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-500 transition-colors"
          >
            View industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <StaggerContainer className="grid md:grid-cols-3 gap-6 relative z-10">
          {industryPreview.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{industry.title}</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                      {industry.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-brand-700">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-brand-700 font-semibold">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>
      </FadeIn>

      {/* Proof Band (Dark) */}
      <SectionDark variant="theater" motif="pathway" padding="md" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <PathwayOverlay intensity="subtle" paths="simple" accent />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Proof in outcomes: accountable GTM with observable signals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* CTA (Dark) */}
      <SectionDark variant="cta" motif="signal" padding="lg" accentOrb className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <SignalField intensity="subtle" pattern="mesh" density="sparse" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <PathwayOverlay intensity="subtle" paths="simple" accent />
        </div>
        <div className="max-w-3xl text-center mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
            Plug in the GTM stack you need—built by operators
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed">
            Select the pillars and modules you need now. We align the stack, instrument the signals, and launch accountable plays.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn bg-white text-brand-900 hover:bg-white/90 px-6 py-3 text-base rounded-xl shadow-glow transition-all duration-300 hover:shadow-glow-violet"
            >
              Start a project
            </a>
            <a
              href="/case-studies"
              className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-3 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              See outcomes
            </a>
          </div>
        </div>
      </SectionDark>
    </>
  )
}

