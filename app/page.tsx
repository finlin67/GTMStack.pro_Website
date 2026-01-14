import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, BarChart3, Workflow, TrendingUp, CheckCircle2, Building2, DollarSign, Calendar, Minus, Plus, FileText, Settings } from 'lucide-react'
import { HeroDark } from '@/components/ui/HeroDark'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import ProblemPromise from '@/components/sections/ProblemPromise'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { SectionHeader } from '@/components/layout/Section'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import {
  HoverScale,
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/FadeIn'
import { Reveal } from '@/components/ui/Reveal'
import { SignalField, StackedPlanes } from '@/components/motifs'
import { PILLARS } from '@/lib/types'
import { getFeaturedCaseStudies } from '@/content/case-studies'
import { StatsSection } from '@/components/sections/StatsSection'

const stats = [
  { value: '50+', label: 'B2B Companies', description: 'Helped scale', icon: 'Building2', sparkline: [20, 35, 28, 45, 38, 50] },
  { value: '$500M+', label: 'Pipeline Generated', description: 'Across clients', icon: 'DollarSign', sparkline: [100, 200, 180, 300, 350, 400, 500] },
  { value: '47%', label: 'Avg. Growth', description: 'MRR increase', icon: 'TrendingUp', sparkline: [10, 20, 25, 30, 35, 40, 47] },
  { value: '12+', label: 'Years', description: 'GTM experience', icon: 'Calendar', sparkline: [2, 4, 6, 8, 10, 12] },
]

const pillarIcons = {
  'content-engagement': FileText,
  'demand-growth': TrendingUp,
  'strategy-insights': Target,
  'systems-operations': Settings,
}

const valueProps = [
  'Deep B2B SaaS expertise across 50+ engagements',
  'Data-driven approach with measurable outcomes',
  'End-to-end execution, not just strategy decks',
  'Integrated thinking across the full GTM stack',
]

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies().slice(0, 3)

  return (
    <>
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <Reveal>
      <HeroDark
          label="GTM Strategy for B2B Technology"
        title="Turn your go-to-market into a"
        titleHighlight="growth engine"
          description="Strategic GTM consulting that bridges the gap between strategy and execution. Building scalable systems that drive predictable, measurable growth."
        size="large"
          motif="topo"
          primaryCta={{
            label: 'Get Started',
            href: '/contact',
          }}
          secondaryCta={{
            label: 'View Expertise',
            href: '/expertise',
          }}
          rightVisual={{ variant: 'signatureConstellation' }}
      />
      </Reveal>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      {/* ============================================
          SECTION 2: PROBLEM → PROMISE
          ============================================ */}
      <Reveal>
        <ProblemPromise />
      </Reveal>

      {/* ============================================
          SECTION 3: SERVICES SNAPSHOT
          ============================================ */}
      <Reveal>
      <SectionLight variant="white" padding="lg">
        {/* Stacked planes motif - reduced opacity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <StackedPlanes intensity="subtle" orientation="diagonal" layers={4} />
        </div>

        <div className="relative z-10">
          {/* Header - unified with SectionHeader */}
          <SectionHeader
            label="Services"
            title="Full-stack GTM capabilities"
            description="Four interconnected pillars plus specialized modules across the complete go-to-market journey."
            align="center"
            className="mb-16"
          />

          {/* 4 Pillars - Primary Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PILLARS.map((pillar, index) => {
              const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons]
              return (
                <StaggerItem key={pillar.id}>
                  <Link href={pillar.href} className="group block h-full">
                    <div className="relative h-full p-7 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 group-hover:border-brand-400/50 group-hover:shadow-glow-violet group-hover:-translate-y-1">
                      {/* Subtle accent glaze on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cool-400/0 via-cool-400/0 to-cyan-400/0 group-hover:from-cool-400/3 group-hover:via-cool-400/2 group-hover:to-cyan-400/3 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:from-brand-500 group-hover:to-cool-400">
                          <Icon className="w-7 h-7 transition-all duration-300" />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-4">
                          {pillar.description}
                        </p>
                        <div className="pt-4 border-t border-slate-100">
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                            Explore pillar
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

        </div>
      </SectionLight>
      </Reveal>

      {/* ============================================
          SECTION 4: PROOF & CREDIBILITY
          ============================================ */}
      <Reveal>
        <StatsSection stats={stats} />
      </Reveal>

      {/* ============================================
          SECTION 5: FEATURED CASE STUDIES
          ============================================ */}
      <Reveal>
        <SectionDark
          variant="theater"
          padding="lg"
          motif="pathway"
          accentOrb
          className="bg-gradient-to-b from-slate-950 via-slate-950 to-brand-950"
        >
        {/* Soft data-constellation background - reduced opacity */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>

        <div className="relative z-10">
          {/* Abstract header strip */}
          <div className="relative h-24 mb-12 overflow-hidden rounded-t-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 via-cool-500/15 via-cyan-500/20 to-brand-600/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-sm font-semibold text-brand-400 tracking-wide uppercase mb-3">
                Results
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                Proven outcomes
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl">
                Real impact for real companies. See how we&apos;ve helped B2B tech companies accelerate growth.
              </p>
            </div>
            <Link
              href="/case-studies"
            className="btn bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-500/30 px-5 py-2.5 rounded-xl shrink-0 transition-all duration-300 group"
            >
            <span className="inline-flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            </Link>
          </div>

          <CardGrid columns={3}>
            <StaggerContainer className="contents">
            {featuredCaseStudies.map((study) => (
                <StaggerItem key={study.slug}>
                  <CardGridItem>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 h-full overflow-hidden rounded-2xl group hover:bg-white/10 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/20">
                  {/* Brighter top gradient bar */}
                  <div className="h-1.5 bg-gradient-to-r from-brand-400 via-cool-400 via-cyan-400 to-brand-400 group-hover:from-brand-300 group-hover:via-cool-300 group-hover:via-cyan-300 group-hover:to-brand-300 transition-all duration-300" />
                  
                  {/* Faint inner glow on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 via-cool-500/0 to-cyan-500/0 group-hover:from-brand-500/10 group-hover:via-cool-500/10 group-hover:to-cyan-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
                  
                  <div className="relative z-10 p-6">
                    <span className="inline-block text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                      {study.client}
                    </span>
                    <h3 className="font-semibold text-lg text-white group-hover:text-brand-300 transition-colors mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 mb-4">
                      {study.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label} className="text-center">
                          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-300 via-brand-400 to-cool-400 bg-clip-text text-transparent">
                            {metric.value}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardGridItem>
                </StaggerItem>
            ))}
            </StaggerContainer>
          </CardGrid>
        </div>
      </SectionDark>
      </Reveal>

      {/* ============================================
          SECTION 6: WHY WORK WITH GTMSTACK
          ============================================ */}
      <Reveal>
      <SectionLight variant="slate" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader
              label="Why Work With Us"
              title="Strategy meets execution"
              description="Most consulting firms deliver strategy decks. We deliver results. With 12+ years in B2B GTM, we bridge the gap between strategy and execution—where most companies fail."
              className="mb-0"
            />

            <StaggerContainer className="mt-8 space-y-6 relative">
              {valueProps.map((prop, index) => {
                const iconGradient = index % 2 === 0 
                  ? 'from-brand-500 to-brand-600' 
                  : 'from-cool-500 to-cyan-500'
                
                return (
                  <StaggerItem key={prop} className="relative flex items-start gap-4">
                    {/* Pathway connector line */}
                    {index < valueProps.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent" />
                    )}
                    
                    {/* Geometric line icon */}
                    <div className={`relative shrink-0 mt-0.5 w-6 h-6 rounded flex items-center justify-center bg-gradient-to-br ${iconGradient} opacity-80`}>
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 16 16"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        {index % 2 === 0 ? (
                          // Diagonal line for brand
                          <line x1="4" y1="4" x2="12" y2="12" />
                        ) : (
                          // Horizontal + vertical for cool
                          <>
                            <line x1="4" y1="8" x2="12" y2="8" />
                            <line x1="8" y1="4" x2="8" y2="12" />
                          </>
                        )}
                      </svg>
                    </div>
                    
                    <span className="text-slate-700 leading-relaxed flex-1 pt-0.5">{prop}</span>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="btn btn-primary px-6 py-3 rounded-xl animate-glow-pulse shadow-glow transition-all duration-300 hover:shadow-glow-violet group"
              >
                <span className="inline-flex items-center gap-2">
                Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="btn bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-500/30 px-6 py-3 rounded-xl transition-all duration-300 group"
              >
                <span className="inline-flex items-center gap-2">
                Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/60 p-8 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-15" />
                
                {/* Abstract stack + signals visual */}
                <div className="relative h-full flex flex-col justify-center">
                  {/* Stacked layers */}
                  <div className="relative mb-8">
                    {[0, 1, 2].map((layer) => (
                      <div
                        key={layer}
                        className="absolute left-1/2 -translate-x-1/2 rounded-lg border-2"
                        style={{
                          width: `${100 - layer * 15}%`,
                          height: '60px',
                          bottom: `${layer * 20}px`,
                          borderColor: layer === 0 ? 'rgb(90 108 242 / 0.3)' : layer === 1 ? 'rgb(139 92 246 / 0.2)' : 'rgb(34 211 238 / 0.15)',
                          backgroundColor: layer === 0 ? 'rgb(90 108 242 / 0.05)' : layer === 1 ? 'rgb(139 92 246 / 0.03)' : 'rgb(34 211 238 / 0.02)',
                          transform: `translateX(-50%) translateY(${layer * 20}px)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Signal dots/constellation */}
                  <div className="relative h-32 flex items-center justify-center">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i / 12) * Math.PI * 2
                      const radius = 40 + (i % 3) * 15
                      const x = Math.cos(angle) * radius
                      const y = Math.sin(angle) * radius
                      const size = 4 + (i % 2) * 2
                      const opacity = 0.4 + (i % 3) * 0.2
                      
                      return (
                        <div
                          key={i}
                          className="absolute rounded-full bg-gradient-to-br from-brand-500 to-cool-500"
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            opacity,
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      )
                    })}
                    
                    {/* Connecting lines between signals - reduced opacity */}
                    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {Array.from({ length: 6 }).map((_, i) => {
                        const angle1 = (i / 6) * Math.PI * 2
                        const angle2 = ((i + 2) / 6) * Math.PI * 2
                        const radius = 30
                        const x1 = 50 + Math.cos(angle1) * radius
                        const y1 = 50 + Math.sin(angle1) * radius
                        const x2 = 50 + Math.cos(angle2) * radius
                        const y2 = 50 + Math.sin(angle2) * radius
                        
                        return (
                          <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="rgb(90 108 242)"
                            strokeWidth="0.5"
                            strokeOpacity="0.3"
                          />
                        )
                      })}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </SectionLight>
      </Reveal>

      {/* ============================================
          SECTION 7: FINAL CTA
          ============================================ */}
      <Reveal>
        <SectionDark
          variant="cta"
          padding="lg"
          motif="signal"
          accentOrb
          className="bg-gradient-to-br from-brand-900 via-brand-800 via-brand-700 to-brand-950"
        >
        {/* Converging route-line motif pointing toward primary CTA - reduced opacity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-15">
            {/* Converging lines from edges toward center (where primary button is) */}
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(90 108 242)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(34 211 238)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Lines converging from top corners */}
            <line
              x1="10%"
              y1="20%"
              x2="50%"
              y2="65%"
              stroke="url(#routeGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="90%"
              y1="20%"
              x2="50%"
              y2="65%"
              stroke="url(#routeGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            
            {/* Lines converging from side edges */}
            <line
              x1="5%"
              y1="40%"
              x2="50%"
              y2="65%"
              stroke="url(#routeGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="95%"
              y1="40%"
              x2="50%"
              y2="65%"
              stroke="url(#routeGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            
            {/* Central convergence point indicator */}
            <circle
              cx="50%"
              cy="65%"
              r="3"
              fill="rgb(139 92 246)"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to accelerate your GTM?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let&apos;s discuss how to turn your go-to-market into a competitive advantage.
            </p>
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-4 relative">
            <StaggerItem>
              <HoverScale>
              <Link
                href="/contact"
                  className="relative btn bg-brand-500 text-white hover:bg-brand-400 px-6 py-3 text-base rounded-xl group shadow-glow transition-all duration-300 hover:shadow-glow-violet animate-glow-pulse overflow-visible will-change-[filter]"
              >
                {/* Soft animated glow on hover - behind button - optimized */}
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-cool-400/0 via-cool-400/0 to-cyan-400/0 group-hover:from-cool-400/40 group-hover:via-cool-400/50 group-hover:to-cyan-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl -z-10 will-change-[opacity]" />
                
                {/* Inner glow on hover - optimized */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cool-400/0 via-cool-400/0 to-cyan-400/0 group-hover:from-cool-400/20 group-hover:via-cool-400/30 group-hover:to-cyan-400/20 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-sm will-change-[opacity]" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              </HoverScale>
            </StaggerItem>
            <StaggerItem>
              <HoverScale>
              <Link
                href="/case-studies"
                  className="btn bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-500/30 px-6 py-3 text-base rounded-xl transition-all duration-300 group"
              >
                  <span className="inline-flex items-center gap-2">
                View Case Studies
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
              </Link>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionDark>
      </Reveal>
    </>
  )
}
