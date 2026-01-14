'use client'

import { cn } from '@/lib/utils'




interface TopoBackdropProps {

  className?: string

  intensity?: 'subtle' | 'medium' | 'strong'

  variant?: 'sparse' | 'dense'

}



export function TopoBackdrop({

  className,

  intensity = 'subtle',

  variant = 'sparse',

}: TopoBackdropProps) {

  const opacityMap = {

    subtle: 0.06,

    medium: 0.12,

    strong: 0.20,

  }
  
  const opacity = opacityMap[intensity]



  return (

    <svg

      className={cn('absolute inset-0 pointer-events-none w-full h-full', className)}

      viewBox="0 0 1200 1200"

      fill="none"

      aria-hidden="true"

      preserveAspectRatio="none"

      style={{ opacity }}

    >

      {/* Topographic contour lines */}

      <g stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="none">

        <ellipse cx="600" cy="600" rx="400" ry="350" />

        <ellipse cx="600" cy="600" rx="320" ry="280" />

        <ellipse cx="600" cy="600" rx="240" ry="210" />

        <ellipse cx="600" cy="600" rx="160" ry="140" />

        <ellipse cx="600" cy="600" rx="80" ry="70" />

      </g>

      

      {variant === 'dense' && (

        <g stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" fill="none">

          <ellipse cx="600" cy="600" rx="360" ry="315" />

          <ellipse cx="600" cy="600" rx="280" ry="245" />

          <ellipse cx="600" cy="600" rx="200" ry="175" />

          <ellipse cx="600" cy="600" rx="120" ry="105" />

        </g>

      )}



      {/* Small dots */}

      {[

        [400, 400], [800, 400], [400, 800], [800, 800],

        [600, 300], [300, 600], [900, 600], [600, 900],

      ].map(([x, y], i) => (

        <circle key={i} cx={x} cy={y} r="2" fill="rgba(255, 255, 255, 0.3)" />

      ))}

    </svg>

  )

}

