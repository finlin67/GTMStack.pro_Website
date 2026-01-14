'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import * as Icons from 'lucide-react'
import { AnimatedStatCard } from '@/components/ui/AnimatedStatCard'
import { SectionDark } from '@/components/layout/SectionDark'
import { DriftingSignalField } from '@/components/ui/DriftingSignalField'

interface StatItem {
  value: string
  label: string
  description: string
  icon: string
  sparkline: number[]
}

interface StatsSectionProps {
  stats: StatItem[]
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 1, 0.3, 1] } },
}

function StatValue({ value, active }: { value: string; active: boolean }) {
  const match = value.match(/^([^0-9.-]*)([0-9.,]+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const numberPart = match?.[2] ?? '0'
  const suffix = match?.[3] ?? ''
  const target = parseFloat(numberPart.replace(/,/g, '')) || 0

  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 60, damping: 12 })
  const [display, setDisplay] = useState('0')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (active) {
      motionValue.set(shouldReduceMotion ? target : target)
    }
  }, [active, motionValue, shouldReduceMotion, target])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.round(latest).toString())
    })
    return () => unsubscribe()
  }, [spring])

  return (
    <span className="bg-gradient-to-r from-brand-400 via-cool-400 to-cyan-400 bg-clip-text text-transparent">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export function StatsSection({ stats }: StatsSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref}>
      <SectionDark
        variant="stats"
        padding="lg"
        motif="signal"
        accentOrb
        className="bg-gradient-to-br from-slate-950 via-brand-900 to-brand-800"
      >
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-gradient-to-br from-brand-500/10 via-cool-400/10 to-cyan-400/10" />

        <div className="opacity-60">
          <DriftingSignalField />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-7 mb-14"
        >
          {stats.map((stat, index) => {
            const Icon =
              Icons[stat.icon as keyof typeof Icons] ||
              Icons.Activity
            const maxValue = Math.max(...stat.sparkline)
            const minValue = Math.min(...stat.sparkline)
            const range = maxValue - minValue || 1

            return (
              <motion.div key={stat.label} variants={itemVariants}>
                <AnimatedStatCard
                  index={index}
                  className="relative group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-dark-soft hover:shadow-glow-violet transition-shadow duration-300"
                >
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 mb-3">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>

                    <p className="text-4xl md:text-5xl font-bold mb-2 text-white">
                      <StatValue value={stat.value} active={isInView} />
                    </p>

                    <div className="relative mb-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent w-16 mx-auto lg:mx-0" />
                    </div>

                    <div className="flex items-end justify-center lg:justify-start gap-0.5 h-8 mb-3 opacity-70">
                      {stat.sparkline.map((point, i) => {
                        const height = ((point - minValue) / range) * 100
                        return (
                          <div
                            key={i}
                            className="w-1 rounded-t bg-gradient-to-t from-brand-500/60 to-cool-400/40"
                            style={{
                              height: `${Math.max(height, 10)}%`,
                              minHeight: '2px',
                            }}
                          />
                        )
                      })}
                    </div>

                    <p className="text-xs font-medium text-slate-200 uppercase tracking-widest mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-slate-300">{stat.description}</p>
                  </div>
                </AnimatedStatCard>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionDark>
    </div>
  )
}

