"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { industryItems } from "@/content/industries"

export default function IndustriesDropdown() {
  // Sort industries alphabetically by title
  const sortedIndustries = [...industryItems].sort((a, b) => 
    a.title.localeCompare(b.title)
  )

  // Prevent clicks inside menu from closing it
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl"
      onClick={handleClick}
    >
      <div className="p-4">
        {/* All Industries link at top */}
        <Link
          href="/industries"
          className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-colors mb-2"
        >
          All Industries
        </Link>
        
        {/* Divider */}
        <div className="border-t border-white/10 my-2" />
        
        {/* Industry list */}
        <ul className="space-y-1">
          {sortedIndustries.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="block px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {industry.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10 px-4 py-3 flex justify-end">
        <Link 
          href="/industries" 
          className="text-sm text-brand-300 hover:text-white inline-flex items-center gap-1"
        >
          View all industries <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

