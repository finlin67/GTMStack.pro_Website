import { Metadata } from 'next'
import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { ArrowRight, CheckCircle2, Compass, Layers, LineChart, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/layout/Section'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { RelatedExpertise, RelatedCaseStudies } from '@/components/ui/RelatedItems'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { expertiseItems, getExpertiseBySlug, getExpertiseByPillar } from '@/content/expertise'
import { ExpertiseHero } from '@/components/expertise/ExpertiseHero'
import { getCaseStudiesByExpertise } from '@/content/case-studies'
import { PILLARS } from '@/lib/types'
import { TopoBackdrop, PathwayOverlay, SignalField, StackedPlanes } from '@/components/motifs'
import { getExpertiseHeroConfig } from '@/content/expertiseHeroConfigs'


type IconName = keyof typeof Icons

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return expertiseItems.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getExpertiseBySlug(params.slug)
  if (!item) return { title: 'Not Found' }

  return {
    title: item.title,
    description: item.description,
  }
}

// Sample deliverables for each expertise area
const deliverables: Record<string, string[]> = {
  'market-positioning': [
    'Competitive landscape analysis',
    'Positioning statement and messaging framework',
    'Value proposition canvas',
    'Messaging guidelines document',
    'Sales enablement talking points',
  ],
  'competitive-analysis': [
    'Competitor profile database',
    'Feature comparison matrix',
    'Win/loss analysis framework',
    'Battlecard templates',
    'Ongoing monitoring dashboard',
  ],
  'gtm-planning': [
    'Go-to-market strategy document',
    'Launch timeline and milestones',
    'Channel strategy recommendations',
    'Resource allocation plan',
    'Success metrics framework',
  ],
  default: [
    'Discovery and assessment',
    'Strategy recommendations',
    'Implementation roadmap',
    'Hands-on execution support',
    'Knowledge transfer and documentation',
  ],
}

export default function ExpertiseDetailPage({ params }: Props) {
  const item = getExpertiseBySlug(params.slug)

  if (!item) {
    notFound()
  }

  const heroConfig = getExpertiseHeroConfig(item.slug)

  const pillar = item.pillar ? PILLARS.find((p) => p.id === item.pillar) : undefined
  const relatedExpertise = item.pillar
    ? getExpertiseByPillar(item.pillar)
        .filter((e) => e.slug !== item.slug)
        .slice(0, 3)
    : []
  const relatedCaseStudies = getCaseStudiesByExpertise(item.slug).slice(0, 2)

  const IconComponent = Icons[item.icon as IconName] as React.ComponentType<{ className?: string }>
  const itemDeliverables = deliverables[item.slug] || deliverables.default

  const routeSteps = [
    { title: 'Map signals & ICP', detail: 'Clarify ICP tiers, buying triggers, and leading signals tied to this expertise.', icon: Compass },
    { title: 'Design the play', detail: 'Define the core motion, offer, and success criteria with measurable checkpoints.', icon: Sparkles },
    { title: 'Instrument & launch', detail: 'Wire data, routing, and orchestration; launch with gated stages and dashboards.', icon: Layers },
    { title: 'Optimize to proof', detail: 'Run sprints, tune levers, and lock proof points before scaling spend.', icon: LineChart },
  ].slice(0, 4)

  const executionStack = [
    { title: 'Channels', items: ['ABM & outbound', 'Lifecycle / email', 'Paid search & social', 'Web personalization'] },
    { title: 'Data & Signals', items: ['Attribution & enrichment', 'Product usage (if available)', 'Intent & firmographic', 'Routing & scoring'] },
    { title: 'Automation', items: ['Journeys & triggers', 'Lead-to-account matching', 'Playbooks & alerts', 'QA & governance'] },
    { title: 'Measurement', items: ['Pipeline quality', 'Win/loss signals', 'Time-to-signal', 'Stage conversion'] },
  ]

  const outcomes = [
    { value: '3-5x', label: 'Pipeline efficiency uplift', detail: 'via clearer ICP + signal-led routing' },
    { value: '30-50%', label: 'Faster time-to-signal', detail: 'with instrumentation in place' },
    { value: '2-3x', label: 'Lift in qualified pipeline', detail: 'after play + routing alignment' },
  ]

  const faqs = [
    {
      q: 'How long does an engagement take?',
      a: 'Most expertise-led engagements run 4–8 weeks from discovery to first measurable signals, with options to stay for operate/optimize phases.',
    },
    {
      q: 'Do you integrate with our existing tools?',
      a: 'Yes. We integrate with your CRM/MA/analytics stack and recommend minimal additions only when needed to observe or automate the motion.',
    },
    {
      q: 'What do you deliver at the end?',
      a: 'A working motion: play design, instrumentation, dashboards, documentation, and enablement. You keep the assets and the know-how.',
    },
  ]

  return (
    <>
      <ExpertiseHero
        item={item}
        pillar={pillar}
        config={heroConfig}
        icon={IconComponent}
      />

      {/* Who this is for / Signals (Light) */}
      <SectionLight variant="white" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <TopoBackdrop intensity="subtle" variant="sparse" />
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 relative">
          <FadeIn>
            <SectionHeader
              label="Who this is for"
              title="Built for teams that need accountable expertise"
              description="If you need this motion to be defensible, observable, and operationalized—not a one-off project—this is for you."
            />
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                We partner with growth-stage and enterprise teams that require measurable progress: clearer signals, tighter ICP, and faster paths to proof.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-soft p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-700" />
                <h3 className="font-semibold text-slate-900">Signals you need this</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You lack clear signals to decide where to double-down.',
                  'The motion exists but outcomes are inconsistent.',
                  'Narrative and ICP aren’t aligned with what the data shows.',
                  'Routing/automation lag behind the strategy.',
                  'Dashboards report lagging metrics; leading signals are missing.',
                ].map((signal) => (
                  <li key={signal} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </SectionLight>

      {/* Route Map (Dark) */}
      <SectionDark
        id="route"
        variant="stats"
        motif="pathway"
        padding="lg"
        className="overflow-hidden"
        accentOrb
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <PathwayOverlay intensity="subtle" paths="simple" accent />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <SectionHeader
            label="Route map"
            title="How we run this motion"
            description="A 3–5 step route that connects signals, plays, and proof points—so you can operate and scale confidently."
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
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {routeSteps.map((step, idx) => (
            <StaggerItem key={step.title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-100 uppercase tracking-[0.15em]">
                    Step {idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/25 via-cool-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-white">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">{step.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionDark>

      {/* Execution Stack (Light) */}
      <SectionLight variant="slate" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <StackedPlanes intensity="subtle" />
        </div>
        <SectionHeader
          label="Execution stack"
          title="Channels, data, and automation that make this work"
          description="We align channels, data, automation, and measurement so the motion is observable and repeatable."
          align="center"
          className="mb-10"
        />
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {executionStack.map((stack, idx) => (
            <StaggerItem key={stack.title}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">{stack.title}</h3>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-brand-700">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>

      {/* Outcomes (Dark) */}
      <SectionDark variant="theater" motif="signal" padding="md" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Outcomes you can observe and defend
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-200 mt-1">{stat.label}</div>
                <div className="text-xs text-cyan-100 mt-2">{stat.detail}</div>
                <div className="mt-3 h-1 w-full bg-gradient-to-r from-brand-400 via-cool-400 to-cyan-400 rounded-full opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </SectionDark>

      {/* FAQ (Light) */}
      <SectionLight variant="white" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <PathwayOverlay intensity="subtle" paths="simple" />
        </div>
        <SectionHeader
          label="FAQ"
          title="What to expect from this expertise"
          align="center"
          className="mb-10"
        />
        <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <StaggerItem key={faq.q}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-strong transition-all duration-300">
                <h4 className="text-base font-semibold text-slate-900">{faq.q}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <SectionLight variant="slate" padding="lg">
          <RelatedCaseStudies
            items={relatedCaseStudies}
            title="Related Case Studies"
            viewAllHref="/case-studies"
          />
        </SectionLight>
      )}

      {/* Related Expertise */}
      {relatedExpertise.length > 0 && (
        <SectionLight variant="white" padding="lg">
          <RelatedExpertise
            items={relatedExpertise}
            title={`More ${item.pillarLabel} Expertise`}
            viewAllHref={pillar?.href}
          />
        </SectionLight>
      )}

      {/* CTA (Dark) */}
      <SectionDark variant="cta" motif="signal" padding="lg" accentOrb className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <SignalField intensity="subtle" pattern="mesh" density="sparse" />
        </div>
        <div className="max-w-3xl text-center mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
            Ready to run this motion with measurable proof?
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed">
            We’ll align narrative, signals, automation, and measurement—then launch with the proof points you need to scale.
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
              View outcomes
            </a>
          </div>
        </div>
      </SectionDark>
    </>
  )
}

