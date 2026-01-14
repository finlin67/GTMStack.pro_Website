# About Page Refactor Plan: Dark SaaS Core with Light Enterprise Breaks

## Current Section Structure

### Current Sections (in order):
1. **PageHero** - Light gradient background with breadcrumbs
2. **Stats** - White background, card variant stats
3. **Story Section** - Gradient background, two-column (story text + timeline)
4. **Expertise Grid** - White background, 4-column grid with skills
5. **Values** - Slate background, 4-column grid with icons
6. **CTA** - Gradient CTA band

---

## Proposed Refactor: Section-by-Section Plan

### Section 1: Hero (DARK)
**Current**: Light PageHero component
**New**: Dark hero with abstract visual

**Theme**: DARK
**Background**: Deep navy gradient (`from-slate-950 via-brand-950 to-slate-950`)
**Motif**: Topographic contours (growth journey)
**Anchor Visual**: Abstract dark-tech image with pathway overlay (similar to homepage hero)
**Motion**: 
- Staggered text reveal
- Slow ambient orb drift
- Subtle topo contour animation

**Content**:
- Breadcrumbs (light text)
- Large title with gradient highlight
- Description
- Optional: Abstract right-side visual (like homepage)

---

### Section 2: Stats (DARK)
**Current**: White background, card variant
**New**: Dark section with cinematic stats

**Theme**: DARK
**Background**: Diagonal gradient (`from-slate-950 via-brand-900 to-brand-800`) - different from hero
**Motif**: Signal constellation (data points)
**Anchor Visual**: Faint data constellation dots behind stats
**Motion**:
- Staggered stat reveals (upward)
- Slow drifting signal field
- Counter animations on scroll

**Content**:
- 4 key stats with icons
- Gradient text for numbers
- Micro sparklines per stat
- Quieter labels

---

### Section 3: Story + Timeline (LIGHT)
**Current**: Gradient background, two-column
**New**: Clean light enterprise break

**Theme**: LIGHT
**Background**: White (`bg-white`)
**Motif**: None (clean break)
**Anchor Visual**: Abstract timeline visualization (pathway lines connecting timeline points, not literal chart)
**Motion**:
- Fade-in text
- Timeline points animate in sequentially
- Subtle pathway line drawing animation

**Content**:
- Left: Story text (reading-heavy, enterprise clarity)
- Right: Timeline with abstract pathway connector (not literal timeline bars)
- Pathway lines connecting timeline points
- Waypoint nodes for each milestone

---

### Section 4: Expertise Grid (LIGHT)
**Current**: White background, 4-column grid
**New**: Light section with subtle motif

**Theme**: LIGHT
**Background**: Slate-50 (`bg-slate-50`)
**Motif**: Stacked planes (subtle, very low opacity)
**Anchor Visual**: None (keep clean)
**Motion**:
- Staggered card reveals
- Hover lift on cards
- Icon scale on hover

**Content**:
- 4 expertise areas
- Skills list per area
- Replace green checkmarks with brand/cool accent geometric icons
- Clean card design

---

### Section 5: Values (DARK)
**Current**: Slate background, 4-column grid
**New**: Dark section with abstract visual

**Theme**: DARK
**Background**: Vertical gradient (`from-slate-950 via-slate-950 to-brand-950`) - theater style
**Motif**: Flow lines (directional energy)
**Anchor Visual**: Abstract flow visualization (directional lines connecting values)
**Motion**:
- Staggered value card reveals
- Flow lines animate on scroll
- Icon hover effects

**Content**:
- 4 values with icons
- Replace current icons with abstract geometric shapes
- Flow lines connecting values visually
- Dark cards with glass morphism

---

### Section 6: CTA (DARK)
**Current**: Gradient CTA band
**New**: Rich dark CTA with warm spark

**Theme**: DARK
**Background**: Richest gradient (`from-brand-900 via-brand-800 via-brand-700 to-brand-950`)
**Motif**: Signal field (constellation)
**Anchor Visual**: Converging route lines pointing to CTA button
**Motion**:
- Fade-in content
- Button glow on hover (cool accent)
- Converging lines subtle animation

**Content**:
- CTA headline
- Description
- Primary + secondary buttons
- Warm spark edge (gold/orange) at bottom-right

---

## Dark/Light Ratio

**Dark Sections**: 4 (67%)
- Hero
- Stats
- Values
- CTA

**Light Sections**: 2 (33%)
- Story + Timeline
- Expertise Grid

**Ratio**: ~65% dark / 35% light ✓

---

## Motif Assignment

| Section | Motif | Intensity | Purpose |
|---------|-------|-----------|---------|
| Hero | Topo | Subtle | Growth journey visualization |
| Stats | Signal | Subtle | Data constellation |
| Story | Pathway | Subtle | Timeline connector |
| Expertise | Stacked Planes | Very Subtle | Structural depth |
| Values | Flow Lines | Subtle | Energy flow |
| CTA | Signal | Subtle | Convergence point |

---

## Anchor Visuals (Abstract Only)

1. **Hero**: Abstract dark-tech image + pathway overlay (like homepage)
2. **Stats**: Data constellation dots (faint, behind stats)
3. **Story**: Pathway lines connecting timeline waypoints (not literal timeline)
4. **Expertise**: None (keep clean)
5. **Values**: Flow lines connecting value cards
6. **CTA**: Converging route lines to button

**No people, no office imagery** - all abstract tech visuals only.

---

## Motion Strategy

### Performance Optimized:
- All animations use `transform` and `opacity` (GPU-accelerated)
- `will-change` hints where needed
- Viewport-based triggers (`once: true`)
- Reasonable durations (0.5-0.6s for reveals, 20-30s for ambient)

### Motion Types:
- **Staggered reveals**: Text and cards (0.1-0.15s delays)
- **Ambient drift**: Slow orb movements (20-30s)
- **Hover effects**: Lift, glow, scale (0.3s)
- **Scroll animations**: Counter animations, line drawing

---

## Component Updates Needed

1. **Create PageHeroDark** component (or update PageHero to support dark variant)
2. **Update Stats section** to use dark variant with cinematic styling
3. **Create TimelineVisual** component (abstract pathway connector)
4. **Update Values section** to dark variant with flow lines
5. **Update CTABand** to support dark variant with converging lines

---

## Content Adjustments

- **Story section**: Keep personal narrative but make it more firm/partnership-oriented
- **Timeline**: Abstract pathway visualization instead of literal timeline bars
- **Expertise**: Replace green checks with brand/cool geometric icons
- **Values**: Replace literal icons with abstract geometric shapes
- **All copy**: Ensure no personal pronouns dominate, use "we" where appropriate

---

## Implementation Priority

1. **Phase 1**: Hero + Stats (dark sections)
2. **Phase 2**: Story + Timeline (light section with abstract timeline)
3. **Phase 3**: Expertise + Values (light + dark)
4. **Phase 4**: CTA (dark with converging lines)

---

## Success Criteria

- ✅ 65% dark / 35% light ratio
- ✅ All motifs are abstract (no people/office)
- ✅ Each dark section has unique gradient direction
- ✅ Light sections feel airy and enterprise-clear
- ✅ Motion is tasteful and performant
- ✅ Visual hierarchy supports reading-heavy content


