# Abstract Motifs System

A collection of subtle, reusable background patterns that enforce consistent visual flow across the GTMstack.pro site. All motifs are designed to be low-contrast, neutral-based with optional primary-color accent lines.

## Components

### 1. TopoBackdrop
Topographic growth maps with faint contour lines suggesting elevation and growth trajectories.

```tsx
import { TopoBackdrop } from '@/components/motifs'

<TopoBackdrop 
  intensity="subtle"      // subtle | medium | strong
  variant="default"        // default | sparse | dense
  accent={false}           // Optional primary color accent
/>
```

### 2. PathwayOverlay
Vector pathways with waypoints - thin route lines connecting nodes.

```tsx
import { PathwayOverlay } from '@/components/motifs'

<PathwayOverlay 
  intensity="subtle"       // subtle | medium | strong
  paths="simple"           // simple | complex | network
  accent={false}           // Optional primary color accent
  nodes={6}                // Number of waypoint nodes
/>
```

### 3. SignalField
Signal fields and data constellations - dot clusters and mesh connections.

```tsx
import { SignalField } from '@/components/motifs'

<SignalField 
  intensity="subtle"       // subtle | medium | strong
  pattern="dots"           // dots | mesh | constellation
  density="medium"         // sparse | medium | dense
  accent={false}           // Optional primary color accent
/>
```

### 4. StackedPlanes
Stacked planes and layered sheets - soft translucent rectangles creating depth.

```tsx
import { StackedPlanes } from '@/components/motifs'

<StackedPlanes 
  intensity="subtle"       // subtle | medium | strong
  orientation="diagonal"   // horizontal | diagonal | vertical
  layers={4}               // 3 | 4 | 5
  accent={false}           // Optional primary color accent
/>
```

### 5. FlowLines
Directional flow lines suggesting movement and progress.

```tsx
import { FlowLines } from '@/components/motifs'

<FlowLines 
  intensity="subtle"       // subtle | medium | strong
  direction="horizontal"  // horizontal | vertical | radial
  curvature="curved"       // straight | curved | organic
  accent={false}           // Optional primary color accent
/>
```

### 6. GridField
Structural grid patterns for organization and structure.

```tsx
import { GridField } from '@/components/motifs'

<GridField 
  intensity="subtle"       // subtle | medium | strong
  pattern="grid"          // grid | hex | radial
  scale="medium"          // small | medium | large
  accent={false}           // Optional primary color accent
/>
```

## Usage Examples

### In a Section Component

```tsx
import { Section } from '@/components/layout/Section'
import { TopoBackdrop } from '@/components/motifs'

<Section background="white" padding="lg">
  <div className="relative">
    <TopoBackdrop intensity="subtle" variant="sparse" />
    <div className="relative z-10">
      {/* Your content here */}
    </div>
  </div>
</Section>
```

### Multiple Motifs Layered

```tsx
<section className="relative">
  <StackedPlanes intensity="subtle" orientation="diagonal" />
  <SignalField intensity="subtle" pattern="constellation" density="sparse" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

### With Accent Color

```tsx
<PathwayOverlay 
  intensity="medium" 
  paths="simple" 
  accent={true}  // Adds primary brand color accent line
/>
```

## Design Principles

1. **Subtle First**: Default intensity is "subtle" - motifs should enhance, not distract
2. **Low Contrast**: All base patterns use neutral slate colors (rgb(148 163 184))
3. **Optional Accent**: Use `accent={true}` sparingly to highlight key sections
4. **Layering**: Motifs can be layered for depth, but keep total opacity low
5. **No Literal Icons**: Patterns are abstract and suggestive, not literal representations

## Tailwind Utility Classes

You can also use Tailwind classes directly (though components are recommended):

```tsx
<div className="relative">
  <div className="absolute inset-0 topo-default opacity-20" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

Available classes:
- `topo-default`, `topo-sparse`, `topo-dense`, `topo-accent`
- `pathway-simple`, `pathway-complex`, `pathway-network`, `pathway-accent`
- `signal-dots`, `signal-mesh`, `signal-constellation`, `signal-sparse`, `signal-medium`, `signal-dense`, `signal-accent`
- `planes-horizontal`, `planes-diagonal`, `planes-vertical`, `planes-accent`
- `flow-horizontal`, `flow-vertical`, `flow-radial`, `flow-straight`, `flow-curved`, `flow-organic`, `flow-accent`
- `grid-pattern`, `grid-hex`, `grid-radial`, `grid-small`, `grid-medium`, `grid-large`, `grid-accent`

## Best Practices

1. **Z-Index Management**: Always wrap content in `relative z-10` when using motifs
2. **Pointer Events**: Motifs use `pointer-events-none` so they don't interfere with interactions
3. **Accessibility**: Motifs have `aria-hidden="true"` as they're decorative
4. **Performance**: SVG patterns are lightweight and cached by the browser
5. **Consistency**: Use similar motifs across related sections for visual cohesion

## When to Use Each Motif

- **TopoBackdrop**: Growth, scaling, elevation themes
- **PathwayOverlay**: Journey, process, navigation themes
- **SignalField**: Data, analytics, connectivity themes
- **StackedPlanes**: Depth, layers, complexity themes
- **FlowLines**: Movement, progress, direction themes
- **GridField**: Structure, organization, systems themes


