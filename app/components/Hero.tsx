'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import ParticleBackground from './ParticleBackground'

const TYPING_WORDS = [
  'Software Architect',
  'Tech Leader',
  'Systems Engineer',
  'AI/ML Engineer',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(TYPING_WORDS[0])
      return
    }

    const currentWord = TYPING_WORDS[wordIndex]
    const typingSpeed = isDeleting ? 60 : 100
    const pauseDuration = isDeleting ? 0 : 1800

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, wordIndex, isDeleting, prefersReducedMotion])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050510 0%, #080820 50%, #050510 100%)' }}
      />

      {/* Glow effects */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(139,0,255,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase mb-6 text-electric-blue">
          Tech Leader &amp; Architect
        </p>

        {/* Main heading */}
        <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-text mb-6 leading-none tracking-wide">
          EDWIN PORTILLO
        </h1>

        {/* Typing animation */}
        <div
          className="font-space-grotesk text-xl sm:text-2xl md:text-3xl text-text-dim mb-8 min-h-[2.5rem] flex items-center justify-center"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-electric-blue font-medium">{displayText}</span>
          <span
            className="ml-0.5 inline-block w-0.5 h-7 bg-electric-blue animate-pulse"
            aria-hidden="true"
          />
        </div>

        {/* Tagline */}
        <p className="font-space-grotesk text-base sm:text-lg text-text-dim max-w-2xl mx-auto mb-12 leading-relaxed">
          Building the technology infrastructure of tomorrow
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#services"
            className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-electric-blue/20 w-full sm:w-auto text-center"
          >
            View Services
          </Link>
          <Link
            href="https://linkedin.com/in/csedwin"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card border border-electric-blue/30 text-text-primary font-semibold px-8 py-3.5 rounded-full text-base hover:border-electric-blue/60 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto text-center"
          >
            LinkedIn Profile
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-text-dim text-xs font-medium tracking-wider uppercase">
          Scroll
        </span>
        <div className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-electric-blue rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
