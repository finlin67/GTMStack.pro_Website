'use client'

import { motion } from 'framer-motion'
import { SignalField } from '@/components/motifs'

export function DriftingSignalField() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none will-change-transform"
      animate={{
        x: [0, 20, -15, 0],
        y: [0, -20, 15, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ transform: 'translateZ(0)' }}
    >
      <SignalField intensity="subtle" pattern="constellation" density="sparse" className="opacity-[0.08]" />
    </motion.div>
  )
}

