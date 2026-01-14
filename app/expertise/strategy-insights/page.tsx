import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Heart, Users, RefreshCw, Search, Compass, Layers, Sparkles, LineChart } from 'lucide-react'
import { SectionHeader } from '@/components/layout/Section'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { Card } from '@/components/ui/Card'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { getExpertiseByPillar } from '@/content/expertise'
import { HeroDark } from '@/components/ui/HeroDark'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import { ensureHeroVisualWithImage } from '@/lib/heroVisualDefaults'
import { AnimatedStatCard } from '@/components/ui/AnimatedStatCard'

export const metadata: Metadata = {
  title: 'Strategy & Insights',
  description:
    'ABM frameworks, customer experience, lifecycle marketing, and market research that inform strategy.',
}

export default function StrategyInsightsPillarPage() {
  const expertiseItems = getExpertiseByPillar('strategy-insights')
  const featuredModules = expertiseItems.slice(0, 5)

  const framework = [
    { title: 'Define account selection & ICP', description: 'Build account scoring models combining firmographic, technographic, intent, and engagement signals. Create account tiers with clear criteria.' },
    { title: 'Build verticalized ABM plays', description: 'Develop verticalized plays by industry, use case, or buyer persona. Create playbooks mapping messaging, content, channels, and sales motions.' },
    { title: 'Instrument ABM tech stack', description: 'Set up ABM platforms—Demandbase, 6Sense—for account identification, intent signals, and engagement tracking. Integrate with CRM and automation.' },
    { title: 'Launch multi-channel orchestration', description: 'Launch coordinated campaigns across channels orchestrated at account level. Use intent data to trigger account-level campaigns.' },
    { title: 'Measure, optimize & scale', description: 'Track account-level metrics—engagement, pipeline, win rates, ACV. Build dashboards showing ABM performance by play and revenue outcome.' },
  ]

  const proof = [
    { value: '+87%', label: 'YoY pipeline growth', detail: 'unified revenue model (PRGX)' },
    { value: '300+', label: 'Enterprise accounts', detail: 'ABM frameworks scaled (Salesforce/Red Hat)' },
    { value: '+35%', label: 'MQL increase', detail: 'ICP/prioritization rebuild (AMCS)' },
    { value: '60 days', label: 'Time to results', detail: 'MQL lift achieved' },
  ]

  return (
    <>
      {/* Hero (Dark) */}
      <HeroDark
        label="Strategy & Insights"
        title="ABM frameworks that scale"
        titleHighlight="and drive revenue"
        description="Account-based marketing, customer experience, lifecycle marketing, and market research that inform strategy and deliver measurable pipeline impact."
        primaryCta={{ label: 'View Expertise', href: '#expertise' }}
        secondaryCta={{ label: 'Get in Touch', href: '/contact' }}
        align="left"
        size="default"
        motif={(HERO_VISUALS.expertise['strategy-insights']?.motif || HERO_VISUALS.defaults.subLevel.motif || 'topo')}
        rightVisual={ensureHeroVisualWithImage(HERO_VISUALS.expertise['strategy-insights'] || HERO_VISUALS.defaults.subLevel, 'expertise')}
        slug="strategy-insights"
      />

      {/* Pillar Promise + Signals (Light) */}
      <SectionLight variant="white" padding="lg">
        <div className="max-w-4xl">
          <SectionHeader
            label="Promise"
            title="ABM isn't a tactic—it's a revenue operating model"
            description="Unified revenue operating model (Demandbase + CRM + analytics) drove +87% YoY marketing-sourced pipeline at PRGX. ABM frameworks scaled across 300+ enterprise target accounts at Salesforce and Red Hat. ICP/prioritization rebuild increased +35% MQLs in 60 days at AMCS. The difference is framework, data quality, and orchestration."
            className="mb-12"
          />

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Who this is for</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Enterprise B2B targeting named accounts with long sales cycles
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Companies with sales-led motion needing marketing that supports ABM
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Series B+ SaaS scaling from lead gen to account-based revenue
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Organizations with sales-marketing misalignment needing unified strategy
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Signals you need this</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Marketing generating leads but sales says &quot;wrong accounts&quot;
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    High lead volume but low conversion and long sales cycles
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Sales and marketing working different account lists
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Account selection based on gut feel, not data-driven scoring
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionLight>

      {/* Expertise Modules (Dark) */}
      <SectionDark variant="theater" padding="lg" motif="signal" accentOrb id="expertise">
        <SectionHeader
          label="Expertise"
          title="Strategy & Insights Capabilities"
          description={`${expertiseItems.length} specialized areas within Strategy & Insights.`}
          className="mb-12 text-white"
        />

        <CardGrid columns={3}>
          {expertiseItems.map((item) => (
            <CardGridItem key={item.slug}>
              <Card
                title={item.title}
                description={item.description ?? item.positioning ?? ''}
                href={`/expertise/${item.slug}`}
                icon={item.icon}
                tags={item.tags}
                badge={item.pillarLabel}
                variant={item.featured ? 'featured' : 'default'}
              />
            </CardGridItem>
          ))}
        </CardGrid>
      </SectionDark>

      {/* Mini Framework (Light) */}
      <SectionLight variant="slate" padding="lg">
        <SectionHeader
          label="Framework"
          title="How we build ABM that scales"
          description="Systematic approach to account-based marketing and strategy."
          className="mb-12"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {framework.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="card p-6 h-full hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-lg shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>

      {/* Proof Band (Dark) */}
      <SectionDark variant="stats" padding="lg" motif="signal" accentOrb>
        <SectionHeader
          label="Proof"
          title="Outcomes delivered"
          className="mb-12 text-white"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proof.map((stat, idx) => (
            <AnimatedStatCard key={idx} index={idx}>
              <div className="dark-card p-8 text-center border-brand-500/20 hover:border-brand-500/40 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-400 via-cool-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-300 mb-1">{stat.label}</p>
                <p className="text-xs text-gold-400">{stat.detail}</p>
              </div>
            </AnimatedStatCard>
          ))}
        </StaggerContainer>
      </SectionDark>

      {/* CTA (Dark) */}
      <SectionDark variant="cta" padding="lg" motif="signal" accentOrb>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Ready to build ABM that scales?
            </h2>
            <p className="text-lg text-white/90">
              Let&apos;s discuss how strategy & insights can drive pipeline for your business.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn bg-white text-brand-700 hover:bg-white/90 shadow-lg px-6 py-3 text-base rounded-xl group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/expertise"
              className="btn text-white/90 hover:text-white hover:bg-white/10 px-6 py-3 text-base rounded-xl"
            >
              View All Expertise
            </Link>
          </div>
        </div>
      </SectionDark>
    </>
  )
}

