'use client'

import { TopoBackdrop, PathwayOverlay, SignalField, StackedPlanes, FlowLines, GridField } from './index'

/**
 * Demo component showing all motif variations
 * Use this as a reference for implementing motifs in your sections
 */
export function MotifDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Topographic Backdrop */}
      <section className="relative h-64 rounded-2xl bg-slate-50 overflow-hidden">
        <TopoBackdrop intensity="medium" variant="sparse" />
        <div className="relative z-10 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Topographic Growth Maps</h3>
          <p className="text-sm text-slate-600">Faint contour lines suggesting growth trajectories</p>
        </div>
      </section>

      {/* Pathway Overlay */}
      <section className="relative h-64 rounded-2xl bg-slate-50 overflow-hidden">
        <PathwayOverlay intensity="medium" paths="simple" accent />
        <div className="relative z-10 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Vector Pathways + Waypoints</h3>
          <p className="text-sm text-slate-600">Thin route lines with connection nodes</p>
        </div>
      </section>

      {/* Signal Field */}
      <section className="relative h-64 rounded-2xl bg-slate-50 overflow-hidden">
        <SignalField intensity="medium" pattern="constellation" density="dense" />
        <div className="relative z-10 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Signal Fields / Data Constellations</h3>
          <p className="text-sm text-slate-600">Dot clusters and mesh connections</p>
        </div>
      </section>

      {/* Stacked Planes */}
      <section className="relative h-64 rounded-2xl bg-slate-50 overflow-hidden">
        <StackedPlanes intensity="medium" orientation="diagonal" accent />
        <div className="relative z-10 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Stacked Planes / Layered Sheets</h3>
          <p className="text-sm text-slate-600">Soft translucent rectangles creating depth</p>
        </div>
      </section>

      {/* Flow Lines */}
      <section className="relative h-64 rounded-2xl bg-slate-50 overflow-hidden">
        <FlowLines intensity="medium" direction="horizontal" curvature="curved" accent />
        <div className="relative z-10 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Flow Lines</h3>
          <p className="text-sm text-slate-600">Directional flow suggesting movement and progress</p>
        </div>
      </section>

      {/* Grid Field */}
      <section className="relative h-64 rounded-2xl bg-slate-50 overflow-hidden">
        <GridField intensity="medium" pattern="grid" scale="medium" accent />
        <div className="relative z-10 p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Grid Field</h3>
          <p className="text-sm text-slate-600">Structural grid patterns for organization</p>
        </div>
      </section>
    </div>
  )
}


