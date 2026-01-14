'use client'

/**
 * SEOHero - Search Rankings Climb Animation
 * 
 * A React component that visualizes SEO optimization with:
 * - Search bar with typing animation
 * - Magnifying glass with search wave effect
 * - Stack of 5 webpage cards representing search results
 * - Optimization tools orbiting around the target card
 * - Animated climb from position #5 to #1
 * - Victory celebration with star burst
 * 
 * @example
 * // Basic usage
 * <SEOHero />
 * 
 * // With speed control
 * <SEOHero speed={1.5} />
 * 
 * // Paused animation
 * <SEOHero isPaused={true} />
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface SEOHeroProps {
  /** Animation speed multiplier (default: 1) */
  speed?: number
  /** Pause all animations */
  isPaused?: boolean
  /** Custom CSS class */
  className?: string
}

interface SearchWave {
  id: number
  delay: number
}

interface Star {
  id: number
  angle: number
  delay: number
}

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

const LOOP_DURATION = 16 // Total loop duration in seconds
const TYPING_DURATION = 1.5
const SEARCH_WAVE_DURATION = 0.8
const CARD_STAGGER = 0.15
const ORBIT_DURATION = 3
const CLIMB_DURATION = 4

// Card colors for different positions
const CARD_COLORS = {
  default: '#64748b',
  highlight: '#3b82f6',
  winner: '#6366f1',
}

// Search term to "type"
const SEARCH_TERM = 'best marketing agency'

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const searchBarVariants: Variants = {
  hidden: { opacity: 0, y: -20, scaleX: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scaleX: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const cursorVariants: Variants = {
  blink: {
    opacity: [1, 0, 1],
    transition: { duration: 0.8, repeat: Infinity, ease: 'steps(2)' },
  },
}

const searchWaveVariants: Variants = {
  initial: { scale: 0, opacity: 0.8 },
  animate: {
    scale: [0, 2.5],
    opacity: [0.8, 0],
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: -20 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
}

const toolOrbitVariants: Variants = {
  orbit: (duration: number) => ({
    rotate: 360,
    transition: {
      duration,
      repeat: Infinity,
      ease: 'linear',
    },
  }),
}

const starBurstVariants: Variants = {
  hidden: { scale: 0, rotate: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: [0, 1.2, 0],
    rotate: [0, 180],
    opacity: [0, 1, 0],
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
}

const rankingBarVariants: Variants = {
  initial: (width: number) => ({ width }),
  grow: (width: number) => ({
    width,
    transition: { duration: 0.5, ease: 'easeOut' },
  }),
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const SEOHero: React.FC<SEOHeroProps> = ({
  speed = 1,
  isPaused = false,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion()
  
  // Animation state
  const [phase, setPhase] = useState<'typing' | 'searching' | 'results' | 'optimizing' | 'climbing' | 'victory' | 'reset'>('typing')
  const [typedLength, setTypedLength] = useState(0)
  const [searchWaves, setSearchWaves] = useState<SearchWave[]>([])
  const [cardsVisible, setCardsVisible] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(5)
  const [showTools, setShowTools] = useState(false)
  const [victoryStars, setVictoryStars] = useState<Star[]>([])
  const [cardPositions, setCardPositions] = useState([1, 2, 3, 4, 5])

  // Adjusted timing based on speed
  const adjustedTypingDuration = TYPING_DURATION / speed
  const adjustedOrbitDuration = ORBIT_DURATION / speed
  const adjustedClimbDuration = CLIMB_DURATION / speed

  // Reset animation state
  const resetAnimation = useCallback(() => {
    setPhase('typing')
    setTypedLength(0)
    setSearchWaves([])
    setCardsVisible(false)
    setCurrentPosition(5)
    setShowTools(false)
    setVictoryStars([])
    setCardPositions([1, 2, 3, 4, 5])
  }, [])

  // Main animation sequence controller
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    let timeouts: NodeJS.Timeout[] = []

    const runSequence = () => {
      // Phase 1: Typing animation
      setPhase('typing')
      const typingInterval = setInterval(() => {
        setTypedLength(prev => {
          if (prev >= SEARCH_TERM.length) {
            clearInterval(typingInterval)
            return prev
          }
          return prev + 1
        })
      }, (adjustedTypingDuration * 1000) / SEARCH_TERM.length)

      // Phase 2: Search wave (after typing)
      timeouts.push(setTimeout(() => {
        setPhase('searching')
        // Create search waves
        const waves: SearchWave[] = [
          { id: 1, delay: 0 },
          { id: 2, delay: 0.15 },
          { id: 3, delay: 0.3 },
        ]
        setSearchWaves(waves)

        // Clear waves after animation
        timeouts.push(setTimeout(() => {
          setSearchWaves([])
        }, 1200 / speed))
      }, adjustedTypingDuration * 1000 + 300))

      // Phase 3: Show results
      timeouts.push(setTimeout(() => {
        setPhase('results')
        setCardsVisible(true)
      }, (adjustedTypingDuration + 1.5) * 1000))

      // Phase 4: Show optimization tools
      timeouts.push(setTimeout(() => {
        setPhase('optimizing')
        setShowTools(true)
      }, (adjustedTypingDuration + 3) * 1000))

      // Phase 5: Climbing animation
      timeouts.push(setTimeout(() => {
        setPhase('climbing')
        
        // Animate position changes
        const climbSteps = [4, 3, 2, 1]
        climbSteps.forEach((pos, index) => {
          timeouts.push(setTimeout(() => {
            setCurrentPosition(pos)
            // Rearrange card positions
            setCardPositions(prev => {
              const newPositions = [...prev]
              const targetIndex = newPositions.indexOf(5)
              const swapIndex = newPositions.indexOf(pos)
              if (targetIndex !== -1 && swapIndex !== -1) {
                [newPositions[targetIndex], newPositions[swapIndex]] = [newPositions[swapIndex], newPositions[targetIndex]]
              }
              return newPositions
            })
          }, (index * adjustedClimbDuration * 1000) / 4))
        })
      }, (adjustedTypingDuration + 5) * 1000))

      // Phase 6: Victory celebration
      timeouts.push(setTimeout(() => {
        setPhase('victory')
        setShowTools(false)
        
        // Create star burst
        const stars: Star[] = Array.from({ length: 8 }, (_, i) => ({
          id: i,
          angle: i * 45,
          delay: i * 0.05,
        }))
        setVictoryStars(stars)
      }, (adjustedTypingDuration + 5 + adjustedClimbDuration) * 1000))

      // Phase 7: Reset and loop
      timeouts.push(setTimeout(() => {
        setPhase('reset')
        resetAnimation()
        runSequence()
      }, (LOOP_DURATION / speed) * 1000))
    }

    runSequence()

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [isPaused, prefersReducedMotion, speed, adjustedTypingDuration, adjustedClimbDuration, resetAnimation])

  // Memoized SVG definitions
  const svgDefs = useMemo(() => (
    <defs>
      {/* Gradients */}
      <linearGradient id="seo-search-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
      </linearGradient>

      <linearGradient id="seo-card-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#475569" stopOpacity="0.9" />
      </linearGradient>

      <linearGradient id="seo-highlight-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.95" />
      </linearGradient>

      <linearGradient id="seo-winner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="50%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>

      <linearGradient id="seo-bar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#a5b4fc" />
      </linearGradient>

      <linearGradient id="seo-wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
      </linearGradient>

      {/* Filters */}
      <filter id="seo-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="seo-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="seo-card-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
      </filter>

      <filter id="seo-winner-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="0.3 0 0.2 0 0.2  0 0.3 0.3 0 0.2  0.2 0.2 1 0 0.4  0 0 0 0.7 0"
        />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  ), [])

  // Calculate card Y position based on its current rank
  const getCardY = (cardNumber: number) => {
    const position = cardPositions.indexOf(cardNumber) + 1
    return 130 + (position - 1) * 60
  }

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <div className={`relative w-full max-w-xl mx-auto ${className}`}>
        <svg viewBox="0 0 500 450" className="w-full" aria-label="SEO Rankings Visualization">
          {svgDefs}
          {/* Static search bar */}
          <rect x="100" y="30" width="300" height="45" rx="22" fill="url(#seo-search-gradient)" />
          <circle cx="135" cy="52" r="12" fill="none" stroke="white" strokeWidth="2" />
          <line x1="144" y1="61" x2="155" y2="72" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <text x="170" y="58" fill="white" fontSize="14" opacity="0.8">best marketing agency</text>
          
          {/* Static cards */}
          {[1, 2, 3, 4, 5].map((num, i) => (
            <g key={num} transform={`translate(120, ${130 + i * 60})`}>
              <rect width="260" height="50" rx="8" fill={num === 1 ? 'url(#seo-winner-gradient)' : 'url(#seo-card-gradient)'} />
              <text x="20" y="32" fill="white" fontSize="16" fontWeight="bold">#{num}</text>
              <rect x="50" y="18" width={100 - (num - 1) * 15} height="14" rx="3" fill="url(#seo-bar-gradient)" />
            </g>
          ))}
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative w-full max-w-xl mx-auto select-none ${className}`}>
      {/* Background glow effects */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-blue-500 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-indigo-500 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-slate-500 rounded-full" />
      </div>

      <motion.svg
        viewBox="0 0 500 450"
        className="w-full relative z-10"
        preserveAspectRatio="xMidYMid meet"
        initial="hidden"
        animate={isPaused ? 'hidden' : 'visible'}
        aria-label="SEO Search Rankings Climb Animation"
      >
        {svgDefs}

        {/* ================================================================ */}
        {/* SEARCH BAR */}
        {/* ================================================================ */}

        <motion.g variants={searchBarVariants}>
          {/* Search bar background */}
          <rect
            x="100"
            y="30"
            width="300"
            height="45"
            rx="22"
            fill="url(#seo-search-gradient)"
            filter="url(#seo-card-shadow)"
          />
          
          {/* Search bar inner highlight */}
          <rect
            x="102"
            y="32"
            width="296"
            height="20"
            rx="10"
            fill="white"
            fillOpacity="0.1"
          />

          {/* Magnifying glass icon */}
          <motion.g
            animate={phase === 'searching' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <circle
              cx="135"
              cy="52"
              r="12"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeOpacity="0.9"
            />
            <line
              x1="144"
              y1="61"
              x2="155"
              y2="72"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.9"
            />
          </motion.g>

          {/* Typed text */}
          <text x="170" y="58" fill="white" fontSize="14" fontWeight="500" opacity="0.9">
            {SEARCH_TERM.substring(0, typedLength)}
          </text>

          {/* Blinking cursor */}
          {phase === 'typing' && typedLength < SEARCH_TERM.length && (
            <motion.rect
              x={170 + typedLength * 7.5}
              y="42"
              width="2"
              height="18"
              fill="white"
              variants={cursorVariants}
              animate="blink"
            />
          )}
        </motion.g>

        {/* ================================================================ */}
        {/* SEARCH WAVES */}
        {/* ================================================================ */}

        <AnimatePresence>
          {searchWaves.map((wave) => (
            <motion.circle
              key={wave.id}
              cx="250"
              cy="52"
              r="20"
              fill="none"
              stroke="url(#seo-wave-gradient)"
              strokeWidth="2"
              variants={searchWaveVariants}
              initial="initial"
              animate="animate"
              style={{ originX: '250px', originY: '52px' }}
            />
          ))}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* SEARCH RESULT CARDS */}
        {/* ================================================================ */}

        <AnimatePresence>
          {cardsVisible && [1, 2, 3, 4, 5].map((cardNum) => {
            const isTargetCard = cardNum === 5
            const currentRank = cardPositions.indexOf(cardNum) + 1
            const isWinner = currentRank === 1 && phase === 'victory'
            
            return (
              <motion.g
                key={cardNum}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: getCardY(cardNum) - 130,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: cardNum * CARD_STAGGER },
                  scale: { duration: 0.4, delay: cardNum * CARD_STAGGER },
                  x: { duration: 0.4, delay: cardNum * CARD_STAGGER },
                  y: { 
                    type: 'spring', 
                    stiffness: 200, 
                    damping: 20,
                    mass: 0.8,
                  },
                }}
                filter={isWinner ? 'url(#seo-winner-glow)' : isTargetCard && showTools ? 'url(#seo-glow)' : 'url(#seo-card-shadow)'}
              >
                <g transform="translate(120, 130)">
                  {/* Card background */}
                  <motion.rect
                    width="260"
                    height="50"
                    rx="8"
                    fill={isWinner ? 'url(#seo-winner-gradient)' : isTargetCard ? 'url(#seo-highlight-gradient)' : 'url(#seo-card-gradient)'}
                    animate={isWinner ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isWinner ? Infinity : 0 }}
                  />
                  
                  {/* Card highlight */}
                  <rect
                    x="2"
                    y="2"
                    width="256"
                    height="20"
                    rx="6"
                    fill="white"
                    fillOpacity="0.08"
                  />

                  {/* Position number */}
                  <motion.text
                    x="20"
                    y="32"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    key={currentRank}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    #{currentRank}
                  </motion.text>

                  {/* Ranking bar */}
                  <motion.rect
                    x="50"
                    y="18"
                    height="14"
                    rx="3"
                    fill="url(#seo-bar-gradient)"
                    initial={{ width: 40 + (6 - cardNum) * 15 }}
                    animate={{ 
                      width: isWinner ? 150 : isTargetCard ? 80 + (5 - currentRank) * 20 : 40 + (6 - cardNum) * 15 
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  {/* Ranking bar segments */}
                  {[0, 1, 2].map((seg) => (
                    <rect
                      key={seg}
                      x={55 + seg * 35}
                      y="21"
                      width="2"
                      height="8"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  ))}

                  {/* Website icon placeholder */}
                  <rect
                    x="200"
                    y="15"
                    width="40"
                    height="20"
                    rx="3"
                    fill="white"
                    fillOpacity="0.15"
                  />
                  <rect x="205" y="20" width="30" height="2" rx="1" fill="white" fillOpacity="0.4" />
                  <rect x="205" y="25" width="20" height="2" rx="1" fill="white" fillOpacity="0.3" />
                </g>
              </motion.g>
            )
          })}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* OPTIMIZATION TOOLS (Orbiting icons) */}
        {/* ================================================================ */}

        {showTools && phase !== 'victory' && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: adjustedOrbitDuration, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '250px', originY: `${getCardY(5) + 25}px` }}
          >
            {/* Gear icon */}
            <g transform={`translate(${250 - 60}, ${getCardY(5) - 15})`}>
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: adjustedOrbitDuration, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="0" cy="0" r="12" fill="#3b82f6" filter="url(#seo-soft-glow)" />
                <circle cx="0" cy="0" r="6" fill="#1e3a5f" />
                {/* Gear teeth */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <circle
                    key={angle}
                    cx={Math.cos((angle * Math.PI) / 180) * 10}
                    cy={Math.sin((angle * Math.PI) / 180) * 10}
                    r="3"
                    fill="#3b82f6"
                  />
                ))}
              </motion.g>
            </g>

            {/* Speed icon (lightning bolt from triangles) */}
            <g transform={`translate(${250 + 60}, ${getCardY(5) - 15})`}>
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: adjustedOrbitDuration, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="0" cy="0" r="12" fill="#6366f1" filter="url(#seo-soft-glow)" />
                <polygon points="2,-8 -4,1 1,1 -2,8 4,-1 -1,-1" fill="#fbbf24" />
              </motion.g>
            </g>

            {/* Link chain (interlocked circles) */}
            <g transform={`translate(${250}, ${getCardY(5) + 65})`}>
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: adjustedOrbitDuration, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="0" cy="0" r="12" fill="#64748b" filter="url(#seo-soft-glow)" />
                <circle cx="-4" cy="0" r="5" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="4" cy="0" r="5" fill="none" stroke="white" strokeWidth="2" />
              </motion.g>
            </g>

            {/* Content icon (document) */}
            <g transform={`translate(${250}, ${getCardY(5) - 55})`}>
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: adjustedOrbitDuration, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="0" cy="0" r="12" fill="#818cf8" filter="url(#seo-soft-glow)" />
                <rect x="-6" y="-7" width="12" height="14" rx="1" fill="white" fillOpacity="0.9" />
                <rect x="-4" y="-4" width="8" height="2" rx="0.5" fill="#818cf8" />
                <rect x="-4" y="0" width="6" height="2" rx="0.5" fill="#818cf8" />
                <rect x="-4" y="4" width="5" height="2" rx="0.5" fill="#818cf8" />
              </motion.g>
            </g>
          </motion.g>
        )}

        {/* ================================================================ */}
        {/* VICTORY STAR BURST */}
        {/* ================================================================ */}

        <AnimatePresence>
          {phase === 'victory' && victoryStars.map((star) => {
            const distance = 50 + star.id * 5
            const x = 250 + Math.cos((star.angle * Math.PI) / 180) * distance
            const y = getCardY(5) + 25 + Math.sin((star.angle * Math.PI) / 180) * distance
            
            return (
              <motion.g
                key={star.id}
                variants={starBurstVariants}
                custom={star.delay}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* 4-point star */}
                <motion.polygon
                  points={`${x},${y - 12} ${x + 3},${y - 3} ${x + 12},${y} ${x + 3},${y + 3} ${x},${y + 12} ${x - 3},${y + 3} ${x - 12},${y} ${x - 3},${y - 3}`}
                  fill="#fbbf24"
                  filter="url(#seo-glow)"
                />
              </motion.g>
            )
          })}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* CLIMBING INDICATOR */}
        {/* ================================================================ */}

        {(phase === 'climbing' || phase === 'victory') && (
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Arrow indicator */}
            <motion.polygon
              points="90,200 100,210 90,220 90,213 70,213 70,207 90,207"
              fill="#22c55e"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            
            {/* Rank change indicator */}
            <text x="55" y="185" fill="#22c55e" fontSize="11" fontWeight="bold">
              ↑ RISING
            </text>
          </motion.g>
        )}

        {/* ================================================================ */}
        {/* STATUS LABELS */}
        {/* ================================================================ */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Phase indicator */}
          <text x="400" y="110" fill="#64748b" fontSize="10" textAnchor="end" opacity="0.7">
            {phase === 'typing' && 'Searching...'}
            {phase === 'searching' && 'Finding results...'}
            {phase === 'results' && 'Results found'}
            {phase === 'optimizing' && 'Optimizing...'}
            {phase === 'climbing' && 'Ranking up!'}
            {phase === 'victory' && '🏆 #1 Position!'}
          </text>

          {/* Your website indicator */}
          {cardsVisible && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <line
                x1="395"
                y1={getCardY(5) + 25}
                x2="420"
                y2={getCardY(5) + 25}
                stroke="#3b82f6"
                strokeWidth="1"
                strokeDasharray="3,2"
              />
              <text
                x="425"
                y={getCardY(5) + 29}
                fill="#3b82f6"
                fontSize="10"
                fontWeight="500"
              >
                Your Site
              </text>
            </motion.g>
          )}
        </motion.g>

        {/* ================================================================ */}
        {/* BOTTOM METRICS */}
        {/* ================================================================ */}

        {phase === 'victory' && (
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <rect x="150" y="405" width="200" height="35" rx="8" fill="url(#seo-highlight-gradient)" fillOpacity="0.2" />
            <text x="250" y="428" textAnchor="middle" fill="#a5b4fc" fontSize="12" fontWeight="600">
              Position #5 → #1 • Top Ranking Achieved!
            </text>
          </motion.g>
        )}
      </motion.svg>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-4 md:gap-6 mt-4"
      >
        <StatCard 
          label="Position" 
          value={`#${currentPosition}`} 
          color={currentPosition === 1 ? 'from-emerald-400 to-green-500' : 'from-blue-400 to-indigo-500'} 
        />
        <StatCard 
          label="Visibility" 
          value={`${Math.round((6 - currentPosition) * 20)}%`}
          color="from-indigo-400 to-purple-500" 
        />
        <StatCard 
          label="Traffic" 
          value={currentPosition === 1 ? '+340%' : `+${(6 - currentPosition) * 50}%`}
          color="from-violet-400 to-fuchsia-500" 
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
}> = ({ label, value, color }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
    <motion.div 
      className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      key={value}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {value}
    </motion.div>
    <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
  </div>
)

export default SEOHero

