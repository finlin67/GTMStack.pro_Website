'use client'

import * as React from 'react'
import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { createSeededRandom } from '@/lib/seededRandom'

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
  seed?: string
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

interface VariantProps {
  reduced: boolean
  intensity: HeroBackgroundIntensity
  seed: string
}

function ContentFlow({ reduced, intensity, seed }: VariantProps) {
  const Path = reduced ? 'path' : motion.path

  const streams = useMemo(() => {
    const rng = createSeededRandom(`${seed}-contentFlow-streams`)
    const count = rng.randInt(3, 5)
    return Array.from({ length: count }).map((_, i) => ({
      offset: rng.randInt(60, 100) * i,
      cp1y: rng.randInt(100, 180),
      cp2y: rng.randInt(280, 360),
      endY: rng.randInt(220, 300),
      duration: rng.randFloat(14, 20),
      delay: rng.randFloat(0, 2),
    }))
  }, [seed])

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
        {streams.map((s, i) => (
          <Path
            key={i}
            d={`M-100 ${220 + s.offset} C 250 ${s.cp1y + s.offset}, 550 ${s.cp2y + s.offset}, 1300 ${s.endY + s.offset}`}
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.1, intensity), pathLength: 0.8 },
              animate: {
                opacity: [applyIntensity(0.06, intensity), applyIntensity(0.18, intensity), applyIntensity(0.08, intensity)],
                pathLength: [0.7, 1, 0.7],
              },
              transition: {
                ...baseTransition,
                duration: s.duration,
                delay: s.delay,
              },
            })}
            opacity={reduced ? applyIntensity(0.14, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function BranchingPaths({ reduced, intensity, seed }: VariantProps) {
  const Path = reduced ? 'path' : motion.path

  const branches = useMemo(() => {
    const rng = createSeededRandom(`${seed}-branches`)
    const count = rng.randInt(2, 4)
    return Array.from({ length: count }).map((_, i) => ({
      offset: rng.randInt(30, 50) * i,
      curvature: rng.randFloat(0.8, 1.2),
      duration: rng.randFloat(12, 18),
      delay: rng.randFloat(0, 1.5),
    }))
  }, [seed])

  const mainCurve = useMemo(() => {
    const rng = createSeededRandom(`${seed}-mainCurve`)
    return {
      startY: rng.randInt(680, 720),
      cp1: { x: rng.randInt(330, 370), y: rng.randInt(520, 560) },
      cp2: { x: rng.randInt(400, 440), y: rng.randInt(460, 500) },
      mid: { x: rng.randInt(580, 620), y: rng.randInt(400, 440) },
      cp3: { x: rng.randInt(760, 800), y: rng.randInt(340, 380) },
      cp4: { x: rng.randInt(840, 880), y: rng.randInt(300, 340) },
      endY: rng.randInt(200, 240),
      duration: rng.randFloat(18, 22),
    }
  }, [seed])

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
          d={`M200 ${mainCurve.startY} C ${mainCurve.cp1.x} ${mainCurve.cp1.y}, ${mainCurve.cp2.x} ${mainCurve.cp2.y}, ${mainCurve.mid.x} ${mainCurve.mid.y} C ${mainCurve.cp3.x} ${mainCurve.cp3.y}, ${mainCurve.cp4.x} ${mainCurve.cp4.y}, 1000 ${mainCurve.endY}`}
          {...(!reduced && {
            initial: { opacity: applyIntensity(0.12, intensity) },
            animate: {
              opacity: [applyIntensity(0.06, intensity), applyIntensity(0.2, intensity), applyIntensity(0.1, intensity)],
            },
            transition: {
              ...baseTransition,
              duration: mainCurve.duration,
            },
          })}
          opacity={reduced ? applyIntensity(0.16, intensity) : undefined}
        />

        {branches.map((b, i) => (
          <Path
            key={i}
            d={`M${480 + b.offset * 0.5} ${520 - b.offset} C ${620 + b.offset} ${(480 - b.offset) * b.curvature}, ${730 + b.offset} ${(430 - b.offset) * b.curvature}, ${950 + i * 15} ${340 - b.offset}`}
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.08, intensity), pathLength: 0.6 },
              animate: {
                opacity: [applyIntensity(0.04, intensity), applyIntensity(0.18, intensity), applyIntensity(0.08, intensity)],
                pathLength: [0.5, 0.95, 0.6],
              },
              transition: {
                ...baseTransition,
                duration: b.duration,
                delay: b.delay,
              },
            })}
            opacity={reduced ? applyIntensity(0.12, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function OrbitingNodes({ reduced, intensity, seed }: VariantProps) {
  const Group = reduced ? 'g' : motion.g

  const orbits = useMemo(() => {
    const rng = createSeededRandom(`${seed}-orbits`)
    const count = rng.randInt(2, 4)
    return Array.from({ length: count }).map((_, i) => ({
      radius: rng.randInt(160, 200) + i * rng.randInt(70, 90),
      nodeCount: rng.randInt(4, 8),
      angularOffset: rng.randFloat(0, Math.PI * 2),
      duration: rng.randFloat(14, 22) + i * 3,
    }))
  }, [seed])

  const center = useMemo(() => {
    const rng = createSeededRandom(`${seed}-center`)
    return {
      x: rng.randInt(750, 850),
      y: rng.randInt(340, 380),
    }
  }, [seed])

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
        cx={center.x}
        cy={center.y}
        r="260"
        fill="url(#orbitGlow)"
        opacity={reduced ? applyIntensity(0.18, intensity) : applyIntensity(0.25, intensity)}
      />

      {orbits.map((orbit, i) => (
        <g key={i} transform={`translate(${center.x}, ${center.y})`}>
          <circle
            r={orbit.radius}
            fill="none"
            stroke="#38bdf8"
            strokeOpacity={applyIntensity(0.08 + i * 0.02, intensity)}
            strokeWidth={applyStrokeWidth(1, intensity)}
          />
          <Group
            {...(!reduced && {
              initial: { rotate: orbit.angularOffset * (180 / Math.PI) },
              animate: { rotate: [orbit.angularOffset * (180 / Math.PI), orbit.angularOffset * (180 / Math.PI) + 360] },
              transition: {
                ...baseTransition,
                duration: orbit.duration,
              },
            })}
          >
            {Array.from({ length: orbit.nodeCount }).map((_, j) => {
              const angle = (j / orbit.nodeCount) * Math.PI * 2
              const x = Math.cos(angle) * orbit.radius
              const y = Math.sin(angle) * orbit.radius
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

function FunnelStages({ reduced, intensity, seed }: VariantProps) {
  const Rect = reduced ? 'rect' : motion.rect

  const stages = useMemo(() => {
    const rng = createSeededRandom(`${seed}-stages`)
    const count = rng.randInt(3, 5)
    return Array.from({ length: count }).map((_, i) => ({
      width: rng.randInt(700, 780) - i * rng.randInt(100, 140),
      y: 160 + i * rng.randInt(90, 110),
      opacity: 0.14 + i * 0.02,
      duration: rng.randFloat(12, 16),
      delay: rng.randFloat(0, 1) * i,
    }))
  }, [seed])

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
            key={i}
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
                duration: stage.duration,
                delay: stage.delay,
              },
            })}
            opacity={reduced ? applyIntensity(stage.opacity, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function DashboardPulse({ reduced, intensity, seed }: VariantProps) {
  const Rect = reduced ? 'rect' : motion.rect

  const grid = useMemo(() => {
    const rng = createSeededRandom(`${seed}-grid`)
    return {
      rows: rng.randInt(2, 4),
      cols: rng.randInt(4, 6),
      colSpacing: rng.randInt(100, 120),
      rowSpacing: rng.randInt(80, 100),
    }
  }, [seed])

  const curve = useMemo(() => {
    const rng = createSeededRandom(`${seed}-curve`)
    const points = Array.from({ length: rng.randInt(5, 8) }).map((_, i) => ({
      x: 40 + i * rng.randInt(90, 120),
      y: rng.randInt(200, 340),
    }))
    return points.reduce((acc, p, i) => {
      if (i === 0) return `M${p.x} ${p.y}`
      const prev = points[i - 1]
      const cpX = (prev.x + p.x) / 2
      return `${acc} C ${cpX} ${prev.y}, ${cpX} ${p.y}, ${p.x} ${p.y}`
    }, '')
  }, [seed])

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

        {Array.from({ length: grid.rows }).map((_, row) => (
          <g key={row} transform={`translate(40, ${70 + row * grid.rowSpacing})`}>
            {Array.from({ length: grid.cols }).map((_, col) => (
              <Rect
                key={col}
                x={col * grid.colSpacing}
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
          d={curve}
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

function GrowthCurve({ reduced, intensity, seed }: VariantProps) {
  const Path = reduced ? 'path' : motion.path

  const curve = useMemo(() => {
    const rng = createSeededRandom(`${seed}-curve`)
    const segments = rng.randInt(5, 8)
    let path = `M0 ${rng.randInt(400, 440)}`
    for (let i = 0; i < segments; i++) {
      const x = (i + 1) * (960 / segments)
      const y = rng.randInt(400 - i * 50, 420 - i * 55)
      const cpX = x - rng.randInt(40, 80)
      const cpY = y + rng.randInt(20, 50)
      path += ` C ${cpX} ${cpY}, ${cpX + rng.randInt(20, 40)} ${y}, ${x} ${y}`
    }
    return path
  }, [seed])

  const ticks = useMemo(() => {
    const rng = createSeededRandom(`${seed}-ticks`)
    const count = rng.randInt(5, 8)
    return Array.from({ length: count }).map((_, i) => ({
      x: 90 + i * rng.randInt(120, 160),
      height: rng.randInt(80, 140) + i * rng.randInt(15, 25),
      duration: rng.randFloat(14, 18),
      delay: rng.randFloat(0, 0.6) * i,
    }))
  }, [seed])

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
          d={curve}
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

        {ticks.map((tick, i) => (
          <Path
            key={i}
            d={`M${tick.x} 440 L ${tick.x} ${440 - tick.height}`}
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
                duration: tick.duration,
                delay: tick.delay,
              },
            })}
            opacity={reduced ? applyIntensity(0.16, intensity) : undefined}
          />
        ))}
      </g>
    </svg>
  )
}

function NetworkSync({ reduced, intensity, seed }: VariantProps) {
  const Circle = reduced ? 'circle' : motion.circle

  const nodes = useMemo(() => {
    const rng = createSeededRandom(`${seed}-nodes`)
    const count = rng.randInt(5, 9)
    return Array.from({ length: count }).map((_, i) => ({
      x: rng.randInt(220, 320) + i * rng.randInt(80, 100),
      y: rng.randInt(180, 280) + (i % 2) * rng.randInt(80, 160),
      pulseDelay: rng.randFloat(0, 2),
      duration: rng.randFloat(12, 18),
    }))
  }, [seed])

  const connections = useMemo(() => {
    const rng = createSeededRandom(`${seed}-connections`)
    const nodeCount = createSeededRandom(`${seed}-nodes`).randInt(5, 9)
    const links: [number, number][] = []
    for (let i = 0; i < nodeCount - 1; i++) {
      links.push([i, i + 1])
      if (i + 2 < nodeCount && rng.rand() > 0.5) {
        links.push([i, i + 2])
      }
    }
    return links
  }, [seed])

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
          if (!a || !b) return null
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
            initial: { opacity: applyIntensity(0.4, intensity) },
            animate: {
              opacity: [applyIntensity(0.28, intensity), applyIntensity(0.9, intensity), applyIntensity(0.5, intensity)],
            },
            transition: {
              ...baseTransition,
              duration: node.duration,
              delay: node.pulseDelay,
            },
          })}
          opacity={reduced ? applyIntensity(0.55, intensity) : undefined}
        />
      ))}
    </svg>
  )
}

function NeuralFlow({ reduced, intensity, seed }: VariantProps) {
  const Path = reduced ? 'path' : motion.path
  const Circle = reduced ? 'circle' : motion.circle

  const layers = useMemo(() => {
    const rng = createSeededRandom(`${seed}-layers`)
    const count = rng.randInt(2, 4)
    return Array.from({ length: count }).map((_, i) => ({
      y: rng.randInt(200, 240) + i * rng.randInt(100, 130),
      nodeCount: rng.randInt(7, 11),
      nodeSpacing: rng.randInt(80, 100),
      duration: rng.randFloat(16, 22),
      delay: rng.randFloat(0, 1) * i,
    }))
  }, [seed])

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

      {layers.map((layer, i) => (
        <g key={i}>
          <Path
            d={`M160 ${layer.y} H 1040`}
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
                duration: layer.duration,
                delay: layer.delay,
              },
            })}
            opacity={reduced ? applyIntensity(0.16, intensity) : undefined}
          />

          {Array.from({ length: layer.nodeCount }).map((_, j) => {
            const x = 190 + j * layer.nodeSpacing
            return (
              <Circle
                key={`${i}-${j}`}
                cx={x}
                cy={layer.y}
                r={6}
                fill="#e5e7eb"
                fillOpacity={applyIntensity(0.8, intensity)}
                stroke="#38bdf8"
                strokeWidth={applyStrokeWidth(1, intensity)}
                strokeOpacity={applyIntensity(0.7, intensity)}
                {...(!reduced && {
                  initial: { opacity: applyIntensity(0.35, intensity) },
                  animate: {
                    opacity: [applyIntensity(0.18, intensity), applyIntensity(0.85, intensity), applyIntensity(0.4, intensity)],
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

export function HeroBackground({ variant, intensity = 'medium', seed = '', className }: HeroBackgroundProps) {
  const prefersReducedMotion = useReducedMotion() ?? false
  
  const compositeSeed = `${variant}-${seed}`

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
      {variant === 'contentFlow' && <ContentFlow reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
      {variant === 'branchingPaths' && <BranchingPaths reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
      {variant === 'orbitingNodes' && <OrbitingNodes reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
      {variant === 'funnelStages' && <FunnelStages reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
      {variant === 'dashboardPulse' && <DashboardPulse reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
      {variant === 'growthCurve' && <GrowthCurve reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
      {variant === 'networkSync' && <NetworkSync reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
      {variant === 'neuralFlow' && <NeuralFlow reduced={prefersReducedMotion} intensity={intensity} seed={compositeSeed} />}
    </div>
  )
}
