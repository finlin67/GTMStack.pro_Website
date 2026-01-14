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
