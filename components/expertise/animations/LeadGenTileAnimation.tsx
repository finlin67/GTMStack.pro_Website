
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Types for the particle system and state management
 */
interface StageCounts {
  awareness: number;
  interest: number;
  decision: number;
}

interface Particle {
  id: number;
  startX: number;
  color: string;
  isAlive: boolean;
}

/**
 * LeadGenTileAnimation
 * 
 * A self-contained component that visualizes a lead generation funnel.
 * Includes fixed dimensions (463x632), animated particles, 
 * rotating background glow, and real-time statistics.
 */
export default function LeadGenTileAnimation() {
  // Stats state
  const [totalLeads, setTotalLeads] = useState<number>(0);
  const [qualifiedLeads, setQualifiedLeads] = useState<number>(0);
  const [stageCounts, setStageCounts] = useState<StageCounts>({
    awareness: 0,
    interest: 0,
    decision: 0,
  });

  // Particle tracking state
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);

  // Constants for sizing and colors
  const WIDTH = 463;
  const HEIGHT = 632;
  const COLORS = {
    awareness: '#ffffff',
    interest: '#3b82f6', // blue-500
    decision: '#10b981', // emerald-500
  };

  /**
   * Helper to update the counts based on the particle's journey
   */
  const spawnParticle = () => {
    const id = ++particleIdCounter.current;
    const startX = Math.random() * 280 + 50; // Centered in funnel area

    // Step 1: Birth
    setTotalLeads(prev => prev + 1);
    setStageCounts(prev => ({ ...prev, awareness: prev.awareness + 1 }));

    const newParticle: Particle = {
      id,
      startX,
      color: COLORS.awareness,
      isAlive: true
    };

    setParticles(prev => [...prev, newParticle]);

    // Logic paths
    const qualifiesInterest = Math.random() > 0.6; // 40% qualify
    const qualifiesDecision = qualifiesInterest && Math.random() > 0.5; // 50% of interest

    // Step 2: Move to Interest (1s in)
    setTimeout(() => {
      setStageCounts(prev => ({ ...prev, awareness: Math.max(0, prev.awareness - 1) }));
      if (qualifiesInterest) {
        setStageCounts(prev => ({ ...prev, interest: prev.interest + 1 }));
        setParticles(prev => prev.map(p => p.id === id ? { ...p, color: COLORS.interest } : p));
      } else {
        setParticles(prev => prev.map(p => p.id === id ? { ...p, isAlive: false } : p));
      }
    }, 1000);

    // Step 3: Move to Decision (2s in)
    setTimeout(() => {
      if (qualifiesInterest) {
        setStageCounts(prev => ({ ...prev, interest: Math.max(0, prev.interest - 1) }));
        if (qualifiesDecision) {
          setStageCounts(prev => ({ ...prev, decision: prev.decision + 1 }));
          setQualifiedLeads(prev => prev + 1);
          setParticles(prev => prev.map(p => p.id === id ? { ...p, color: COLORS.decision } : p));
        } else {
          setParticles(prev => prev.map(p => p.id === id ? { ...p, isAlive: false } : p));
        }
      }
    }, 2000);

    // Step 4: Exit (3s in)
    setTimeout(() => {
      if (qualifiesDecision) {
        setStageCounts(prev => ({ ...prev, decision: Math.max(0, prev.decision - 1) }));
      }
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 3000);
  };

  // Interval to spawn particles
  useEffect(() => {
    const interval = setInterval(spawnParticle, 1200);
    return () => clearInterval(interval);
  }, []);

  // Conversion rate calculation
  const convRate = totalLeads > 0 ? Math.round((qualifiedLeads / totalLeads) * 100) : 0;

  return (
    <div 
      className="relative overflow-hidden flex flex-col p-8 rounded-[24px] shadow-2xl font-sans"
      style={{
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      }}
    >
      {/* Background Glow Animation */}
      <motion.div
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Funnel Content Area */}
      <div className="flex-1 flex flex-col justify-evenly items-center relative z-10 py-5">

        {/* Particle Layer */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <AnimatePresence>
            {particles.map((particle) => (
              particle.isAlive && (
                <motion.div
                  key={particle.id}
                  initial={{ 
                    y: 40, 
                    x: particle.startX, 
                    scale: 0, 
                    opacity: 0 
                  }}
                  animate={{ 
                    y: 490, 
                    scale: [0, 1.2, 1, 0.8], 
                    opacity: [0, 1, 1, 0] 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 3, 
                    ease: "easeInOut" 
                  }}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: particle.color,
                    boxShadow: `0 0 10px ${particle.color}`,
                  }}
                />
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Stage 1: Awareness */}
        <div 
          className="stage-tile w-full max-w-[340px] h-[110px] bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between px-6 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:scale-[1.02] z-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg bg-gradient-to-br from-violet-500 to-indigo-500">
              👥
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Stage 1</span>
              <span className="text-base font-bold text-white">Awareness</span>
            </div>
          </div>
          <span className="text-3xl font-bold text-white min-w-[40px] text-right">
            {stageCounts.awareness}
          </span>
        </div>

        {/* Connector */}
        <div className="w-0.5 h-5 bg-gradient-to-b from-white/20 to-white/5 mx-auto -my-2.5 relative z-0" />

        {/* Stage 2: Interest */}
        <div 
          className="stage-tile w-[88%] max-w-[340px] h-[110px] bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between px-6 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:scale-[1.02] z-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
              🎯
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Stage 2</span>
              <span className="text-base font-bold text-white">Interest</span>
            </div>
          </div>
          <span className="text-3xl font-bold text-white min-w-[40px] text-right">
            {stageCounts.interest}
          </span>
        </div>

        {/* Connector */}
        <div className="w-0.5 h-5 bg-gradient-to-b from-white/20 to-white/5 mx-auto -my-2.5 relative z-0" />

        {/* Stage 3: Decision */}
        <div 
          className="stage-tile w-[75%] max-w-[340px] h-[110px] bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between px-6 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:scale-[1.02] z-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-700">
              ✅
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Stage 3</span>
              <span className="text-base font-bold text-white">Decision</span>
            </div>
          </div>
          <span className="text-3xl font-bold text-white min-w-[40px] text-right">
            {stageCounts.decision}
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 relative z-10">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-1">{totalLeads}</div>
          <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Total</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-500 mb-1">{qualifiedLeads}</div>
          <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Qualified</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-500 mb-1">{convRate}%</div>
          <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Conv. Rate</div>
        </div>
      </div>
    </div>
  );
}
