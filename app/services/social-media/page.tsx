import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { HeroDark } from '@/components/ui/HeroDark'
import { getServiceHeroBackgroundPreset } from '@/lib/heroPresets'
import { Reveal } from '@/components/ui/Reveal'

const SocialMediaHero = dynamic(
  () => import('@/src/components/animations/SocialMediaHero'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'Social Media | Services',
  description:
    'Audience growth, engagement, and community plays across social channels with measurable impact.',
}

export default function SocialMediaServicePage() {
  const backgroundVariant =
    getServiceHeroBackgroundPreset('/services/social-media') ?? 'contentFlow'

  return (
    <Reveal>
      <HeroDark
        label="Service"
        title="Social Media"
        description="Strategy, creative, and activation to build brand, drive engagement, and generate demand across social."
        align="left"
        size="default"
        backgroundVariant={backgroundVariant}
        rightVisual={
          <div className="aspect-square max-w-lg w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 flex items-center justify-center">
            <SocialMediaHero />
          </div>
        }
      />
    </Reveal>
  )
}

