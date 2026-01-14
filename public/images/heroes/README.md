# Hero Images

This directory contains hero images used for the right-side visual in `HeroDark` components.

## Directory Structure

- **Expertise images**: `/public/images/heroes/expertise/`
- **Industry images**: `/public/images/heroes/industries/`
- **Project images**: `/public/images/heroes/projects/`

## Naming Convention

Filenames match the `heroVisualMap` targets exactly:

- Expertise: `abm.webp`, `ai.webp`, `attribution.webp`, etc.
- Industries: `financial.webp`, `manufacturing.webp`, `saas.webp`, etc.
- Projects: `abm-launch.webp`, `red-hat.webp`, `amcs.webp`, etc.

## Image Specifications

- **Dimensions**: 1200x1200 (square)
- **Format**: WebP
- **File size**: Under ~250KB recommended
- **Aspect ratio**: 1:1 (square)

## Fallback Images

Each directory contains a `default.webp` fallback image that is used when a specific slug is not found in the map:

- `/public/images/heroes/expertise/default.webp`
- `/public/images/heroes/industries/default.webp`
- `/public/images/heroes/projects/default.webp`

## Usage

Images are automatically resolved via `lib/hero-visual-map.ts` and `HeroDark` component. The component will:

1. Check for a specific image in `heroVisualMap[slug]`
2. If not found and `kind` is provided, use the appropriate default fallback
3. If image fails to load, render a graceful fallback container

