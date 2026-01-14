"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X, Cloud, Landmark, Heart, Terminal, ShoppingBag, Shield, Leaf, Cpu } from "lucide-react"
import MegaMenu from "./MegaMenu"
import { MobileMegaMenu } from "@/components/ui/MobileMegaMenu"
import { industryItems } from "@/content/industries"

type IndustryIcon = typeof Cloud

export default function Navbar() {
  // Guard against React 18 event replay / pre-hydration interactions causing SSR/CSR markup divergence.
  const [hydrated, setHydrated] = useState(false)
  const [open, setOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [industriesLeft, setIndustriesLeft] = useState<number>(0)
  const menuRef = useRef<HTMLDivElement>(null)
  const industriesMenuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const industriesButtonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const industriesHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const featuredIndustries = industryItems.filter((i) => i.featured).sort((a, b) => a.title.localeCompare(b.title))

  const industryIconMap: Record<string, IndustryIcon> = {
    Cloud,
    Landmark,
    Heart,
    Terminal,
    ShoppingBag,
    Shield,
    Leaf,
    Cpu,
  }

  useEffect(() => {
    setHydrated(true)
  }, [])

  // Close on outside click for Expertise menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  // Close on outside click for Industries menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        industriesOpen &&
        industriesMenuRef.current &&
        industriesButtonRef.current &&
        !industriesMenuRef.current.contains(event.target as Node) &&
        !industriesButtonRef.current.contains(event.target as Node)
      ) {
        setIndustriesOpen(false)
      }
    }

    if (industriesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [industriesOpen])

  // Close on ESC key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (open) setOpen(false)
        if (industriesOpen) setIndustriesOpen(false)
      }
    }

    if (open || industriesOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open, industriesOpen])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      if (industriesHoverTimeoutRef.current) {
        clearTimeout(industriesHoverTimeoutRef.current)
      }
    }
  }, [])

  // Handle hover with delay to prevent closing when moving to menu (Expertise)
  const handleMouseEnter = () => {
    if (!hydrated) return
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setOpen(true)
  }

  const handleMouseLeave = () => {
    if (!hydrated) return
    // Small delay before closing to allow mouse to move to menu
    hoverTimeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  // Handle hover with delay to prevent closing when moving to menu (Industries)
  const handleIndustriesMouseEnter = () => {
    if (!hydrated) return
    if (industriesHoverTimeoutRef.current) {
      clearTimeout(industriesHoverTimeoutRef.current)
      industriesHoverTimeoutRef.current = null
    }
    setIndustriesOpen(true)
    updateIndustriesPosition()
  }

  const handleIndustriesMouseLeave = () => {
    if (!hydrated) return
    // Small delay before closing to allow mouse to move to menu
    industriesHoverTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false)
    }, 150)
  }

  const updateIndustriesPosition = () => {
    if (!industriesButtonRef.current || !navRef.current) return
    const buttonRect = industriesButtonRef.current.getBoundingClientRect()
    const navRect = navRef.current.getBoundingClientRect()
    const left = buttonRect.left - navRect.left
    setIndustriesLeft(left)
  }

  useEffect(() => {
    updateIndustriesPosition()
    const handleResize = () => updateIndustriesPosition()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const safeOpen = hydrated ? open : false
  const safeIndustriesOpen = hydrated ? industriesOpen : false
  const safeMobileOpen = hydrated ? mobileOpen : false

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <nav className="container-width relative" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              GTMstack<span className="text-brand-600 dark:text-brand-400">.pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => hydrated && setOpen(!open)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded"
                aria-expanded={safeOpen}
                aria-haspopup="true"
              >
                Expertise <ChevronDown className={`h-4 w-4 transition-transform ${safeOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded"
            >
              Case Studies
            </Link>
            <div className="relative">
              <button
                ref={industriesButtonRef}
                onClick={() => hydrated && setIndustriesOpen(!industriesOpen)}
                onMouseEnter={handleIndustriesMouseEnter}
                onMouseLeave={handleIndustriesMouseLeave}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded"
                aria-expanded={safeIndustriesOpen}
                aria-haspopup="true"
              >
                Industries <ChevronDown className={`h-4 w-4 transition-transform ${safeIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="btn bg-brand-500 text-white hover:bg-brand-400 px-4 py-2.5 text-sm rounded-full shadow-glow hover:shadow-glow-violet focus-visible:ring-brand-500"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => hydrated && setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {safeMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

          {/* Mobile Menu */}
      <MobileMegaMenu isOpen={safeMobileOpen} onClose={() => setMobileOpen(false)} />
      
      {/* Desktop MegaMenu - positioned relative to nav container */}
      {safeOpen && (
        <div 
          ref={menuRef}
          className="absolute left-0 right-0 top-full pt-2 hidden md:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container-width">
            <MegaMenu />
          </div>
        </div>
      )}

      {/* Desktop Industries Dropdown - positioned relative to nav container */}
      {safeIndustriesOpen && (
        <div
          ref={industriesMenuRef}
          className="absolute top-full pt-2 hidden md:block"
          onMouseEnter={handleIndustriesMouseEnter}
          onMouseLeave={handleIndustriesMouseLeave}
          style={{ left: industriesLeft }}
        >
          <div className="container-width">
            <div className="max-w-sm">
              <div className="rounded-xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/40 overflow-hidden backdrop-blur-xl">
                <div className="p-3">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
                    Featured industries
                  </div>
                  <div className="divide-y divide-white/5">
                    {featuredIndustries.map((industry) => {
                      const Icon = industry.icon ? industryIconMap[industry.icon] ?? Cloud : Cloud
                      return (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          className="flex items-center gap-3 py-2.5 px-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-brand-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{industry.title}</p>
                            <p className="text-xs text-slate-400 line-clamp-1">{industry.description}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className="border-t border-white/10 bg-slate-900/80">
                  <Link
                    href="/industries"
                    className="flex items-center justify-between gap-2 px-3 py-3 text-sm font-medium text-brand-200 hover:text-white transition-colors"
                  >
                    View all industries
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
