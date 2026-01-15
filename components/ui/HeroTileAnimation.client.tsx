'use client'

import { useMemo, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { createSeededRandom } from '@/lib/seededRandom'

export type TileVariant =
  | 'contentFlow'
  | 'emailBranching'
  | 'omnichannelNodes'
  | 'socialOrbit'
  | 'videoHeatmap'
  | 'funnelStages'
  | 'seoUplift'
  | 'growthExperiments'
  | 'paidRoasFlow'
  | 'martechSync'

export type TileIntensity = 'subtle' | 'medium' | 'bold'

interface HeroTileAnimationProps {
  variant: TileVariant
  seed?: string
  intensity?: TileIntensity
  className?: string
}

const baseTransition = {
  repeat: Infinity,
  ease: 'easeInOut' as const,
}

function applyIntensity(baseOpacity: number, intensity: TileIntensity): number {
  const multiplier = { subtle: 0.6, medium: 1, bold: 1.4 }[intensity]
  return Math.min(baseOpacity * multiplier, 1)
}

interface VariantProps {
  reduced: boolean
  intensity: TileIntensity
  seed: string
}

function ContentFlow({ reduced, intensity, seed }: VariantProps) {
  const Path = reduced ? 'path' : motion.path
  const Rect = reduced ? 'rect' : motion.rect

  const streams = useMemo(() => {
    const rng = createSeededRandom(`${seed}-streams`)
    const count = rng.randInt(3, 5)
    return Array.from({ length: count }).map((_, i) => ({
      y: 60 + i * rng.randInt(70, 90),
      width: rng.randInt(40, 60),
      duration: rng.randFloat(10, 16),
      delay: rng.randFloat(0, 2),
    }))
  }, [seed])

  const arrows = useMemo(() => {
    const rng = createSeededRandom(`${seed}-arrows`)
    return streams.map((s, i) => ({
      startX: rng.randInt(80, 120),
      endX: rng.randInt(480, 540),
      y: s.y + 15,
      duration: rng.randFloat(3, 5),
      delay: i * 0.5,
    }))
  }, [seed, streams])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tileContentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity={applyIntensity(0.8, intensity)} />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.6, intensity)} />
        </linearGradient>
      </defs>

      {streams.map((stream, i) => (
        <g key={i}>
          <Rect
            x={60}
            y={stream.y}
            width={stream.width}
            height={30}
            rx={6}
            fill="url(#tileContentGrad)"
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.3, intensity) },
              animate: { opacity: [applyIntensity(0.3, intensity), applyIntensity(0.7, intensity), applyIntensity(0.3, intensity)] },
              transition: { ...baseTransition, duration: stream.duration, delay: stream.delay },
            })}
            opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
          />
          <Path
            d={`M${arrows[i].startX + 60} ${arrows[i].y} L${arrows[i].endX} ${arrows[i].y}`}
            stroke="#38bdf8"
            strokeWidth={2}
            strokeDasharray="8 4"
            fill="none"
            {...(!reduced && {
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: [0, 1, 1], opacity: [0, applyIntensity(0.6, intensity), 0] },
              transition: { ...baseTransition, duration: arrows[i].duration, delay: arrows[i].delay },
            })}
            opacity={reduced ? applyIntensity(0.4, intensity) : undefined}
          />
          <Rect
            x={arrows[i].endX + 20}
            y={stream.y}
            width={50}
            height={30}
            rx={6}
            stroke="#6366f1"
            strokeWidth={2}
            fill="none"
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.2, intensity) },
              animate: { opacity: [applyIntensity(0.2, intensity), applyIntensity(0.8, intensity), applyIntensity(0.2, intensity)] },
              transition: { ...baseTransition, duration: stream.duration + 2, delay: stream.delay + 1 },
            })}
            opacity={reduced ? applyIntensity(0.4, intensity) : undefined}
          />
        </g>
      ))}
    </svg>
  )
}

function EmailBranching({ reduced, intensity, seed }: VariantProps) {
  const Path = reduced ? 'path' : motion.path
  const Circle = reduced ? 'circle' : motion.circle

  const branches = useMemo(() => {
    const rng = createSeededRandom(`${seed}-branches`)
    const count = rng.randInt(3, 5)
    return Array.from({ length: count }).map((_, i) => ({
      endY: 80 + i * rng.randInt(65, 80),
      curve: rng.randFloat(0.3, 0.7),
      duration: rng.randFloat(12, 18),
      delay: i * rng.randFloat(0.3, 0.6),
    }))
  }, [seed])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tileEmailGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity={applyIntensity(0.7, intensity)} />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.5, intensity)} />
        </linearGradient>
      </defs>

      <rect x={40} y={180} width={70} height={50} rx={8} fill="url(#tileEmailGrad)" opacity={applyIntensity(0.6, intensity)} />
      <text x={75} y={210} fill="white" fontSize={12} textAnchor="middle" opacity={0.8}>@</text>

      {branches.map((branch, i) => {
        const midX = 200 + branch.curve * 100
        const path = `M110 205 Q${midX} 205 ${midX} ${branch.endY + 25} T500 ${branch.endY + 25}`
        return (
          <g key={i}>
            <Path
              d={path}
              stroke="url(#tileEmailGrad)"
              strokeWidth={2}
              fill="none"
              {...(!reduced && {
                initial: { pathLength: 0 },
                animate: { pathLength: [0, 1] },
                transition: { ...baseTransition, duration: branch.duration, delay: branch.delay },
              })}
              opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
            />
            <Circle
              cx={500}
              cy={branch.endY + 25}
              r={12}
              fill="#38bdf8"
              {...(!reduced && {
                initial: { opacity: 0 },
                animate: { opacity: [0, applyIntensity(0.8, intensity), applyIntensity(0.4, intensity)] },
                transition: { ...baseTransition, duration: 4, delay: branch.delay + 2 },
              })}
              opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
            />
          </g>
        )
      })}
    </svg>
  )
}

function OmnichannelNodes({ reduced, intensity, seed }: VariantProps) {
  const Circle = reduced ? 'circle' : motion.circle
  const Line = reduced ? 'line' : motion.line

  const nodes = useMemo(() => {
    const rng = createSeededRandom(`${seed}-nodes`)
    const count = rng.randInt(5, 8)
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2
      const radius = rng.randInt(100, 140)
      return {
        x: 300 + Math.cos(angle) * radius,
        y: 210 + Math.sin(angle) * radius,
        size: rng.randInt(14, 22),
        duration: rng.randFloat(8, 14),
        delay: i * 0.3,
      }
    })
  }, [seed])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="tileCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity={applyIntensity(0.8, intensity)} />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={300} cy={210} r={40} fill="url(#tileCenterGlow)" />
      <circle cx={300} cy={210} r={20} fill="#6366f1" opacity={applyIntensity(0.9, intensity)} />

      {nodes.map((node, i) => (
        <g key={i}>
          <Line
            x1={300}
            y1={210}
            x2={node.x}
            y2={node.y}
            stroke="#38bdf8"
            strokeWidth={1.5}
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.2, intensity) },
              animate: { opacity: [applyIntensity(0.2, intensity), applyIntensity(0.6, intensity), applyIntensity(0.2, intensity)] },
              transition: { ...baseTransition, duration: node.duration, delay: node.delay },
            })}
            opacity={reduced ? applyIntensity(0.3, intensity) : undefined}
          />
          <Circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="#38bdf8"
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.4, intensity) },
              animate: { opacity: [applyIntensity(0.4, intensity), applyIntensity(0.9, intensity), applyIntensity(0.4, intensity)] },
              transition: { ...baseTransition, duration: node.duration, delay: node.delay },
            })}
            opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
          />
        </g>
      ))}
    </svg>
  )
}

function SocialOrbit({ reduced, intensity, seed }: VariantProps) {
  const Circle = reduced ? 'circle' : motion.circle
  const G = reduced ? 'g' : motion.g

  const orbits = useMemo(() => {
    const rng = createSeededRandom(`${seed}-orbits`)
    return [
      { radius: rng.randInt(60, 80), nodes: rng.randInt(3, 5), duration: rng.randFloat(20, 30) },
      { radius: rng.randInt(110, 140), nodes: rng.randInt(4, 6), duration: rng.randFloat(30, 40) },
      { radius: rng.randInt(160, 180), nodes: rng.randInt(5, 8), duration: rng.randFloat(40, 55) },
    ]
  }, [seed])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="tileSocialCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity={applyIntensity(0.9, intensity)} />
          <stop offset="100%" stopColor="#6366f1" stopOpacity={applyIntensity(0.4, intensity)} />
        </radialGradient>
      </defs>

      <circle cx={300} cy={210} r={25} fill="url(#tileSocialCenter)" />

      {orbits.map((orbit, oi) => (
        <g key={oi}>
          <circle cx={300} cy={210} r={orbit.radius} fill="none" stroke="#6366f1" strokeWidth={1} strokeDasharray="4 4" opacity={applyIntensity(0.3, intensity)} />
          {Array.from({ length: orbit.nodes }).map((_, ni) => {
            const angle = (ni / orbit.nodes) * Math.PI * 2
            return (
              <G
                key={ni}
                {...(!reduced && {
                  animate: { rotate: 360 },
                  transition: { ...baseTransition, duration: orbit.duration, ease: 'linear' },
                })}
                style={{ transformOrigin: '300px 210px' }}
              >
                <Circle
                  cx={300 + Math.cos(angle) * orbit.radius}
                  cy={210 + Math.sin(angle) * orbit.radius}
                  r={8 + oi * 2}
                  fill="#38bdf8"
                  {...(!reduced && {
                    initial: { opacity: applyIntensity(0.5, intensity) },
                    animate: { opacity: [applyIntensity(0.5, intensity), applyIntensity(1, intensity), applyIntensity(0.5, intensity)] },
                    transition: { ...baseTransition, duration: 4, delay: ni * 0.5 },
                  })}
                  opacity={reduced ? applyIntensity(0.6, intensity) : undefined}
                />
              </G>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

function VideoHeatmap({ reduced, intensity, seed }: VariantProps) {
  const Rect = reduced ? 'rect' : motion.rect

  const heatZones = useMemo(() => {
    const rng = createSeededRandom(`${seed}-zones`)
    const count = rng.randInt(4, 7)
    return Array.from({ length: count }).map((_, i) => ({
      x: 80 + i * rng.randInt(60, 80),
      width: rng.randInt(40, 70),
      height: rng.randInt(80, 160),
      heat: rng.randFloat(0.3, 1),
      duration: rng.randFloat(6, 12),
      delay: i * 0.4,
    }))
  }, [seed])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tileHeatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity={applyIntensity(0.9, intensity)} />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity={applyIntensity(0.7, intensity)} />
          <stop offset="100%" stopColor="#22c55e" stopOpacity={applyIntensity(0.5, intensity)} />
        </linearGradient>
      </defs>

      <rect x={60} y={80} width={480} height={260} rx={12} fill="#1e293b" opacity={applyIntensity(0.6, intensity)} />
      <polygon points="250,180 350,240 250,300" fill="#6366f1" opacity={applyIntensity(0.8, intensity)} />

      {heatZones.map((zone, i) => (
        <Rect
          key={i}
          x={zone.x}
          y={340 - zone.height}
          width={zone.width}
          height={zone.height}
          rx={4}
          fill="url(#tileHeatGrad)"
          {...(!reduced && {
            initial: { opacity: applyIntensity(0.2, intensity), scaleY: 0.5 },
            animate: {
              opacity: [applyIntensity(0.2, intensity), applyIntensity(zone.heat * 0.8, intensity), applyIntensity(0.3, intensity)],
              scaleY: [0.5, 1, 0.7],
            },
            transition: { ...baseTransition, duration: zone.duration, delay: zone.delay },
          })}
          opacity={reduced ? applyIntensity(zone.heat * 0.6, intensity) : undefined}
          style={{ transformOrigin: `${zone.x + zone.width / 2}px 340px` }}
        />
      ))}
    </svg>
  )
}

function FunnelStages({ reduced, intensity, seed }: VariantProps) {
  const Rect = reduced ? 'rect' : motion.rect
  const Path = reduced ? 'path' : motion.path

  const stages = useMemo(() => {
    const rng = createSeededRandom(`${seed}-stages`)
    const count = rng.randInt(4, 6)
    return Array.from({ length: count }).map((_, i) => ({
      width: 400 - i * rng.randInt(50, 70),
      y: 60 + i * rng.randInt(55, 70),
      duration: rng.randFloat(10, 16),
      delay: i * 0.4,
    }))
  }, [seed])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tileFunnelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity={applyIntensity(0.7, intensity)} />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.5, intensity)} />
        </linearGradient>
      </defs>

      {stages.map((stage, i) => (
        <g key={i}>
          <Rect
            x={(600 - stage.width) / 2}
            y={stage.y}
            width={stage.width}
            height={40}
            rx={8}
            fill="url(#tileFunnelGrad)"
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.3, intensity) },
              animate: { opacity: [applyIntensity(0.3, intensity), applyIntensity(0.7 - i * 0.08, intensity), applyIntensity(0.3, intensity)] },
              transition: { ...baseTransition, duration: stage.duration, delay: stage.delay },
            })}
            opacity={reduced ? applyIntensity(0.5 - i * 0.05, intensity) : undefined}
          />
          {i < stages.length - 1 && (
            <Path
              d={`M${300} ${stage.y + 40} L${300} ${stages[i + 1].y}`}
              stroke="#38bdf8"
              strokeWidth={2}
              strokeDasharray="4 4"
              {...(!reduced && {
                initial: { opacity: 0 },
                animate: { opacity: [0, applyIntensity(0.5, intensity), 0] },
                transition: { ...baseTransition, duration: 3, delay: stage.delay + 1 },
              })}
              opacity={reduced ? applyIntensity(0.3, intensity) : undefined}
            />
          )}
        </g>
      ))}
    </svg>
  )
}

function SeoUplift({ reduced, intensity, seed }: VariantProps) {
  const Rect = reduced ? 'rect' : motion.rect
  const Path = reduced ? 'path' : motion.path

  const bars = useMemo(() => {
    const rng = createSeededRandom(`${seed}-bars`)
    const count = rng.randInt(5, 8)
    return Array.from({ length: count }).map((_, i) => ({
      x: 80 + i * rng.randInt(55, 70),
      height: rng.randInt(60, 180) + i * 15,
      duration: rng.randFloat(8, 14),
      delay: i * 0.3,
    }))
  }, [seed])

  const curve = useMemo(() => {
    const rng = createSeededRandom(`${seed}-curve`)
    const points = bars.map((bar, i) => ({
      x: bar.x + 20,
      y: 320 - bar.height - rng.randInt(-20, 20),
    }))
    return points.reduce((acc, p, i) => {
      if (i === 0) return `M${p.x} ${p.y}`
      const prev = points[i - 1]
      const cpX = (prev.x + p.x) / 2
      return `${acc} C ${cpX} ${prev.y}, ${cpX} ${p.y}, ${p.x} ${p.y}`
    }, '')
  }, [seed, bars])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tileSeoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity={applyIntensity(0.6, intensity)} />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.8, intensity)} />
        </linearGradient>
      </defs>

      {bars.map((bar, i) => (
        <Rect
          key={i}
          x={bar.x}
          y={320 - bar.height}
          width={40}
          height={bar.height}
          rx={6}
          fill="url(#tileSeoGrad)"
          {...(!reduced && {
            initial: { scaleY: 0, opacity: applyIntensity(0.3, intensity) },
            animate: { scaleY: [0, 1, 0.9], opacity: [applyIntensity(0.3, intensity), applyIntensity(0.8, intensity), applyIntensity(0.5, intensity)] },
            transition: { ...baseTransition, duration: bar.duration, delay: bar.delay },
          })}
          opacity={reduced ? applyIntensity(0.6, intensity) : undefined}
          style={{ transformOrigin: `${bar.x + 20}px 320px` }}
        />
      ))}

      <Path
        d={curve}
        stroke="#a855f7"
        strokeWidth={3}
        fill="none"
        {...(!reduced && {
          initial: { pathLength: 0 },
          animate: { pathLength: [0, 1] },
          transition: { ...baseTransition, duration: 6, delay: 1 },
        })}
        opacity={reduced ? applyIntensity(0.6, intensity) : undefined}
      />
    </svg>
  )
}

function GrowthExperiments({ reduced, intensity, seed }: VariantProps) {
  const Circle = reduced ? 'circle' : motion.circle
  const Path = reduced ? 'path' : motion.path

  const testNodes = useMemo(() => {
    const rng = createSeededRandom(`${seed}-tests`)
    const count = rng.randInt(4, 7)
    return Array.from({ length: count }).map((_, i) => ({
      x: 100 + i * rng.randInt(70, 90),
      y: rng.randInt(120, 300),
      size: rng.randInt(12, 20),
      winner: rng.rand() > 0.7,
      duration: rng.randFloat(8, 14),
      delay: i * 0.5,
    }))
  }, [seed])

  const curve = useMemo(() => {
    const rng = createSeededRandom(`${seed}-growth`)
    let path = `M60 ${rng.randInt(300, 340)}`
    for (let i = 0; i < 6; i++) {
      const x = 60 + (i + 1) * 85
      const y = rng.randInt(300 - i * 30, 320 - i * 35)
      path += ` Q${x - 30} ${y + 20}, ${x} ${y}`
    }
    return path
  }, [seed])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <Path
        d={curve}
        stroke="#6366f1"
        strokeWidth={3}
        fill="none"
        {...(!reduced && {
          initial: { pathLength: 0 },
          animate: { pathLength: [0, 1] },
          transition: { ...baseTransition, duration: 8 },
        })}
        opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
      />

      {testNodes.map((node, i) => (
        <g key={i}>
          <Circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={node.winner ? '#22c55e' : '#38bdf8'}
            stroke={node.winner ? '#16a34a' : '#0284c7'}
            strokeWidth={2}
            {...(!reduced && {
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: [0, applyIntensity(0.9, intensity), applyIntensity(0.6, intensity)], scale: [0, 1.2, 1] },
              transition: { ...baseTransition, duration: node.duration, delay: node.delay },
            })}
            opacity={reduced ? applyIntensity(0.6, intensity) : undefined}
          />
          {node.winner && (
            <text x={node.x} y={node.y + 4} fill="white" fontSize={10} textAnchor="middle" opacity={0.9}>✓</text>
          )}
        </g>
      ))}
    </svg>
  )
}

function PaidRoasFlow({ reduced, intensity, seed }: VariantProps) {
  const Rect = reduced ? 'rect' : motion.rect
  const Path = reduced ? 'path' : motion.path
  const Circle = reduced ? 'circle' : motion.circle

  const channels = useMemo(() => {
    const rng = createSeededRandom(`${seed}-channels`)
    const count = rng.randInt(3, 5)
    return Array.from({ length: count }).map((_, i) => ({
      y: 80 + i * rng.randInt(65, 80),
      width: rng.randInt(50, 80),
      roas: rng.randFloat(1.5, 4.5),
      duration: rng.randFloat(10, 16),
      delay: i * 0.5,
    }))
  }, [seed])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tilePaidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity={applyIntensity(0.7, intensity)} />
          <stop offset="100%" stopColor="#22c55e" stopOpacity={applyIntensity(0.8, intensity)} />
        </linearGradient>
      </defs>

      <text x={80} y={50} fill="#6366f1" fontSize={14} opacity={applyIntensity(0.8, intensity)}>Budget</text>
      <text x={480} y={50} fill="#22c55e" fontSize={14} opacity={applyIntensity(0.8, intensity)}>ROAS</text>

      {channels.map((channel, i) => (
        <g key={i}>
          <Rect
            x={60}
            y={channel.y}
            width={channel.width}
            height={35}
            rx={6}
            fill="#6366f1"
            {...(!reduced && {
              initial: { opacity: applyIntensity(0.4, intensity) },
              animate: { opacity: [applyIntensity(0.4, intensity), applyIntensity(0.8, intensity), applyIntensity(0.4, intensity)] },
              transition: { ...baseTransition, duration: channel.duration, delay: channel.delay },
            })}
            opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
          />

          <Path
            d={`M${60 + channel.width + 10} ${channel.y + 17} L${420} ${channel.y + 17}`}
            stroke="url(#tilePaidGrad)"
            strokeWidth={2}
            strokeDasharray="6 4"
            {...(!reduced && {
              initial: { pathLength: 0 },
              animate: { pathLength: [0, 1] },
              transition: { ...baseTransition, duration: 4, delay: channel.delay + 1 },
            })}
            opacity={reduced ? applyIntensity(0.4, intensity) : undefined}
          />

          <Rect
            x={440}
            y={channel.y}
            width={channel.roas * 25}
            height={35}
            rx={6}
            fill="#22c55e"
            {...(!reduced && {
              initial: { opacity: 0, scaleX: 0 },
              animate: { opacity: [0, applyIntensity(0.8, intensity)], scaleX: [0, 1] },
              transition: { ...baseTransition, duration: 3, delay: channel.delay + 2 },
            })}
            opacity={reduced ? applyIntensity(0.6, intensity) : undefined}
            style={{ transformOrigin: '440px center' }}
          />

          <Circle
            cx={450 + channel.roas * 25}
            cy={channel.y + 17}
            r={8}
            fill="#16a34a"
            {...(!reduced && {
              initial: { opacity: 0 },
              animate: { opacity: [0, applyIntensity(1, intensity), applyIntensity(0.6, intensity)] },
              transition: { ...baseTransition, duration: 4, delay: channel.delay + 3 },
            })}
            opacity={reduced ? applyIntensity(0.7, intensity) : undefined}
          />
        </g>
      ))}
    </svg>
  )
}

function MartechSync({ reduced, intensity, seed }: VariantProps) {
  const Rect = reduced ? 'rect' : motion.rect
  const Line = reduced ? 'line' : motion.line

  const stack = useMemo(() => {
    const rng = createSeededRandom(`${seed}-stack`)
    const rows = rng.randInt(2, 3)
    const cols = rng.randInt(3, 5)
    const nodes: { x: number; y: number; size: number; delay: number; duration: number }[] = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          x: 100 + c * rng.randInt(100, 130),
          y: 120 + r * rng.randInt(100, 130),
          size: rng.randInt(50, 70),
          delay: (r * cols + c) * 0.3,
          duration: rng.randFloat(8, 14),
        })
      }
    }
    return nodes
  }, [seed])

  const connections = useMemo(() => {
    const rng = createSeededRandom(`${seed}-connections`)
    const links: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = []
    for (let i = 0; i < stack.length - 1; i++) {
      if (rng.rand() > 0.3) {
        const j = i + 1 < stack.length ? i + 1 : 0
        links.push({
          x1: stack[i].x + stack[i].size / 2,
          y1: stack[i].y + stack[i].size / 2,
          x2: stack[j].x + stack[j].size / 2,
          y2: stack[j].y + stack[j].size / 2,
          delay: i * 0.2,
        })
      }
    }
    return links
  }, [seed, stack])

  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tileMartechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity={applyIntensity(0.6, intensity)} />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity={applyIntensity(0.4, intensity)} />
        </linearGradient>
      </defs>

      {connections.map((link, i) => (
        <Line
          key={i}
          x1={link.x1}
          y1={link.y1}
          x2={link.x2}
          y2={link.y2}
          stroke="#38bdf8"
          strokeWidth={2}
          {...(!reduced && {
            initial: { opacity: 0 },
            animate: { opacity: [0, applyIntensity(0.6, intensity), applyIntensity(0.3, intensity)] },
            transition: { ...baseTransition, duration: 6, delay: link.delay + 1 },
          })}
          opacity={reduced ? applyIntensity(0.3, intensity) : undefined}
        />
      ))}

      {stack.map((node, i) => (
        <Rect
          key={i}
          x={node.x}
          y={node.y}
          width={node.size}
          height={node.size}
          rx={12}
          fill="url(#tileMartechGrad)"
          stroke="#6366f1"
          strokeWidth={2}
          {...(!reduced && {
            initial: { opacity: applyIntensity(0.2, intensity) },
            animate: { opacity: [applyIntensity(0.2, intensity), applyIntensity(0.8, intensity), applyIntensity(0.4, intensity)] },
            transition: { ...baseTransition, duration: node.duration, delay: node.delay },
          })}
          opacity={reduced ? applyIntensity(0.5, intensity) : undefined}
        />
      ))}
    </svg>
  )
}

const variantComponents: Record<TileVariant, React.ComponentType<VariantProps>> = {
  contentFlow: ContentFlow,
  emailBranching: EmailBranching,
  omnichannelNodes: OmnichannelNodes,
  socialOrbit: SocialOrbit,
  videoHeatmap: VideoHeatmap,
  funnelStages: FunnelStages,
  seoUplift: SeoUplift,
  growthExperiments: GrowthExperiments,
  paidRoasFlow: PaidRoasFlow,
  martechSync: MartechSync,
}

export function HeroTileAnimation({
  variant,
  seed = '',
  intensity = 'medium',
  className = '',
}: HeroTileAnimationProps) {
  const prefersReducedMotion = useReducedMotion()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const reduced = hasMounted ? !!prefersReducedMotion : true
  const compositeSeed = `${variant}-${seed}`

  const VariantComponent = variantComponents[variant]

  if (!VariantComponent) {
    return null
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <VariantComponent reduced={reduced} intensity={intensity} seed={compositeSeed} />
    </div>
  )
}
