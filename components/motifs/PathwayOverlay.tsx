'use client'

import { cn } from '@/lib/utils'



interface PathwayOverlayProps {

  className?: string

  intensity?: 'subtle' | 'medium' | 'strong'

  accent?: boolean

  paths?: 'simple' | 'complex' | 'network'

}



export function PathwayOverlay({

  className,

  intensity = 'subtle',

  accent = false,

  paths = 'simple',

}: PathwayOverlayProps) {

  const opacityMap = {

    subtle: 0.08,

    medium: 0.15,

    strong: 0.25,

  }
  
  const opacity = opacityMap[intensity]

  const strokeColor = accent ? 'rgba(34, 211, 238, 0.3)' : 'rgba(255, 255, 255, 0.25)'



  return (

    <svg

      className={cn('absolute inset-0 pointer-events-none w-full h-full', className)}

      viewBox="0 0 1200 1200"

      fill="none"

      aria-hidden="true"

      preserveAspectRatio="none"

      style={{ opacity }}

    >

      {/* Curved paths */}

      <path

        d="M -60 260 C 140 120, 320 140, 500 280 S 860 520, 1260 360"

        stroke={strokeColor}

        strokeWidth="2"

        strokeLinecap="round"

      />

      <path

        d="M -60 760 C 220 590, 430 650, 610 820 S 930 1080, 1260 880"

        stroke={strokeColor}

        strokeWidth="2"

        strokeLinecap="round"

      />

      

      {paths !== 'simple' && (

        <>

          <path

            d="M 120 1260 C 240 1020, 360 920, 520 840 S 860 720, 1040 620"

            stroke={strokeColor}

            strokeWidth="1.5"

            strokeLinecap="round"

          />

        </>

      )}



      {/* Nodes along paths */}

      {[

        [200, 240], [500, 280], [860, 360],

        [220, 760], [610, 820], [930, 880],

      ].map(([x, y], i) => (

        <g key={i}>

          <circle cx={x} cy={y} r="4" fill={strokeColor} opacity="0.4" />

          <circle cx={x} cy={y} r="12" fill={strokeColor} opacity="0.1" />

        </g>

      ))}

    </svg>

  )

}

