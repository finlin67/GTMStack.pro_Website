'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { industryItems } from '@/content/industries'
import { PILLARS } from '@/lib/types'
import { getExpertiseByPillar } from '@/content/expertise'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

interface MobileMegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

const pillarIcons: Record<string, IconName> = {
  'content-engagement': 'PenTool',
  'demand-growth': 'Megaphone',
  'strategy-insights': 'LineChart',
  'systems-operations': 'Layers',
}

// Menu display titles (matching exact requirements)
const menuTitles: Record<string, string> = {
  'content-marketing': 'Content Marketing',
  'email-marketing': 'Email Marketing',
  'omnichannel-marketing': 'Omnichannel Marketing',
  'social-media-marketing': 'Social Media Marketing',
  'video-marketing': 'Video Marketing',
  'demand-generation': 'Demand Generation',
  'seo': 'Search Engine Optimization',
  'growth-marketing': 'Growth Marketing',
  'paid-advertising-sem': 'Paid Advertising (SEM)',
  'event-marketing': 'Event Marketing',
  'account-based-marketing-abm': 'Account-Based Marketing (ABM)',
  'customer-experience-cx': 'Customer Experience (CX)',
  'customer-marketing': 'Customer Marketing',
  'lifecycle-marketing': 'Lifecycle Marketing',
  'market-research': 'Market Research',
  'ai-in-marketing': 'AI in Marketing',
  'marketing-automation': 'Marketing Automation',
  'marketing-operations': 'Marketing Operations',
  'martech-optimization': 'MarTech Optimization',
  'sales-enablement': 'Sales Enablement',
}

export function MobileMegaMenu({ isOpen, onClose }: MobileMegaMenuProps) {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null)

  const pillars = PILLARS.map((pillar) => ({
    ...pillar,
    items: getExpertiseByPillar(pillar.id),
  }))

  const togglePillar = (pillarId: string) => {
    setExpandedPillar(expandedPillar === pillarId ? null : pillarId)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-950/95 backdrop-blur-lg border-b border-white/10"
        >
          <div className="container-width py-4 space-y-1">
            {/* Pillar Accordions */}
            {pillars.map((pillar) => {
              const pillarIconName = pillarIcons[pillar.id]
              const IconComponent = pillarIconName ? Icons[pillarIconName as IconName] : null
              const PillarIcon = IconComponent && typeof IconComponent === 'function'
                ? (IconComponent as React.ComponentType<{ className?: string }>)
                : null
              const isExpanded = expandedPillar === pillar.id

              return (
                <div key={pillar.id} className="border-b border-white/5 last:border-0 pb-2 last:pb-0">
                  {/* Pillar Header */}
                  <button
                    onClick={() => togglePillar(pillar.id)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    aria-expanded={isExpanded}
                    aria-controls={`pillar-${pillar.id}`}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${pillar.title} menu`}
                  >
                    <div className="flex items-center gap-3">
                      {PillarIcon && (
                        <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0" aria-hidden="true">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                      )}
                      <span>{pillar.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 transition-transform rotate-180" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="w-4 h-4 transition-transform" aria-hidden="true" />
                    )}
                  </button>

                  {/* Sublinks */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        id={`pillar-${pillar.id}`}
                        className="ml-12 mt-1 space-y-1"
                      >
                        {pillar.items.map((item) => {
                          const IconComponent = item.icon ? Icons[item.icon as IconName] : null
                          const ItemIcon = IconComponent && typeof IconComponent === 'function'
                            ? (IconComponent as React.ComponentType<{ className?: string }>)
                            : null

                          return (
                            <li key={item.slug}>
                              <Link
                                href={`/expertise/${item.slug}`}
                                onClick={onClose}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                                aria-label={`Navigate to ${menuTitles[item.slug] || item.title}`}
                              >
                                {ItemIcon && (
                                  <ItemIcon className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden="true" />
                                )}
                                <span>{menuTitles[item.slug] || item.title}</span>
                              </Link>
                            </li>
                          )
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}

            {/* View All Link */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="/expertise"
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-brand-400 hover:text-brand-300 hover:bg-brand-500/10 transition-colors"
                aria-label="View all Expertise services"
              >
                View all Expertise
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Industries Section */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <div className="px-4 py-2 mb-2">
                <h3 className="text-sm font-semibold text-white mb-3">Industries</h3>
                <Link
                  href="/industries"
                  onClick={onClose}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors mb-2"
                >
                  All Industries
                </Link>
                <ul className="space-y-1">
                  {[...industryItems]
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((industry) => (
                      <li key={industry.slug}>
                        <Link
                          href={`/industries/${industry.slug}`}
                          onClick={onClose}
                          className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {industry.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

