import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain, Settings2, Cog, Handshake, Compass, Sparkles, LineChart } from 'lucide-react'
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
  title: 'Systems & Operations',
  description:
    'Marketing automation, operations, martech optimization, AI, and sales enablement that power execution.',
}

export default function SystemsOperationsPillarPage() {
  const expertiseItems = getExpertiseByPillar('systems-operations')
  const featuredModules = expertiseItems.slice(0, 5)

  const framework = [
    { title: 'Audit data quality & build governance', description: 'Start with data quality audit—identify gaps, duplicates, inconsistencies. Build governance framework with standards, validation rules, and cleaning processes.' },
    { title: 'Wire attribution & measurement', description: 'Build multi-touch attribution models tracking marketing influence. Integrate automation with CRM for unified data flow. Set up pipeline contribution reporting.' },
    { title: 'Automate lead routing & scoring', description: 'Build lead scoring models combining demographic, behavioral, and engagement signals. Set up automated routing rules routing leads to right sales rep.' },
    { title: 'Build real-time reporting', description: 'Create executive dashboards showing pipeline health, forecast accuracy, and revenue metrics in real-time. Build operational dashboards for marketing team.' },
    { title: 'Optimize & scale operations', description: 'Continuously optimize systems based on performance data. Scale successful processes to new channels or segments. Build operations playbooks.' },
  ]

  const proof = [
    { value: '4 days → 2 hours', label: 'Reporting time', detail: 'attribution + automation' },
    { value: '+30%', label: 'Database health', detail: 'data quality governance' },
    { value: '30+ hours/month', label: 'Time saved', detail: 'workflow automation' },
    { value: '6 platforms', label: 'MarTech expertise', detail: 'Salesforce, Demandbase, Marketo, 6sense, HubSpot, ZoomInfo' },
  ]

  return (
    <>
      {/* Hero (Dark) */}
      <HeroDark
        label="Systems & Operations"
        title="Marketing ops that enable scale"
        titleHighlight="and drive revenue"
        description="Marketing automation, operations, martech optimization, AI, and sales enablement that cut reporting time from 4 days to 2 hours and enable +87% YoY pipeline growth."
        primaryCta={{ label: 'View Expertise', href: '#expertise' }}
        secondaryCta={{ label: 'Get in Touch', href: '/contact' }}
        align="left"
        size="default"
        motif={(HERO_VISUALS.expertise['systems-operations']?.motif || HERO_VISUALS.defaults.subLevel.motif || 'signal')}
        rightVisual={ensureHeroVisualWithImage(HERO_VISUALS.expertise['systems-operations'] || HERO_VISUALS.defaults.subLevel, 'expertise')}
        slug="systems-operations"
      />

      {/* Pillar Promise + Signals (Light) */}
      <SectionLight variant="white" padding="lg">
        <div className="max-w-4xl">
          <SectionHeader
            label="Promise"
            title="Marketing operations is the foundation that enables everything else"
            description="Data quality governance improved database health +30%. Attribution + workflow automation saved 30+ hours/month and reduced reporting from 4 days to 2 hours. MarTech admin/architecture across Salesforce, Demandbase, Marketo, 6sense, HubSpot, ZoomInfo. The difference is systematic infrastructure, not ad-hoc fixes."
            className="mb-12"
          />

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Who this is for</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    B2B SaaS scaling marketing ops from manual to automated
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Companies with marketing automation but underutilized
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Organizations with data quality issues impacting attribution
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Companies with long reporting cycles needing real-time visibility
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Signals you need this</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Reporting takes days or weeks, not hours
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Data quality issues causing attribution gaps or routing errors
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Lead routing is manual or broken, causing sales complaints
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Attribution unclear—marketing can&apos;t prove pipeline contribution
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
          title="Systems & Operations Capabilities"
          description={`${expertiseItems.length} specialized areas within Systems & Operations.`}
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
          title="How we build marketing ops that scale"
          description="Systematic approach to marketing operations and infrastructure."
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
              Ready to build marketing ops that scale?
            </h2>
            <p className="text-lg text-white/90">
              Let&apos;s discuss how systems & operations can enable scale for your business.
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

