'use client'

const stats = [
  { label: 'Pipeline', value: '$4.3M', change: '+38%' },
  { label: 'MQL→SQL', value: '41%', change: '+12 pts' },
  { label: 'CAC', value: '$1.9k', change: '-18%' },
]

const heatmapValues = [
  0.85, 0.35, 0.62, 0.48, 0.9, 0.55, 0.3, 0.68,
  0.52, 0.78, 0.44, 0.71, 0.6, 0.26, 0.82, 0.57,
  0.64, 0.4, 0.9, 0.32, 0.7, 0.5, 0.28, 0.61,
  0.72, 0.58, 0.46, 0.88, 0.33, 0.67, 0.49, 0.81,
]

export function HeroRightVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-brand-900/60 to-cool-900/60 p-6 shadow-xl shadow-brand-900/30 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-cool-500/10 to-cyan-500/15 opacity-70" />
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -bottom-12 -left-6 h-28 w-28 rounded-full bg-brand-400/20 blur-3xl" />

      <div className="relative space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-200/80">GTM Command Center</p>
            <p className="mt-1 text-sm text-slate-200/80">Live signals across the stack</p>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-brand-50 border border-white/10">Live</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 shadow-inner shadow-black/10"
            >
              <p className="text-[11px] text-slate-300/80">{stat.label}</p>
              <p className="text-base font-semibold text-white mt-1">{stat.value}</p>
              <p className="text-[11px] text-emerald-300">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-4">
          <div className="flex items-center justify-between text-xs text-slate-300/80 mb-2">
            <span>Revenue velocity</span>
            <span className="text-emerald-300">+14%</span>
          </div>
          <svg viewBox="0 0 200 80" role="img" className="w-full">
            <defs>
              <linearGradient id="spark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(56,189,248,0.35)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0)" />
              </linearGradient>
            </defs>
            <path
              d="M5 55 L30 48 L55 52 L80 38 L105 44 L130 30 L155 36 L180 18 L195 24"
              stroke="url(#spark)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M5 80 L5 55 L30 48 L55 52 L80 38 L105 44 L130 30 L155 36 L180 18 L195 24 L195 80 Z"
              fill="url(#spark)"
            />
          </svg>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between text-xs text-slate-300/80 mb-2">
            <span>ABM heatmap</span>
            <span className="text-brand-200">ICP clusters</span>
          </div>
          <div className="grid grid-cols-8 gap-1.5">
            {heatmapValues.map((v, idx) => (
              <span
                key={idx}
                className="aspect-square rounded-sm bg-cyan-300"
                style={{ opacity: 0.25 + v * 0.6 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

