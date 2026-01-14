import React from 'react'
import { cn } from '@/lib/utils'

export type AnimationShellMode = 'card' | 'hero'

interface AnimationShellProps {
  children: React.ReactNode
  className?: string
  mode?: AnimationShellMode
}

const modeStyles: Record<AnimationShellMode, string> = {
  card: 'max-w-[420px] max-h-[420px] p-6',
  hero: 'max-w-[720px] max-h-[720px] p-10',
}

export function AnimationShell({ children, className, mode = 'hero' }: AnimationShellProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full aspect-square rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center overflow-hidden border border-white/10',
        modeStyles[mode],
        className
      )}
    >
      {children}
    </div>
  )
}

