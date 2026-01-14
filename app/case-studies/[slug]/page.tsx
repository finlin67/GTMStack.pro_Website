import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle2, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { SectionHeader } from '@/components/layout/Section'
import { CTABand } from '@/components/ui/CTABand'
import { RelatedCaseStudies, RelatedExpertise } from '@/components/ui/RelatedItems'
import { HeroDark } from '@/components/ui/HeroDark'
import { AnimatedStatCard } from '@/components/ui/AnimatedStatCard'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { caseStudyItems, getCaseStudyBySlug } from '@/content/case-studies'
import { expertiseItems } from '@/content/expertise'
import { industryItems } from '@/content/industries'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import { ensureHeroVisualWithImage } from '@/lib/heroVisualDefaults'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return caseStudyItems.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getCaseStudyBySlug(params.slug)
  if (!item) return { title: 'Not Found' }

  return {
    title: `${item.title} Case Study | GTMstack.pro`,
    description: item.description,
  }
}

export default function CaseStudyDetailPage({ params }: Props) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const industry = industryItems.find((i) => i.slug === caseStudy.industry)
  const relatedExpertise = expertiseItems
    .filter((e) => caseStudy.expertise.includes(e.slug))
    .slice(0, 3)
  const relatedCaseStudies = caseStudyItems
    .filter((c) => c.slug !== caseStudy.slug && c.industry === caseStudy.industry)
    .slice(0, 2)

  // Extract outcome headline from title (already outcome-first)
  const outcomeHeadline = caseStudy.title
  const outcomeSubhead = caseStudy.description

  // Parse solution into route map steps (split by periods/sentences, max 5)
  const solutionSteps = caseStudy.solution
    .split(/[.!?]\s+/)
    .filter((s) => s.trim().length > 20)
    .slice(0, 5)
    .map((step, idx) => ({
      number: idx + 1,
      title: step.split(',')[0].trim(),
      description: step.trim(),
    }))

  // Mock execution stack (channels/tools) - could be enhanced with real data
  const executionStack = [
    { category: 'Channels', items: caseStudy.tags.slice(0, 3) },
    { category: 'Tools', items: ['HubSpot', 'Salesforce', 'Looker'] },
    { category: 'MarTech', items: ['Attribution', 'Analytics', 'Automation'] },
  ]

  return (
    <>
      {/* Dark Hero with abstract header visual */}
      <HeroDark
        label={caseStudy.client}
        title={outcomeHeadline}
        description={outcomeSubhead}
        primaryCta={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCta={{ label: 'View All Case Studies', href: '/case-studies' }}
        align="left"
        size="default"
        motif={HERO_VISUALS.defaults.detail.motif || 'signal'}
        rightVisual={ensureHeroVisualWithImage(HERO_VISUALS.defaults.detail, 'caseStudies')}
        className="relative"
        slug={params.slug}
        kind="projects"
      >
        {/* Chips row */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          {industry && (
            <Link
              href={`/industries/${industry.slug}`}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              {industry.title}
            </Link>
          )}
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm backdrop-blur-sm">
            {caseStudy.year}
          </span>
          {caseStudy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </HeroDark>

      {/* Light Context / Challenge */}
      <SectionLight variant="white" padding="lg">
        <div className="max-w-4xl">
          <SectionHeader
            label="Context"
            title="The Challenge"
            className="mb-8"
          />
          <FadeIn>
            <div className="prose-brand max-w-3xl">
              <p className="text-lg text-slate-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionLight>

      {/* Dark Approach / Route Map */}
      <SectionDark variant="theater" padding="lg" motif="pathway" accentOrb>
        <div className="mb-12 max-w-3xl">
          <span className="inline-block text-sm font-semibold text-brand-400 tracking-wide uppercase mb-3">
            Approach
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance mb-4">
            The Route Map
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Step-by-step path from challenge to outcome.
          </p>
        </div>
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionSteps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="relative group">
                <div className="dark-card p-6 h-full hover:border-brand-500/30 transition-all duration-300 hover:shadow-glow-violet">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-300 font-bold text-lg shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionDark>

      {/* Light Execution Stack */}
      <SectionLight variant="slate" padding="lg">
        <SectionHeader
          label="Execution"
          title="The Stack"
          description="Channels, tools, and MarTech used to deliver results."
          className="mb-12"
        />
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {executionStack.map((stack, idx) => (
            <StaggerItem key={idx}>
              <div className="card p-6 h-full hover:shadow-medium transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-brand-600" />
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionLight>

      {/* Dark Results Theater */}
      <SectionDark variant="theater" padding="lg" motif="signal" accentOrb>
        <div className="mb-12 max-w-3xl">
          <span className="inline-block text-sm font-semibold text-brand-400 tracking-wide uppercase mb-3">
            Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Outcomes Delivered
          </h2>
        </div>
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudy.metrics.map((metric, idx) => (
            <AnimatedStatCard key={metric.label} index={idx}>
              <div className="dark-card p-8 text-center border-brand-500/20 hover:border-brand-500/40 transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-brand-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-400 via-cool-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <p className="text-sm text-slate-300 mb-1">{metric.label}</p>
                {metric.change && (
                  <p className="text-xs text-gold-400 font-medium">{metric.change}</p>
                )}
              </div>
            </AnimatedStatCard>
          ))}
        </StaggerContainer>

        {/* Key Results List */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {caseStudy.results.map((result, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200">{result}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </SectionDark>

      {/* Light Lessons / What's Next */}
      <SectionLight variant="white" padding="lg">
        <div className="max-w-4xl">
          <SectionHeader
            label="Lessons"
            title="What's Next"
            description="Key takeaways and ongoing opportunities."
            className="mb-8"
          />
          <FadeIn>
            <div className="prose-brand max-w-3xl">
              <p className="text-lg text-slate-700 leading-relaxed">
                This engagement demonstrates the power of a systematic, data-driven approach to GTM.
                The results speak to the importance of clear strategy, proper execution infrastructure,
                and continuous optimization. Moving forward, the focus shifts to scaling these wins
                and identifying the next growth lever.
              </p>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-brand-600" />
                    Ongoing Optimization
                  </h3>
                  <p className="text-sm text-slate-600">
                    Continuous monitoring and refinement to maintain momentum and identify new opportunities.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-brand-600" />
                    Scale & Expand
                  </h3>
                  <p className="text-sm text-slate-600">
                    Apply proven frameworks to adjacent markets, channels, or product lines.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
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
            title="Expertise Applied"
            viewAllHref="/expertise"
          />
        </SectionLight>
      )}

      {/* Dark CTA */}
      <SectionDark variant="cta" padding="lg" motif="signal" accentOrb>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Ready for results like these?
            </h2>
            <p className="text-lg text-white/90">
              Let&apos;s discuss how I can help accelerate your growth.
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
              href="/case-studies"
              className="btn text-white/90 hover:text-white hover:bg-white/10 px-6 py-3 text-base rounded-xl"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </SectionDark>
    </>
  )
}

