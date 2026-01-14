# GTMstack.pro - Marketing/Portfolio Site

A production-ready marketing and portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and MDX.

## Features

- **Modern SaaS-style UI** - Clean, enterprise-credible design with abstract/data-driven visuals
- **Comprehensive Design System** - Custom colors, typography scale, spacing, radii, and shadows
- **Reusable Components** - Navbar, Footer, Hero, CTABand, Section, CardGrid, StatRow, FilterChips, RelatedItems
- **Content Collections** - 20 Expertise items across 4 pillars, 8 Industries, 10 Case Studies
- **Dynamic Routes** - `/expertise/[slug]`, `/industries/[slug]`, `/case-studies/[slug]`
- **Client-side Filtering** - Tag and pillar-based filtering on landing pages
- **Framer Motion Animations** - Subtle scroll and hover effects throughout
- **Full TypeScript** - Type-safe content and components

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Navbar/Footer
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── expertise/               # Expertise section
│   │   ├── page.tsx            # Expertise landing
│   │   ├── [slug]/page.tsx     # Expertise detail
│   │   ├── strategy/           # GTM Strategy pillar
│   │   ├── analytics/          # Revenue Analytics pillar
│   │   ├── automation/         # Marketing Automation pillar
│   │   └── optimization/       # Growth Optimization pillar
│   ├── industries/              # Industries section
│   │   ├── page.tsx            # Industries landing
│   │   └── [slug]/page.tsx     # Industry detail
│   ├── case-studies/            # Case Studies section
│   │   ├── page.tsx            # Case studies landing
│   │   └── [slug]/page.tsx     # Case study detail
│   ├── resume/                  # Resume page
│   └── contact/                 # Contact page
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   ├── ui/                      # UI components
│   │   ├── Hero.tsx
│   │   ├── CTABand.tsx
│   │   ├── Card.tsx
│   │   ├── CardGrid.tsx
│   │   ├── StatRow.tsx
│   │   ├── FilterChips.tsx
│   │   ├── RelatedItems.tsx
│   │   └── Button.tsx
│   └── motion/                  # Animation components
│       └── FadeIn.tsx
├── content/                     # Content data
│   ├── expertise.ts            # 20 expertise items
│   ├── industries.ts           # 8 industries
│   └── case-studies.ts         # 10 case studies
├── lib/                         # Utilities
│   ├── types.ts                # TypeScript types
│   └── utils.ts                # Helper functions
└── tailwind.config.ts          # Tailwind + Design System
```

## Design System

### Colors

- **Brand** - Deep navy to electric blue gradient (`brand-50` to `brand-950`)
- **Accent** - Warm coral/orange for CTAs (`accent-50` to `accent-950`)
- **Slate** - Neutral grays for text and backgrounds (`slate-50` to `slate-950`)
- **Emerald** - Success states and data visualization

### Typography

- **Font Family** - Geist Sans (primary), Geist Mono (code)
- **Display Font** - Cabinet Grotesk for headings
- **Scale** - xs through 8xl with optimized line heights

### Spacing & Layout

- Container max-width: 1280px
- Section padding: 24-40px (responsive)
- Component spacing: 4px base unit

### Components

All components follow consistent patterns:
- Card variants: default, featured, compact
- Button variants: primary, secondary, accent, ghost, outline
- Animation: FadeIn, StaggerContainer, HoverScale

## Content Management

Content is managed through TypeScript files in `/content/`:

### Expertise (20 items)

Grouped into 4 pillars:
1. **GTM Strategy** - Positioning, competitive analysis, planning
2. **Revenue Analytics** - Attribution, dashboards, predictive
3. **Marketing Automation** - Workflows, nurturing, ABM
4. **Growth Optimization** - CRO, testing, experiments

### Industries (8 items)

B2B SaaS, FinTech, HealthTech, Developer Tools, E-Commerce, Cybersecurity, Climate Tech, AI/ML

### Case Studies (10 items)

Detailed project case studies with metrics, challenges, solutions, and results.

## Customization

### Adding Content

1. Add new items to the relevant file in `/content/`
2. Follow the existing TypeScript interfaces
3. Items will automatically appear on landing pages

### Styling

1. Modify design tokens in `tailwind.config.ts`
2. Update global styles in `app/globals.css`
3. Component-specific styles use Tailwind utility classes

### Pages

1. Create new routes in `/app/` following Next.js App Router conventions
2. Use existing components from `/components/`
3. Follow established patterns for consistency

## Deployment

The site is ready for deployment on:
- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://netlify.com/)
- Any Node.js hosting platform

```bash
# Build for production
npm run build

# The output is in .next/
```

## License

Private - All rights reserved.

