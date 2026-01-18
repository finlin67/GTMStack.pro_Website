'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Types for the conversion funnel simulation
 */
interface Particle {
  id: string;
  startX: number;
  stage: 'awareness' | 'interest' | 'decision' | 'exit';
  status: 'active' | 'dropped';
}

export default function LeadGenBanner() {
  // Stats state
  const [totalLeads, setTotalLeads] = useState(0);
  const [qualifiedLeads, setQualifiedLeads] = useState(0);
  const [stageCounts, setStageCounts] = useState({
    awareness: 0,
    interest: 0,
    decision: 0
  });

  // Animation particles state
  const [particles, setParticles] = useState<Particle[]>([]);

  // Ref to track IDs consistently
  const particleIdCounter = useRef(0);

  /**
   * Calculate conversion rate
   */
  const convRate = totalLeads > 0 ? Math.round((qualifiedLeads / totalLeads) * 100) : 0;

  /**
   * Logic to create a single particle and handle its lifecycle
   */
  const spawnLead = useCallback(() => {
    const id = `p-${particleIdCounter.current++}`;
    const startX = Math.random() * 200 + 40;

    // Initial Spawn
    const newParticle: Particle = {
      id,
      startX,
      stage: 'awareness',
      status: 'active'
    };

    setParticles(prev => [...prev, newParticle]);
    setTotalLeads(prev => prev + 1);
    setStageCounts(prev => ({ ...prev, awareness: prev.awareness + 1 }));

    // Stage 1 -> Stage 2 (Awareness -> Interest)
    // 35% pass rate as per original logic
    setTimeout(() => {
      const qualifiesInterest = Math.random() > 0.65;

      setParticles(prev => prev.map(p => {
        if (p.id !== id) return p;
        return {
          ...p,
          stage: qualifiesInterest ? 'interest' : 'exit',
          status: qualifiesInterest ? 'active' : 'dropped'
        };
      }));

      setStageCounts(prev => ({ 
        ...prev, 
        awareness: Math.max(0, prev.awareness - 1),
        interest: qualifiesInterest ? prev.interest + 1 : prev.interest
      }));

      // Stage 2 -> Stage 3 (Interest -> Decision)
      if (qualifiesInterest) {
        setTimeout(() => {
          // 50% of interest leads become decision
          const qualifiesDecision = Math.random() > 0.5;

          setParticles(prev => prev.map(p => {
            if (p.id !== id) return p;
            return {
              ...p,
              stage: qualifiesDecision ? 'decision' : 'exit',
              status: qualifiesDecision ? 'active' : 'dropped'
            };
          }));

          setStageCounts(prev => ({
            ...prev,
            interest: Math.max(0, prev.interest - 1),
            decision: qualifiesDecision ? prev.decision + 1 : prev.decision
          }));

          if (qualifiesDecision) {
            setQualifiedLeads(prev => prev + 1);
          }

          // Final cleanup for decision stage
          setTimeout(() => {
            setStageCounts(prev => ({
              ...prev,
              decision: Math.max(0, prev.decision - (qualifiesDecision ? 1 : 0))
            }));
            setParticles(prev => prev.filter(p => p.id !== id));
          }, 1200);

        }, 1200);
      } else {
        // Cleanup dropped particles from stage 1
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== id));
        }, 800);
      }
    }, 1200);

  }, []);

  /**
   * Simulation Loop
   */
  useEffect(() => {
    const interval = setInterval(spawnLead, 1200);
    return () => clearInterval(interval);
  }, [spawnLead]);

  return (
    <div className="w-full bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 md:p-12 min-h-[400px]">

        {/* Left Side: Text and Stats */}
        <div className="flex flex-col text-white z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full w-fit mb-6">
            <motion.span 
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2.5 h-2.5 bg-emerald-400 rounded-full" 
            />
            <span className="text-[10px] font-bold tracking-wider uppercase">Live Simulation</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Lead Generation <br /> That Converts
          </h1>

          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md">
            Filter noise and surface high-intent buyers with intelligent lead scoring that adapts to your pipeline in real-time.
          </p>

          <div className="flex gap-8 md:gap-12 mt-auto">
            <StatItem label="Total Volume" value={totalLeads.toLocaleString()} />
            <StatItem label="Qualified" value={qualifiedLeads.toLocaleString()} />
            <StatItem label="Conv. Rate" value={`${convRate}%`} />
          </div>
        </div>

        {/* Right Side: Visual Funnel Animation */}
        <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl h-[320px] md:h-[350px] p-6 flex flex-col items-center justify-between border border-white/10 overflow-hidden">

          {/* Funnel Stage Boxes */}
          <FunnelStage 
            label="Stage 1" 
            name="Awareness" 
            icon="👥" 
            count={stageCounts.awareness} 
            color="bg-gradient-to-br from-violet-400 to-violet-600"
            widthClass="w-full"
          />

          <Connector />

          <FunnelStage 
            label="Stage 2" 
            name="Interest" 
            icon="🎯" 
            count={stageCounts.interest} 
            color="bg-gradient-to-br from-blue-400 to-blue-600"
            widthClass="w-[85%]"
          />

          <Connector />

          <FunnelStage 
            label="Stage 3" 
            name="Decision" 
            icon="✅" 
            count={stageCounts.decision} 
            color="bg-gradient-to-br from-emerald-400 to-emerald-600"
            widthClass="w-[70%]"
          />

          {/* Animated Particles Container */}
          <div className="absolute inset-0 pointer-events-none">
            <AnimatePresence>
              {particles.map((p) => (
                <ParticleComponent key={p.id} particle={p} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Helper component for Stats
 */
const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] text-white/60 uppercase font-semibold tracking-widest">{label}</span>
    <motion.span 
      key={value}
      initial={{ scale: 1.1, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-2xl md:text-3xl font-bold"
    >
      {value}
    </motion.span>
  </div>
);

/**
 * Funnel Stage Box component
 */
interface FunnelStageProps {
  label: string;
  name: string;
  icon: string;
  count: number;
  color: string;
  widthClass: string;
}

const FunnelStage = ({ label, name, icon, count, color, widthClass }: FunnelStageProps) => (
  <motion.div 
    whileHover={{ y: -2, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)' }}
    className={`${widthClass} h-[72px] bg-white rounded-xl shadow-lg flex items-center justify-between px-5 relative z-20`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 ${color} rounded-lg flex items-center justify-center text-xl shadow-inner`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{label}</span>
        <span className="text-sm font-bold text-gray-800 leading-none">{name}</span>
      </div>
    </div>
    <motion.span 
      key={count}
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      className="text-xl font-black text-gray-900"
    >
      {count}
    </motion.span>
  </motion.div>
);

/**
 * Simple line connector between stages
 */
const Connector = () => (
  <div className="w-0.5 h-full max-h-[16px] bg-white/30" />
);

/**
 * Individual Particle component for the falling animation
 */
// Explicitly define props to satisfy TypeScript's check when passing 'key' in a map
interface ParticleComponentProps {
  particle: Particle;
  key?: React.Key;
}

const ParticleComponent = ({ particle }: ParticleComponentProps) => {
  const getTop = () => {
    switch (particle.stage) {
      case 'awareness': return '40px';
      case 'interest': return '135px';
      case 'decision': return '230px';
      case 'exit': return '350px';
      default: return '0px';
    }
  };

  const getBg = () => {
    if (particle.status === 'dropped') return 'rgba(255,255,255,0.2)';
    switch (particle.stage) {
      case 'awareness': return 'white';
      case 'interest': return '#60a5fa';
      case 'decision': return '#34d399';
      default: return 'white';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 0, x: particle.startX }}
      animate={{ 
        opacity: particle.stage === 'exit' ? 0 : 1, 
        y: getTop(),
        x: particle.stage === 'exit' ? (particle.startX + (Math.random() * 40 - 20)) : 140, // Center relative to funnel logic
        backgroundColor: getBg(),
        scale: particle.stage === 'exit' ? 0.5 : 1
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        backgroundColor: { duration: 0.4 }
      }}
      style={{
        position: 'absolute',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        left: '50%',
        marginLeft: '-140px' // Offset base on parent sizing to roughly center
      }}
    />
  );
};
