import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { HeroDark } from '@/components/ui/HeroDark'
import { getServiceHeroBackgroundPreset } from '@/lib/heroPresets'
import { Reveal } from '@/components/ui/Reveal'

const ContentMarketingHero = dynamic(
  () => import('@/src/components/animations/ContentMarketingHero'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'Content Marketing | Services',
  description:
    'Build and ship structured content systems that engage buyers across channels.',
}

export default function ContentMarketingServicePage() {
  const backgroundVariant =
    getServiceHeroBackgroundPreset('/services/content-marketing') ?? 'contentFlow'

  return (
    <Reveal>
      <HeroDark
        label="Service"
        title="Content Marketing"
        description="Systematic content frameworks, distribution, and optimization that fuel demand and authority."
        align="left"
        size="default"
        backgroundVariant={backgroundVariant}
        rightVisual={
          <div className="aspect-square max-w-lg w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex items-center justify-center shadow-2xl shadow-blue-500/20">
            <ContentMarketingHero />
          </div>
        }
      />
    </Reveal>
  )
}

