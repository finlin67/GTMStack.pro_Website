'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import type { HeroVisualVariant } from '@/lib/heroVisuals'

function SignatureConstellation({ reduced }: { reduced: boolean }) {
  const nodes = useMemo(() => {
    const points: { x: number; y: number; size: number; delay: number }[] = []
    const positions = [
      { x: 180, y: 140 }, { x: 320, y: 180 }, { x: 480, y: 120 },
      { x: 620, y: 200 }, { x: 780, y: 160 }, { x: 860, y: 280 },
      { x: 720, y: 380 }, { x: 560, y: 340 }, { x: 400, y: 420 },
      { x: 240, y: 360 }, { x: 140, y: 480 }, { x: 300, y: 540 },
      { x: 460, y: 580 }, { x: 620, y: 520 }, { x: 780, y: 480 },
      { x: 840, y: 600 }, { x: 680, y: 680 }, { x: 520, y: 720 },
      { x: 360, y: 660 }, { x: 200, y: 620 },
    ]
    positions.forEach((pos, i) => {
      points.push({
        x: pos.x,
        y: pos.y,
        size: 3 + (i % 3) * 1.5,
        delay: i * 0.15,
      })
    })
    return points
  }, [])

  const connections = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = []
    const pairs = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
      [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
      [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
      [15, 16], [16, 17], [17, 18], [18, 19], [19, 10],
      [1, 7], [3, 6], [8, 12], [11, 18], [13, 16],
      [0, 9], [2, 7], [4, 6], [14, 5],
    ]
    pairs.forEach(([a, b], i) => {
      lines.push({
        x1: nodes[a].x,
        y1: nodes[a].y,
        x2: nodes[b].x,
        y2: nodes[b].y,
        delay: i * 0.08,
      })
    })
    return lines
  }, [nodes])

  const Path = reduced ? 'line' : motion.line
  const Circle = reduced ? 'circle' : motion.circle

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="constellationStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {connections.map((line, i) => (
        <Path
          key={`line-${i}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#constellationStroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
          {...(!reduced && {
            initial: { opacity: 0, pathLength: 0 },
            animate: {
              opacity: [0.15, 0.35, 0.15],
              pathLength: 1,
            },
            transition: {
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: line.delay,
              },
              pathLength: {
                duration: 1.5,
                ease: 'easeOut',
                delay: line.delay,
              },
            },
          })}
          opacity={reduced ? 0.2 : undefined}
        />
      ))}

      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size * 3}
            fill="url(#nodeGlow)"
            opacity={reduced ? 0.15 : 0.2}
          />
          <Circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="#38bdf8"
            {...(!reduced && {
              initial: { opacity: 0.3 },
              animate: {
                opacity: [0.4, 0.8, 0.4],
              },
              transition: {
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: node.delay,
              },
            })}
            opacity={reduced ? 0.5 : undefined}
          />
        </g>
      ))}

      {!reduced && [0, 4, 9, 14, 18].map((idx) => (
        <motion.circle
          key={`pulse-${idx}`}
          cx={nodes[idx].x}
          cy={nodes[idx].y}
          r={nodes[idx].size * 2}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: idx * 0.4,
          }}
        />
      ))}
    </svg>
  )
}

interface HeroVisualProps {
  image?: string
  pathwaySvg?: string
  className?: string
  variant?: HeroVisualVariant
}

export function HeroVisual({
  image,
  pathwaySvg,
  className,
  variant,
}: HeroVisualProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [svgError, setSvgError] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const prevImageRef = useRef<string | undefined>(image)
  const prevPathwaySvgRef = useRef<string | undefined>(pathwaySvg)
  const prefersReducedMotion = useReducedMotion()
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])
  
  const reducedMotion = hasMounted ? prefersReducedMotion : false
  const kenBurnsDuration = reducedMotion ? 0 : 23
  const shimmerDuration = reducedMotion ? 0 : 16

  // Reset imageError + isLoaded whenever image changes (handles falsy→truthy transitions and any other change)
  useEffect(() => {
    const prevImage = prevImageRef.current
    // If image changes from falsy → truthy, or changes at all, reset error state and reset load state
    if (image !== prevImage) {
      setImageError(false)
      setIsLoaded(false)
    }
    prevImageRef.current = image
  }, [image])

  // Reset svgError when pathwaySvg changes (handles falsy→truthy transitions and any other change)
  useEffect(() => {
    const prevPathwaySvg = prevPathwaySvgRef.current
    // If pathwaySvg changes from falsy → truthy, or changes at all, reset error state
    if (pathwaySvg !== prevPathwaySvg) {
      setSvgError(false)
    }
    prevPathwaySvgRef.current = pathwaySvg
  }, [pathwaySvg])

  // Check if we're on a large screen (for hover animation)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const showSkeleton = !image || imageError || !isLoaded

  // Motion configuration - respect prefers-reduced-motion
  const motionConfig = reducedMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        whileHover: { y: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        whileHover: isLargeScreen ? { y: -6 } : { y: 0 },
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      }

  // If variant is specified, render the variant-specific visual
  if (variant === 'signatureConstellation') {
    return (
      <motion.div
        className={`relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand-900/30 to-slate-900/50 backdrop-blur-sm ${className || ''}`}
        initial={motionConfig.initial}
        animate={motionConfig.animate}
        whileHover={motionConfig.whileHover}
        transition={motionConfig.transition}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-cool-900/30 to-cyan-900/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(90,108,242,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_52%,rgba(139,92,246,0.18),transparent_55%)]" />
        </div>

        <div className="absolute inset-0 z-10">
          <SignatureConstellation reduced={!!reducedMotion} />
        </div>

        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-br from-brand-500/10 via-transparent to-cyan-500/8" />

        {!reducedMotion && (
          <motion.div
            className="absolute inset-0 z-[25] pointer-events-none"
            animate={{ x: ['-30%', '130%'] }}
            transition={{
              duration: shimmerDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
              width: '60%',
              height: '100%',
            }}
          />
        )}

        <div className="absolute inset-0 z-30 rounded-3xl border border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>
    )
  }

  // Always render the container (never return null) to keep the right tile visually present
  return (
    <motion.div
      className={`relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand-900/20 to-slate-900/40 backdrop-blur-sm ${className || ''}`}
      initial={motionConfig.initial}
      animate={motionConfig.animate}
      whileHover={motionConfig.whileHover}
      transition={motionConfig.transition}
    >
      {/* Ambient drift orb behind image */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 -z-10 will-change-transform"
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
        </motion.div>
      )}

      {/* Default decorative background (always renders, even with no image) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-cool-900/25 to-cyan-900/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(90,108,242,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_52%,rgba(139,92,246,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_82%,rgba(34,211,238,0.18),transparent_60%)]" />
      </div>

      {/* Subtle overlay SVG pattern (always renders) */}
      <svg
        className="absolute inset-0 z-10 opacity-[0.18] mix-blend-soft-light pointer-events-none"
        viewBox="0 0 1000 1000"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {/* Curves */}
        <path
          d="M-40 220 C 140 120, 300 120, 460 240 S 760 430, 1040 300"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="2"
        />
        <path
          d="M-40 640 C 160 520, 360 560, 520 700 S 820 930, 1040 740"
          stroke="rgba(56,189,248,0.14)"
          strokeWidth="2"
        />
        <path
          d="M120 1040 C 240 820, 360 720, 520 640 S 860 520, 1040 420"
          stroke="rgba(168,85,247,0.12)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Dots */}
        {[
          [160, 210],
          [330, 250],
          [520, 320],
          [690, 410],
          [835, 350],
          [220, 620],
          [410, 650],
          [590, 740],
          [770, 820],
          [890, 760],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="3" fill="rgba(255,255,255,0.22)" />
            <circle cx={cx} cy={cy} r="14" fill="rgba(255,255,255,0.08)" />
          </g>
        ))}
      </svg>

      {/* Skeleton (visible while loading OR if image missing OR if image errored). Fades out once loaded. */}
      <motion.div
        className="absolute inset-0 rounded-3xl z-30"
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: showSkeleton ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ pointerEvents: 'none' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl" />
        {/* Subtle pattern overlay if image errors */}
        {imageError && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_70%)] rounded-3xl" />
        )}
      </motion.div>

      {/* Abstract dark-tech image */}
      {image && !imageError && (
        <motion.div
          className="absolute inset-0 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0"
            animate={
              reducedMotion
                ? { scale: 1 }
                : {
                    scale: [1, 1.04, 1],
                  }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: kenBurnsDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 0vw, 50vw"
              onError={() => {
                setImageError(true)
                setIsLoaded(false) // Keep skeleton visible on error
              }}
              onLoad={() => {
                setImageError(false)
                setIsLoaded(true) // Fade skeleton out when image loads
              }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Contrast normalization gradient - darkens right edge for better integration with dark heroes */}
      {image && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent pointer-events-none" />
      )}

      {/* Pathway SVG overlay - faint vector route lines + waypoints + signal dots */}
      {pathwaySvg && !svgError && (
        <div className="absolute inset-0 z-40 opacity-[0.12] pointer-events-none">
          {/* Use native img for SVG overlay to avoid Next/Image loader rejection on some SVGs */}
          <img
            src={pathwaySvg}
            alt=""
            className="w-full h-full object-contain mix-blend-soft-light"
            aria-hidden="true"
            onError={() => setSvgError(true)}
            onLoad={() => setSvgError(false)}
          />
        </div>
      )}

      {/* Gradient overlays for depth and glassy effect */}
      <div className="absolute inset-0 z-50 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />
      <div className="absolute inset-0 z-50 bg-gradient-to-br from-brand-500/15 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 z-50 bg-gradient-to-tl from-transparent via-transparent to-cool-500/5" />
      
      {/* Shimmer sweep overlay */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 z-[55] pointer-events-none"
          animate={{
            x: ['-30%', '130%'],
          }}
          transition={{
            duration: shimmerDuration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
            width: '60%',
            height: '100%',
          }}
        />
      )}

      {/* Glassy border highlight */}
      <div className="absolute inset-0 z-[60] rounded-3xl border border-white/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 z-[60] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  )
}

