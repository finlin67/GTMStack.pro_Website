'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { HeroDark } from '@/components/ui/HeroDark'
import { HERO_VISUALS } from '@/lib/heroVisuals'
import { ensureHeroVisualWithImage } from '@/lib/heroVisualDefaults'
import { SectionDark } from '@/components/layout/SectionDark'
import { SectionLight } from '@/components/layout/SectionLight'
import { SectionHeader } from '@/components/layout/Section'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { Card } from '@/components/ui/Card'
import { CTABand } from '@/components/ui/CTABand'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { industryItems } from '@/content/industries'
import { PILLARS } from '@/lib/types'
import { TopoBackdrop, SignalField } from '@/components/motifs'

type IconName = keyof typeof Icons

// Get featured industries
const featuredIndustries = industryItems.filter(item => item.featured)

// Get all industries, sorted alphabetically by title
const allIndustries = [...industryItems].sort((a, b) => a.title.localeCompare(b.title))

export default function IndustriesPage() {
  return (
    <>
      {/* Hero (Dark) */}
      <HeroDark
        align="left"
        motif={HERO_VISUALS.defaults.topLevel.motif || 'topo'}
        title="Industries where GTMstack has delivered"
        titleHighlight="pipeline outcomes"
        description="Deep vertical expertise across B2B technology sectors. Each industry has unique GTM challenges—and I've solved them with measurable results."
        primaryCta={{ label: 'Explore industries', href: '#industries' }}
        secondaryCta={{ label: 'View case studies', href: '/case-studies' }}
        rightVisual={ensureHeroVisualWithImage(HERO_VISUALS.defaults.topLevel, 'industries')}
      />

      {/* Featured Industries (Light) */}
      {featuredIndustries.length > 0 && (
        <FadeIn>
          <SectionLight variant="white" className="overflow-hidden" id="industries">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <TopoBackdrop intensity="subtle" variant="sparse" />
            </div>
            <div className="relative z-10">
              <SectionHeader
                label="Featured Industries"
                title="Where we've delivered pipeline outcomes"
                description="Real GTM experience across these verticals, with measurable results and proven playbooks."
                align="center"
                className="mb-12"
              />

              <CardGrid columns={2}>
                <StaggerContainer className="contents">
                  {featuredIndustries.map((industry) => {
                    const IconComponent = Icons[industry.icon as IconName] as React.ComponentType<{ className?: string }> | undefined
                    return (
                      <StaggerItem key={industry.slug}>
                        <CardGridItem>
                          <Card
                            title={industry.title}
                            description={industry.description}
                            href={`/industries/${industry.slug}`}
                            icon={industry.icon}
                            tags={industry.tags.slice(0, 3)}
                            variant="default"
                          />
                        </CardGridItem>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </CardGrid>
            </div>
          </SectionLight>
        </FadeIn>
      )}

      {/* All Industries (Light) */}
      <FadeIn>
        <SectionLight variant="white" className="overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <TopoBackdrop intensity="subtle" variant="sparse" />
          </div>
          <div className="relative z-10">
            <SectionHeader
              label="All Industries"
              title="Complete industry coverage"
              description="Browse all industries where I've delivered GTM results and built proven frameworks."
              align="center"
              className="mb-12"
            />

            <CardGrid columns={2}>
              <StaggerContainer className="contents">
                {allIndustries.map((industry) => {
                  const IconComponent = Icons[industry.icon as IconName] as React.ComponentType<{ className?: string }> | undefined
                  return (
                    <StaggerItem key={industry.slug}>
                      <CardGridItem>
                        <Card
                          title={industry.title}
                          description={industry.description}
                          href={`/industries/${industry.slug}`}
                          icon={industry.icon}
                          tags={industry.tags.slice(0, 3)}
                          variant="default"
                        />
                      </CardGridItem>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </CardGrid>
          </div>
        </SectionLight>
      </FadeIn>

      {/* Cross-reference: Explore Related Expertise (Dark) */}
      <SectionDark variant="stats" motif="signal" padding="md" className="overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <SignalField intensity="subtle" pattern="constellation" density="sparse" />
        </div>
        <div className="relative z-10">
          <SectionHeader
            label="Explore related expertise"
            title="GTM capabilities that power industry outcomes"
            description="These four pillars work together to deliver pipeline results across all industries."
            align="center"
            className="mb-10 text-white"
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((pillar) => {
              const IconComponent = Icons[pillar.icon as IconName] as React.ComponentType<{ className?: string }> | undefined
              return (
                <StaggerItem key={pillar.id}>
                  <Link href={pillar.href} className="block h-full">
                    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 group">
                      {IconComponent && (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/25 via-cool-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-brand-300 group-hover:text-brand-200 transition-colors">
                        Explore
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </SectionDark>

      {/* CTA Band */}
      <CTABand
        title="Don't see your industry?"
        description="I work across all B2B technology verticals. Let's discuss your specific context and how we can deliver pipeline outcomes."
        primaryCta={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
        variant="dark"
      />
    </>
  )
}
