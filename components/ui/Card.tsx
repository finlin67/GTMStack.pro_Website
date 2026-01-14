'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { HoverScale } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'

type IconName = keyof typeof Icons

interface CardProps {
  title: string
  description: string
  href: string
  icon?: string
  tags?: string[]
  badge?: string
  variant?: 'default' | 'featured' | 'compact'
  external?: boolean
  className?: string
}

export function Card({
  title,
  description,
  href,
  icon,
  tags,
  badge,
  variant = 'default',
  external = false,
  className,
}: CardProps) {
  const IconComponent = icon && Icons[icon as IconName] 
    ? (Icons[icon as IconName] as React.ComponentType<{ className?: string }>) 
    : null

  const cardContent = (
    <div
      className={cn(
        'card card-hover group h-full p-6',
        variant === 'featured' && 'border-brand-200/60 bg-gradient-to-br from-white to-brand-50/30',
        variant === 'compact' && 'p-4',
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          {IconComponent && (
            <div
              className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
                variant === 'featured'
                  ? 'bg-brand-100 text-brand-600'
                  : 'bg-slate-100 text-slate-600 group-hover:bg-brand-100 group-hover:text-brand-600'
              )}
            >
              <IconComponent className="w-5 h-5" />
            </div>
          )}
          {badge && (
            <span className="badge badge-brand text-xs">{badge}</span>
          )}
        </div>

        {/* Content */}
        <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 ml-auto">
            {external ? 'View' : 'Learn more'}
            {external ? (
              <ArrowUpRight className="w-3.5 h-3.5" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            )}
          </span>
        </div>
      </div>
    </div>
  )

  if (external) {
    return (
      <HoverScale>
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          {cardContent}
        </a>
      </HoverScale>
    )
  }

  return (
    <HoverScale>
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    </HoverScale>
  )
}

interface MetricCardProps {
  label: string
  value: string
  change?: string
  icon?: string
  className?: string
}

export function MetricCard({ label, value, change, icon, className }: MetricCardProps) {
  const IconComponent = icon ? (Icons[icon as IconName] as React.ComponentType<{ className?: string }>) : null

  return (
    <div className={cn('card p-5', className)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500 mb-1">{label}</p>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
          {change && (
            <p className="text-sm font-medium text-emerald-600 mt-1">{change}</p>
          )}
        </div>
        {IconComponent && (
          <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
            <IconComponent className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  )
}

interface CaseStudyCardProps {
  title: string
  client: string
  description: string
  href: string
  tags: string[]
  metrics: { label: string; value: string }[]
  featured?: boolean
  className?: string
}

export function CaseStudyCard({
  title,
  client,
  description,
  href,
  tags,
  metrics,
  featured,
  className,
}: CaseStudyCardProps) {
  return (
    <HoverScale>
      <Link href={href} className="block h-full">
        <div
          className={cn(
            'card card-hover group h-full overflow-hidden',
            featured && 'border-brand-200/60',
            className
          )}
        >
          {/* Decorative header */}
          <div className="h-2 bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400" />
          
          <div className="p-6">
            {/* Client badge */}
            <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
              {client}
            </span>

            <h3 className="font-semibold text-lg text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
              {title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-100 mb-4">
              {metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-lg font-bold text-brand-600">{metric.value}</p>
                  <p className="text-xs text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="badge text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </HoverScale>
  )
}

