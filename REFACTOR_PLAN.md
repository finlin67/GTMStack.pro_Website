# Homepage Refactor Plan: Dark SaaS Core with Light Enterprise Breaks

## Current State Analysis

### Current Section Order (8 sections):
1. **Hero** (DARK) ✓
2. **Stats Section** (DARK) - Currently "Proof & Credibility"
3. **Expertise Grid** (LIGHT) - Currently "Services Snapshot"
4. **Featured Case Studies** (DARK) ✓
5. **Why Work With Me** (LIGHT) - Currently "Differentiators"
6. **Industries** (DARK) - Extra section, not in 7-section plan
7. **Featured Expertise** (LIGHT) - Extra section, not in 7-section plan
8. **CTA Band** (DARK) ✓

### Missing Section:
- **Problem → Promise** - Needs to be created (should be DARK, positioned after Hero)

---

## Target 7-Section Structure

### (a) Section-by-Section Dark/Light Assignment

| # | Section | Theme | Background | Rationale |
|---|---------|-------|------------|-----------|
| 1 | **Hero** | DARK | `slate-950 → brand-950` | High-impact SaaS energy, abstract topo motif |
| 2 | **Problem → Promise** | DARK | `slate-950 → brand-950` | Emotional hook, pathway motif showing journey |
| 3 | **Services Snapshot** | LIGHT | `white` | Enterprise clarity, readable service grid |
| 4 | **Proof & Credibility** | DARK | `slate-950 → brand-950` | Stats/metrics need high contrast, signal motif |
| 5 | **Featured Case Studies** | DARK | `slate-950 → brand-950` | Outcome-focused, pathway motif |
| 6 | **Why Work With Us** | LIGHT | `slate-50` | Reading-heavy differentiators, enterprise trust |
| 7 | **Final CTA** | DARK | `slate-950 → brand-950` | Conversion focus, signal motif |

**Dark/Light Ratio**: 5 dark (71%) / 2 light (29%) ≈ **65% dark / 35% light** ✓

---

## (b) New Shared Components Needed

### 1. `ProblemPromise` Component
**Purpose**: Bridge Hero to Services with problem statement → promise transformation

**Props**:
```typescript
interface ProblemPromiseProps {
  problem: string
  problemSubtext?: string
  promise: string
  promiseSubtext?: string
  visual?: 'pathway' | 'flow' | 'topo'
}
```

**Design**:
- Split-screen or side-by-side layout
- Left: Problem (red signal accent for urgency)
- Right: Promise (brand gradient)
- Animated transition between states
- Pathway/flow motif connecting problem to promise

### 2. `ProofGrid` Component (Enhanced)
**Purpose**: Display credibility metrics with dark mode styling

**Props**:
```typescript
interface ProofGridProps {
  stats: Array<{
    value: string
    label: string
    description?: string
    highlight?: boolean // For gold/orange accent
  }>
  variant?: 'grid' | 'inline' | 'card'
  dark?: boolean
}
```

**Features**:
- Gradient text for values (brand → cool → cyan)
- Gold/orange accent for key metrics
- Signal constellation motif overlay
- Staggered reveal animation

### 3. `ServicePillarCard` Component (Enhanced)
**Purpose**: Display 4 expertise pillars in light section

**Current**: Basic card with icon
**Enhancement**:
- Subtle hover lift (`-translate-y-1`)
- Icon gradient on hover
- Border glow on hover (brand-400)
- Smooth scale transition

### 4. `DifferentiatorList` Component
**Purpose**: Clean list of differentiators in light section

**Props**:
```typescript
interface DifferentiatorListProps {
  items: Array<{
    icon?: ReactNode
    title: string
    description: string
  }>
  layout?: 'list' | 'grid' | 'split'
}
```

**Design**:
- CheckCircle icons (emerald-500)
- Clean typography hierarchy
- Optional visual element (data viz, chart)

### 5. `CTADark` Component
**Purpose**: Dark CTA section with gradient buttons

**Enhancement**:
- Primary button: brand gradient with glow
- Secondary button: glass morphism (white/10 backdrop-blur)
- Signal motif overlay
- Ambient orbs

---

## (c) Motif/Imagery Layers to Add

### Section 1: Hero
- **Motif**: Topographic contours (growth elevation)
- **Visual**: Abstract mesh/wave form in background
- **Orbs**: Brand (top-left), Cool (top-right), Cyan (bottom-center)

### Section 2: Problem → Promise (NEW)
- **Motif**: Vector pathways with waypoints
- **Visual**: Animated route from problem (left) to promise (right)
- **Orbs**: Red signal accent (problem side), Brand gradient (promise side)

### Section 3: Services Snapshot
- **Motif**: None (clean light break)
- **Visual**: Subtle grid pattern only (very faint)
- **Orbs**: None

### Section 4: Proof & Credibility
- **Motif**: Signal constellation (data dots)
- **Visual**: Faint dot clusters connecting metrics
- **Orbs**: Brand, Cool, Cyan (all three)

### Section 5: Featured Case Studies
- **Motif**: Pathway network (journey lines)
- **Visual**: Thin route lines connecting case study cards
- **Orbs**: Brand (left), Cool (right)

### Section 6: Why Work With Us
- **Motif**: None (clean light break)
- **Visual**: Optional subtle data viz (chart bars) in right column
- **Orbs**: None

### Section 7: Final CTA
- **Motif**: Signal field (constellation)
- **Visual**: Dot mesh with connection lines
- **Orbs**: Brand, Cool, Cyan (all three, stronger)

---

## (d) Motion Upgrades

### Existing (Keep):
- ✅ Staggered text reveals (`StaggerContainer`, `StaggerItem`)
- ✅ Hover lift cards (`hover:-translate-y-1`)
- ✅ Ambient orb drift (`animate-drift-slow/medium/fast`)

### New Additions:

1. **Problem → Promise Transition**
   - Animated pathway drawing from problem to promise
   - Fade-in problem, then promise slides in
   - Route line animates on scroll into view

2. **Metric Counter Animation**
   - Numbers count up on scroll into view
   - Use `framer-motion` `useInView` + `useMotionValue`
   - Smooth easing for professional feel

3. **Card Hover Enhancements**
   - Scale icon on hover (`scale-110`)
   - Border glow on hover (`shadow-glow-violet`)
   - Subtle background gradient shift

4. **Section Transition Fade**
   - Fade between dark/light sections
   - Smooth color transition (not jarring)
   - Optional: subtle parallax on scroll (very slow, tasteful)

5. **Button Hover States**
   - Primary: Glow pulse (`animate-glow-pulse`)
   - Secondary: Background opacity increase
   - Arrow icon slide (`translate-x-1`)

---

## (e) Tailwind Theme/Token Edits

### Color System (Already Updated ✓)
```typescript
// Primary: deep navy → cobalt → electric blue
brand: {
  800: '#1e2a5c', // Deep navy
  600: '#4149e6', // Cobalt
  500: '#5a6cf2', // Electric blue
}

// Cool accent: violet/cyan
cool: { 400: '#a78bfa' } // Violet
cyan: { 400: '#22d3ee' } // Cyan

// Warm spark: orange/gold
accent: { 500: '#f97316' } // Orange
gold: { 500: '#f59e0b' } // Gold

// Red as signal accent only
signal: { 500: '#ef4444' }
```

### New Shadow Tokens Needed:
```typescript
boxShadow: {
  // ... existing
  'glow-violet': '0 0 40px -8px rgba(167, 139, 250, 0.4)',
  'glow-cyan': '0 0 40px -8px rgba(34, 211, 238, 0.3)',
  'glow-gold': '0 0 30px -6px rgba(245, 158, 11, 0.3)',
  'dark-soft': '0 2px 8px -2px rgba(0, 0, 0, 0.3), 0 4px 16px -4px rgba(0, 0, 0, 0.4)',
  'dark-medium': '0 4px 12px -2px rgba(0, 0, 0, 0.4), 0 8px 24px -4px rgba(0, 0, 0, 0.5)',
}
```

### New Animation Tokens Needed:
```typescript
animation: {
  // ... existing
  'glow-pulse': 'glowPulse 3s ease-in-out infinite',
  'count-up': 'countUp 1.5s ease-out',
}

keyframes: {
  // ... existing
  glowPulse: {
    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
  },
  countUp: {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
}
```

### New Utility Classes Needed:
```css
/* Glass morphism for dark sections */
.glass-dark {
  @apply bg-white/5 backdrop-blur-sm border border-white/10;
}

.glass-dark-hover {
  @apply hover:bg-white/10 hover:border-brand-500/30;
}

/* Gradient text utilities */
.text-gradient-brand {
  @apply bg-gradient-to-r from-brand-400 via-cool-400 to-cyan-400 bg-clip-text text-transparent;
}

.text-gradient-gold {
  @apply bg-gradient-to-r from-gold-400 to-accent-500 bg-clip-text text-transparent;
}

/* Dark section text colors */
.text-dark-primary { @apply text-white; }
.text-dark-secondary { @apply text-slate-300; }
.text-dark-muted { @apply text-slate-400; }
```

---

## Implementation Priority

### Phase 1: Core Structure (High Priority)
1. ✅ Create `ProblemPromise` component
2. ✅ Reorder sections to match 7-section plan
3. ✅ Remove/consolidate extra sections (Industries, Featured Expertise)
4. ✅ Update section assignments (dark/light)

### Phase 2: Component Enhancements (Medium Priority)
1. ✅ Enhance `ProofGrid` with dark mode styling
2. ✅ Enhance `ServicePillarCard` with hover effects
3. ✅ Create `DifferentiatorList` component
4. ✅ Enhance `CTADark` component

### Phase 3: Motion & Polish (Medium Priority)
1. ✅ Add problem → promise pathway animation
2. ✅ Add metric counter animations
3. ✅ Enhance card hover states
4. ✅ Add button glow effects

### Phase 4: Motifs & Visuals (Low Priority)
1. ✅ Add all motif overlays per section
2. ✅ Fine-tune orb positions and intensities
3. ✅ Add abstract visual elements
4. ✅ Optimize performance (lazy load motifs)

---

## Section Content Mapping

### Section 1: Hero (DARK)
**Current**: ✅ Already implemented
**Content**: Title, description, CTAs, inline stats
**Motif**: Topo
**Motion**: Staggered reveal, ambient orbs

### Section 2: Problem → Promise (DARK) - **NEW**
**Content**:
- Problem: "Most B2B tech companies struggle with GTM execution..."
- Promise: "We bridge strategy and execution to accelerate growth..."
- Visual: Animated pathway connecting problem to promise
**Motif**: Pathway
**Motion**: Pathway drawing animation, fade transitions

### Section 3: Services Snapshot (LIGHT)
**Current**: Expertise Grid (4 pillars)
**Content**: 4 expertise pillars with icons, descriptions, links
**Motif**: None (clean break)
**Motion**: Staggered card reveals, hover lift

### Section 4: Proof & Credibility (DARK)
**Current**: Stats Section
**Content**: 4 key metrics (50+ companies, $500M+ pipeline, 47% growth, 12+ years)
**Motif**: Signal constellation
**Motion**: Counter animations, staggered reveals
**Enhancement**: Add client logos or testimonials snippet

### Section 5: Featured Case Studies (DARK)
**Current**: ✅ Already implemented
**Content**: 3 featured case studies with metrics
**Motif**: Pathway network
**Motion**: Card hover lift, staggered reveals

### Section 6: Why Work With Us (LIGHT)
**Current**: "Why GTMstack" section
**Content**: 4 differentiators + visual element (chart/data viz)
**Motif**: None (clean break)
**Motion**: Fade-in text, optional chart animation

### Section 7: Final CTA (DARK)
**Current**: ✅ Already implemented
**Content**: CTA headline, description, 2 buttons
**Motif**: Signal field
**Motion**: Fade-in, button glow on hover

---

## Files to Create/Modify

### New Components:
- `components/ui/ProblemPromise.tsx`
- `components/ui/ProofGrid.tsx` (enhance existing)
- `components/ui/DifferentiatorList.tsx`
- `components/ui/CTADark.tsx` (enhance existing)

### Modify:
- `app/page.tsx` - Reorder sections, add Problem → Promise
- `tailwind.config.ts` - Add new tokens (shadows, animations)
- `app/globals.css` - Add utility classes

### Existing (Keep):
- `components/layout/SectionDark.tsx` ✓
- `components/layout/SectionLight.tsx` ✓
- `components/ui/HeroDark.tsx` ✓
- `components/motifs/*` ✓

---

## Success Metrics

- ✅ 65% dark / 35% light ratio achieved
- ✅ All 7 sections in correct order
- ✅ Motifs applied consistently
- ✅ Motion is tasteful, not flashy
- ✅ Enterprise clarity in light sections
- ✅ SaaS energy in dark sections
- ✅ No stock people/office imagery
- ✅ Abstract visuals only

