'use client'

/**
 * VideoCreativeHero - Creative Production Process Animation
 * 
 * A React component that visualizes video & creative production with:
 * - Isometric director's clapperboard that snaps
 * - Film strip unrolling with creative elements
 * - Elements assembling into a video player
 * - Progress bar animation with sparkle effects
 * - Looping disassembly and reset
 * 
 * @example
 * // Basic usage
 * <VideoCreativeHero />
 * 
 * // With speed control
 * <VideoCreativeHero speed={1.5} />
 * 
 * // Paused animation
 * <VideoCreativeHero isPaused={true} />
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface VideoCreativeHeroProps {
  /** Animation speed multiplier (default: 1) */
  speed?: number
  /** Pause all animations */
  isPaused?: boolean
  /** Custom CSS class */
  className?: string
}

interface Sparkle {
  id: number
  x: number
  y: number
  delay: number
  size: number
}

interface WaveformBar {
  index: number
  baseHeight: number
}

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

const LOOP_DURATION = 12 // Total loop duration in seconds
const CLAP_DURATION = 0.3
const FILM_UNROLL_DURATION = 1.5
const ELEMENT_STAGGER = 0.3
const ASSEMBLY_DURATION = 1.2
const PROGRESS_DURATION = 2

// Film frame colors
const FRAME_COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#64748b']

// Waveform bar configuration
const WAVEFORM_BARS: WaveformBar[] = Array.from({ length: 7 }, (_, i) => ({
  index: i,
  baseHeight: 8 + Math.sin(i * 0.8) * 6,
}))

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const clapperTopVariants: Variants = {
  open: { 
    rotate: -30,
    transition: { duration: 0.1 }
  },
  closed: { 
    rotate: 0,
    transition: { 
      type: 'spring',
      stiffness: 500,
      damping: 15,
      duration: CLAP_DURATION,
    }
  },
}

const filmStripVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: FILM_UNROLL_DURATION,
      ease: 'easeOut',
    },
  },
}

const filmFrameVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 0.4,
      type: 'spring',
      stiffness: 300,
    },
  }),
}

const creativeElementVariants: Variants = {
  hidden: { scale: 0, opacity: 0, y: 20 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      type: 'spring',
      stiffness: 200,
    },
  }),
  assembled: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

const videoPlayerVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 200,
    },
  },
}

const progressBarVariants: Variants = {
  empty: { scaleX: 0 },
  filled: {
    scaleX: 1,
    transition: {
      duration: PROGRESS_DURATION,
      ease: 'linear',
    },
  },
}

const sparkleVariants: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: 0 },
  visible: (delay: number) => ({
    scale: [0, 1.2, 0],
    opacity: [0, 1, 0],
    rotate: [0, 180],
    transition: {
      delay,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
}

const shapeRotateVariants: Variants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const VideoCreativeHero: React.FC<VideoCreativeHeroProps> = ({
  speed = 1,
  isPaused = false,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion()
  
  // Animation state
  const [phase, setPhase] = useState<'clap' | 'unroll' | 'elements' | 'assemble' | 'play' | 'sparkle' | 'disassemble' | 'reset'>('clap')
  const [clapperClosed, setClapperClosed] = useState(false)
  const [filmVisible, setFilmVisible] = useState(false)
  const [elementsVisible, setElementsVisible] = useState(false)
  const [assembled, setAssembled] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [waveformActive, setWaveformActive] = useState(false)

  // Adjusted timing based on speed
  const getAdjustedTime = useCallback((time: number) => time / speed, [speed])

  // Create sparkles at random positions
  const createSparkles = useCallback(() => {
    const newSparkles: Sparkle[] = []
    const corners = [
      { x: 150, y: 150 },
      { x: 350, y: 150 },
      { x: 150, y: 300 },
      { x: 350, y: 300 },
    ]
    
    corners.forEach((corner, i) => {
      for (let j = 0; j < 2; j++) {
        newSparkles.push({
          id: i * 2 + j + Date.now(),
          x: corner.x + (Math.random() - 0.5) * 40,
          y: corner.y + (Math.random() - 0.5) * 40,
          delay: i * 0.1 + j * 0.15,
          size: 8 + Math.random() * 8,
        })
      }
    })
    
    return newSparkles
  }, [])

  // Reset animation state
  const resetAnimation = useCallback(() => {
    setPhase('clap')
    setClapperClosed(false)
    setFilmVisible(false)
    setElementsVisible(false)
    setAssembled(false)
    setPlaying(false)
    setSparkles([])
    setWaveformActive(false)
  }, [])

  // Main animation sequence controller
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const timeouts: NodeJS.Timeout[] = []

    const runSequence = () => {
      // Phase 1: Clapperboard snap
      setPhase('clap')
      timeouts.push(setTimeout(() => {
        setClapperClosed(true)
      }, getAdjustedTime(500)))

      // Phase 2: Film strip unrolls
      timeouts.push(setTimeout(() => {
        setPhase('unroll')
        setFilmVisible(true)
      }, getAdjustedTime(1000)))

      // Phase 3: Creative elements appear
      timeouts.push(setTimeout(() => {
        setPhase('elements')
        setElementsVisible(true)
        setWaveformActive(true)
      }, getAdjustedTime(2500)))

      // Phase 4: Assembly into video player
      timeouts.push(setTimeout(() => {
        setPhase('assemble')
        setAssembled(true)
      }, getAdjustedTime(5000)))

      // Phase 5: Video plays
      timeouts.push(setTimeout(() => {
        setPhase('play')
        setPlaying(true)
      }, getAdjustedTime(6500)))

      // Phase 6: Sparkle effects
      timeouts.push(setTimeout(() => {
        setPhase('sparkle')
        setSparkles(createSparkles())
      }, getAdjustedTime(8500)))

      // Clear sparkles
      timeouts.push(setTimeout(() => {
        setSparkles([])
      }, getAdjustedTime(9500)))

      // Phase 7: Disassemble
      timeouts.push(setTimeout(() => {
        setPhase('disassemble')
        setAssembled(false)
        setPlaying(false)
      }, getAdjustedTime(10000)))

      // Phase 8: Reset and loop
      timeouts.push(setTimeout(() => {
        setPhase('reset')
        resetAnimation()
        runSequence()
      }, getAdjustedTime(LOOP_DURATION * 1000)))
    }

    runSequence()

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [isPaused, prefersReducedMotion, speed, getAdjustedTime, createSparkles, resetAnimation])

  // Memoized SVG definitions
  const svgDefs = useMemo(() => (
    <defs>
      {/* Gradients */}
      <linearGradient id="vc-clapboard-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>

      <linearGradient id="vc-clapboard-stripes" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="25%" stopColor="#1e293b" />
        <stop offset="25%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#1e293b" />
        <stop offset="75%" stopColor="#1e293b" />
        <stop offset="75%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>

      <linearGradient id="vc-film-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>

      <linearGradient id="vc-player-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.25" />
      </linearGradient>

      <linearGradient id="vc-screen-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>

      <linearGradient id="vc-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>

      <linearGradient id="vc-play-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>

      <linearGradient id="vc-palette-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>

      <linearGradient id="vc-palette-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>

      <linearGradient id="vc-palette-3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>

      <linearGradient id="vc-palette-4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>

      {/* Filters */}
      <filter id="vc-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="vc-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
      </filter>

      <filter id="vc-progress-glow" x="-20%" y="-100%" width="140%" height="300%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="0.2 0 0.3 0 0.1  0 0.2 0.4 0 0.2  0.3 0.3 1 0 0.5  0 0 0 0.8 0"
        />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  ), [])

  // Calculate element positions based on assembly state
  const getElementPosition = (elementId: string, assembled: boolean) => {
    const positions: Record<string, { start: { x: number; y: number }; end: { x: number; y: number } }> = {
      palette: { start: { x: 100, y: 180 }, end: { x: 200, y: 200 } },
      playButton: { start: { x: 180, y: 320 }, end: { x: 250, y: 225 } },
      waveform: { start: { x: 280, y: 180 }, end: { x: 300, y: 280 } },
      shapes: { start: { x: 380, y: 200 }, end: { x: 320, y: 200 } },
    }
    
    const pos = positions[elementId]
    return assembled ? pos.end : pos.start
  }

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <div className={`relative w-full max-w-xl mx-auto ${className}`}>
        <svg viewBox="0 0 500 400" className="w-full" aria-label="Video Creative Production">
          {svgDefs}
          {/* Static clapperboard */}
          <g transform="translate(60, 100)">
            <rect width="80" height="50" rx="4" fill="url(#vc-clapboard-gradient)" />
            <rect y="-15" width="80" height="18" rx="2" fill="url(#vc-clapboard-stripes)" />
          </g>
          {/* Static video player */}
          <rect x="150" y="150" width="200" height="140" rx="12" fill="url(#vc-player-gradient)" stroke="#3b82f6" strokeWidth="2" />
          <rect x="160" y="160" width="180" height="100" rx="6" fill="url(#vc-screen-gradient)" />
          <polygon points="240,200 240,230 265,215" fill="url(#vc-play-gradient)" />
          <rect x="160" y="270" width="180" height="6" rx="3" fill="#1e293b" />
          <rect x="160" y="270" width="90" height="6" rx="3" fill="url(#vc-progress-gradient)" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative w-full max-w-xl mx-auto select-none ${className}`}>
      {/* Background glow effects */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-indigo-500 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-violet-500 rounded-full" />
      </div>

      <motion.svg
        viewBox="0 0 500 400"
        className="w-full relative z-10"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Video & Creative Production Process Animation"
      >
        {svgDefs}

        {/* ================================================================ */}
        {/* CLAPPERBOARD */}
        {/* ================================================================ */}

        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <g transform="translate(50, 80)">
            {/* Clapperboard base */}
            <rect
              width="90"
              height="60"
              rx="4"
              fill="url(#vc-clapboard-gradient)"
              filter="url(#vc-soft-shadow)"
            />
            {/* Base details */}
            <rect x="8" y="10" width="50" height="8" rx="2" fill="#1e293b" />
            <rect x="8" y="22" width="35" height="6" rx="2" fill="#1e293b" />
            <rect x="8" y="32" width="70" height="6" rx="2" fill="#1e293b" />
            <rect x="8" y="42" width="55" height="6" rx="2" fill="#1e293b" />
            
            {/* Clapperboard top (hinged piece) */}
            <motion.g
              variants={clapperTopVariants}
              animate={clapperClosed ? 'closed' : 'open'}
              style={{ originX: '0px', originY: '0px' }}
            >
              <rect
                y="-20"
                width="90"
                height="22"
                rx="3"
                fill="url(#vc-clapboard-stripes)"
              />
              {/* Hinge */}
              <circle cx="10" cy="0" r="4" fill="#64748b" />
              <circle cx="80" cy="0" r="4" fill="#64748b" />
            </motion.g>
          </g>
        </motion.g>

        {/* ================================================================ */}
        {/* FILM STRIP */}
        {/* ================================================================ */}

        <AnimatePresence>
          {filmVisible && (
            <motion.g
              variants={filmStripVariants}
              initial="hidden"
              animate="visible"
              style={{ originX: '150px' }}
            >
              {/* Film strip base */}
              <rect
                x="150"
                y="90"
                width="280"
                height="50"
                rx="4"
                fill="url(#vc-film-gradient)"
                filter="url(#vc-soft-shadow)"
              />
              
              {/* Sprocket holes - top */}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect
                  key={`top-${i}`}
                  x={160 + i * 38}
                  y="94"
                  width="8"
                  height="6"
                  rx="1"
                  fill="#0f172a"
                />
              ))}
              
              {/* Sprocket holes - bottom */}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect
                  key={`bottom-${i}`}
                  x={160 + i * 38}
                  y="130"
                  width="8"
                  height="6"
                  rx="1"
                  fill="#0f172a"
                />
              ))}
              
              {/* Film frames */}
              {[0, 1, 2, 3].map((i) => (
                <motion.rect
                  key={`frame-${i}`}
                  x={175 + i * 65}
                  y="104"
                  width="50"
                  height="32"
                  rx="2"
                  fill={FRAME_COLORS[i]}
                  fillOpacity="0.3"
                  variants={filmFrameVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i * 0.2 + 0.3}
                />
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* CREATIVE ELEMENTS */}
        {/* ================================================================ */}

        {elementsVisible && !assembled && (
          <>
            {/* Color Palette Circles */}
            <motion.g
              variants={creativeElementVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              style={{
                x: getElementPosition('palette', assembled).x,
                y: getElementPosition('palette', assembled).y,
              }}
            >
              <circle cx="0" cy="0" r="15" fill="url(#vc-palette-1)" filter="url(#vc-glow)" />
              <circle cx="22" cy="-8" r="12" fill="url(#vc-palette-2)" />
              <circle cx="18" cy="15" r="10" fill="url(#vc-palette-3)" />
              <circle cx="38" cy="5" r="8" fill="url(#vc-palette-4)" />
            </motion.g>

            {/* Play Button Triangle */}
            <motion.g
              variants={creativeElementVariants}
              initial="hidden"
              animate="visible"
              custom={ELEMENT_STAGGER}
            >
              <motion.polygon
                points={`${getElementPosition('playButton', assembled).x},${getElementPosition('playButton', assembled).y - 20} ${getElementPosition('playButton', assembled).x},${getElementPosition('playButton', assembled).y + 20} ${getElementPosition('playButton', assembled).x + 35},${getElementPosition('playButton', assembled).y}`}
                fill="url(#vc-play-gradient)"
                filter="url(#vc-glow)"
              />
            </motion.g>

            {/* Waveform Bars */}
            <motion.g
              variants={creativeElementVariants}
              initial="hidden"
              animate="visible"
              custom={ELEMENT_STAGGER * 2}
            >
              {WAVEFORM_BARS.map((bar) => (
                <motion.rect
                  key={bar.index}
                  x={getElementPosition('waveform', assembled).x + bar.index * 8}
                  y={getElementPosition('waveform', assembled).y - bar.baseHeight / 2}
                  width="5"
                  height={bar.baseHeight}
                  rx="2"
                  fill={bar.index % 2 === 0 ? '#3b82f6' : '#6366f1'}
                  animate={waveformActive ? {
                    height: [bar.baseHeight, bar.baseHeight + 10, bar.baseHeight - 5, bar.baseHeight + 8, bar.baseHeight],
                    y: [
                      getElementPosition('waveform', assembled).y - bar.baseHeight / 2,
                      getElementPosition('waveform', assembled).y - (bar.baseHeight + 10) / 2,
                      getElementPosition('waveform', assembled).y - (bar.baseHeight - 5) / 2,
                      getElementPosition('waveform', assembled).y - (bar.baseHeight + 8) / 2,
                      getElementPosition('waveform', assembled).y - bar.baseHeight / 2,
                    ],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: bar.index * 0.1,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.g>

            {/* Geometric Shapes */}
            <motion.g
              variants={creativeElementVariants}
              initial="hidden"
              animate="visible"
              custom={ELEMENT_STAGGER * 3}
            >
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                  originX: `${getElementPosition('shapes', assembled).x}px`,
                  originY: `${getElementPosition('shapes', assembled).y}px`,
                }}
              >
                {/* Circle */}
                <circle
                  cx={getElementPosition('shapes', assembled).x - 25}
                  cy={getElementPosition('shapes', assembled).y}
                  r="12"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />
                {/* Triangle */}
                <polygon
                  points={`${getElementPosition('shapes', assembled).x},${getElementPosition('shapes', assembled).y - 30} ${getElementPosition('shapes', assembled).x - 12},${getElementPosition('shapes', assembled).y - 10} ${getElementPosition('shapes', assembled).x + 12},${getElementPosition('shapes', assembled).y - 10}`}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                />
                {/* Square */}
                <rect
                  x={getElementPosition('shapes', assembled).x + 10}
                  y={getElementPosition('shapes', assembled).y - 5}
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                />
              </motion.g>
            </motion.g>
          </>
        )}

        {/* ================================================================ */}
        {/* ASSEMBLED VIDEO PLAYER */}
        {/* ================================================================ */}

        <AnimatePresence>
          {assembled && (
            <motion.g
              variants={videoPlayerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
            >
              {/* Player frame */}
              <rect
                x="140"
                y="155"
                width="220"
                height="160"
                rx="16"
                fill="url(#vc-player-gradient)"
                stroke="url(#vc-progress-gradient)"
                strokeWidth="2"
                filter="url(#vc-soft-shadow)"
              />

              {/* Screen */}
              <rect
                x="155"
                y="170"
                width="190"
                height="110"
                rx="8"
                fill="url(#vc-screen-gradient)"
              />

              {/* Screen content - gradient overlay */}
              <rect
                x="155"
                y="170"
                width="190"
                height="110"
                rx="8"
                fill="url(#vc-palette-2)"
                fillOpacity="0.1"
              />

              {/* Mini waveform on screen */}
              {WAVEFORM_BARS.slice(0, 5).map((bar, i) => (
                <motion.rect
                  key={`screen-wave-${i}`}
                  x={180 + i * 25}
                  y={235 - bar.baseHeight}
                  width="15"
                  height={bar.baseHeight * 1.5}
                  rx="2"
                  fill={i % 2 === 0 ? '#3b82f6' : '#6366f1'}
                  fillOpacity="0.6"
                  animate={playing ? {
                    height: [bar.baseHeight * 1.5, bar.baseHeight * 2, bar.baseHeight, bar.baseHeight * 1.8, bar.baseHeight * 1.5],
                  } : {}}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* Play button overlay */}
              <motion.g
                animate={playing ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="250" cy="225" r="25" fill="#000" fillOpacity="0.4" />
                <polygon
                  points="242,212 242,238 262,225"
                  fill="url(#vc-play-gradient)"
                />
              </motion.g>

              {/* Progress bar background */}
              <rect
                x="155"
                y="292"
                width="190"
                height="8"
                rx="4"
                fill="#1e293b"
              />

              {/* Progress bar fill */}
              <motion.rect
                x="155"
                y="292"
                width="190"
                height="8"
                rx="4"
                fill="url(#vc-progress-gradient)"
                variants={progressBarVariants}
                initial="empty"
                animate={playing ? 'filled' : 'empty'}
                style={{ originX: 0 }}
                filter={playing ? 'url(#vc-progress-glow)' : undefined}
              />

              {/* Time indicators */}
              <text x="155" y="312" fill="#64748b" fontSize="9">0:00</text>
              <text x="330" y="312" fill="#64748b" fontSize="9" textAnchor="end">3:45</text>

              {/* Control dots */}
              <circle cx="250" cy="307" r="3" fill="#3b82f6" />
              <circle cx="265" cy="307" r="3" fill="#64748b" />
              <circle cx="235" cy="307" r="3" fill="#64748b" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* SPARKLE EFFECTS */}
        {/* ================================================================ */}

        <AnimatePresence>
          {sparkles.map((sparkle) => (
            <motion.g
              key={sparkle.id}
              variants={sparkleVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={sparkle.delay}
            >
              {/* 4-point star */}
              <polygon
                points={`
                  ${sparkle.x},${sparkle.y - sparkle.size}
                  ${sparkle.x + sparkle.size * 0.3},${sparkle.y - sparkle.size * 0.3}
                  ${sparkle.x + sparkle.size},${sparkle.y}
                  ${sparkle.x + sparkle.size * 0.3},${sparkle.y + sparkle.size * 0.3}
                  ${sparkle.x},${sparkle.y + sparkle.size}
                  ${sparkle.x - sparkle.size * 0.3},${sparkle.y + sparkle.size * 0.3}
                  ${sparkle.x - sparkle.size},${sparkle.y}
                  ${sparkle.x - sparkle.size * 0.3},${sparkle.y - sparkle.size * 0.3}
                `}
                fill="#fbbf24"
                filter="url(#vc-glow)"
              />
            </motion.g>
          ))}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* STATUS INDICATORS */}
        {/* ================================================================ */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Phase label */}
          <text x="250" y="380" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="500">
            {phase === 'clap' && '🎬 Action!'}
            {phase === 'unroll' && '🎞️ Rolling...'}
            {phase === 'elements' && '✨ Creating...'}
            {phase === 'assemble' && '🔧 Assembling...'}
            {phase === 'play' && '▶️ Playing'}
            {phase === 'sparkle' && '⭐ Complete!'}
            {phase === 'disassemble' && '🔄 Resetting...'}
          </text>

          {/* Creative process label */}
          <rect
            x="150"
            y="25"
            width="200"
            height="28"
            rx="14"
            fill="url(#vc-player-gradient)"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <text x="250" y="44" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="600">
            CREATIVE PRODUCTION
          </text>
        </motion.g>
      </motion.svg>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex justify-center gap-4 md:gap-6 mt-4"
      >
        <StatCard 
          label="Videos" 
          value="24" 
          color="from-blue-400 to-blue-500"
          icon="🎬"
        />
        <StatCard 
          label="Views" 
          value="1.2M" 
          color="from-indigo-400 to-indigo-500"
          icon="👁️"
        />
        <StatCard 
          label="Engagement" 
          value="18%" 
          color="from-violet-400 to-purple-500"
          icon="💜"
        />
      </motion.div>
    </div>
  )
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/**
 * Stats card component for bottom metrics
 */
const StatCard: React.FC<{
  label: string
  value: string
  color: string
  icon?: string
}> = ({ label, value, color, icon }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
    <div className="flex items-center gap-2">
      {icon && <span className="text-sm">{icon}</span>}
      <div className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {value}
      </div>
    </div>
    <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
  </div>
)

export default VideoCreativeHero

