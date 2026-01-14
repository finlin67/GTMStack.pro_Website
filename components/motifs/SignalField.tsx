'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'




interface SignalFieldProps {

  className?: string

  intensity?: 'subtle' | 'medium' | 'strong'

  pattern?: 'constellation' | 'mesh' | 'grid'

  density?: 'sparse' | 'dense'

}



export function SignalField({

  className,

  intensity = 'subtle',

  pattern = 'constellation',

  density = 'sparse',

}: SignalFieldProps) {

  const opacityMap = {

    subtle: 0.08,

    medium: 0.15,

    strong: 0.25,

  }

  

  const opacity = opacityMap[intensity]

  const dotCount = density === 'dense' ? 60 : 30

  // NOTE: Avoid Math.random() during render. Client Components still render on the server in Next.js,
  // and non-deterministic markup can cause hydration issues (and, in some cases, dev-runtime invariants).
  const dots = useMemo(() => {
    const seed = density === 'dense' ? 1337 : 42
    const fract = (n: number) => n - Math.floor(n)

    return Array.from({ length: dotCount }, (_, i) => {
      const t = i * 137.5 // Golden angle distribution
      const rand = fract(Math.sin((i + seed) * 9999) * 10000)

      return {
        x: t % 1200,
        y: (t % 1000) + 100,
        r: rand * 2 + 1,
      }
    })
  }, [density, dotCount])

  return (

    <svg

      className={cn('absolute inset-0 pointer-events-none w-full h-full', className)}

      viewBox="0 0 1200 1200"

      fill="none"

      aria-hidden="true"

      preserveAspectRatio="none"

      style={{ opacity }}

    >

      {pattern === 'constellation' && (

        <>

          {/* Connection lines between some dots */}

          {dots.slice(0, 15).map((dot, i) => {

            const next = dots[(i + 3) % dots.length]

            return (

              <line

                key={`line-${i}`}

                x1={dot.x}

                y1={dot.y}

                x2={next.x}

                y2={next.y}

                stroke="rgba(255, 255, 255, 0.15)"

                strokeWidth="1"

              />

            )

          })}

        </>

      )}



      {pattern === 'grid' && (

        <g stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1">

          {Array.from({ length: 12 }, (_, i) => (

            <line

              key={`v-${i}`}

              x1={i * 100}

              y1="0"

              x2={i * 100}

              y2="1200"

            />

          ))}

          {Array.from({ length: 12 }, (_, i) => (

            <line

              key={`h-${i}`}

              x1="0"

              y1={i * 100}

              x2="1200"

              y2={i * 100}

            />

          ))}

        </g>

      )}



      {/* Signal dots */}

      {dots.map((dot, i) => (

        <g key={i}>

          <circle

            cx={dot.x}

            cy={dot.y}

            r={dot.r}

            fill="rgba(255, 255, 255, 0.4)"

          />

          <circle

            cx={dot.x}

            cy={dot.y}

            r={dot.r * 3}

            fill="rgba(255, 255, 255, 0.1)"

          />

        </g>

      ))}

    </svg>

  )

}

