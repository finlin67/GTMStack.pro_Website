# Homepage Refactor: Quick Reference

## Current → Target Mapping

```
CURRENT (8 sections)              TARGET (7 sections)
─────────────────────              ───────────────────
1. Hero (DARK) ✓                   1. Hero (DARK) ✓
2. Stats (DARK)                     2. Problem → Promise (DARK) [NEW]
3. Expertise Grid (LIGHT)           3. Services Snapshot (LIGHT) ✓
4. Case Studies (DARK)              4. Proof & Credibility (DARK) ✓
5. Why Work With Me (LIGHT)         5. Featured Case Studies (DARK) ✓
6. Industries (DARK) [REMOVE]       6. Why Work With Us (LIGHT) ✓
7. Featured Expertise (LIGHT) [REMOVE] 7. Final CTA (DARK) ✓
8. CTA Band (DARK) ✓
```

## Dark/Light Assignment

```
DARK SECTIONS (5) - 71%            LIGHT SECTIONS (2) - 29%
─────────────────────              ───────────────────
1. Hero                           3. Services Snapshot
2. Problem → Promise               6. Why Work With Us
4. Proof & Credibility
5. Featured Case Studies
7. Final CTA
```

## Motif Assignment

| Section | Motif | Visual Element |
|---------|-------|----------------|
| Hero | Topo | Contour lines (growth elevation) |
| Problem → Promise | Pathway | Route from problem to promise |
| Services | None | Clean break |
| Proof | Signal | Data constellation dots |
| Case Studies | Pathway | Network lines |
| Differentiators | None | Clean break |
| CTA | Signal | Dot mesh field |

## New Components Checklist

- [ ] `ProblemPromise.tsx` - Problem → Promise transition
- [ ] `ProofGrid.tsx` - Enhanced dark mode stats
- [ ] `DifferentiatorList.tsx` - Clean differentiator display
- [ ] `CTADark.tsx` - Enhanced dark CTA

## Motion Enhancements

- [ ] Problem → Promise pathway animation
- [ ] Metric counter animations
- [ ] Enhanced card hover (glow, scale)
- [ ] Button glow pulse
- [ ] Section transition fades

## Tailwind Updates

- [ ] Add `glow-violet`, `glow-cyan`, `glow-gold` shadows
- [ ] Add `glow-pulse`, `count-up` animations
- [ ] Add `.glass-dark` utility classes
- [ ] Add `.text-gradient-brand`, `.text-gradient-gold` utilities

