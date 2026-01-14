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

interface HeroBackgroundProps {
  variant: HeroBackgroundVariant
  className?: string
}

const baseTransition = {
  duration: 18,
  repeat: Infinity,
  ease: 'easeInOut',
  repeatType: 'mirror' as const,
}

function ContentFlow({ reduced }: { reduced: boolean }) {
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
          <stop offset="40%" stopColor="#6366f1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#contentFlowStroke)" strokeWidth="1.4">
        {[0, 80, 160, 240].map((offset, i) => (
          <Path
            key={offset}
            d={`M-100 ${220 + offset} C 250 ${120 + offset}, 550 ${320 + offset}, 1300 ${
              260 + offset
            }`}
            {...(!reduced && {
              initial: { opacity: 0.1, pathLength: 0.8 },
              animate: {
                opacity: [0.06, 0.18, 0.08],
                pathLength: [0.7, 1, 0.7],
              },
              transition: {
                ...baseTransition,
                duration: 16 + i * 2,
                delay: i * 0.8,
              },
            })}
            opacity={reduced ? 0.14 : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function BranchingPaths({ reduced }: { reduced: boolean }) {
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
          <stop offset="40%" stopColor="#22c55e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#branchingStroke)" strokeWidth="1.3" strokeLinecap="round">
        <Path
          d="M200 700 C 350 540, 420 480, 600 420 C 780 360, 860 320, 1000 220"
          {...(!reduced && {
            initial: { opacity: 0.12 },
            animate: {
              opacity: [0.06, 0.2, 0.1],
            },
            transition: {
              ...baseTransition,
              duration: 20,
            },
          })}
          opacity={reduced ? 0.16 : undefined}
        />

        {[0, 40, 80].map((o, i) => (
          <Path
            key={o}
            d={`M480 ${520 - o} C 620 ${480 - o}, 730 ${430 - o}, ${950 + i * 10} ${340 - o}`}
            {...(!reduced && {
              initial: { opacity: 0.08, pathLength: 0.6 },
              animate: {
                opacity: [0.04, 0.18, 0.08],
                pathLength: [0.5, 0.95, 0.6],
              },
              transition: {
                ...baseTransition,
                duration: 14 + i * 2,
                delay: i * 0.9,
              },
            })}
            opacity={reduced ? 0.12 : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function OrbitingNodes({ reduced }: { reduced: boolean }) {
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
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      <circle
        cx="800"
        cy="360"
        r="260"
        fill="url(#orbitGlow)"
        opacity={reduced ? 0.18 : 0.25}
      />

      {radii.map((radius, i) => (
        <g key={radius} transform="translate(800, 360)">
          <circle
            r={radius}
            fill="none"
            stroke="#38bdf8"
            strokeOpacity={0.08 + i * 0.02}
            strokeWidth={1}
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
                  opacity={0.18 + j * 0.03}
                />
              )
            })}
          </Group>
        </g>
      ))}
    </svg>
  )
}

function FunnelStages({ reduced }: { reduced: boolean }) {
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
          <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#6366f1" stopOpacity="0.4" />
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
            strokeOpacity={0.12}
            strokeWidth={1}
            {...(!reduced && {
              initial: { opacity: stage.opacity, y: stage.y },
              animate: {
                opacity: [stage.opacity * 0.6, stage.opacity * 1.4, stage.opacity],
                y: [stage.y - 6, stage.y + 4, stage.y],
              },
              transition: {
                ...baseTransition,
                duration: 14 + i * 1.5,
                delay: i * 0.6,
              },
            })}
            opacity={reduced ? stage.opacity : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function DashboardPulse({ reduced }: { reduced: boolean }) {
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
          <stop offset="40%" stopColor="#22c55e" stopOpacity="0.85" />
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
          fillOpacity={0.55}
          stroke="#1e293b"
          strokeOpacity={0.9}
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
                strokeOpacity={0.18}
                {...(!reduced && {
                  initial: { opacity: 0.18 + col * 0.02, scaleY: 1 },
                  animate: {
                    opacity: [0.12, 0.35, 0.18 + col * 0.02],
                    scaleY: [1, 1.2 + col * 0.03, 1],
                  },
                  transition: {
                    ...baseTransition,
                    duration: 14 + row * 2,
                    delay: (row * 0.6 + col * 0.25) % 3,
                  },
                })}
                opacity={reduced ? 0.22 : undefined}
              />
            ))}
          </g>
        ))}

        <path
          d="M40 320 C 180 300, 260 260, 340 280 C 420 300, 500 260, 560 240 C 640 220, 700 240, 780 230"
          fill="none"
          stroke="url(#metricLine)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.85}
        />
      </g>
    </svg>
  )
}

function GrowthCurve({ reduced }: { reduced: boolean }) {
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
          <stop offset="30%" stopColor="#22c55e" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g transform="translate(160, 140)" fill="none">
        <Path
          d="M0 420 C 90 380, 160 360, 230 330 C 310 300, 360 260, 430 220 C 510 170, 580 140, 650 120 C 740 95, 830 80, 960 40"
          stroke="url(#growthStroke)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...(!reduced && {
            initial: { opacity: 0.4, pathLength: 0.8 },
            animate: {
              opacity: [0.25, 0.75, 0.4],
              pathLength: [0.7, 1, 0.85],
            },
            transition: {
              ...baseTransition,
              duration: 18,
            },
          })}
          opacity={reduced ? 0.5 : undefined}
        />

        {Array.from({ length: 6 }).map((_, i) => (
          <Path
            key={i}
            d={`M${90 + i * 140} 440 L ${90 + i * 140} ${320 - i * 22}`}
            stroke="#22c55e"
            strokeWidth={1}
            strokeOpacity={0.25}
            strokeDasharray="4 6"
            {...(!reduced && {
              initial: { opacity: 0.1 },
              animate: {
                opacity: [0.06, 0.22, 0.12],
              },
              transition: {
                ...baseTransition,
                duration: 16 + i * 1.2,
                delay: i * 0.4,
              },
            })}
            opacity={reduced ? 0.16 : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function NetworkSync({ reduced }: { reduced: boolean }) {
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
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="networkNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      <g stroke="url(#networkLine)" strokeWidth={1.4} strokeOpacity={0.5}>
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
                initial: { opacity: 0.1 },
                animate: {
                  opacity: [0.06, 0.45, 0.2],
                },
                transition: {
                  ...baseTransition,
                  duration: 16 + i * 1.5,
                  delay: i * 0.5,
                },
              })}
              opacity={reduced ? 0.18 : undefined}
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
          strokeWidth={1}
          strokeOpacity={0.5}
          {...(!reduced && {
            initial: { opacity: 0.4, scale: 0.9 },
            animate: {
              opacity: [0.28, 0.9, 0.5],
              scale: [0.9, 1.08, 1],
            },
            transition: {
              ...baseTransition,
              duration: 14 + i * 0.8,
              delay: i * 0.3,
            },
          })}
          opacity={reduced ? 0.55 : undefined}
        />
      ))}
    </svg>
  )
}

function NeuralFlow({ reduced }: { reduced: boolean }) {
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
          <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#6366f1" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {layers.map((y, i) => (
        <g key={y}>
          <Path
            d={`M160 ${y} H 1040`}
            stroke="url(#neuralStroke)"
            strokeWidth={1.4}
            strokeLinecap="round"
            {...(!reduced && {
              initial: { opacity: 0.12 },
              animate: {
                opacity: [0.06, 0.32, 0.14],
              },
              transition: {
                ...baseTransition,
                duration: 18 + i * 2,
                delay: i * 0.7,
              },
            })}
            opacity={reduced ? 0.16 : undefined}
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
                fillOpacity={0.8}
                stroke="#38bdf8"
                strokeWidth={1}
                strokeOpacity={0.7}
                {...(!reduced && {
                  initial: { opacity: 0.35, scale: 0.9 },
                  animate: {
                    opacity: [0.18, 0.85, 0.4],
                    scale: [0.9, 1.1, 1],
                  },
                  transition: {
                    ...baseTransition,
                    duration: 12 + i * 2,
                    delay: (j * 0.25 + i * 0.6) % 4,
                  },
                })}
                opacity={reduced ? 0.6 : undefined}
              />
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export function HeroBackground({ variant, className }: HeroBackgroundProps) {
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
      {variant === 'contentFlow' && <ContentFlow reduced={prefersReducedMotion} />}
      {variant === 'branchingPaths' && <BranchingPaths reduced={prefersReducedMotion} />}
      {variant === 'orbitingNodes' && <OrbitingNodes reduced={prefersReducedMotion} />}
      {variant === 'funnelStages' && <FunnelStages reduced={prefersReducedMotion} />}
      {variant === 'dashboardPulse' && <DashboardPulse reduced={prefersReducedMotion} />}
      {variant === 'growthCurve' && <GrowthCurve reduced={prefersReducedMotion} />}
      {variant === 'networkSync' && <NetworkSync reduced={prefersReducedMotion} />}
      {variant === 'neuralFlow' && <NeuralFlow reduced={prefersReducedMotion} />}
    </div>
  )
}

