'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { Card, CaseStudyCard } from '@/components/ui/Card'
import { CardGrid, CardGridItem } from '@/components/ui/CardGrid'
import { ExpertiseItem, CaseStudyItem, IndustryItem } from '@/lib/types'
import { cn } from '@/lib/utils'

interface RelatedExpertiseProps {
  items: ExpertiseItem[]
  title?: string
  viewAllHref?: string
  className?: string
}

export function RelatedExpertise({
  items,
  title = 'Related Expertise',
  viewAllHref,
  className,
}: RelatedExpertiseProps) {
  if (items.length === 0) return null

  return (
    <div className={className}>
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display text-2xl font-bold text-slate-900">
            {title}
          </h3>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </FadeIn>

      <CardGrid columns={3}>
        {items.slice(0, 3).map((item) => (
          <CardGridItem key={item.slug}>
            <Card
              title={item.title}
              description={item.description ?? item.positioning ?? ''}
              href={`/expertise/${item.slug}`}
              icon={item.icon}
              tags={item.tags}
              badge={item.featured ? 'Featured' : undefined}
            />
          </CardGridItem>
        ))}
      </CardGrid>
    </div>
  )
}

interface RelatedCaseStudiesProps {
  items: CaseStudyItem[]
  title?: string
  viewAllHref?: string
  className?: string
}

export function RelatedCaseStudies({
  items,
  title = 'Related Case Studies',
  viewAllHref,
  className,
}: RelatedCaseStudiesProps) {
  if (items.length === 0) return null

  return (
    <div className={className}>
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display text-2xl font-bold text-slate-900">
            {title}
          </h3>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </FadeIn>

      <CardGrid columns={2}>
        {items.slice(0, 2).map((item) => (
          <CardGridItem key={item.slug}>
            <CaseStudyCard
              title={item.title}
              client={item.client}
              description={item.description}
              href={`/case-studies/${item.slug}`}
              tags={item.tags}
              metrics={item.metrics}
              featured={item.featured}
            />
          </CardGridItem>
        ))}
      </CardGrid>
    </div>
  )
}

interface RelatedIndustriesProps {
  items: IndustryItem[]
  title?: string
  viewAllHref?: string
  className?: string
}

export function RelatedIndustries({
  items,
  title = 'Related Industries',
  viewAllHref,
  className,
}: RelatedIndustriesProps) {
  if (items.length === 0) return null

  return (
    <div className={className}>
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display text-2xl font-bold text-slate-900">
            {title}
          </h3>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </FadeIn>

      <CardGrid columns={4}>
        {items.slice(0, 4).map((item) => (
          <CardGridItem key={item.slug}>
            <Card
              title={item.title}
              description={item.description}
              href={`/industries/${item.slug}`}
              icon={item.icon}
              tags={item.tags}
              variant="compact"
            />
          </CardGridItem>
        ))}
      </CardGrid>
    </div>
  )
}

interface QuickLinksProps {
  links: { label: string; href: string; description?: string }[]
  title?: string
  className?: string
}

export function QuickLinks({ links, title, className }: QuickLinksProps) {
  return (
    <div className={cn('card p-6', className)}>
      {title && (
        <h4 className="font-semibold text-slate-900 mb-4">{title}</h4>
      )}
      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <div>
              <span className="text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                {link.label}
              </span>
              {link.description && (
                <p className="text-xs text-slate-500 mt-0.5">{link.description}</p>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  )
}

