'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: RevealProps) {
  const [hydrated, setHydrated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated || shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 12,
            }
      }
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

