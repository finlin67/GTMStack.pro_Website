import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { HeroDark } from '@/components/ui/HeroDark'
import { getServiceHeroBackgroundPreset } from '@/lib/heroPresets'
import { Reveal } from '@/components/ui/Reveal'

const DemandGenerationHero = dynamic(
  () => import('@/src/components/animations/DemandGenerationHero'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'Demand Generation | Services',
  description:
    'Full-funnel demand systems that move prospects from awareness to revenue with precision.',
}

export default function DemandGenerationServicePage() {
  const backgroundVariant =
    getServiceHeroBackgroundPreset('/services/demand-generation') ?? 'funnelStages'

  return (
    <Reveal>
      <HeroDark
        label="Service"
        title="Demand Generation"
        description="Pipeline-focused plays, instrumentation, and optimization to prove and scale demand."
        align="left"
        size="default"
        backgroundVariant={backgroundVariant}
        rightVisual={
          <div className="aspect-square max-w-lg w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 flex items-center justify-center">
            <DemandGenerationHero />
          </div>
        }
      />
    </Reveal>
  )
}

