import React from 'react'
import { motion } from 'framer-motion'

type Mode = 'card' | 'hero'

interface SEOKeywordDiscoveryProps {
  mode?: Mode
}

const SEOKeywordDiscovery = ({ mode = 'card' }: SEOKeywordDiscoveryProps) => {
  // Document lines configuration - some are "keywords" that will highlight
  const documentLines = [
    { y: 80, width: 180, isKeyword: false },
    { y: 105, width: 160, isKeyword: true },
    { y: 130, width: 200, isKeyword: false },
    { y: 155, width: 140, isKeyword: false },
    { y: 180, width: 190, isKeyword: true },
    { y: 205, width: 170, isKeyword: false },
    { y: 230, width: 150, isKeyword: true },
    { y: 255, width: 185, isKeyword: false },
    { y: 280, width: 165, isKeyword: false },
  ]

  // Magnifying glass scan positions (x coordinates)
  const scanStart = 40
  const scanEnd = 260

  return (
    <div className="relative w-full max-w-md select-none flex flex-col items-center">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-indigo-600 rounded-full" />
      </div>

      <svg
        viewBox="0 0 400 420"
        className="w-full max-h-[60vh] relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Document gradient */}
          <linearGradient id="seo-docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.95" />
          </linearGradient>

          {/* Document shadow gradient */}
          <linearGradient id="seo-docShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.3" />
          </linearGradient>

          {/* Line default gradient */}
          <linearGradient id="seo-lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* Keyword highlight gradient */}
          <linearGradient id="seo-keywordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          {/* Magnifying glass gradient */}
          <linearGradient id="seo-glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
          </linearGradient>

          {/* Glass rim gradient */}
          <linearGradient id="seo-rimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          {/* Handle gradient */}
          <linearGradient id="seo-handleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Glow filter for keywords */}
          <filter id="seo-keywordGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for glass */}
          <filter id="seo-glassGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Scan line effect */}
          <linearGradient id="seo-scanLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Isometric Document Base - Shadow */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <rect
            x="75"
            y="55"
            width="250"
            height="280"
            rx="8"
            fill="url(#seo-docShadow)"
            transform="translate(8, 8)"
          />
        </motion.g>

        {/* Document */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Main document */}
          <rect
            x="75"
            y="55"
            width="250"
            height="280"
            rx="8"
            fill="url(#seo-docGradient)"
            stroke="#475569"
            strokeWidth="1"
          />

          {/* Document header bar */}
          <rect
            x="75"
            y="55"
            width="250"
            height="35"
            rx="8"
            fill="#1e293b"
          />
          <rect
            x="75"
            y="75"
            width="250"
            height="15"
            fill="#1e293b"
          />

          {/* Header dots */}
          <circle cx="95" cy="72" r="5" fill="#ef4444" opacity="0.8" />
          <circle cx="115" cy="72" r="5" fill="#eab308" opacity="0.8" />
          <circle cx="135" cy="72" r="5" fill="#22c55e" opacity="0.8" />

          {/* Search bar in header */}
          <rect x="160" y="65" width="150" height="16" rx="8" fill="#334155" />
          <circle cx="175" cy="73" r="4" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <line x1="178" y1="76" x2="182" y2="80" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Document Lines with Keyword Highlighting */}
        {documentLines.map((line, index) => (
          <DocumentLine
            key={index}
            y={line.y}
            width={line.width}
            isKeyword={line.isKeyword}
            index={index}
          />
        ))}

        {/* Magnifying Glass - Animated */}
        <MagnifyingGlass scanStart={scanStart} scanEnd={scanEnd} />

        {/* SEO Label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <text
            x="200"
            y="370"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="14"
            fontWeight="500"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            SEO KEYWORD DISCOVERY
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
            47
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">Keywords</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            #3
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">Ranking</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            89%
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">Visibility</div>
        </div>
      </motion.div>
    </div>
  )
}

// Document Line Component with highlight animation
const DocumentLine = ({
  y,
  width,
  isKeyword,
  index,
}: {
  y: number
  width: number
  isKeyword: boolean
  index: number
}) => {
  const x = 95

  return (
    <motion.g
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
    >
      {/* Base line */}
      <rect
        x={x}
        y={y}
        width={width}
        height={8}
        rx={4}
        fill="url(#seo-lineGradient)"
      />

      {/* Keyword highlight overlay - animates when magnifying glass passes */}
      {isKeyword && (
        <motion.rect
          x={x}
          y={y}
          width={width}
          height={8}
          rx={4}
          fill="url(#seo-keywordGradient)"
          filter="url(#seo-keywordGlow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.15 + (y - 80) / 600, 0.2 + (y - 80) / 600, 0.4 + (y - 80) / 600, 0.45 + (y - 80) / 600, 1],
          }}
        />
      )}
    </motion.g>
  )
}

// Magnifying Glass Component
const MagnifyingGlass = ({
  scanStart,
  scanEnd,
}: {
  scanStart: number
  scanEnd: number
}) => {
  const glassRadius = 35
  const handleLength = 30

  return (
    <motion.g
      initial={{ x: scanStart, opacity: 0 }}
      animate={{
        x: [scanStart, scanEnd, scanStart],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.45, 0.5, 0.95, 1],
      }}
    >
      {/* Scan beam effect */}
      <motion.rect
        x={-2}
        y={70}
        width={4}
        height={230}
        fill="url(#seo-scanLine)"
        opacity={0.6}
      />

      {/* Glass outer glow */}
      <circle
        cx={0}
        cy={180}
        r={glassRadius + 10}
        fill="#6366f1"
        opacity={0.15}
        filter="url(#seo-glassGlow)"
      />

      {/* Glass lens */}
      <circle
        cx={0}
        cy={180}
        r={glassRadius}
        fill="url(#seo-glassGradient)"
        stroke="url(#seo-rimGradient)"
        strokeWidth={4}
      />

      {/* Glass reflection */}
      <ellipse
        cx={-10}
        cy={168}
        rx={12}
        ry={8}
        fill="white"
        opacity={0.2}
      />

      {/* Small reflection dot */}
      <circle
        cx={-15}
        cy={165}
        r={3}
        fill="white"
        opacity={0.4}
      />

      {/* Handle */}
      <rect
        x={glassRadius * 0.5}
        y={180 + glassRadius * 0.5}
        width={handleLength}
        height={12}
        rx={6}
        fill="url(#seo-handleGradient)"
        transform={`rotate(45, ${glassRadius * 0.5}, ${180 + glassRadius * 0.5})`}
      />

      {/* Handle highlight */}
      <rect
        x={glassRadius * 0.5 + 2}
        y={180 + glassRadius * 0.5 + 2}
        width={handleLength - 4}
        height={4}
        rx={2}
        fill="#94a3b8"
        opacity={0.3}
        transform={`rotate(45, ${glassRadius * 0.5}, ${180 + glassRadius * 0.5})`}
      />

      {/* Center crosshairs */}
      <line
        x1={-8}
        y1={180}
        x2={8}
        y2={180}
        stroke="#6366f1"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <line
        x1={0}
        y1={172}
        x2={0}
        y2={188}
        stroke="#6366f1"
        strokeWidth={1.5}
        opacity={0.5}
      />
    </motion.g>
  )
}

export default SEOKeywordDiscovery

