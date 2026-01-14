'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedStatCardProps {
  children: ReactNode
  index: number
  className?: string
}

export function AnimatedStatCard({ children, index, className }: AnimatedStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

