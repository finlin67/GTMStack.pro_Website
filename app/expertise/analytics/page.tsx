import { Metadata } from 'next'
import Link from 'next/link'
import { BarChart3, ArrowLeft } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { CTABand } from '@/components/ui/CTABand'
import { FadeIn } from '@/components/motion/FadeIn'
import { getExpertiseByPillar } from '@/content/expertise'

export const metadata: Metadata = {
  title: 'Revenue Analytics',
  description:
    'Data pipelines, attribution modeling, and performance dashboards that drive data-informed decisions.',
}

export default function AnalyticsPillarPage() {
  const expertiseItems = getExpertiseByPillar('analytics')

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
              <span className="text-slate-900">Revenue Analytics</span>
            </nav>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                  Revenue Analytics
                </h1>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                  Data pipelines, attribution modeling, and performance dashboards. 
                  Transform raw data into actionable insights that drive revenue growth.
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
              You can&apos;t optimize what you can&apos;t measure. This pillar focuses on building the 
              analytics infrastructure that connects marketing activity to business outcomes, 
              enabling data-driven decisions at every level of your organization.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Expertise Cards */}
      <Section background="gradient" padding="lg">
        <SectionHeader
          title="Analytics Capabilities"
          description={`${expertiseItems.length} specialized areas within Revenue Analytics.`}
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
              <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
              <p className="text-sm text-slate-600">Improvement in marketing ROI visibility</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">70%</div>
              <p className="text-sm text-slate-600">Faster time-to-insight</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">2x</div>
              <p className="text-sm text-slate-600">Better budget allocation decisions</p>
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
        title="Need better visibility into your GTM performance?"
        description="Let's build the analytics foundation you need to make confident decisions."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
        variant="gradient"
      />
    </>
  )
}

