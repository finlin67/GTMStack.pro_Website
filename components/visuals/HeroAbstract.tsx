'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type HeroAbstractProps = {
  variant?: 'topLevel' | 'subLevel' | 'detail'
  accent?: 'brand' | 'cool' | 'emerald' | 'violet'
}

const accentPalette: Record<NonNullable<HeroAbstractProps['accent']>, { from: string; to: string; blob: string }> = {
  brand: { from: 'from-brand-500/40', to: 'to-cyan-500/30', blob: 'bg-brand-400/35' },
  cool: { from: 'from-cool-500/40', to: 'to-blue-400/30', blob: 'bg-cool-300/40' },
  emerald: { from: 'from-emerald-400/40', to: 'to-teal-400/30', blob: 'bg-emerald-300/40' },
  violet: { from: 'from-violet-500/40', to: 'to-indigo-400/30', blob: 'bg-violet-300/40' },
}

export function HeroAbstract({ variant = 'topLevel', accent = 'brand' }: HeroAbstractProps) {
  const accentColors = accentPalette[accent]
  const sizeClass =
    variant === 'topLevel'
      ? 'h-[360px]'
      : variant === 'subLevel'
        ? 'h-[320px]'
        : 'h-[300px]'

  return (
    <div
      className={cn(
        'relative aspect-square rounded-3xl border border-white/10 overflow-hidden bg-slate-950/70',
        'shadow-xl shadow-brand-900/30 backdrop-blur-md',
        sizeClass
      )}
    >
      {/* Base layered gradient */}
      <div className={cn('absolute inset-0', `bg-gradient-to-br ${accentColors.from} ${accentColors.to}`)} />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/30 to-transparent" />

      {/* Floating blobs */}
      <motion.div
        className={cn('absolute w-48 h-48 rounded-full blur-3xl', accentColors.blob)}
        animate={{ x: ['-10%', '20%', '-5%'], y: ['-5%', '10%', '-8%'], scale: [1, 1.1, 0.95] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '5%' }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full blur-3xl bg-cyan-400/25"
        animate={{ x: ['10%', '-15%', '5%'], y: ['15%', '-10%', '12%'], scale: [0.95, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        style={{ bottom: '8%', right: '2%' }}
      />

      {/* Framing lines */}
      <div className="absolute inset-6 rounded-2xl border border-white/10" />
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_30%,white_0,transparent_30%),radial-gradient(circle_at_30%_80%,white_0,transparent_30%)]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
        <div className="w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22 viewBox=%220 0 4 4%22><path fill=%22rgba(255,255,255,0.08)%22 d=%22M0 0h1v1H0zM2 2h1v1H2z%22/></svg>')]" />
      </div>

      {/* Subtle motion layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.015, 1], rotate: [0, 0.8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-white/4 mix-blend-screen" />
      </motion.div>
    </div>
  )
}

