import { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, ArrowLeft } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { CTABand } from '@/components/ui/CTABand'
import { FadeIn } from '@/components/motion/FadeIn'
import { getExpertiseByPillar } from '@/content/expertise'

export const metadata: Metadata = {
  title: 'Growth Optimization',
  description:
    'Conversion rate optimization, A/B testing, and growth experiments that maximize your GTM performance.',
}

export default function OptimizationPillarPage() {
  const expertiseItems = getExpertiseByPillar('optimization')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="container-width relative">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link href="/" className="text-slate-500 hover:text-brand-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/expertise" className="text-slate-500 hover:text-brand-600 transition-colors">
                Expertise
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900">Growth Optimization</span>
            </nav>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                  Growth Optimization
                </h1>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                  Conversion rate optimization, A/B testing, and growth experiments. 
                  Systematically improve every stage of your customer journey.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <Section background="white" padding="md">
        <FadeIn>
          <div className="prose-brand max-w-3xl">
            <p className="text-lg leading-relaxed">
              Growth isn&apos;t about luck—it&apos;s about systematic experimentation. This pillar 
              focuses on building a culture and process for continuous improvement through 
              rigorous testing, measurement, and iteration across your entire funnel.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Expertise Cards */}
      <Section background="gradient" padding="lg">
        <SectionHeader
          title="Optimization Capabilities"
          description={`${expertiseItems.length} specialized areas within Growth Optimization.`}
          className="mb-8"
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
                variant={item.featured ? 'featured' : 'default'}
              />
            </CardGridItem>
          ))}
        </CardGrid>
      </Section>

      {/* Key Outcomes */}
      <Section background="white" padding="lg">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">34%</div>
              <p className="text-sm text-slate-600">Average conversion lift</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">100+</div>
              <p className="text-sm text-slate-600">Experiments run per year</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">2 weeks</div>
              <p className="text-sm text-slate-600">Average test cycle time</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Back Link */}
      <Section background="slate" padding="sm">
        <Link
          href="/expertise"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Expertise
        </Link>
      </Section>

      {/* CTA */}
      <CTABand
        title="Ready to optimize your growth?"
        description="Let's build a systematic approach to continuous improvement."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
        variant="gradient"
      />
    </>
  )
}

