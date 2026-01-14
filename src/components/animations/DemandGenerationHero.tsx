'use client'

/**
 * DemandGenerationHero - Animated Pipeline Funnel Flow Visualization
 * 
 * A React component that visualizes the demand generation process with:
 * - Funnel stages (Awareness → Consideration → Decision)
 * - Animated prospect flow with filtering effects
 * - Horizontal pipeline leading to database
 * - Metric counters and particle effects
 * 
 * @example
 * // Basic usage
 * <DemandGenerationHero />
 * 
 * // With speed control
 * <DemandGenerationHero speed={1.5} />
 * 
 * // Paused animation
 * <DemandGenerationHero isPaused={true} />
 */

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface DemandGenerationHeroProps {
  /** Animation speed multiplier (default: 1) */
  speed?: number
  /** Pause all animations */
  isPaused?: boolean
  /** Custom CSS class */
  className?: string
  /** Display mode (card or hero) */
  mode?: 'card' | 'hero'
}

interface Prospect {
  id: number
  startX: number
  delay: number
  stage: 'awareness' | 'consideration' | 'decision' | 'pipeline' | 'database'
  willConvert: boolean
  waveIndex: number
}

interface Particle {
  id: number
  x: number
  y: number
  stage: string
}

interface MetricCounter {
  id: number
  stage: string
  value: string
  x: number
  y: number
}

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

const LOOP_DURATION = 15 // Total loop duration in seconds
const PROSPECTS_PER_WAVE = 9
const WAVE_INTERVAL = 1800 // ms between waves
const STAGGER_DELAY = 0.2 // seconds between prospect entries

// Conversion rates at each stage
const CONVERSION_RATES = {
  awareness: 0.6, // 60% pass to consideration
  consideration: 0.4, // 40% of those pass to decision
  decision: 0.7, // 70% of those become leads
}

// Stage colors
const STAGE_COLORS = {
  awareness: '#60a5fa', // lighter blue
  consideration: '#3b82f6', // medium blue
  decision: '#6366f1', // indigo
  qualified: '#4f46e5', // darker indigo
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const funnelVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
}

const pipelineVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.6, ease: 'easeOut' },
  },
}

const databaseVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.8, type: 'spring', stiffness: 200 },
  },
}

const databasePulseVariants: Variants = {
  idle: { scale: 1 },
  pulse: {
    scale: [1, 1.15, 1],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const metricVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: {
    opacity: [0, 1, 1, 0],
    y: [10, 0, 0, -10],
    scale: [0.8, 1, 1, 0.9],
    transition: { duration: 2, ease: 'easeInOut' },
  },
}

const particleVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const DemandGenerationHero: React.FC<DemandGenerationHeroProps> = ({
  speed = 1,
  isPaused = false,
  className = '',
  mode = 'card',
}) => {
  const prefersReducedMotion = useReducedMotion()
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [particles, setParticles] = useState<Particle[]>([])
  const [metrics, setMetrics] = useState<MetricCounter[]>([])
  const [databasePulse, setDatabasePulse] = useState(false)
  const [leadsInDatabase, setLeadsInDatabase] = useState(0)
  const waveCountRef = useRef(0)
  const animationFrameRef = useRef<number>()

  // Adjusted timing based on speed
  const adjustedDuration = LOOP_DURATION / speed
  const adjustedWaveInterval = WAVE_INTERVAL / speed

  // Determine if prospect will convert at each stage
  const determineConversions = useCallback(() => {
    const willPassAwareness = Math.random() < CONVERSION_RATES.awareness
    const willPassConsideration = willPassAwareness && Math.random() < CONVERSION_RATES.consideration
    const willPassDecision = willPassConsideration && Math.random() < CONVERSION_RATES.decision
    return willPassDecision
  }, [])

  // Create a wave of prospects
  const createProspectWave = useCallback(() => {
    const waveIndex = waveCountRef.current++
    const newProspects: Prospect[] = []

    for (let i = 0; i < PROSPECTS_PER_WAVE; i++) {
      const id = Date.now() + i + Math.random() * 1000
      const startX = (Math.random() - 0.5) * 160 // Spread across funnel top
      const delay = i * STAGGER_DELAY / speed
      const willConvert = determineConversions()

      newProspects.push({
        id,
        startX,
        delay,
        stage: 'awareness',
        willConvert,
        waveIndex,
      })
    }

    return newProspects
  }, [speed, determineConversions])

  // Spawn waves of prospects
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    // Initial wave
    const initialWave = createProspectWave()
    setProspects(initialWave)

    // Show initial metrics
    showMetrics('awareness', initialWave.length)

    // Continuous wave spawning
    const interval = setInterval(() => {
      setProspects(prev => {
        // Clean up old prospects and add new wave
        const filtered = prev.slice(-40)
        const newWave = createProspectWave()
        showMetrics('awareness', newWave.length)
        return [...filtered, ...newWave]
      })
    }, adjustedWaveInterval)

    return () => {
      clearInterval(interval)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isPaused, prefersReducedMotion, createProspectWave, adjustedWaveInterval])

  // Show metric counters
  const showMetrics = useCallback((stage: string, count: number) => {
    const positions = {
      awareness: { x: 380, y: 120 },
      consideration: { x: 380, y: 210 },
      decision: { x: 380, y: 300 },
    }

    const pos = positions[stage as keyof typeof positions]
    if (!pos) return

    const metric: MetricCounter = {
      id: Date.now() + Math.random(),
      stage,
      value: count.toString(),
      x: pos.x,
      y: pos.y,
    }

    setMetrics(prev => [...prev.slice(-6), metric])

    // Remove after animation
    setTimeout(() => {
      setMetrics(prev => prev.filter(m => m.id !== metric.id))
    }, 2000 / speed)
  }, [speed])

  // Add particle effect
  const addParticle = useCallback((x: number, y: number, stage: string) => {
    const particle: Particle = {
      id: Date.now() + Math.random(),
      x,
      y,
      stage,
    }

    setParticles(prev => [...prev.slice(-20), particle])

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== particle.id))
    }, 800 / speed)
  }, [speed])

  // Handle prospect reaching database
  const handleProspectComplete = useCallback((prospect: Prospect) => {
    if (prospect.willConvert) {
      setDatabasePulse(true)
      setLeadsInDatabase(prev => prev + 1)
      addParticle(540, 280, 'database')
      
      setTimeout(() => {
        setDatabasePulse(false)
      }, 400 / speed)
    }

    setProspects(prev => prev.filter(p => p.id !== prospect.id))
  }, [speed, addParticle])

  // Memoized SVG definitions
  const svgDefs = useMemo(() => (
    <defs>
      {/* Gradients */}
      <linearGradient id="dg-funnel-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748b" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
      </linearGradient>

      <linearGradient id="dg-awareness-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
      </linearGradient>

      <linearGradient id="dg-consideration-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.85" />
      </linearGradient>

      <linearGradient id="dg-decision-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.95" />
      </linearGradient>

      <linearGradient id="dg-pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>

      <linearGradient id="dg-database-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4f46e5" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      <linearGradient id="dg-glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
      </linearGradient>

      {/* Filters */}
      <filter id="dg-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="dg-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="dg-database-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="0.5 0 0 0 0.2  0 0.5 0 0 0.3  0 0 1 0 0.5  0 0 0 0.6 0"
        />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  ), [])

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
        <svg viewBox="0 0 600 400" className="w-full" aria-label="Demand Generation Pipeline">
          {svgDefs}
          {/* Static funnel */}
          <polygon
            points="100,60 300,60 280,180 120,180"
            fill="url(#dg-awareness-gradient)"
            stroke="#64748b"
            strokeWidth="2"
          />
          <polygon
            points="120,180 280,180 260,260 140,260"
            fill="url(#dg-consideration-gradient)"
            stroke="#64748b"
            strokeWidth="2"
          />
          <polygon
            points="140,260 260,260 240,320 160,320"
            fill="url(#dg-decision-gradient)"
            stroke="#64748b"
            strokeWidth="2"
          />
          {/* Static pipeline */}
          <rect x="200" y="320" width="240" height="20" rx="10" fill="url(#dg-pipeline-gradient)" />
          {/* Static database */}
          <rect x="460" y="260" width="80" height="100" rx="8" fill="url(#dg-database-gradient)" />
          {/* Labels */}
          <text x="200" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">AWARENESS</text>
          <text x="200" y="225" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">CONSIDERATION</text>
          <text x="200" y="295" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">DECISION</text>
          <text x="500" y="315" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">DATABASE</text>
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative w-full max-w-2xl mx-auto select-none ${className}`}>
      {/* Background glow effects */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-indigo-500 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-slate-500 rounded-full" />
      </div>

      <motion.svg
        viewBox="0 0 600 400"
        className="w-full relative z-10"
        preserveAspectRatio="xMidYMid meet"
        initial="hidden"
        animate={isPaused ? 'hidden' : 'visible'}
        aria-label="Demand Generation Pipeline - Animated funnel showing prospect conversion flow"
      >
        {svgDefs}

        {/* ================================================================ */}
        {/* FUNNEL STRUCTURE */}
        {/* ================================================================ */}

        {/* Funnel - Awareness Stage (Top, widest) */}
        <motion.g custom={0.1} variants={funnelVariants}>
          {/* Trapezoid shape with gradient */}
          <polygon
            points="80,50 320,50 290,140 110,140"
            fill="url(#dg-awareness-gradient)"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          {/* Top edge highlight */}
          <line x1="80" y1="50" x2="320" y2="50" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.8" />
          {/* Stage label */}
          <text x="200" y="105" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" opacity="0.9">
            AWARENESS
          </text>
          {/* Stage indicator dots */}
          <circle cx="95" cy="70" r="3" fill="#60a5fa" opacity="0.6" />
          <circle cx="305" cy="70" r="3" fill="#60a5fa" opacity="0.6" />
        </motion.g>

        {/* Funnel - Consideration Stage (Middle) */}
        <motion.g custom={0.25} variants={funnelVariants}>
          <polygon
            points="110,140 290,140 265,220 135,220"
            fill="url(#dg-consideration-gradient)"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <text x="200" y="188" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" opacity="0.9">
            CONSIDERATION
          </text>
          <circle cx="120" cy="155" r="2.5" fill="#3b82f6" opacity="0.6" />
          <circle cx="280" cy="155" r="2.5" fill="#3b82f6" opacity="0.6" />
        </motion.g>

        {/* Funnel - Decision Stage (Bottom, narrowest) */}
        <motion.g custom={0.4} variants={funnelVariants}>
          <polygon
            points="135,220 265,220 245,290 155,290"
            fill="url(#dg-decision-gradient)"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <text x="200" y="262" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" opacity="0.9">
            DECISION
          </text>
          <circle cx="145" cy="235" r="2" fill="#6366f1" opacity="0.6" />
          <circle cx="255" cy="235" r="2" fill="#6366f1" opacity="0.6" />
        </motion.g>

        {/* ================================================================ */}
        {/* PIPELINE (Horizontal tube) */}
        {/* ================================================================ */}

        <motion.g variants={pipelineVariants} style={{ originX: 0 }}>
          {/* Main pipeline tube */}
          <rect
            x="200"
            y="300"
            width="260"
            height="24"
            rx="12"
            fill="url(#dg-pipeline-gradient)"
            stroke="#4f46e5"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          {/* Pipeline highlight */}
          <rect
            x="200"
            y="302"
            width="260"
            height="8"
            rx="4"
            fill="white"
            fillOpacity="0.1"
          />
          {/* Pipeline connection from funnel */}
          <rect
            x="185"
            y="290"
            width="30"
            height="20"
            rx="4"
            fill="url(#dg-decision-gradient)"
            stroke="#64748b"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          {/* Flow direction indicators */}
          <motion.polygon
            points="420,312 430,305 430,319"
            fill="#818cf8"
            fillOpacity="0.6"
            animate={{ x: [0, 5, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5 / speed, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.polygon
            points="380,312 390,305 390,319"
            fill="#818cf8"
            fillOpacity="0.4"
            animate={{ x: [0, 5, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5 / speed, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
        </motion.g>

        {/* ================================================================ */}
        {/* DATABASE (Isometric cube) */}
        {/* ================================================================ */}

        <motion.g
          variants={databaseVariants}
          animate={databasePulse ? 'pulse' : 'idle'}
          custom={databasePulse}
        >
          <motion.g
            variants={databasePulseVariants}
            animate={databasePulse ? 'pulse' : 'idle'}
            filter={databasePulse ? 'url(#dg-database-glow)' : undefined}
          >
            {/* Isometric cube - top face */}
            <polygon
              points="500,240 540,220 580,240 540,260"
              fill="#6366f1"
              stroke="#818cf8"
              strokeWidth="1"
            />
            {/* Isometric cube - left face */}
            <polygon
              points="500,240 500,320 540,340 540,260"
              fill="#4f46e5"
              stroke="#6366f1"
              strokeWidth="1"
            />
            {/* Isometric cube - right face */}
            <polygon
              points="540,260 540,340 580,320 580,240"
              fill="#4338ca"
              stroke="#6366f1"
              strokeWidth="1"
            />
            {/* Database icon on front */}
            <ellipse cx="520" cy="275" rx="12" ry="5" fill="#818cf8" fillOpacity="0.4" />
            <rect x="508" y="275" width="24" height="20" fill="#818cf8" fillOpacity="0.3" />
            <ellipse cx="520" cy="295" rx="12" ry="5" fill="#818cf8" fillOpacity="0.5" />
            {/* Database highlight */}
            <ellipse cx="520" cy="280" rx="8" ry="3" fill="#a5b4fc" fillOpacity="0.3" />
          </motion.g>
          
          {/* Database label */}
          <text x="540" y="370" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500">
            DATABASE
          </text>
          
          {/* Lead counter */}
          <motion.text
            x="540"
            y="385"
            textAnchor="middle"
            fill="#6366f1"
            fontSize="12"
            fontWeight="700"
            animate={{ scale: databasePulse ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            {leadsInDatabase} leads
          </motion.text>
        </motion.g>

        {/* ================================================================ */}
        {/* ANIMATED PROSPECTS */}
        {/* ================================================================ */}

        <AnimatePresence>
          {prospects.map((prospect) => (
            <ProspectCircle
              key={prospect.id}
              prospect={prospect}
              speed={speed}
              onComplete={handleProspectComplete}
              addParticle={addParticle}
            />
          ))}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* PARTICLE EFFECTS */}
        {/* ================================================================ */}

        <AnimatePresence>
          {particles.map((particle) => (
            <motion.g key={particle.id} variants={particleVariants} initial="hidden" animate="visible" exit="hidden">
              {/* Central particle */}
              <motion.circle
                cx={particle.x}
                cy={particle.y}
                r={3}
                fill="#818cf8"
                filter="url(#dg-soft-glow)"
              />
              {/* Surrounding tiny dots */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.circle
                  key={i}
                  cx={particle.x + Math.cos((angle * Math.PI) / 180) * 8}
                  cy={particle.y + Math.sin((angle * Math.PI) / 180) * 8}
                  r={1.5}
                  fill="#a5b4fc"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.cos((angle * Math.PI) / 180) * 6, Math.cos((angle * Math.PI) / 180) * 12],
                    y: [0, Math.sin((angle * Math.PI) / 180) * 6, Math.sin((angle * Math.PI) / 180) * 12],
                  }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                />
              ))}
            </motion.g>
          ))}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* METRIC COUNTERS */}
        {/* ================================================================ */}

        <AnimatePresence>
          {metrics.map((metric) => (
            <motion.g
              key={metric.id}
              variants={metricVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <rect
                x={metric.x - 25}
                y={metric.y - 12}
                width="50"
                height="24"
                rx="4"
                fill="#1e1b4b"
                fillOpacity="0.8"
                stroke="#6366f1"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
              <text
                x={metric.x}
                y={metric.y + 5}
                textAnchor="middle"
                fill="#a5b4fc"
                fontSize="12"
                fontWeight="600"
              >
                {metric.value}
              </text>
            </motion.g>
          ))}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* CONVERSION FUNNEL LABELS */}
        {/* ================================================================ */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* Awareness stats */}
          <text x="50" y="100" fill="#64748b" fontSize="9" fontWeight="500">
            100%
          </text>
          
          {/* Consideration stats */}
          <text x="50" y="185" fill="#64748b" fontSize="9" fontWeight="500">
            ~60%
          </text>
          
          {/* Decision stats */}
          <text x="50" y="255" fill="#64748b" fontSize="9" fontWeight="500">
            ~24%
          </text>
          
          {/* Leads stats */}
          <text x="50" y="315" fill="#64748b" fontSize="9" fontWeight="500">
            ~17%
          </text>

          {/* Arrow indicators */}
          <line x1="45" y1="110" x2="45" y2="175" stroke="#64748b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2,2" />
          <line x1="45" y1="195" x2="45" y2="245" stroke="#64748b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2,2" />
          <line x1="45" y1="265" x2="45" y2="305" stroke="#64748b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2,2" />
        </motion.g>
      </motion.svg>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-4 md:gap-6 mt-6"
      >
        <StatCard label="Prospects" value="100" color="from-blue-400 to-blue-500" />
        <StatCard label="Qualified" value="→ 40" color="from-indigo-400 to-indigo-500" />
        <StatCard label="Leads" value="→ 10" color="from-violet-400 to-purple-500" />
      </motion.div>
    </div>
  )
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/**
 * Individual animated prospect circle that flows through the funnel
 */
const ProspectCircle: React.FC<{
  prospect: Prospect
  speed: number
  onComplete: (prospect: Prospect) => void
  addParticle: (x: number, y: number, stage: string) => void
}> = ({ prospect, speed, onComplete, addParticle }) => {
  const { id, startX, delay, willConvert } = prospect

  // Determine at which stage this prospect gets filtered out
  const filterOutStage = useMemo(() => {
    if (willConvert) return null
    const rand = Math.random()
    if (rand < 0.4) return 'awareness'
    if (rand < 0.7) return 'consideration'
    return 'decision'
  }, [willConvert])

  // Calculate path through funnel with S-curve drift
  const centerX = 200
  const drift = startX * 0.3 // Subtle lateral drift
  
  // Path keyframes based on whether prospect converts
  const getPathKeyframes = () => {
    const basePath = {
      x: [
        centerX + startX,
        centerX + startX * 0.7 + Math.sin(0.5) * drift,
        centerX + startX * 0.4 + Math.sin(1) * drift,
        centerX + startX * 0.2 + Math.sin(1.5) * drift,
        centerX,
      ],
      y: [35, 95, 180, 255, 310],
    }

    if (willConvert) {
      // Continue through pipeline to database
      return {
        x: [...basePath.x, 280, 350, 420, 500],
        y: [...basePath.y, 312, 312 + Math.sin(Date.now() * 0.01) * 3, 312, 290],
        opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
        scale: [0.6, 1, 0.9, 0.8, 0.75, 0.7, 0.65, 0.6, 0.4],
      }
    }

    // Filter out at appropriate stage
    const fadePoint = filterOutStage === 'awareness' ? 2 : filterOutStage === 'consideration' ? 3 : 4
    const xPath = basePath.x.slice(0, fadePoint + 1)
    const yPath = basePath.y.slice(0, fadePoint + 1)
    const opacityPath = Array(fadePoint).fill(1)
    opacityPath.unshift(0)
    opacityPath.push(0)
    const scalePath = [0.6, 1, 0.9, 0.8, 0.75].slice(0, fadePoint + 1)
    scalePath[scalePath.length - 1] = 0.3

    return {
      x: xPath,
      y: yPath,
      opacity: opacityPath,
      scale: scalePath,
    }
  }

  const pathKeyframes = useMemo(getPathKeyframes, [centerX, startX, drift, willConvert, filterOutStage])

  // Determine circle color based on stage progression
  const getColorAtProgress = (progress: number) => {
    if (progress < 0.25) return STAGE_COLORS.awareness
    if (progress < 0.5) return STAGE_COLORS.consideration
    if (progress < 0.75) return STAGE_COLORS.decision
    return STAGE_COLORS.qualified
  }

  // Duration based on path length
  const duration = willConvert ? 8 / speed : (filterOutStage === 'awareness' ? 2 : filterOutStage === 'consideration' ? 4 : 6) / speed

  return (
    <motion.circle
      cx={0}
      cy={0}
      r={willConvert ? 6 : 5}
      fill={willConvert ? STAGE_COLORS.qualified : STAGE_COLORS.awareness}
      filter={willConvert ? 'url(#dg-glow)' : 'url(#dg-soft-glow)'}
      initial={{
        x: pathKeyframes.x[0],
        y: pathKeyframes.y[0],
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: pathKeyframes.x,
        y: pathKeyframes.y,
        opacity: pathKeyframes.opacity,
        scale: pathKeyframes.scale,
        fill: willConvert
          ? [STAGE_COLORS.awareness, STAGE_COLORS.consideration, STAGE_COLORS.decision, STAGE_COLORS.qualified, STAGE_COLORS.qualified, STAGE_COLORS.qualified, STAGE_COLORS.qualified, STAGE_COLORS.qualified, STAGE_COLORS.qualified]
          : [STAGE_COLORS.awareness, STAGE_COLORS.consideration, STAGE_COLORS.decision],
      }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
      onAnimationComplete={() => {
        if (!willConvert && filterOutStage) {
          // Add particle effect at filter point
          const filterY = filterOutStage === 'awareness' ? 130 : filterOutStage === 'consideration' ? 210 : 280
          addParticle(centerX + startX * 0.3, filterY, filterOutStage)
        }
        onComplete(prospect)
      }}
      exit={{ opacity: 0, scale: 0 }}
    />
  )
}

/**
 * Stats card component for bottom metrics
 */
const StatCard: React.FC<{
  label: string
  value: string
  color: string
}> = ({ label, value, color }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
    <div className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {value}
    </div>
    <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
  </div>
)

export default DemandGenerationHero

