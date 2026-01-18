'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: string
  startX: number
  stage: 'awareness' | 'interest' | 'decision' | 'exit'
  status: 'active' | 'dropped'
}

export default function LeadGenTileAnimation() {
  const [totalLeads, setTotalLeads] = useState(0)
  const [qualifiedLeads, setQualifiedLeads] = useState(0)
  const [stageCounts, setStageCounts] = useState({
    awareness: 0,
    interest: 0,
    decision: 0
  })
  const [particles, setParticles] = useState<Particle[]>([])
  const particleIdCounter = useRef(0)

  const convRate = totalLeads > 0 ? Math.round((qualifiedLeads / totalLeads) * 100) : 0

  const spawnLead = useCallback(() => {
    const id = `p-${particleIdCounter.current++}`
    const startX = Math.random() * 160 + 80

    const newParticle: Particle = {
      id,
      startX,
      stage: 'awareness',
      status: 'active'
    }

    setTotalLeads((prev) => prev + 1)
    setStageCounts((prev) => ({ ...prev, awareness: prev.awareness + 1 }))
    setParticles((prev) => [...prev, newParticle])

    setTimeout(() => advanceParticle(id, 'awareness'), 1200)
  }, [])

  const advanceParticle = useCallback((id: string, currentStage: string) => {
    const dropChance = Math.random()
    const dropThreshold = currentStage === 'awareness' ? 0.3 : currentStage === 'interest' ? 0.25 : 0.15

    if (dropChance < dropThreshold) {
      setParticles((prev) =>
        prev.map((p) => (p.id === id ? { ...p, stage: 'exit' as const, status: 'dropped' as const } : p))
      )
      setStageCounts((prev) => ({
        ...prev,
        [currentStage]: Math.max(0, prev[currentStage as keyof typeof prev] - 1)
      }))
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id))
      }, 800)
      return
    }

    const nextStageMap: Record<string, 'interest' | 'decision' | null> = {
      awareness: 'interest',
      interest: 'decision',
      decision: null
    }

    const nextStage = nextStageMap[currentStage]

    if (nextStage) {
      setParticles((prev) => prev.map((p) => (p.id === id ? { ...p, stage: nextStage } : p)))
      setStageCounts((prev) => ({
        ...prev,
        [currentStage]: Math.max(0, prev[currentStage as keyof typeof prev] - 1),
        [nextStage]: prev[nextStage as keyof typeof prev] + 1
      }))
      setTimeout(() => advanceParticle(id, nextStage), 1200)
    } else {
      setQualifiedLeads((prev) => prev + 1)
      setStageCounts((prev) => ({
        ...prev,
        decision: Math.max(0, prev.decision - 1)
      }))
      setParticles((prev) => prev.filter((p) => p.id !== id))
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      spawnLead()
    }, 1800)
    return () => clearInterval(interval)
  }, [spawnLead])

  const stageY: Record<string, number> = {
    awareness: 60,
    interest: 150,
    decision: 240,
    exit: 320
  }

  return (
    <div className="relative w-full h-full min-h-[400px] bg-gradient-to-b from-slate-900/50 to-slate-800/30 overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-between py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-slate-400 font-medium">Live Funnel</span>
          </div>
          <div className="text-xs text-slate-500">{convRate}% conv</div>
        </div>

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.15)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
            </linearGradient>
          </defs>

          <path
            d="M 40 40 L 280 40 L 240 140 L 200 240 L 180 340 L 140 340 L 120 240 L 80 140 Z"
            fill="url(#funnelGrad)"
            stroke="rgba(148, 163, 184, 0.2)"
            strokeWidth="1"
          />

          {['Awareness', 'Interest', 'Decision'].map((label, i) => (
            <text
              key={label}
              x="160"
              y={stageY[label.toLowerCase()] + 15}
              textAnchor="middle"
              className="fill-slate-500 text-[10px] font-medium"
            >
              {label}
            </text>
          ))}

          <AnimatePresence>
            {particles.map((particle) => {
              const y = stageY[particle.stage]
              const x = particle.stage === 'exit' ? 280 : particle.startX * (1 - (y - 60) * 0.001)

              return (
                <motion.circle
                  key={particle.id}
                  initial={{ cy: 20, cx: particle.startX, opacity: 0, r: 0 }}
                  animate={{
                    cy: y,
                    cx: x,
                    opacity: particle.status === 'dropped' ? 0.3 : 1,
                    r: 4
                  }}
                  exit={{ opacity: 0, r: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  fill={particle.status === 'dropped' ? '#ef4444' : '#22d3ee'}
                  className="drop-shadow-glow"
                />
              )
            })}
          </AnimatePresence>
        </svg>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs">
          <div className="text-slate-400">
            <span className="text-cyan-400 font-semibold">{totalLeads}</span> leads
          </div>
          <div className="text-slate-400">
            <span className="text-emerald-400 font-semibold">{qualifiedLeads}</span> qualified
          </div>
        </div>
      </div>
    </div>
  )
}
