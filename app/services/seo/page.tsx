import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { HeroDark } from '@/components/ui/HeroDark'
import { getServiceHeroBackgroundPreset } from '@/lib/heroPresets'
import { Reveal } from '@/components/ui/Reveal'

const SEOHero = dynamic(() => import('@/src/components/animations/SEOHero'), { ssr: false })

export const metadata: Metadata = {
  title: 'SEO | Services',
  description:
    'Technical and content SEO systems that improve visibility, rankings, and qualified traffic.',
}

export default function SEOServicePage() {
  const backgroundVariant = getServiceHeroBackgroundPreset('/services/seo') ?? 'growthCurve'

  return (
    <Reveal>
      <HeroDark
        label="Service"
        title="SEO"
        description="Structured SEO programs—technical, content, and analytics—to climb rankings and capture demand."
        align="left"
        size="default"
        backgroundVariant={backgroundVariant}
        rightVisual={
          <div className="aspect-square max-w-lg w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 flex items-center justify-center">
            <SEOHero />
          </div>
        }
      />
    </Reveal>
  )
}

