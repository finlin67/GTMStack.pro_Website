/**
 * GrowthMarketingHero - Exponential Growth Flywheel Animation
 * 
 * A React component that visualizes growth marketing with:
 * - Central hub representing product/brand
 * - Three growth loops: Acquisition, Activation, Retention
 * - User icons flowing and multiplying through loops
 * - Flywheel effect with accelerating speed
 * - Exponential growth curve visualization
 * - Energy ring pulse effects
 * 
 * @example
 * // Basic usage
 * <GrowthMarketingHero />
 * 
 * // With speed control
 * <GrowthMarketingHero speed={1.5} />
 * 
 * // Paused animation
 * <GrowthMarketingHero isPaused={true} />
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface GrowthMarketingHeroProps {
  /** Animation speed multiplier (default: 1) */
  speed?: number
  /** Pause all animations */
  isPaused?: boolean
  /** Custom CSS class */
  className?: string
}

interface FlowingUser {
  id: number
  stage: 'acquisition' | 'activation' | 'retention' | 'referral'
  angle: number
  delay: number
  isMultiplied: boolean
  multipliedIndex?: number
}

interface EnergyRing {
  id: number
  delay: number
}

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

const LOOP_DURATION = 14 // Total loop duration in seconds
const CENTER_X = 250
const CENTER_Y = 200
const ORBIT_RADIUS = 110
const USER_FLOW_DURATION = 3

// Loop positions (120° apart)
const LOOP_POSITIONS = [
  { angle: -90, label: 'ACQUISITION', color: '#3b82f6' },  // Top
  { angle: 30, label: 'ACTIVATION', color: '#6366f1' },    // Bottom right
  { angle: 150, label: 'RETENTION', color: '#8b5cf6' },    // Bottom left
]

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const hubVariants: Variants = {
  initial: { scale: 1 },
  expanded: {
    scale: 1.3,
    transition: { duration: 4, ease: 'easeInOut' },
  },
  pulse: {
    scale: [1.3, 1.35, 1.3],
    transition: { duration: 0.5, repeat: 3 },
  },
}

const loopSectionVariants: Variants = {
  inactive: { opacity: 0.5, scale: 1 },
  active: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

const userVariants: Variants = {
  enter: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  multiply: {
    scale: [1, 1.2, 0.6],
    transition: { duration: 0.4 },
  },
  exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
}

const energyRingVariants: Variants = {
  initial: { scale: 0, opacity: 0.8 },
  animate: {
    scale: [0, 3],
    opacity: [0.8, 0],
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

const graphLineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 3, ease: 'easeInOut' },
  },
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const getPositionOnOrbit = (angle: number, radius: number = ORBIT_RADIUS) => {
  const rad = (angle * Math.PI) / 180
  return {
    x: CENTER_X + Math.cos(rad) * radius,
    y: CENTER_Y + Math.sin(rad) * radius,
  }
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const GrowthMarketingHero: React.FC<GrowthMarketingHeroProps> = ({
  speed = 1,
  isPaused = false,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion()
  
  // Animation state
  const [phase, setPhase] = useState<'initial' | 'flowing' | 'accelerating' | 'peak' | 'reset'>('initial')
  const [users, setUsers] = useState<FlowingUser[]>([])
  const [activeLoop, setActiveLoop] = useState<number | null>(null)
  const [hubScale, setHubScale] = useState(1)
  const [rotationSpeed, setRotationSpeed] = useState(0.8)
  const [energyRings, setEnergyRings] = useState<EnergyRing[]>([])
  const [showGraph, setShowGraph] = useState(false)
  const [userCount, setUserCount] = useState(0)
  const [systemRotation, setSystemRotation] = useState(0)

  // Adjusted timing
  const getAdjustedTime = useCallback((time: number) => time / speed, [speed])

  // Create new user
  const createUser = useCallback((isMultiplied: boolean = false, multipliedIndex?: number): FlowingUser => ({
    id: Date.now() + Math.random() * 1000,
    stage: 'acquisition',
    angle: -90,
    delay: Math.random() * 0.3,
    isMultiplied,
    multipliedIndex,
  }), [])

  // Create energy rings
  const createEnergyRings = useCallback(() => {
    return Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + i,
      delay: i * 0.2,
    }))
  }, [])

  // Reset animation
  const resetAnimation = useCallback(() => {
    setPhase('initial')
    setUsers([])
    setActiveLoop(null)
    setHubScale(1)
    setRotationSpeed(0.8)
    setEnergyRings([])
    setShowGraph(false)
    setUserCount(0)
    setSystemRotation(0)
  }, [])

  // Main animation sequence
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const timeouts: NodeJS.Timeout[] = []
    let userInterval: NodeJS.Timeout

    const runSequence = () => {
      // Phase 1: Initial - start with a few users
      setPhase('initial')
      
      timeouts.push(setTimeout(() => {
        setPhase('flowing')
        // Start spawning users
        let spawnCount = 0
        userInterval = setInterval(() => {
          if (spawnCount < 8) {
            setUsers(prev => [...prev.slice(-15), createUser()])
            setUserCount(prev => prev + 1)
            spawnCount++
          }
        }, getAdjustedTime(800))
      }, getAdjustedTime(500)))

      // Animate users through stages
      const stageInterval = setInterval(() => {
        setUsers(prev => {
          return prev.map(user => {
            // Progress through stages
            if (user.stage === 'acquisition') {
              setActiveLoop(0)
              return { ...user, stage: 'activation' as const, angle: 30 }
            } else if (user.stage === 'activation') {
              setActiveLoop(1)
              return { ...user, stage: 'retention' as const, angle: 150 }
            } else if (user.stage === 'retention' && !user.isMultiplied) {
              setActiveLoop(2)
              // Multiply user (referral effect)
              return { ...user, stage: 'referral' as const }
            }
            return user
          })
        })

        // Add multiplied users from referrals
        setUsers(prev => {
          const newUsers: FlowingUser[] = []
          prev.forEach(user => {
            if (user.stage === 'referral' && !user.isMultiplied) {
              // Create 1-2 referred users
              const referralCount = Math.random() > 0.5 ? 2 : 1
              for (let i = 0; i < referralCount; i++) {
                newUsers.push(createUser(true, i))
                setUserCount(c => c + 1)
              }
            }
          })
          // Remove users that completed the cycle
          const filtered = prev.filter(u => u.stage !== 'referral')
          return [...filtered, ...newUsers].slice(-20)
        })
      }, getAdjustedTime(USER_FLOW_DURATION * 1000 / 3))

      // Phase 2: Acceleration
      timeouts.push(setTimeout(() => {
        setPhase('accelerating')
        setRotationSpeed(1.2)
        setHubScale(1.15)
      }, getAdjustedTime(5000)))

      // Gradual hub expansion
      timeouts.push(setTimeout(() => {
        setHubScale(1.25)
        setRotationSpeed(1.4)
        setShowGraph(true)
      }, getAdjustedTime(7000)))

      // Phase 3: Peak growth
      timeouts.push(setTimeout(() => {
        setPhase('peak')
        setHubScale(1.3)
        setRotationSpeed(1.5)
        setEnergyRings(createEnergyRings())
      }, getAdjustedTime(10000)))

      // Clear energy rings
      timeouts.push(setTimeout(() => {
        setEnergyRings([])
      }, getAdjustedTime(11500)))

      // Phase 4: Reset and loop
      timeouts.push(setTimeout(() => {
        clearInterval(userInterval)
        clearInterval(stageInterval)
        setPhase('reset')
        resetAnimation()
        runSequence()
      }, getAdjustedTime(LOOP_DURATION * 1000)))

      return () => {
        clearInterval(stageInterval)
      }
    }

    runSequence()

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [isPaused, prefersReducedMotion, speed, getAdjustedTime, createUser, createEnergyRings, resetAnimation])

  // System rotation animation
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return
    
    const interval = setInterval(() => {
      setSystemRotation(prev => (prev + 0.3 * rotationSpeed) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused, prefersReducedMotion, rotationSpeed])

  // Memoized SVG definitions
  const svgDefs = useMemo(() => (
    <defs>
      {/* Gradients */}
      <linearGradient id="gm-hub-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      <linearGradient id="gm-acquisition-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
      </linearGradient>

      <linearGradient id="gm-activation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.7" />
      </linearGradient>

      <linearGradient id="gm-retention-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
      </linearGradient>

      <linearGradient id="gm-user-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>

      <linearGradient id="gm-graph-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>

      <linearGradient id="gm-connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
      </linearGradient>

      {/* Filters */}
      <filter id="gm-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="gm-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="gm-hub-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="0.3 0 0.2 0 0.15  0 0.3 0.4 0 0.2  0.2 0.3 1 0 0.5  0 0 0 0.6 0"
        />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="gm-trail" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      </filter>
    </defs>
  ), [])

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <div className={`relative w-full max-w-xl mx-auto ${className}`}>
        <svg viewBox="0 0 500 400" className="w-full" aria-label="Growth Marketing Flywheel">
          {svgDefs}
          {/* Static hub */}
          <circle cx={CENTER_X} cy={CENTER_Y} r="40" fill="url(#gm-hub-gradient)" />
          {/* Static loops */}
          {LOOP_POSITIONS.map((loop, i) => {
            const pos = getPositionOnOrbit(loop.angle)
            return (
              <g key={i}>
                <circle cx={pos.x} cy={pos.y} r="30" fill={`url(#gm-${['acquisition', 'activation', 'retention'][i]}-gradient)`} />
                <text x={pos.x} y={pos.y + 45} textAnchor="middle" fill="#64748b" fontSize="9">{loop.label}</text>
              </g>
            )
          })}
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative w-full max-w-xl mx-auto select-none ${className}`}>
      {/* Background glow effects */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-500 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-indigo-500 rounded-full" />
        <div className="absolute bottom-1/3 left-1/2 w-36 h-36 bg-violet-500 rounded-full" />
      </div>

      <motion.svg
        viewBox="0 0 500 400"
        className="w-full relative z-10"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Growth Marketing Exponential Flywheel Animation"
      >
        {svgDefs}

        {/* ================================================================ */}
        {/* ROTATING SYSTEM CONTAINER */}
        {/* ================================================================ */}

        <motion.g
          animate={{ rotate: systemRotation }}
          style={{ originX: `${CENTER_X}px`, originY: `${CENTER_Y}px` }}
        >
          {/* ================================================================ */}
          {/* CONNECTION LINES BETWEEN LOOPS */}
          {/* ================================================================ */}

          {LOOP_POSITIONS.map((loop, i) => {
            const pos1 = getPositionOnOrbit(loop.angle, 70)
            const nextLoop = LOOP_POSITIONS[(i + 1) % 3]
            const pos2 = getPositionOnOrbit(nextLoop.angle, 70)
            const isActive = activeLoop === i || activeLoop === ((i + 1) % 3)
            
            return (
              <motion.line
                key={`connection-${i}`}
                x1={pos1.x}
                y1={pos1.y}
                x2={pos2.x}
                y2={pos2.y}
                stroke="url(#gm-connection-gradient)"
                strokeWidth={isActive ? 3 : 2}
                strokeDasharray="5,5"
                animate={{
                  opacity: isActive ? 0.9 : 0.4,
                  strokeWidth: isActive ? 3 : 2,
                }}
                transition={{ duration: 0.3 }}
              />
            )
          })}

          {/* ================================================================ */}
          {/* GROWTH LOOP SECTIONS */}
          {/* ================================================================ */}

          {LOOP_POSITIONS.map((loop, i) => {
            const pos = getPositionOnOrbit(loop.angle)
            const isActive = activeLoop === i
            const gradientId = `gm-${['acquisition', 'activation', 'retention'][i]}-gradient`
            
            return (
              <motion.g
                key={`loop-${i}`}
                variants={loopSectionVariants}
                animate={isActive ? 'active' : 'inactive'}
              >
                {/* Loop circle */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r="35"
                  fill={`url(#${gradientId})`}
                  filter={isActive ? 'url(#gm-glow)' : 'url(#gm-soft-glow)'}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Loop icon */}
                <g transform={`translate(${pos.x}, ${pos.y})`}>
                  {i === 0 && (
                    // Acquisition - Upward arrow
                    <g>
                      <polygon
                        points="0,-15 10,-5 5,-5 5,10 -5,10 -5,-5 -10,-5"
                        fill="white"
                        fillOpacity="0.9"
                      />
                    </g>
                  )}
                  {i === 1 && (
                    // Activation - Checkmark
                    <g>
                      <line x1="-10" y1="0" x2="-3" y2="8" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      <line x1="-3" y1="8" x2="10" y2="-8" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </g>
                  )}
                  {i === 2 && (
                    // Retention - Refresh arrows (simplified)
                    <g>
                      <circle cx="0" cy="0" r="10" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="20,10" />
                      <polygon points="8,-8 12,-3 5,-3" fill="white" />
                      <polygon points="-8,8 -12,3 -5,3" fill="white" />
                    </g>
                  )}
                </g>
              </motion.g>
            )
          })}
        </motion.g>

        {/* ================================================================ */}
        {/* CENTRAL HUB */}
        {/* ================================================================ */}

        <motion.g
          animate={{ scale: hubScale }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ originX: `${CENTER_X}px`, originY: `${CENTER_Y}px` }}
        >
          {/* Hub glow ring */}
          <motion.circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r="50"
            fill="none"
            stroke="url(#gm-hub-gradient)"
            strokeWidth="2"
            strokeOpacity={0.4}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main hub */}
          <motion.circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r="40"
            fill="url(#gm-hub-gradient)"
            filter={phase === 'peak' ? 'url(#gm-hub-glow)' : 'url(#gm-glow)'}
            animate={phase === 'peak' ? {
              scale: [1, 1.05, 1],
            } : {}}
            transition={{
              duration: 0.5,
              repeat: phase === 'peak' ? 3 : 0,
            }}
          />

          {/* Hub center icon (growth symbol) */}
          <g transform={`translate(${CENTER_X}, ${CENTER_Y})`}>
            <polygon
              points="0,-20 8,-8 20,-8 10,2 14,18 0,10 -14,18 -10,2 -20,-8 -8,-8"
              fill="white"
              fillOpacity="0.9"
            />
          </g>

          {/* Hub label */}
          <text
            x={CENTER_X}
            y={CENTER_Y + 60}
            textAnchor="middle"
            fill="#a5b4fc"
            fontSize="11"
            fontWeight="600"
          >
            GROWTH ENGINE
          </text>
        </motion.g>

        {/* ================================================================ */}
        {/* FLOWING USERS */}
        {/* ================================================================ */}

        <AnimatePresence>
          {users.map((user) => {
            const targetPos = getPositionOnOrbit(user.angle, ORBIT_RADIUS - 35)
            const offsetX = user.isMultiplied ? (user.multipliedIndex || 0) * 15 - 7 : 0
            
            return (
              <motion.g key={user.id}>
                {/* User trail effect */}
                <motion.circle
                  cx={targetPos.x + offsetX}
                  cy={targetPos.y}
                  r="8"
                  fill="url(#gm-user-gradient)"
                  filter="url(#gm-trail)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                />
                
                {/* User circle */}
                <motion.circle
                  cx={targetPos.x + offsetX}
                  cy={targetPos.y}
                  r="6"
                  fill="url(#gm-user-gradient)"
                  filter="url(#gm-soft-glow)"
                  variants={userVariants}
                  initial="enter"
                  animate={user.stage === 'retention' && !user.isMultiplied ? 'multiply' : 'visible'}
                  exit="exit"
                />

                {/* User head (makes it look like a person icon) */}
                <motion.circle
                  cx={targetPos.x + offsetX}
                  cy={targetPos.y - 4}
                  r="3"
                  fill="#fcd34d"
                  variants={userVariants}
                  initial="enter"
                  animate="visible"
                  exit="exit"
                />
              </motion.g>
            )
          })}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* ENERGY RINGS */}
        {/* ================================================================ */}

        <AnimatePresence>
          {energyRings.map((ring) => (
            <motion.circle
              key={ring.id}
              cx={CENTER_X}
              cy={CENTER_Y}
              r="40"
              fill="none"
              stroke="url(#gm-hub-gradient)"
              strokeWidth="2"
              variants={energyRingVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
              style={{ originX: `${CENTER_X}px`, originY: `${CENTER_Y}px` }}
              transition={{ delay: ring.delay }}
            />
          ))}
        </AnimatePresence>

        {/* ================================================================ */}
        {/* LOOP LABELS (Counter-rotate to stay readable) */}
        {/* ================================================================ */}

        {LOOP_POSITIONS.map((loop, i) => {
          const pos = getPositionOnOrbit(loop.angle)
          return (
            <motion.text
              key={`label-${i}`}
              x={pos.x}
              y={pos.y + 55}
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
              fontWeight="500"
              animate={{ rotate: -systemRotation }}
              style={{ originX: `${pos.x}px`, originY: `${pos.y + 55}px` }}
            >
              {loop.label}
            </motion.text>
          )
        })}

        {/* ================================================================ */}
        {/* EXPONENTIAL GROWTH GRAPH */}
        {/* ================================================================ */}

        {showGraph && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Graph background */}
            <rect
              x="320"
              y="300"
              width="150"
              height="80"
              rx="8"
              fill="#0f172a"
              fillOpacity="0.6"
              stroke="#3b82f6"
              strokeWidth="1"
              strokeOpacity="0.3"
            />

            {/* Graph axes */}
            <line x1="335" y1="365" x2="455" y2="365" stroke="#64748b" strokeWidth="1" />
            <line x1="335" y1="365" x2="335" y2="315" stroke="#64748b" strokeWidth="1" />

            {/* Exponential curve */}
            <motion.path
              d="M 340,360 Q 370,358 390,350 Q 410,340 430,320 Q 440,310 450,305"
              fill="none"
              stroke="url(#gm-graph-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={graphLineVariants}
              initial="hidden"
              animate="visible"
              filter="url(#gm-soft-glow)"
            />

            {/* Graph labels */}
            <text x="395" y="378" textAnchor="middle" fill="#64748b" fontSize="8">TIME</text>
            <text x="325" y="340" textAnchor="middle" fill="#64748b" fontSize="8" transform="rotate(-90, 325, 340)">USERS</text>

            {/* Growth indicator */}
            <motion.text
              x="445"
              y="302"
              fill="#22c55e"
              fontSize="10"
              fontWeight="bold"
              animate={{ y: [302, 298, 302] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ↑
            </motion.text>
          </motion.g>
        )}

        {/* ================================================================ */}
        {/* METRICS DISPLAY */}
        {/* ================================================================ */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* User count */}
          <rect
            x="30"
            y="300"
            width="100"
            height="80"
            rx="8"
            fill="#0f172a"
            fillOpacity="0.6"
            stroke="#6366f1"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          
          <text x="80" y="325" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="500">
            ACTIVE USERS
          </text>
          
          <motion.text
            x="80"
            y="355"
            textAnchor="middle"
            fill="#a5b4fc"
            fontSize="24"
            fontWeight="bold"
            key={userCount}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {userCount}
          </motion.text>

          <text x="80" y="372" textAnchor="middle" fill="#22c55e" fontSize="10">
            +{Math.round(rotationSpeed * 100 - 80)}% velocity
          </text>
        </motion.g>

        {/* ================================================================ */}
        {/* PHASE INDICATOR */}
        {/* ================================================================ */}

        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <rect
            x="175"
            y="15"
            width="150"
            height="28"
            rx="14"
            fill="#1e293b"
            fillOpacity="0.8"
            stroke="url(#gm-hub-gradient)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          
          <text x="250" y="34" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="600">
            {phase === 'initial' && '🚀 Initializing...'}
            {phase === 'flowing' && '👥 Users Flowing'}
            {phase === 'accelerating' && '⚡ Accelerating!'}
            {phase === 'peak' && '🔥 Peak Growth!'}
            {phase === 'reset' && '🔄 Resetting...'}
          </text>
        </motion.g>

        {/* ================================================================ */}
        {/* FLYWHEEL SPEED INDICATOR */}
        {/* ================================================================ */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <text x="250" y="390" textAnchor="middle" fill="#64748b" fontSize="10">
            Flywheel Speed: {rotationSpeed.toFixed(1)}x
          </text>
          
          {/* Speed bar */}
          <rect x="200" y="395" width="100" height="4" rx="2" fill="#1e293b" />
          <motion.rect
            x="200"
            y="395"
            height="4"
            rx="2"
            fill="url(#gm-hub-gradient)"
            animate={{ width: (rotationSpeed - 0.5) * 100 }}
            transition={{ duration: 0.3 }}
          />
        </motion.g>
      </motion.svg>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-4 md:gap-6 mt-4"
      >
        <StatCard 
          label="Acquisition" 
          value="+45%" 
          color="from-blue-400 to-blue-500"
        />
        <StatCard 
          label="Activation" 
          value="+62%" 
          color="from-indigo-400 to-indigo-500"
        />
        <StatCard 
          label="Retention" 
          value="+38%" 
          color="from-violet-400 to-purple-500"
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
    <div className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {value}
    </div>
    <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
  </div>
)

export default GrowthMarketingHero

