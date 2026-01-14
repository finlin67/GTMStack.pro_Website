'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface HeroVisualProps {
  image?: string
  pathwaySvg?: string
  className?: string
}

export function HeroVisual({
  image,
  pathwaySvg,
  className,
}: HeroVisualProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [svgError, setSvgError] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const prevImageRef = useRef<string | undefined>(image)
  const prevPathwaySvgRef = useRef<string | undefined>(pathwaySvg)
  const prefersReducedMotion = useReducedMotion()
  const kenBurnsDuration = useMemo(
    () => (prefersReducedMotion ? 0 : 20 + Math.random() * 6),
    [prefersReducedMotion]
  )
  const shimmerDuration = useMemo(
    () => (prefersReducedMotion ? 0 : 14 + Math.random() * 4),
    [prefersReducedMotion]
  )

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
  const motionConfig = prefersReducedMotion
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
      {!prefersReducedMotion && (
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
              prefersReducedMotion
                ? { scale: 1 }
                : {
                    scale: [1, 1.04, 1],
                  }
            }
            transition={
              prefersReducedMotion
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
      {!prefersReducedMotion && (
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

