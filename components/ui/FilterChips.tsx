'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface FilterChipsProps {
  tags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  onClearAll?: () => void
  className?: string
}

export function FilterChips({
  tags,
  selectedTags,
  onTagToggle,
  onClearAll,
  className,
}: FilterChipsProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {/* All / Clear filter */}
      <button
        onClick={onClearAll}
        className={cn(
          'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
          selectedTags.length === 0
            ? 'bg-brand-600 text-white shadow-md'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        )}
      >
        All
      </button>

      {/* Tag chips */}
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag)
        return (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
              isSelected
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            )}
          >
            {tag}
          </button>
        )
      })}

      {/* Clear selection indicator */}
      {selectedTags.length > 0 && (
        <button
          onClick={onClearAll}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
          Clear ({selectedTags.length})
        </button>
      )}
    </div>
  )
}

interface PillarFilterProps {
  pillars: { id: string; title: string; color: string }[]
  selectedPillar: string | null
  onPillarSelect: (pillar: string | null) => void
  className?: string
}

export function PillarFilter({
  pillars,
  selectedPillar,
  onPillarSelect,
  className,
}: PillarFilterProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <button
        onClick={() => onPillarSelect(null)}
        className={cn(
          'px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 border',
          selectedPillar === null
            ? 'bg-slate-900 text-white border-slate-900 shadow-md'
            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
        )}
      >
        All Expertise
      </button>

      {pillars.map((pillar) => (
        <button
          key={pillar.id}
          onClick={() => onPillarSelect(pillar.id)}
          className={cn(
            'px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 border',
            selectedPillar === pillar.id
              ? 'bg-brand-600 text-white border-brand-600 shadow-md'
              : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'
          )}
        >
          {pillar.title}
        </button>
      ))}
    </div>
  )
}

