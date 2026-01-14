import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PaperAirplane {
  id: number
  startY: number
}

const ContentMarketing = () => {
  const [airplanes, setAirplanes] = useState<PaperAirplane[]>([])
  const [cycleKey, setCycleKey] = useState(0)

  useEffect(() => {
    // Trigger airplane launch after text finishes typing
    const launchTimeout = setTimeout(() => {
      const id = Date.now()
      setAirplanes(prev => [...prev.slice(-3), { id, startY: 200 }])
    }, 4500)

    // Restart the cycle
    const cycleTimeout = setTimeout(() => {
      setCycleKey(prev => prev + 1)
    }, 7000)

    return () => {
      clearTimeout(launchTimeout)
      clearTimeout(cycleTimeout)
    }
  }, [cycleKey])

  useEffect(() => {
    // Clean up old airplanes
    const cleanup = setInterval(() => {
      setAirplanes(prev => prev.slice(-4))
    }, 8000)

    return () => clearInterval(cleanup)
  }, [])

  return (
    <div className="relative w-full max-w-md select-none flex flex-col items-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500 rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-indigo-600 rounded-full" />
      </div>

      <svg
        viewBox="0 0 400 420"
        className="w-full max-h-[60vh] relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Screen gradients */}
          <linearGradient id="cm-screenFrame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="cm-screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="cm-screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
          </linearGradient>

          {/* Text line gradients */}
          <linearGradient id="cm-textLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          <linearGradient id="cm-textHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          {/* Paper airplane gradient */}
          <linearGradient id="cm-airplane" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <linearGradient id="cm-airplaneAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          {/* Stand gradient */}
          <linearGradient id="cm-stand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Filters */}
          <filter id="cm-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="cm-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Monitor Stand */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Stand base */}
          <ellipse
            cx="200"
            cy="365"
            rx="60"
            ry="12"
            fill="url(#cm-stand)"
          />
          
          {/* Stand neck */}
          <rect
            x="190"
            y="310"
            width="20"
            height="55"
            rx="4"
            fill="url(#cm-stand)"
          />
        </motion.g>

        {/* Monitor Frame - Isometric */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          filter="url(#cm-shadow)"
        >
          {/* Outer frame */}
          <rect
            x="60"
            y="60"
            width="280"
            height="250"
            rx="12"
            fill="url(#cm-screenFrame)"
          />
          
          {/* Inner bezel */}
          <rect
            x="70"
            y="70"
            width="260"
            height="220"
            rx="8"
            fill="url(#cm-screenBg)"
          />

          {/* Screen glow overlay */}
          <rect
            x="70"
            y="70"
            width="260"
            height="220"
            rx="8"
            fill="url(#cm-screenGlow)"
          />

          {/* Power LED */}
          <circle
            cx="200"
            cy="300"
            r="3"
            fill="#22c55e"
          />
        </motion.g>

        {/* Screen Content - Typing Text */}
        <g key={cycleKey}>
          {/* Title line */}
          <TypingLine 
            x={90} 
            y={95} 
            width={140} 
            height={10} 
            delay={0} 
            isTitle 
          />

          {/* Paragraph 1 */}
          <TypingLine x={90} y={120} width={220} height={6} delay={0.3} />
          <TypingLine x={90} y={132} width={200} height={6} delay={0.5} />
          <TypingLine x={90} y={144} width={180} height={6} delay={0.7} />

          {/* Paragraph 2 */}
          <TypingLine x={90} y={165} width={210} height={6} delay={1.0} />
          <TypingLine x={90} y={177} width={190} height={6} delay={1.2} />
          <TypingLine x={90} y={189} width={215} height={6} delay={1.4} />

          {/* Paragraph 3 - This one transforms */}
          <TransformingParagraph delay={2.0} />
        </g>

        {/* Cursor */}
        <TypingCursor cycleKey={cycleKey} />

        {/* Flying Paper Airplanes */}
        <AnimatePresence>
          {airplanes.map((airplane) => (
            <FlyingAirplane key={airplane.id} startY={airplane.startY} />
          ))}
        </AnimatePresence>

        {/* Label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <text
            x="200"
            y="395"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="14"
            fontWeight="500"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            CONTENT MARKETING
          </text>
        </motion.g>
      </svg>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-4 md:gap-6 text-center mt-4"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            52
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">Articles</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            847K
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">Reach</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            12.4%
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">Engage</div>
        </div>
      </motion.div>
    </div>
  )
}

// Typing Line Component
const TypingLine = ({
  x,
  y,
  width,
  height,
  delay,
  isTitle = false,
}: {
  x: number
  y: number
  width: number
  height: number
  delay: number
  isTitle?: boolean
}) => {
  return (
    <motion.rect
      x={x}
      y={y}
      width={0}
      height={height}
      rx={height / 2}
      fill={isTitle ? 'url(#cm-textHighlight)' : 'url(#cm-textLine)'}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width, opacity: 1 }}
      transition={{
        width: { duration: 0.8, delay, ease: 'easeOut' },
        opacity: { duration: 0.2, delay },
      }}
    />
  )
}

// Transforming Paragraph - types then transforms into airplane shape
const TransformingParagraph = ({ delay }: { delay: number }) => {
  return (
    <motion.g>
      {/* Line 1 */}
      <motion.rect
        x={90}
        y={210}
        height={6}
        rx={3}
        fill="url(#cm-textLine)"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: [0, 200, 200, 0],
          opacity: [0, 1, 1, 0],
          x: [90, 90, 90, 250],
          y: [210, 210, 210, 180],
        }}
        transition={{
          duration: 4,
          delay,
          times: [0, 0.2, 0.5, 0.7],
          ease: 'easeInOut',
        }}
      />
      
      {/* Line 2 */}
      <motion.rect
        x={90}
        y={222}
        height={6}
        rx={3}
        fill="url(#cm-textLine)"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: [0, 180, 180, 0],
          opacity: [0, 1, 1, 0],
          x: [90, 90, 90, 260],
          y: [222, 222, 222, 190],
        }}
        transition={{
          duration: 4,
          delay: delay + 0.2,
          times: [0, 0.2, 0.45, 0.65],
          ease: 'easeInOut',
        }}
      />
      
      {/* Line 3 */}
      <motion.rect
        x={90}
        y={234}
        height={6}
        rx={3}
        fill="url(#cm-textLine)"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: [0, 160, 160, 0],
          opacity: [0, 1, 1, 0],
          x: [90, 90, 90, 270],
          y: [234, 234, 234, 200],
        }}
        transition={{
          duration: 4,
          delay: delay + 0.4,
          times: [0, 0.2, 0.4, 0.6],
          ease: 'easeInOut',
        }}
      />

      {/* Forming airplane indicator */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 0, 1, 0], scale: [0, 0, 1, 1.5] }}
        transition={{
          duration: 4,
          delay: delay + 0.4,
          times: [0, 0.4, 0.55, 0.7],
        }}
      >
        <circle
          cx="180"
          cy="222"
          r="30"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.5"
        />
      </motion.g>
    </motion.g>
  )
}

// Typing Cursor
const TypingCursor = ({ cycleKey }: { cycleKey: number }) => {
  return (
    <motion.rect
      key={cycleKey}
      x={90}
      y={210}
      width={2}
      height={12}
      fill="#60a5fa"
      initial={{ opacity: 1 }}
      animate={{
        opacity: [1, 0, 1, 0, 1],
        x: [90, 150, 200, 250, 90],
        y: [95, 144, 189, 234, 95],
      }}
      transition={{
        opacity: { duration: 0.6, repeat: Infinity },
        x: { duration: 4, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
        y: { duration: 4, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
      }}
    />
  )
}

// Flying Paper Airplane
const FlyingAirplane = ({ startY }: { startY: number }) => {
  return (
    <motion.g
      initial={{ x: 180, y: startY, opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        x: [180, 250, 380, 450],
        y: [startY, startY - 40, startY - 80, startY - 120],
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0.8],
        rotate: [0, -15, -25, -35],
      }}
      transition={{
        duration: 2.5,
        ease: 'easeOut',
        times: [0, 0.2, 0.6, 1],
      }}
      exit={{ opacity: 0 }}
    >
      {/* Paper airplane body - simple triangular shape using rects and lines */}
      <g filter="url(#cm-glow)">
        {/* Main body - elongated diamond */}
        <polygon
          points="0,0 25,-8 50,0 25,4"
          fill="url(#cm-airplane)"
          stroke="#94a3b8"
          strokeWidth="0.5"
        />
        
        {/* Top wing */}
        <polygon
          points="10,-2 25,-15 40,-2"
          fill="url(#cm-airplane)"
          stroke="#94a3b8"
          strokeWidth="0.5"
        />
        
        {/* Bottom detail line */}
        <line
          x1="15"
          y1="0"
          x2="35"
          y2="0"
          stroke="url(#cm-airplaneAccent)"
          strokeWidth="1.5"
        />
        
        {/* Fold line */}
        <line
          x1="25"
          y1="-12"
          x2="25"
          y2="2"
          stroke="#cbd5e1"
          strokeWidth="0.5"
        />
      </g>

      {/* Trail effect */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <line
          x1="-5"
          y1="0"
          x2="-40"
          y2="15"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <line
          x1="-10"
          y1="-3"
          x2="-35"
          y2="8"
          stroke="#818cf8"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
        />
      </motion.g>
    </motion.g>
  )
}

export default ContentMarketing

