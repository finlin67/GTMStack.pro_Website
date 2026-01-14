'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { SectionDark } from '@/components/layout/SectionDark'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn'
import { cn } from '@/lib/utils'

interface ProblemPromiseProps {
  className?: string
}

/**
 * Problem → Promise strip for the homepage.
 * Dark gradient, responsive two-column layout, with a draw-on-scroll pathway.
 */
export default function ProblemPromise({ className }: ProblemPromiseProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const isInView = useInView(pathRef, { once: true, margin: '-20% 0px -20% 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionDark
      variant="stats"
      motif="signal"
      padding="lg"
      className={cn(
        'relative overflow-hidden',
        'py-24 bg-gradient-to-b from-slate-950 via-brand-950 to-slate-950',
        className
      )}
    >
      {/* Subtle pathway backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.08),transparent_35%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Problem */}
          <FadeIn direction="up" distance={16} duration={0.6}>
            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/80">
                  Problem
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  The GTM Execution Gap
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                  Most B2B tech companies have brilliant products but struggle to scale. Marketing
                  and sales systems don&apos;t talk. Attribution is broken. Pipeline is
                  unpredictable.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>

          {/* Promise */}
          <FadeIn direction="up" distance={16} duration={0.6}>
            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                  Promise
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brand-500 via-brand-400 to-cool-400 bg-clip-text text-transparent">
                  Strategic Execution That Scales
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                  We bridge strategy and execution with integrated GTM systems. Real attribution.
                  Predictable pipeline. Measurable growth.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>
        </div>

        {/* Animated pathway */}
        <motion.svg
          viewBox="0 0 1200 200"
          className="pointer-events-none absolute inset-x-0 bottom-10 hidden lg:block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pathway-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(248 113 113)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(52 211 235)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <motion.path
            ref={pathRef}
            d="M 50 150 C 200 120, 450 60, 650 110 C 850 160, 1000 140, 1150 90"
            fill="none"
            stroke="url(#pathway-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              shouldReduceMotion
                ? { pathLength: 1, opacity: 0.6 }
                : isInView
                ? { pathLength: 1, opacity: 0.6 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 1.2, ease: [0.25, 1, 0.3, 1] }}
          />
          <motion.circle
            cx="1150"
            cy="90"
            r="6"
            fill="url(#pathway-gradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              shouldReduceMotion
                ? { scale: 1, opacity: 0.9 }
                : isInView
                ? { scale: 1, opacity: 0.9 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: 0.4, ease: [0.25, 1, 0.3, 1] }}
          />
        </motion.svg>
      </div>
    </SectionDark>
  )
}

