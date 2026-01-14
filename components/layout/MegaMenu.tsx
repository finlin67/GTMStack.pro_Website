"use client"

import Link from "next/link"
import { ArrowRight, PenTool, LineChart, Radar, Cpu } from "lucide-react"

const PILLARS = [
  {
    title: "Content & Engagement",
    href: "/expertise/content-engagement",
    icon: PenTool,
    items: [
      { label: "Content Marketing", href: "/expertise/content-marketing" },
      { label: "Email Marketing", href: "/expertise/email-marketing" },
      { label: "Omnichannel Marketing", href: "/expertise/omnichannel-marketing" },
      { label: "Social Media Marketing", href: "/expertise/social-media-marketing" },
      { label: "Video Marketing", href: "/expertise/video-marketing" },
    ],
  },
  {
    title: "Demand & Growth",
    href: "/expertise/demand-growth",
    icon: LineChart,
    items: [
      { label: "Demand Generation", href: "/expertise/demand-generation" },
      { label: "SEO", href: "/expertise/seo" },
      { label: "Growth Marketing", href: "/expertise/growth-marketing" },
      { label: "Paid Advertising (SEM)", href: "/expertise/paid-advertising-sem" },
      { label: "Event Marketing", href: "/expertise/event-marketing" },
    ],
  },
  {
    title: "Strategy & Insights",
    href: "/expertise/strategy-insights",
    icon: Radar,
    items: [
      { label: "ABM", href: "/expertise/account-based-marketing-abm" },
      { label: "Customer Experience (CX)", href: "/expertise/customer-experience-cx" },
      { label: "Customer Marketing", href: "/expertise/customer-marketing" },
      { label: "Lifecycle Marketing", href: "/expertise/lifecycle-marketing" },
      { label: "Market Research", href: "/expertise/market-research" },
    ],
  },
  {
    title: "Systems & Operations",
    href: "/expertise/systems-operations",
    icon: Cpu,
    items: [
      { label: "AI in Marketing", href: "/expertise/ai-in-marketing" },
      { label: "Marketing Automation", href: "/expertise/marketing-automation" },
      { label: "Marketing Operations", href: "/expertise/marketing-operations" },
      { label: "MarTech Optimization", href: "/expertise/martech-optimization" },
      { label: "Sales Enablement", href: "/expertise/sales-enablement" },
    ],
  },
]

export default function MegaMenu() {
  // Prevent clicks inside menu from closing it
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="rounded-3xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl"
      onClick={handleClick}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon
          return (
            <div key={pillar.title} className="space-y-3">
              <Link href={pillar.href} className="flex items-center gap-2 text-white font-semibold">
                <span className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-brand-300" />
                </span>
                {pillar.title}
              </Link>
              <ul className="space-y-2">
                {pillar.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="border-t border-white/10 px-6 py-4 flex justify-end">
        <Link href="/expertise" className="text-sm text-brand-300 hover:text-white inline-flex items-center gap-1">
          View all expertise <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

