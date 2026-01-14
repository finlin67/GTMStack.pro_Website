import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Compass, Target, Telescope, BarChart, Layers } from 'lucide-react'
import { SectionHeader } from '@/components/layout/Section'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { Card } from '@/components/ui/Card'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { getExpertiseByPillar } from '@/content/expertise'
import { TopoBackdrop, SignalField } from '@/components/motifs'
import { HeroVisual } from '@/components/ui/HeroVisual.client'

export const metadata: Metadata = {
  title: 'GTM Strategy',
  description:
    'Strategic go-to-market consulting: market positioning, competitive analysis, and launch planning.',
}

export default function StrategyPillarPage() {
  const expertiseItems = getExpertiseByPillar('strategy')
  const featuredModules = expertiseItems.slice(0, 5)

  const framework = [
    { title: 'Narrative & ICP clarity', description: 'Sharpen the market story, ICP tiers, and buying triggers with real signal.' },
    { title: 'Positioning & promise', description: 'Define the competitive stance and proof so your promise is defensible and distinct.' },
    { title: 'Plays & offers', description: 'Design offers, routes-to-market, and plays tied to stages and segments.' },
    { title: 'Measurement & signals', description: 'Instrument leading/lagging signals, decision checkpoints, and governance.' },
    { title: 'Launch & iteration', description: 'Stage-gate launches with fast feedback loops to refine narrative and plays.' },
  ]

  const proof = [
    { value: '3x', label: 'Faster market entry', detail: 'with staged launch routes' },
    { value: '40%', label: 'Higher win rates', detail: 'when positioning is explicit' },
    { value: '60%', label: 'Risk reduction', detail: 'via signal-led planning' },
    { value: '12+', label: 'Years operating GTM', detail: 'operator-led strategy' },
  ]

  return (
    <>
      {/* Hero (Dark) */}
      <SectionDark
        variant="hero"
        motif="signal"
        padding="lg"
        className="overflow-hidden"
        containerClassName="relative"
        accentOrb
      >
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <TopoBackdrop intensity="subtle" variant="sparse" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <nav className="flex items-center gap-2 text-sm text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-slate-500">/</span>
                <Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link>
                <span className="text-slate-500">/</span>
                <span className="text-white">GTM Strategy</span>
              </nav>
            </StaggerItem>
            <StaggerItem>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold backdrop-blur-sm">
                <Target className="w-4 h-4" />
                GTM Strategy Pillar
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
                Strategy that makes your GTM defensible
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
                Positioning, ICP clarity, and launch routes built on data and signals—so every GTM motion is guided by evidence, not guesswork.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#modules"
                  className="btn bg-white text-brand-900 hover:bg-white/90 px-6 py-3 text-base rounded-xl shadow-glow transition-all duration-300 hover:shadow-glow-violet"
                >
                  View strategy modules
                </a>
                <a
                  href="/case-studies"
                  className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-3 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  See outcomes
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Anchor visual */}
          <FadeIn delay={0.25} className="relative hidden lg:block">
            <div className="absolute -left-10 -top-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-drift-slow" />
            <HeroVisual
              image="/abstract/hero-03.jpg"
              pathwaySvg="/motifs/pathway.svg"
            />
          </FadeIn>
        </div>
      </SectionDark>

      {/* Pillar Promise + Signals (Light) */}
      <SectionLight variant="white" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <TopoBackdrop intensity="subtle" variant="sparse" />
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 relative">
          <FadeIn>
            <SectionHeader
              label="Pillar promise"
              title="Turn strategy into a route you can operate"
              description="Every strategic decision ties to a signal, a play, and a measurable checkpoint. No airy frameworks—just routes you can run."
            />
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                We align the narrative, ICP tiers, and offers with the signals you can observe. Strategy becomes executable when it is tightly coupled with measurement and governance.
              </p>
              <p>
                Expect clarity on what to say, who to target, where to invest, and how to know it’s working—before you scale the spend.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-soft p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-brand-700" />
                <h3 className="font-semibold text-slate-900">Signals you need this</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Win/loss reasons are unclear or inconsistent.',
                  'Positioning varies by team; narrative drifts in the field.',
                  'ICP is broad; pipeline quality is uneven.',
                  'Launches are slow because success criteria are fuzzy.',
                  'Dashboards report lagging metrics; decisions lack leading signals.',
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

      {/* Expertise Modules (Dark) */}
      <SectionDark
        id="modules"
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
            label="Expertise modules"
            title="5 strategy modules you can deploy now"
            description="Pick the modules that fit your current stage; they interlock with data and ops to stay accountable."
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
          {featuredModules.map((item) => (
            <CardGridItem key={item.slug}>
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
          ))}
        </CardGrid>
      </SectionDark>

      {/* Mini Framework (Light) */}
      <SectionLight variant="slate" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <TopoBackdrop intensity="subtle" variant="sparse" />
        </div>
        <SectionHeader
          label="Route map"
          title="How we run strategy to launch"
          description="Signal-led checkpoints that take you from narrative clarity to launch and iteration."
          align="center"
          className="mb-10"
        />
        <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {framework.map((step, idx) => (
            <StaggerItem key={step.title}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-700 uppercase tracking-[0.15em]">
                    Step {idx + 1}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-brand-700">
                    {idx % 2 === 0 ? <BarChart className="w-4 h-4" /> : <Telescope className="w-4 h-4" />}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>

      {/* Proof Band (Dark) */}
      <SectionDark variant="theater" motif="signal" padding="md" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Strategy that ships with observable signals and accountable outcomes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proof.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-200 mt-1">{stat.label}</div>
                <div className="text-xs text-cyan-100 mt-1">{stat.detail}</div>
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
        <div className="max-w-3xl text-center mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
            Make your GTM strategy defensible—and executable
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed">
            Let&apos;s align the narrative, ICP, and signals, then launch with measurable checkpoints. We build the route, wire the signals, and stay accountable to outcomes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn bg-white text-brand-900 hover:bg-white/90 px-6 py-3 text-base rounded-xl shadow-glow transition-all duration-300 hover:shadow-glow-violet"
            >
              Start a strategy engagement
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

