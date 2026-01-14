'use client'

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'
import { PathwayOverlay } from '@/components/motifs'

interface ProblemPromiseProps {
  problem: string
  problemSubtext?: string
  promise: string
  promiseSubtext?: string
  className?: string
}

export function ProblemPromise({
  problem,
  problemSubtext,
  promise,
  promiseSubtext,
  className,
}: ProblemPromiseProps) {
  return (
    <section className={cn('relative overflow-hidden bg-white', className)}>
      <div className="container-width py-20 md:py-28 lg:py-32">
        <StaggerContainer className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Problem Side */}
          <StaggerItem>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-signal-500/20 via-signal-500/40 to-transparent rounded-full" />
              <div>
                <span className="inline-block text-sm font-semibold text-signal-600 tracking-wide uppercase mb-3">
                  The Problem
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {problem}
                </h2>
                {problemSubtext && (
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {problemSubtext}
                  </p>
                )}
              </div>
            </div>
          </StaggerItem>

          {/* Promise Side */}
          <StaggerItem>
            <div className="relative">
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500/20 via-brand-500/40 to-transparent rounded-full" />
              <div>
                <span className="inline-block text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">
                  The Promise
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {promise}
                </h2>
                {promiseSubtext && (
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {promiseSubtext}
                  </p>
                )}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Connecting Pathway (subtle) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <PathwayOverlay intensity="subtle" paths="simple" />
        </div>
      </div>
    </section>
  )
}

