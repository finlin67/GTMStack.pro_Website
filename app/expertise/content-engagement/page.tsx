import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Mail, Radio, Share2, Video, Compass, Layers, Sparkles, LineChart } from 'lucide-react'
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
  title: 'Content & Engagement',
  description:
    'Content marketing, email, omnichannel, social, and video that drive engagement and conversion.',
}

export default function ContentEngagementPillarPage() {
  const expertiseItems = getExpertiseByPillar('content-engagement')
  const featuredModules = expertiseItems.slice(0, 5)

  const framework = [
    { title: 'Map content to buyer journey', description: 'Identify content gaps at each stage—awareness, consideration, decision—and build content matrix aligned to journey and personas.' },
    { title: 'Define content pillars & messaging', description: 'Establish 3–5 content pillars aligned to positioning and buyer pain points. Create messaging frameworks for consistency.' },
    { title: 'Build attribution & measurement', description: 'Wire content to attribution model. Set up UTM tracking, content-to-opportunity mapping, and pipeline contribution reporting.' },
    { title: 'Launch & optimize programs', description: 'Launch content programs aligned to pillars and buyer journey. Use A/B testing to optimize headlines, CTAs, and formats.' },
    { title: 'Scale content operations', description: 'Build content workflows, approval processes, and distribution channels. Integrate with marketing automation and sales enablement.' },
  ]

  const proof = [
    { value: '$1.2M', label: 'Pipeline in 90 days', detail: 'verticalized ABM + content (AMCS)' },
    { value: '+85%', label: 'MQL increase', detail: 'integrated multi-channel programs' },
    { value: '+60%', label: 'Organic traffic', detail: 'content programs' },
    { value: '+40%', label: 'Conference visibility', detail: 'thought leadership (Salesforce)' },
  ]

  return (
    <>
      {/* Hero (Dark) */}
      <HeroDark
        label="Content & Engagement"
        title="Content that converts"
        titleHighlight="and drives pipeline"
        description="B2B content marketing, email, omnichannel, social, and video programs that map to buyer journeys and deliver measurable pipeline impact."
        primaryCta={{ label: 'View Expertise', href: '#expertise' }}
        secondaryCta={{ label: 'Get in Touch', href: '/contact' }}
        align="left"
        size="default"
        motif={(HERO_VISUALS.expertise['content-engagement']?.motif || HERO_VISUALS.defaults.subLevel.motif || 'topo')}
        rightVisual={ensureHeroVisualWithImage(HERO_VISUALS.expertise['content-engagement'] || HERO_VISUALS.defaults.subLevel, 'expertise')}
        slug="content-engagement"
      />

      {/* Pillar Promise + Signals (Light) */}
      <SectionLight variant="white" padding="lg">
        <div className="max-w-4xl">
          <SectionHeader
            label="Promise"
            title="Content that drives revenue, not just engagement"
            description="Verticalized ABM personalization + content overhaul produced $1.2M pipeline in 90 days at AMCS. Integrated multi-channel content programs drove +85% MQLs and +60% organic traffic. Thought-leadership activation increased +40% conference visibility and +25% social mentions at Salesforce. The difference is systematic content strategy tied to revenue outcomes."
            className="mb-12"
          />

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Who this is for</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Series A–B SaaS scaling content operations
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Enterprise B2B needing verticalized content
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    PLG companies requiring content for self-serve
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Sales-led companies needing enablement content
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Signals you need this</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Content publishes but attribution shows minimal pipeline
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Sales complains about lack of enablement content
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Content metrics focus on traffic but revenue unclear
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                    Competitive content outperforming despite similar topics
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionLight>

      {/* Expertise Modules (Dark) */}
      <SectionDark variant="theater" padding="lg" motif="pathway" accentOrb id="expertise">
        <SectionHeader
          label="Expertise"
          title="Content & Engagement Capabilities"
          description={`${expertiseItems.length} specialized areas within Content & Engagement.`}
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
          title="How we build content that converts"
          description="Systematic approach to content strategy, production, and optimization."
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
              Ready to build content that converts?
            </h2>
            <p className="text-lg text-white/90">
              Let&apos;s discuss how content & engagement can drive pipeline for your business.
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

