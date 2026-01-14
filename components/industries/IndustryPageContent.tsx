'use client'

import { CheckCircle2 } from 'lucide-react'
import { HeroDark } from '@/components/ui/HeroDark'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { SectionHeader } from '@/components/layout/Section'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { Card } from '@/components/ui/Card'
import { CTABand } from '@/components/ui/CTABand'
import { FadeIn } from '@/components/motion/FadeIn'
import { IndustryItem, ExpertiseItem, CaseStudyItem } from '@/lib/types'
import { TopoBackdrop, SignalField } from '@/components/motifs'
import { RelatedCaseStudies } from '@/components/ui/RelatedItems'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import { ensureHeroVisualWithImage } from '@/lib/heroVisualDefaults'

interface IndustryPageContentProps {
  industry: IndustryItem
  featuredExpertise: ExpertiseItem[]
  featuredCaseStudies?: CaseStudyItem[]
  whyNow?: string
}

export default function IndustryPageContent({ industry, featuredExpertise, featuredCaseStudies, whyNow }: IndustryPageContentProps) {
  const whyNowText = whyNow || `${industry.title} companies face unique GTM challenges. Modern growth plays and proven frameworks can accelerate pipeline while navigating industry-specific constraints.`
  const heroVisual =
    ensureHeroVisualWithImage(
      HERO_VISUALS.industries[industry.slug as keyof typeof HERO_VISUALS.industries] ||
        HERO_VISUALS.defaults.detail,
      'industries'
    ) ?? HERO_VISUALS.defaults.detail

  return (
    <>
      {/* Hero section */}
      <HeroDark
        align="left"
        motif={heroVisual?.motif || 'topo'}
        title={industry.title}
        description={industry.positioning || industry.description}
        primaryCta={{ label: 'Start a conversation', href: '/contact' }}
        secondaryCta={{ label: 'View case studies', href: '/case-studies' }}
        rightVisual={heroVisual}
        slug={industry.slug}
        kind="industries"
      >
        <p className="text-lg text-slate-200 max-w-2xl mt-4">
          {whyNowText}
        </p>
      </HeroDark>

      {/* GTM realities section */}
      {industry.gtmRealities && industry.gtmRealities.length > 0 && (
        <SectionLight variant="white" padding="lg" className="overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <TopoBackdrop intensity="subtle" variant="sparse" />
          </div>
          <div className="relative z-10">
            <SectionHeader
              label="GTM realities"
              title={`GTM realities in ${industry.title}`}
              description={`The constraints and opportunities that shape ${industry.title} go-to-market strategies.`}
              align="left"
              className="mb-8"
            />
            <FadeIn>
              <ul className="space-y-4 max-w-3xl">
                {industry.gtmRealities.map((reality, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <p className="text-slate-700 leading-relaxed">{reality}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </SectionLight>
      )}

      {/* Modern growth plays section */}
      {industry.playbook && industry.playbook.length > 0 && (
        <SectionDark variant="stats" motif="signal" padding="lg" className="overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
            <SignalField intensity="subtle" pattern="constellation" density="sparse" />
          </div>
          <div className="relative z-10">
            <SectionHeader
              label="Modern growth plays"
              title="Modern growth plays (2025+)"
              description="GTM strategies that work within industry constraints while driving measurable pipeline outcomes."
              align="left"
              className="mb-8 text-white"
            />
            <FadeIn>
              <ul className="space-y-4 max-w-3xl">
                {industry.playbook.map((play, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                    <p className="text-slate-200 leading-relaxed">{play}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </SectionDark>
      )}

      {/* Proof section */}
      {industry.proof && industry.proof.length > 0 && (
        <SectionLight variant="white" padding="lg" className="overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <TopoBackdrop intensity="subtle" variant="sparse" />
          </div>
          <div className="relative z-10">
            <SectionHeader
              label="Proof"
              title="How I've delivered / transferable proof"
              description={industry.proof.some(p => p.outcome.toLowerCase().includes('transferable')) 
                ? "These are transferable enterprise wins from adjacent verticals—proof that the frameworks work in similar environments."
                : "Real results from enterprise engagements demonstrating measurable pipeline outcomes."}
              align="left"
              className="mb-8"
            />
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
                {industry.proof.map((proofItem, idx) => (
                  <div key={idx} className="card p-6 h-full">
                    {proofItem.company && (
                      <div className="text-sm font-semibold text-brand-600 mb-2">
                        {proofItem.company}
                      </div>
                    )}
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {proofItem.outcome}
                    </h3>
                    {proofItem.metrics && (
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {proofItem.metrics}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </SectionLight>
      )}

      {/* Featured Case Studies section */}
      {featuredCaseStudies && featuredCaseStudies.length > 0 && (
        <SectionLight variant="white" padding="lg">
          <RelatedCaseStudies
            items={featuredCaseStudies}
            title={`${industry.title} Case Studies`}
            viewAllHref="/case-studies"
          />
        </SectionLight>
      )}

      {/* Relevant expertise section */}
      {featuredExpertise.length > 0 && (
        <SectionDark variant="stats" padding="lg" className="overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
            <SignalField intensity="subtle" pattern="constellation" density="sparse" />
          </div>
          <div className="relative z-10">
            <SectionHeader
              label="Relevant expertise"
              title="Relevant expertise"
              description={`GTM capabilities that power ${industry.title} pipeline outcomes.`}
              align="center"
              className="mb-10 text-white"
            />
            <CardGrid columns={3}>
              {featuredExpertise.map((expertise) => (
                <CardGridItem key={expertise.slug}>
                  <Card
                    title={expertise.title}
                    description={expertise.description ?? expertise.positioning ?? ''}
                    href={`/expertise/${expertise.slug}`}
                    icon={expertise.icon}
                    tags={expertise.tags}
                    variant="default"
                  />
                </CardGridItem>
              ))}
            </CardGrid>
          </div>
        </SectionDark>
      )}

      {/* CTA Band */}
      <CTABand
        title={`Ready to accelerate your ${industry.title.toLowerCase()} GTM?`}
        description="Let's discuss how modern growth plays and proven frameworks can accelerate your pipeline."
        primaryCta={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
        variant="dark"
      />
    </>
  )
}

