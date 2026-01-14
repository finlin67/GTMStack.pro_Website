import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  startX: number
  delay: number
}

const MarketingFunnel = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dollarSigns, setDollarSigns] = useState<{ id: number; x: number }[]>([])

  const createParticle = useCallback(() => {
    const id = Date.now() + Math.random()
    const startX = Math.random() * 200 - 100 // Random position across top
    const delay = Math.random() * 0.3
    return { id, startX, delay }
  }, [])

  useEffect(() => {
    // Initial batch of particles
    const initialParticles = Array.from({ length: 5 }, () => createParticle())
    setParticles(initialParticles)

    // Continuously spawn new particles
    const interval = setInterval(() => {
      setParticles(prev => {
        // Keep only recent particles to prevent memory buildup
        const filtered = prev.slice(-15)
        return [...filtered, createParticle()]
      })
    }, 600)

    return () => clearInterval(interval)
  }, [createParticle])

  const handleParticleComplete = (particleId: number, finalX: number) => {
    // Remove the particle
    setParticles(prev => prev.filter(p => p.id !== particleId))
    
    // Add a dollar sign at the exit point
    const dollarId = Date.now() + Math.random()
    setDollarSigns(prev => [...prev.slice(-8), { id: dollarId, x: finalX }])
    
    // Remove dollar sign after animation
    setTimeout(() => {
      setDollarSigns(prev => prev.filter(d => d.id !== dollarId))
    }, 2000)
  }

  return (
    <div className="relative w-full max-w-md select-none flex flex-col items-center">
      {/* Glow effects */}
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600 rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-400 rounded-full" />
      </div>

      <svg
        viewBox="0 0 400 500"
        className="w-full max-h-[65vh] relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for funnel layers */}
          <linearGradient id="awarenessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
          </linearGradient>
          
          <linearGradient id="considerationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
          </linearGradient>
          
          <linearGradient id="decisionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>

          <linearGradient id="dollarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Isometric Funnel - Layer 1: Awareness (Top, widest) */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top ellipse */}
          <ellipse
            cx="200"
            cy="80"
            rx="150"
            ry="40"
            fill="url(#awarenessGradient)"
            stroke="rgba(147, 197, 253, 0.5)"
            strokeWidth="2"
          />
          {/* Side walls */}
          <path
            d="M 50 80 Q 80 160, 100 180 L 300 180 Q 320 160, 350 80 L 350 80 A 150 40 0 0 1 50 80"
            fill="url(#awarenessGradient)"
            stroke="rgba(147, 197, 253, 0.3)"
            strokeWidth="1"
          />
          {/* Bottom ellipse of layer 1 */}
          <ellipse
            cx="200"
            cy="180"
            rx="100"
            ry="28"
            fill="url(#awarenessGradient)"
            stroke="rgba(147, 197, 253, 0.5)"
            strokeWidth="2"
          />
          {/* Label */}
          <text
            x="200"
            y="135"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="600"
            className="font-outfit"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            AWARENESS
          </text>
        </motion.g>

        {/* Isometric Funnel - Layer 2: Consideration (Middle) */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Side walls */}
          <path
            d="M 100 208 Q 120 270, 140 290 L 260 290 Q 280 270, 300 208 L 300 208 A 100 28 0 0 1 100 208"
            fill="url(#considerationGradient)"
            stroke="rgba(167, 139, 250, 0.3)"
            strokeWidth="1"
          />
          {/* Bottom ellipse of layer 2 */}
          <ellipse
            cx="200"
            cy="290"
            rx="60"
            ry="18"
            fill="url(#considerationGradient)"
            stroke="rgba(167, 139, 250, 0.5)"
            strokeWidth="2"
          />
          {/* Label */}
          <text
            x="200"
            y="255"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="600"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            CONSIDERATION
          </text>
        </motion.g>

        {/* Isometric Funnel - Layer 3: Decision (Bottom, narrowest) */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Side walls */}
          <path
            d="M 140 308 Q 160 370, 175 390 L 225 390 Q 240 370, 260 308 L 260 308 A 60 18 0 0 1 140 308"
            fill="url(#decisionGradient)"
            stroke="rgba(192, 132, 252, 0.3)"
            strokeWidth="1"
          />
          {/* Bottom ellipse of layer 3 / exit */}
          <ellipse
            cx="200"
            cy="390"
            rx="25"
            ry="8"
            fill="url(#decisionGradient)"
            stroke="rgba(192, 132, 252, 0.5)"
            strokeWidth="2"
          />
          {/* Label */}
          <text
            x="200"
            y="355"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="600"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            DECISION
          </text>
        </motion.g>

        {/* Exit pipe */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <rect
            x="188"
            y="398"
            width="24"
            height="40"
            rx="4"
            fill="url(#decisionGradient)"
            stroke="rgba(192, 132, 252, 0.5)"
            strokeWidth="1"
          />
          <ellipse
            cx="200"
            cy="438"
            rx="12"
            ry="4"
            fill="url(#decisionGradient)"
            stroke="rgba(192, 132, 252, 0.5)"
            strokeWidth="1"
          />
        </motion.g>

        {/* Animated Particles */}
        <AnimatePresence>
          {particles.map((particle) => (
            <DataParticle
              key={particle.id}
              particle={particle}
              onComplete={handleParticleComplete}
            />
          ))}
        </AnimatePresence>

        {/* Dollar Signs */}
        <AnimatePresence>
          {dollarSigns.map((dollar) => (
            <DollarSign key={dollar.id} x={dollar.x} />
          ))}
        </AnimatePresence>
      </svg>

      {/* Stats overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-4 md:gap-8 text-center mt-6"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            10K+
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">Leads</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            24%
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">Conversion</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            $2.4M
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">Revenue</div>
        </div>
      </motion.div>
    </div>
  )
}

// Individual animated particle component
const DataParticle = ({
  particle,
  onComplete,
}: {
  particle: Particle
  onComplete: (id: number, x: number) => void
}) => {
  const { id, startX, delay } = particle

  // Path through funnel - particles start wide and converge to center
  const pathKeyframes = {
    x: [200 + startX, 200 + startX * 0.6, 200 + startX * 0.3, 200 + startX * 0.1, 200],
    y: [40, 140, 250, 350, 430],
  }

  return (
    <motion.circle
      cx={0}
      cy={0}
      r={5}
      fill="url(#particleGradient)"
      filter="url(#glow)"
      initial={{ x: pathKeyframes.x[0], y: pathKeyframes.y[0], opacity: 0, scale: 0 }}
      animate={{
        x: pathKeyframes.x,
        y: pathKeyframes.y,
        opacity: [0, 1, 1, 1, 0],
        scale: [0.5, 1, 0.9, 0.8, 0.6],
      }}
      transition={{
        duration: 4,
        delay,
        ease: 'easeIn',
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      onAnimationComplete={() => onComplete(id, 200)}
      exit={{ opacity: 0 }}
    />
  )
}

// Dollar sign that appears at the bottom
const DollarSign = ({ x }: { x: number }) => {
  return (
    <motion.g
      initial={{ y: 450, x, opacity: 0, scale: 0 }}
      animate={{
        y: [450, 470, 490],
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.8],
      }}
      transition={{
        duration: 2,
        ease: 'easeOut',
      }}
    >
      <text
        x={0}
        y={0}
        textAnchor="middle"
        fill="url(#dollarGradient)"
        fontSize="24"
        fontWeight="bold"
        filter="url(#softGlow)"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        $
      </text>
    </motion.g>
  )
}

export default MarketingFunnel

