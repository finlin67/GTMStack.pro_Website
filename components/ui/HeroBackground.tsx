'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type HeroBackgroundVariant =
  | 'contentFlow'
  | 'branchingPaths'
  | 'orbitingNodes'
  | 'funnelStages'
  | 'dashboardPulse'
  | 'growthCurve'
  | 'networkSync'
  | 'neuralFlow'

export type HeroBackgroundIntensity = 'subtle' | 'medium' | 'bold'

interface HeroBackgroundProps {
  variant: HeroBackgroundVariant
  intensity?: HeroBackgroundIntensity
  className?: string
}

const INTENSITY_MULTIPLIERS: Record<HeroBackgroundIntensity, { opacity: number; stroke: number }> = {
  subtle: { opacity: 1, stroke: 0 },
  medium: { opacity: 1.5, stroke: 0.25 },
  bold: { opacity: 2.25, stroke: 0.5 },
}

function applyIntensity(baseOpacity: number, intensity: HeroBackgroundIntensity): number {
  return Math.min(baseOpacity * INTENSITY_MULTIPLIERS[intensity].opacity, 1)
}

function applyStrokeWidth(baseWidth: number, intensity: HeroBackgroundIntensity): number {
  return baseWidth + INTENSITY_MULTIPLIERS[intensity].stroke
}

const baseTransition = {
  duration: 18,
  repeat: Infinity,
  ease: 'easeInOut',
  repeatType: 'mirror' as const,
}

function ContentFlow({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Path = reduced ? 'path' : motion.path

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id="contentFlowStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.0" />
          <stop offset="40%" stopColor="#6366f1" stopOpacity={applyIntensity(0.35, intensity)} />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#contentFlowStroke)" strokeWidth={applyStrokeWidth(1.4, intensity)}>
        {[0, 80, 160, 240].map((offset, i) => (
          <Path
            key={offset}
            d={`M-100 ${220 + offset} C 250 ${120 + offset}, 550 ${320 + offset}, 1300 ${
              260 + offset
            }`}
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.1, intensity), pathLength: 0.8 },
              animate: {
                opacity: [applyIntensity(0.06, intensity), applyIntensity(0.18, intensity), applyIntensity(0.08, intensity)],
                pathLength: [0.7, 1, 0.7],
              },
              transition: {
                ...baseTransition,
                duration: 16 + i * 2,
                delay: i * 0.8,
              },
            })}
            opacity={reduced ? applyIntensity(0.14, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function BranchingPaths({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Path = reduced ? 'path' : motion.path

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id="branchingStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.0" />
          <stop offset="40%" stopColor="#22c55e" stopOpacity={applyIntensity(0.35, intensity)} />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#branchingStroke)" strokeWidth={applyStrokeWidth(1.3, intensity)} strokeLinecap="round">
        <Path
          d="M200 700 C 350 540, 420 480, 600 420 C 780 360, 860 320, 1000 220"
          {...(!reduced && {
            initial: { opacity: applyIntensity(0.12, intensity) },
            animate: {
              opacity: [applyIntensity(0.06, intensity), applyIntensity(0.2, intensity), applyIntensity(0.1, intensity)],
            },
            transition: {
              ...baseTransition,
              duration: 20,
            },
          })}
          opacity={reduced ? applyIntensity(0.16, intensity) : undefined}
        />

        {[0, 40, 80].map((o, i) => (
          <Path
            key={o}
            d={`M480 ${520 - o} C 620 ${480 - o}, 730 ${430 - o}, ${950 + i * 10} ${340 - o}`}
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.08, intensity), pathLength: 0.6 },
              animate: {
                opacity: [applyIntensity(0.04, intensity), applyIntensity(0.18, intensity), applyIntensity(0.08, intensity)],
                pathLength: [0.5, 0.95, 0.6],
              },
              transition: {
                ...baseTransition,
                duration: 14 + i * 2,
                delay: i * 0.9,
              },
            })}
            opacity={reduced ? applyIntensity(0.12, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function OrbitingNodes({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Group = reduced ? 'g' : motion.g

  const radii = [180, 260, 340]

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.4, intensity)} />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      <circle
        cx="800"
        cy="360"
        r="260"
        fill="url(#orbitGlow)"
        opacity={reduced ? applyIntensity(0.18, intensity) : applyIntensity(0.25, intensity)}
      />

      {radii.map((radius, i) => (
        <g key={radius} transform="translate(800, 360)">
          <circle
            r={radius}
            fill="none"
            stroke="#38bdf8"
            strokeOpacity={applyIntensity(0.08 + i * 0.02, intensity)}
            strokeWidth={applyStrokeWidth(1, intensity)}
          />
          <Group
            {...(!reduced && {
              initial: { rotate: 0 },
              animate: { rotate: [0, 360] },
              transition: {
                ...baseTransition,
                duration: 16 + i * 4,
              },
            })}
          >
            {Array.from({ length: 6 }).map((_, j) => {
              const angle = (j / 6) * Math.PI * 2
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              return (
                <circle
                  key={j}
                  cx={x}
                  cy={y}
                  r={5}
                  fill="#e5e7eb"
                  opacity={applyIntensity(0.18 + j * 0.03, intensity)}
                />
              )
            })}
          </Group>
        </g>
      ))}
    </svg>
  )
}

function FunnelStages({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Rect = reduced ? 'rect' : motion.rect

  const stages = [
    { width: 760, y: 160, opacity: 0.14 },
    { width: 620, y: 260, opacity: 0.16 },
    { width: 480, y: 360, opacity: 0.18 },
    { width: 340, y: 460, opacity: 0.20 },
  ]

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id="funnelFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.0" />
          <stop offset="30%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.4, intensity)} />
          <stop offset="70%" stopColor="#6366f1" stopOpacity={applyIntensity(0.4, intensity)} />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g transform="translate(220, 60)">
        {stages.map((stage, i) => (
          <Rect
            key={stage.y}
            x={(760 - stage.width) / 2}
            y={stage.y}
            width={stage.width}
            height={80}
            rx={24}
            fill="url(#funnelFill)"
            stroke="#38bdf8"
            strokeOpacity={applyIntensity(0.12, intensity)}
            strokeWidth={applyStrokeWidth(1, intensity)}
            {...(!reduced && {
              initial: { opacity: applyIntensity(stage.opacity, intensity), y: stage.y },
              animate: {
                opacity: [applyIntensity(stage.opacity * 0.6, intensity), applyIntensity(stage.opacity * 1.4, intensity), applyIntensity(stage.opacity, intensity)],
                y: [stage.y - 6, stage.y + 4, stage.y],
              },
              transition: {
                ...baseTransition,
                duration: 14 + i * 1.5,
                delay: i * 0.6,
              },
            })}
            opacity={reduced ? applyIntensity(stage.opacity, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function DashboardPulse({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Rect = reduced ? 'rect' : motion.rect

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id="metricLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.0" />
          <stop offset="40%" stopColor="#22c55e" stopOpacity={applyIntensity(0.85, intensity)} />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g transform="translate(200, 200)">
        <rect
          x={0}
          y={0}
          width={800}
          height={380}
          rx={32}
          fill="#020617"
          fillOpacity={applyIntensity(0.55, intensity)}
          stroke="#1e293b"
          strokeOpacity={applyIntensity(0.9, intensity)}
        />

        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(40, ${70 + row * 90})`}>
            {[0, 1, 2, 3, 4].map((col) => (
              <Rect
                key={col}
                x={col * 110}
                y={0}
                width={60}
                height={18 + col * 4}
                rx={6}
                fill="#0f172a"
                stroke="#38bdf8"
                strokeOpacity={applyIntensity(0.18, intensity)}
                {...(!reduced && {
                  initial: { opacity: applyIntensity(0.18 + col * 0.02, intensity), scaleY: 1 },
                  animate: {
                    opacity: [applyIntensity(0.12, intensity), applyIntensity(0.35, intensity), applyIntensity(0.18 + col * 0.02, intensity)],
                    scaleY: [1, 1.2 + col * 0.03, 1],
                  },
                  transition: {
                    ...baseTransition,
                    duration: 14 + row * 2,
                    delay: (row * 0.6 + col * 0.25) % 3,
                  },
                })}
                opacity={reduced ? applyIntensity(0.22, intensity) : undefined}
              />
            ))}
          </g>
        ))}

        <path
          d="M40 320 C 180 300, 260 260, 340 280 C 420 300, 500 260, 560 240 C 640 220, 700 240, 780 230"
          fill="none"
          stroke="url(#metricLine)"
          strokeWidth={applyStrokeWidth(2, intensity)}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={applyIntensity(0.85, intensity)}
        />
      </g>
    </svg>
  )
}

function GrowthCurve({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Path = reduced ? 'path' : motion.path

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id="growthStroke" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.0" />
          <stop offset="30%" stopColor="#22c55e" stopOpacity={applyIntensity(0.6, intensity)} />
          <stop offset="80%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.9, intensity)} />
          <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g transform="translate(160, 140)" fill="none">
        <Path
          d="M0 420 C 90 380, 160 360, 230 330 C 310 300, 360 260, 430 220 C 510 170, 580 140, 650 120 C 740 95, 830 80, 960 40"
          stroke="url(#growthStroke)"
          strokeWidth={applyStrokeWidth(2, intensity)}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...(!reduced && {
            initial: { opacity: applyIntensity(0.4, intensity), pathLength: 0.8 },
            animate: {
              opacity: [applyIntensity(0.25, intensity), applyIntensity(0.75, intensity), applyIntensity(0.4, intensity)],
              pathLength: [0.7, 1, 0.85],
            },
            transition: {
              ...baseTransition,
              duration: 18,
            },
          })}
          opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
        />

        {Array.from({ length: 6 }).map((_, i) => (
          <Path
            key={i}
            d={`M${90 + i * 140} 440 L ${90 + i * 140} ${320 - i * 22}`}
            stroke="#22c55e"
            strokeWidth={applyStrokeWidth(1, intensity)}
            strokeOpacity={applyIntensity(0.25, intensity)}
            strokeDasharray="4 6"
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.1, intensity) },
              animate: {
                opacity: [applyIntensity(0.06, intensity), applyIntensity(0.22, intensity), applyIntensity(0.12, intensity)],
              },
              transition: {
                ...baseTransition,
                duration: 16 + i * 1.2,
                delay: i * 0.4,
              },
            })}
            opacity={reduced ? applyIntensity(0.16, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function NetworkSync({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Circle = reduced ? 'circle' : motion.circle

  const nodes = [
    { x: 260, y: 220 },
    { x: 420, y: 190 },
    { x: 580, y: 260 },
    { x: 740, y: 220 },
    { x: 900, y: 280 },
    { x: 520, y: 380 },
    { x: 700, y: 420 },
  ]

  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 5],
    [5, 6],
    [3, 6],
  ]

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.8, intensity)} />
          <stop offset="100%" stopColor="#6366f1" stopOpacity={applyIntensity(0.6, intensity)} />
        </linearGradient>
        <radialGradient id="networkNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e5e7eb" stopOpacity={applyIntensity(0.9, intensity)} />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      <g stroke="url(#networkLine)" strokeWidth={applyStrokeWidth(1.4, intensity)} strokeOpacity={applyIntensity(0.5, intensity)}>
        {connections.map(([from, to], i) => {
          const a = nodes[from]
          const b = nodes[to]
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              {...(!reduced && {
                initial: { opacity: applyIntensity(0.1, intensity) },
                animate: {
                  opacity: [applyIntensity(0.06, intensity), applyIntensity(0.45, intensity), applyIntensity(0.2, intensity)],
                },
                transition: {
                  ...baseTransition,
                  duration: 16 + i * 1.5,
                  delay: i * 0.5,
                },
              })}
              opacity={reduced ? applyIntensity(0.18, intensity) : undefined}
            />
          )
        })}
      </g>

      {nodes.map((node, i) => (
        <Circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={10}
          fill="url(#networkNode)"
          stroke="#38bdf8"
          strokeWidth={applyStrokeWidth(1, intensity)}
          strokeOpacity={applyIntensity(0.5, intensity)}
          {...(!reduced && {
            initial: { opacity: applyIntensity(0.4, intensity), scale: 0.9 },
            animate: {
              opacity: [applyIntensity(0.28, intensity), applyIntensity(0.9, intensity), applyIntensity(0.5, intensity)],
              scale: [0.9, 1.08, 1],
            },
            transition: {
              ...baseTransition,
              duration: 14 + i * 0.8,
              delay: i * 0.3,
            },
          })}
          opacity={reduced ? applyIntensity(0.55, intensity) : undefined}
        />
      ))}
    </svg>
  )
}

function NeuralFlow({ reduced, intensity }: { reduced: boolean; intensity: HeroBackgroundIntensity }) {
  const Path = reduced ? 'path' : motion.path
  const Circle = reduced ? 'circle' : motion.circle

  const layers = [220, 340, 460]

  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id="neuralStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.0" />
          <stop offset="30%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.8, intensity)} />
          <stop offset="70%" stopColor="#6366f1" stopOpacity={applyIntensity(0.7, intensity)} />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {layers.map((y, i) => (
        <g key={y}>
          <Path
            d={`M160 ${y} H 1040`}
            stroke="url(#neuralStroke)"
            strokeWidth={applyStrokeWidth(1.4, intensity)}
            strokeLinecap="round"
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.12, intensity) },
              animate: {
                opacity: [applyIntensity(0.06, intensity), applyIntensity(0.32, intensity), applyIntensity(0.14, intensity)],
              },
              transition: {
                ...baseTransition,
                duration: 18 + i * 2,
                delay: i * 0.7,
              },
            })}
            opacity={reduced ? applyIntensity(0.16, intensity) : undefined}
          />

          {Array.from({ length: 9 }).map((_, j) => {
            const x = 190 + j * 90
            return (
              <Circle
                key={`${y}-${x}`}
                cx={x}
                cy={y}
                r={6}
                fill="#e5e7eb"
                fillOpacity={applyIntensity(0.8, intensity)}
                stroke="#38bdf8"
                strokeWidth={applyStrokeWidth(1, intensity)}
                strokeOpacity={applyIntensity(0.7, intensity)}
                {...(!reduced && {
                  initial: { opacity: applyIntensity(0.35, intensity), scale: 0.9 },
                  animate: {
                    opacity: [applyIntensity(0.18, intensity), applyIntensity(0.85, intensity), applyIntensity(0.4, intensity)],
                    scale: [0.9, 1.1, 1],
                  },
                  transition: {
                    ...baseTransition,
                    duration: 12 + i * 2,
                    delay: (j * 0.25 + i * 0.6) % 4,
                  },
                })}
                opacity={reduced ? applyIntensity(0.6, intensity) : undefined}
              />
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export function HeroBackground({ variant, intensity = 'medium', className }: HeroBackgroundProps) {
  const prefersReducedMotion = useReducedMotion() ?? false

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-0',
        'opacity-[0.55] md:opacity-70',
        'mix-blend-screen',
        className
      )}
      aria-hidden="true"
    >
      {variant === 'contentFlow' && <ContentFlow reduced={prefersReducedMotion} intensity={intensity} />}
      {variant === 'branchingPaths' && <BranchingPaths reduced={prefersReducedMotion} intensity={intensity} />}
      {variant === 'orbitingNodes' && <OrbitingNodes reduced={prefersReducedMotion} intensity={intensity} />}
      {variant === 'funnelStages' && <FunnelStages reduced={prefersReducedMotion} intensity={intensity} />}
      {variant === 'dashboardPulse' && <DashboardPulse reduced={prefersReducedMotion} intensity={intensity} />}
      {variant === 'growthCurve' && <GrowthCurve reduced={prefersReducedMotion} intensity={intensity} />}
      {variant === 'networkSync' && <NetworkSync reduced={prefersReducedMotion} intensity={intensity} />}
      {variant === 'neuralFlow' && <NeuralFlow reduced={prefersReducedMotion} intensity={intensity} />}
    </div>
  )
}

