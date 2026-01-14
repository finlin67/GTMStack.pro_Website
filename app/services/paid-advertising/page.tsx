import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { HeroDark } from '@/components/ui/HeroDark'
import { getServiceHeroBackgroundPreset } from '@/lib/heroPresets'
import { Reveal } from '@/components/ui/Reveal'

const PaidAdvertisingHero = dynamic(
  () => import('@/src/components/animations/PaidAdvertisingHero'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'Paid Advertising | Services',
  description:
    'Performance-driven paid media systems—targeting, creative, bidding, and measurement—for efficient growth.',
}

export default function PaidAdvertisingServicePage() {
  const backgroundVariant =
    getServiceHeroBackgroundPreset('/services/paid-advertising') ?? 'funnelStages'

  return (
    <Reveal>
      <HeroDark
        label="Service"
        title="Paid Advertising"
        description="Channel strategy, bidding, and creative experimentation to maximize return on ad spend."
        align="left"
        size="default"
        backgroundVariant={backgroundVariant}
        rightVisual={
          <div className="aspect-square max-w-lg w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 flex items-center justify-center">
            <PaidAdvertisingHero />
          </div>
        }
      />
    </Reveal>
  )
}

