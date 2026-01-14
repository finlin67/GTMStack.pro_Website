'use client'

import { useState, useMemo } from 'react'
import { ArrowRight, Compass, Layers, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/layout/Section'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { HeroDark } from '@/components/ui/HeroDark'
import { ensureHeroVisualWithImage } from '@/lib/heroVisualDefaults'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import { CaseStudyCard } from '@/components/ui/Card'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { FilterChips } from '@/components/ui/FilterChips'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { caseStudyItems, getAllCaseStudyTags } from '@/content/case-studies'
import { SignalField, PathwayOverlay } from '@/components/motifs'

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const allTags = getAllCaseStudyTags()

  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) return caseStudyItems
    return caseStudyItems.filter((item) =>
      selectedTags.some((tag) => item.tags.includes(tag))
    )
  }, [selectedTags])

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const handleClearAll = () => {
    setSelectedTags([])
  }

  // Featured projects
  const featuredProjects = caseStudyItems.filter((item) => item.featured)
  const topOutcomes = [
    { value: '$500M+', label: 'Pipeline influenced', detail: 'across B2B GTM motions' },
    { value: '3-5x', label: 'Pipeline efficiency', detail: 'from signal-led routing' },
    { value: '40%', label: 'Win-rate lift', detail: 'with defensible positioning' },
  ]

  const framework = [
    { title: 'Align on outcomes', description: 'Define the outcome-first brief, success criteria, and proof signals.' },
    { title: 'Design the motion', description: 'Select channels, offers, and routes with measurable checkpoints.' },
    { title: 'Instrument & launch', description: 'Wire data, routing, automation, and dashboards for observability.' },
    { title: 'Optimize to proof', description: 'Run sprints, tune levers, and lock proof before scaling spend.' },
  ]

  return (
    <>
      {/* Hero (Dark) */}
      <HeroDark
        align="left"
        motif={HERO_VISUALS.caseStudies.default.motif || 'signal'}
        title="Outcome-first GTM projects"
        titleHighlight="proven signals"
        description="B2B outcomes delivered with accountable motions—positioning, data, automation, and plays working together."
        primaryCta={{ label: 'View featured results', href: '#featured' }}
        secondaryCta={{ label: 'See all', href: '#all-projects' }}
        rightVisual={ensureHeroVisualWithImage(HERO_VISUALS.caseStudies.default, 'caseStudies')}
      />

      {/* Featured Projects (Light Filters + Grid) */}
      <SectionLight variant="white" className="overflow-hidden" id="featured">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <SectionHeader
            label="Featured"
            title="Standout results"
            description="Outcome-led projects across GTM strategy, demand, and revenue ops."
          />
          <a
            href="#all-projects"
            className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-500 transition-colors"
          >
            Browse all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <CardGrid columns={2}>
          {featuredProjects.slice(0, 4).map((project) => (
            <CardGridItem key={project.slug}>
              <CaseStudyCard
                title={project.title}
                client={project.client}
                description={project.description}
                href={`/projects/${project.slug}`}
                tags={project.tags}
                metrics={project.metrics}
                featured
              />
            </CardGridItem>
          ))}
        </CardGrid>
      </SectionLight>

      {/* All Projects with Filters (Light) */}
      <SectionLight variant="slate" className="overflow-hidden" id="all-projects">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <SectionHeader
            label="Explore"
            title="Browse all projects"
            description="Filter by tag or scan outcomes by topic."
          />
        </div>

        <FadeIn>
          <FilterChips
            tags={allTags.slice(0, 12)}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClearAll={handleClearAll}
            className="mb-8"
          />
        </FadeIn>

        <CardGrid columns={2}>
          {filteredItems.map((project) => (
            <CardGridItem key={project.slug}>
              <CaseStudyCard
                title={project.title}
                client={project.client}
                description={project.description}
                href={`/projects/${project.slug}`}
                tags={project.tags}
                metrics={project.metrics}
                featured={project.featured}
              />
            </CardGridItem>
          ))}
        </CardGrid>

        {filteredItems.length === 0 && (
          <FadeIn>
            <div className="text-center py-12">
              <p className="text-slate-500">No projects found for this filter.</p>
              <button
                onClick={handleClearAll}
                className="mt-2 text-brand-600 hover:text-brand-700"
              >
                Clear filters
              </button>
            </div>
          </FadeIn>
        )}
      </SectionLight>

      {/* Top Outcomes (Dark Proof) */}
      <SectionDark variant="stats" motif="signal" padding="md" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Top outcomes across GTM programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topOutcomes.map((stat) => (
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

      {/* How we drive results (Light) */}
      <SectionLight variant="white" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <PathwayOverlay intensity="subtle" paths="simple" />
        </div>
        <SectionHeader
          label="How we drive results"
          title="Outcome-first GTM, shipped like a product"
          description="Every project follows a productized route: outcome brief, motion design, instrumentation, proof."
          align="center"
          className="mb-10"
        />
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {framework.map((step, idx) => (
            <StaggerItem key={step.title}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-700 uppercase tracking-[0.15em]">
                    Step {idx + 1}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50 border border-slate-200 flex items-center justify-center text-brand-700">
                    {idx % 2 === 0 ? <Compass className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>

      {/* CTA (Dark) */}
      <SectionDark variant="cta" motif="signal" padding="lg" accentOrb className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <SignalField intensity="subtle" pattern="mesh" density="sparse" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <PathwayOverlay intensity="subtle" paths="simple" accent />
        </div>
        <div className="max-w-3xl text-center mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
            Want outcomes like these?
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed">
            Let&apos;s map the route, instrument the signals, and launch the motion that delivers your next proof point.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn bg-white text-brand-900 hover:bg-white/90 px-6 py-3 text-base rounded-xl shadow-glow transition-all duration-300 hover:shadow-glow-violet"
            >
              Start a project
            </a>
            <a
              href="/expertise"
              className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-3 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Explore expertise
            </a>
          </div>
        </div>
      </SectionDark>
    </>
  )
}

