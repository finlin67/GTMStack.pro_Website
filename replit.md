# GTMstack.pro

## Overview
A Next.js 14 marketing website for GTMstack.pro - a B2B technology go-to-market strategy consulting service. The site showcases expertise, case studies, industries served, and services offered.

## Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `content/` - Data files for case studies, expertise, industries
- `lib/` - Utility functions and type definitions
- `public/` - Static assets
- `src/` - Additional source files

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **UI**: Framer Motion for animations, Lucide React for icons
- **Content**: MDX for rich content pages
- **Fonts**: Geist font family

## Development
- Run `npm run dev` to start the development server on port 5000
- The dev server is configured to accept all hosts for Replit proxy compatibility

## Production Build
- Uses static export (`output: 'export'`) for production
- Build artifacts are output to the `out/` directory
- Run `npm run build` to generate static files

## Key Files
- `next.config.js` - Next.js configuration with MDX support
- `tailwind.config.ts` - Tailwind CSS customization
- `app/layout.tsx` - Root layout with fonts and global styles
- `app/page.tsx` - Homepage component

## Animation Systems

### Hero Tile Animations
Topic-specific animated SVG visuals for expertise page hero tiles:
- **Component**: `components/ui/HeroTileAnimation.client.tsx`
- **Presets**: `lib/heroTilePresets.ts` - Maps expertise slugs to tile variants
- **Variants**: contentFlow, emailBranching, omnichannelNodes, socialOrbit, videoHeatmap, funnelStages, seoUplift, growthExperiments, paidRoasFlow, martechSync
- Uses seeded randomness (`lib/seededRandom.ts`) for deterministic per-route uniqueness
- Respects `prefers-reduced-motion` - renders static when reduced motion is active

### Hero Background Animations
Page-wide animated SVG backgrounds:
- **Component**: `components/ui/HeroBackground.tsx`
- **Variants**: 8 background patterns (contentFlow, branchingPaths, orbitingNodes, etc.)
- Uses `lib/heroPresets.ts` for automatic variant selection based on pathname
- Intensity levels: subtle, medium, bold

### Route → Tile Variant Mapping
| Category | Tile Variant | Example Slugs |
|----------|--------------|---------------|
| Content | contentFlow | content-marketing, content-strategy |
| Email | emailBranching | email-marketing, lifecycle-marketing |
| Omnichannel | omnichannelNodes | omnichannel-marketing, customer-experience |
| Social | socialOrbit | social-media-marketing |
| Video | videoHeatmap | video-creative, video-marketing |
| Demand Gen | funnelStages | demand-generation, event-marketing |
| SEO | seoUplift | seo, search-engine-optimization |
| Growth | growthExperiments | growth-marketing, product-marketing |
| Paid Ads | paidRoasFlow | paid-advertising, paid-advertising-sem |
| MarTech/Ops | martechSync | marketing-operations, revenue-operations |
