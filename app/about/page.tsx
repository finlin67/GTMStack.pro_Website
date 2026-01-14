import { Metadata } from 'next'
import {
  Compass,
  CircuitBoard,
  LineChart,
  Layers,
  Sparkles,
  Target,
  Telescope,
  Workflow,
} from 'lucide-react'
import { HeroDark } from '@/components/ui/HeroDark'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import { SectionHeader } from '@/components/layout/Section'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { CTABand } from '@/components/ui/CTABand'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { Reveal } from '@/components/ui/Reveal'
import { TopoBackdrop, PathwayOverlay, SignalField, StackedPlanes } from '@/components/motifs'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about GTMstack.pro - strategic GTM consulting for B2B technology companies with 12+ years of experience.',
}

const timeline = [
  {
    year: '2024–Present',
    title: 'Independent GTM Architect',
    company: 'GTMstack.pro',
    description: 'Founder-led GTM systems for B2B SaaS; strategy + data + automation as one stack.',
  },
  {
    year: '2019–2023',
    title: 'VP Growth',
    company: 'Series C SaaS',
    description: 'Scaled ARR from $8M to $45M with integrated revenue engine and accountable ops.',
  },
  {
    year: '2016–2019',
    title: 'Director Demand Gen',
    company: 'Enterprise Software',
    description: 'Built demand gen from zero; 4x pipeline via attribution-led programs.',
  },
  {
    year: '2012–2016',
    title: 'Early Growth Roles',
    company: 'B2B Tech Startups',
    description: 'Hands-on across automation, analytics, and experimentation from seed to Series B.',
  },
]

const operatingSteps = [
  {
    icon: Telescope,
    title: 'Map the terrain',
    description: 'Clarify ICP, problem-solution fit, and the revenue narrative with data-led discovery.',
  },
  {
    icon: Workflow,
    title: 'Design the system',
    description: 'Architect the GTM stack: strategy, data layer, automation, plays, and measurement.',
  },
  {
    icon: CircuitBoard,
    title: 'Instrument & automate',
    description: 'Implement pipelines, scoring, routing, and journeys with clean observability.',
  },
  {
    icon: LineChart,
    title: 'Run accountable plays',
    description: 'Activate ABM, lifecycle, and expansion programs with closed-loop reporting.',
  },
]

const differentiators = [
  {
    icon: Compass,
    title: 'Operator-first',
    description: 'Built and ran GTM engines personally—no theory decks.',
  },
  {
    icon: Layers,
    title: 'Full-stack GTM',
    description: 'Strategy, data, automation, and creative aligned as one system.',
  },
  {
    icon: Target,
    title: 'Outcome-led',
    description: 'Metrics first: pipeline quality, velocity, and ARR efficiency.',
  },
  {
    icon: Sparkles,
    title: 'Momentum mindset',
    description: 'Route-based roadmaps with clear milestones and progression.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Reveal>
        <HeroDark
          align="left"
          motif={HERO_VISUALS.defaults.topLevel.motif || 'pathway'}
          title="Founder-led GTM systems that scale"
          titleHighlight="GTMstack"
          description="GTMstack is the GTM + Stack: strategy, data, automation, and optimization working as one operating system for B2B growth."
          primaryCta={{ label: 'View expertise', href: '/expertise' }}
          secondaryCta={{ label: 'See case studies', href: '/case-studies' }}
          rightVisual={HERO_VISUALS.defaults.topLevel}
        />
      </Reveal>

      {/* GTM Journey / Timeline (Light) */}
      <Reveal delay={0.05}>
        <SectionLight variant="white" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <TopoBackdrop intensity="subtle" variant="sparse" />
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 relative">
          <FadeIn>
            <SectionHeader
              label="GTM Journey"
              title="Operator-built GTM, now a dedicated system"
              description="A route-map from early growth roles to building accountable GTM engines and launching GTMstack as a founder-led practice."
            />
            <div className="mt-6 space-y-5 text-slate-700 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Across in-house and advisory roles, the common thread has been building GTM as an operating system: clear narrative, data layer, automation spine, and plays that compound.
              </p>
              <p>
                GTMstack exists to bring that system to B2B teams that need enterprise-grade rigor without enterprise drag—focused on velocity, quality pipeline, and durable ARR.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <PathwayOverlay intensity="subtle" paths="simple" accent />
              </div>
              <StaggerContainer className="space-y-6 relative">
                {timeline.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="relative pl-6 pb-6 border-l border-slate-200/80 last:pb-0">
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-brand-600 shadow-glow -translate-x-[7px]" />
                      <span className="text-[11px] md:text-xs font-medium text-brand-600 uppercase tracking-[0.18em]">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-lg text-slate-900 mt-1 leading-snug">{item.title}</h4>
                      <p className="text-sm md:text-base text-slate-500">{item.company}</p>
                      <p className="text-sm md:text-base text-slate-600 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </SectionLight>
      </Reveal>

      {/* How I Work / Operating System (Dark) */}
      <Reveal delay={0.1}>
        <SectionDark
          variant="theater"
          motif="signal"
          padding="lg"
          className="overflow-hidden"
          containerClassName="relative"
          accentOrb
        >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <StackedPlanes intensity="subtle" />
        </div>
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start relative">
          <FadeIn>
            <SectionHeader
              label="Operating system"
              title="A route-map for accountable GTM"
              description="Strategy, data, automation, and plays are designed together—so every motion is observable, repeatable, and tied to revenue."
              className="text-white"
            />
            <p className="mt-5 text-slate-200 text-base md:text-lg leading-relaxed max-w-3xl">
              Each engagement follows a route: map the terrain, design the stack, instrument and automate, then run accountable plays. The result is a GTM engine you can operate—and scale—without guesswork.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 relative z-10">
            {operatingSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/30 via-cool-500/25 to-cyan-500/25 border border-white/10 flex items-center justify-center text-white">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-brand-200">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionDark>
      </Reveal>

      {/* Why GTMstack (Light) */}
      <Reveal delay={0.1}>
        <SectionLight variant="slate" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <PathwayOverlay intensity="subtle" paths="simple" />
        </div>
        <SectionHeader
          label="Why GTMstack"
          title="Partner mindset, operator depth"
          description="Outcome-led GTM: clear milestones, accountable metrics, and a stack you can run after we ship."
          align="center"
          className="mb-12"
        />
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {differentiators.map((item, index) => (
            <StaggerItem key={item.title}>
              <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
                <div className="p-6 flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-brand-700">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="absolute right-4 bottom-4 w-10 h-10 opacity-25">
                  <PathwayOverlay intensity="subtle" paths="simple" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>
      </Reveal>

      {/* CTA (Dark) */}
      <Reveal delay={0.1}>
        <SectionDark variant="cta" motif="signal" padding="lg" accentOrb className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <SignalField intensity="subtle" pattern="mesh" density="sparse" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <PathwayOverlay intensity="subtle" paths="simple" accent />
        </div>
        <div className="max-w-3xl text-center mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
            Build your GTM engine with a founder-operator partner
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed">
            Let&apos;s map the route, wire the stack, and launch accountable plays that compound. No fluff—just a GTM system you can run.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn bg-white text-brand-900 hover:bg-white/90 px-6 py-3 text-base rounded-xl shadow-glow transition-all duration-300 hover:shadow-glow-violet"
            >
              Get in touch
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
      </Reveal>
    </>
  )
}

