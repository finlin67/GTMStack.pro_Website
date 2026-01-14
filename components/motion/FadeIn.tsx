'use client'

import {
  motion,
  useInView,
  useReducedMotion,
  Variants,
} from 'framer-motion'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 24,
  once = true,
}: FadeInProps) {
  const [hydrated, setHydrated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()

  // Ensure server HTML and the first client render use the same DOM.
  // After hydration, we can enable motion + in-view animations.
  useEffect(() => {
    setHydrated(true)
  }, [])

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

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
      // Important: don't "hide" content after hydration if IntersectionObserver
      // hasn't fired yet (or is blocked). This avoids above-the-fold sections
      // flashing visible and then disappearing.
      initial={false}
      animate={isInView ? 'visible' : undefined}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayStart?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayStart = 0,
}: StaggerContainerProps) {
  const [hydrated, setHydrated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setHydrated(true)
  }, [])

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart,
      },
    },
  }

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
      // Same rationale as FadeIn(): never force "hidden" post-hydration.
      initial={false}
      animate={isInView ? 'visible' : undefined}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const [hydrated, setHydrated] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setHydrated(true)
  }, [])

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  if (!hydrated || shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

interface HoverScaleProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function HoverScale({
  children,
  className,
  scale = 1.02,
}: HoverScaleProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

