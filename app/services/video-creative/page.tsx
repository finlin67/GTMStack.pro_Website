import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { HeroDark } from '@/components/ui/HeroDark'
import { getServiceHeroBackgroundPreset } from '@/lib/heroPresets'
import { Reveal } from '@/components/ui/Reveal'

const VideoCreativeHero = dynamic(
  () => import('@/src/components/animations/VideoCreativeHero'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'Video Creative | Services',
  description:
    'High-impact video and creative systems to educate, engage, and convert your audiences.',
}

export default function VideoCreativeServicePage() {
  const backgroundVariant =
    getServiceHeroBackgroundPreset('/services/video-creative') ?? 'contentFlow'

  return (
    <Reveal>
      <HeroDark
        label="Service"
        title="Video Creative"
        description="Story-driven video programs and motion assets that communicate value and drive action."
        align="left"
        size="default"
        backgroundVariant={backgroundVariant}
        rightVisual={
          <div className="aspect-square max-w-lg w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 flex items-center justify-center">
            <VideoCreativeHero />
          </div>
        }
      />
    </Reveal>
  )
}

