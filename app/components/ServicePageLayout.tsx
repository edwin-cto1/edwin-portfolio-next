'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  EnterpriseArchIcon,
  AIMLIcon,
  SaaSIcon,
  CloudIcon,
  EcommerceIcon,
  CTOAdvisoryIcon,
} from './icons'

// ─── Types ───────────────────────────────────────────────────────────────────

export type ServiceIconId =
  | 'enterprise-architecture'
  | 'ai-machine-learning'
  | 'saas-development'
  | 'it-infrastructure-cloud'
  | 'ecommerce-solutions'
  | 'cto-advisory'

const ICONS: Record<ServiceIconId, React.ComponentType<{ size?: number; className?: string }>> = {
  'enterprise-architecture': EnterpriseArchIcon,
  'ai-machine-learning': AIMLIcon,
  'saas-development': SaaSIcon,
  'it-infrastructure-cloud': CloudIcon,
  'ecommerce-solutions': EcommerceIcon,
  'cto-advisory': CTOAdvisoryIcon,
}

export interface ProcessStep {
  name: string
  description: string
}

export interface Benefit {
  title: string
  description: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface EngagementModel {
  title: string
  description: string
  features: string[]
}

export interface ServicePageData {
  iconId: ServiceIconId
  heroTitle: string
  heroSubtitle: string
  intro: string
  whatWeDo: string[]
  deliverables: string[]
  technologies: string[]
  process: ProcessStep[]
  benefits: Benefit[]
  faq: FAQItem[]
  ctaHeading: string
  ctaSubheading: string
  engagementModels?: EngagementModel[]
}

// ─── Animation helper ────────────────────────────────────────────────────────

function FadeInSection({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), delay)
          observer.disconnect()
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────

function FAQAccordionItem({
  q,
  a,
  index,
}: {
  q: string
  a: string
  index: number
}) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const headerId = `faq-header-${index}`

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/8 hover:border-electric-blue/20 transition-colors duration-300">
      <button
        id={headerId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-white/[0.03] transition-colors"
      >
        <span className="font-space-grotesk font-semibold text-text-primary leading-snug">
          {q}
        </span>
        <span
          aria-hidden="true"
          className={`flex-shrink-0 mt-0.5 text-electric-blue transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`px-6 pb-5 text-text-dim leading-relaxed ${open ? 'block' : 'hidden'}`}
      >
        {a}
      </div>
    </div>
  )
}

// ─── Main Layout ─────────────────────────────────────────────────────────────

export default function ServicePageLayout({
  iconId,
  heroTitle,
  heroSubtitle,
  intro,
  whatWeDo,
  deliverables,
  technologies,
  process,
  benefits,
  faq,
  ctaHeading,
  ctaSubheading,
  engagementModels,
}: ServicePageData) {
  const Icon = ICONS[iconId]
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[56vh] flex items-center pt-28 pb-20 px-4 sm:px-6 overflow-hidden"
          aria-labelledby="service-hero-heading"
        >
          {/* Radial glow background */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-20"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(0,212,255,0.4) 0%, rgba(139,0,255,0.25) 45%, transparent 70%)',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            {/* Back link */}
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-text-dim hover:text-electric-blue transition-colors text-sm mb-10 group"
              aria-label="Back to Services section"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Services
            </Link>

            {/* Icon */}
            <div aria-hidden="true" className="mb-6">
              <Icon size={72} />
            </div>

            {/* Heading */}
            <h1
              id="service-hero-heading"
              className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-5 leading-tight"
            >
              {heroTitle}
            </h1>
            <p className="font-space-grotesk text-xl sm:text-2xl text-text-dim max-w-2xl leading-relaxed">
              {heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="gradient-bg text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-bg-primary"
              >
                Get Started
              </Link>
              <Link
                href="/#services"
                className="glass-card border border-white/20 text-text-primary font-semibold px-8 py-3 rounded-full hover:border-electric-blue/40 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-bg-primary"
              >
                All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── What We Do ────────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28 px-4 sm:px-6"
          aria-labelledby="what-we-do-heading"
        >
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
                    Our Approach
                  </p>
                  <h2
                    id="what-we-do-heading"
                    className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text mb-6"
                  >
                    What We Do
                  </h2>
                  <p className="text-text-dim text-lg leading-relaxed">{intro}</p>
                </div>
                <div>
                  <ul className="space-y-3" role="list">
                    {whatWeDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-dim">
                        <span
                          aria-hidden="true"
                          className="mt-1 flex-shrink-0 w-5 h-5 rounded-full gradient-bg flex items-center justify-center"
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path
                              d="M1 4l2.5 3L9 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Key Deliverables ──────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28 px-4 sm:px-6"
          style={{ background: 'rgba(8,8,32,0.5)' }}
          aria-labelledby="deliverables-heading"
        >
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-12">
                <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
                  What You Get
                </p>
                <h2
                  id="deliverables-heading"
                  className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
                >
                  Key Deliverables
                </h2>
              </div>
            </FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverables.map((item, i) => (
                <FadeInSection key={i} delay={i * 70}>
                  <div className="glass-card rounded-2xl px-6 py-5 border border-white/8 hover:border-electric-blue/30 hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center font-orbitron text-xs font-bold text-white"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-text-primary font-medium">{item}</span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technologies ──────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28 px-4 sm:px-6"
          aria-labelledby="technologies-heading"
        >
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-12">
                <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
                  Tech Stack
                </p>
                <h2
                  id="technologies-heading"
                  className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
                >
                  Technologies
                </h2>
              </div>
            </FadeInSection>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, i) => (
                <FadeInSection key={i} delay={i * 40}>
                  <span className="glass-card border border-white/8 hover:border-electric-blue/40 hover:text-electric-blue text-text-dim transition-all duration-300 rounded-full px-5 py-2 text-sm font-medium font-space-grotesk cursor-default block">
                    {tech}
                  </span>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28 px-4 sm:px-6"
          style={{ background: 'rgba(8,8,32,0.5)' }}
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
                  How We Work
                </p>
                <h2
                  id="process-heading"
                  className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
                >
                  Our Process
                </h2>
              </div>
            </FadeInSection>

            <div
              className={`grid gap-6 ${
                process.length === 5
                  ? 'sm:grid-cols-2 lg:grid-cols-5'
                  : process.length === 4
                  ? 'sm:grid-cols-2 lg:grid-cols-4'
                  : 'sm:grid-cols-3'
              }`}
              role="list"
            >
              {process.map((step, i) => (
                <FadeInSection key={i} delay={i * 80} className="h-full">
                  <div
                    role="listitem"
                    className="glass-card rounded-2xl p-6 border border-white/8 hover:border-electric-blue/30 transition-colors duration-300 h-full flex flex-col text-center group relative"
                  >
                    {/* Step number */}
                    <div
                      aria-hidden="true"
                      className="w-12 h-12 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center font-orbitron text-base font-bold text-white"
                    >
                      {i + 1}
                    </div>
                    <p className="font-orbitron text-xs text-electric-blue font-bold tracking-widest mb-2">
                      STEP {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-orbitron text-base font-bold gradient-text mb-2">
                      {step.name}
                    </h3>
                    <p className="text-text-dim text-sm leading-relaxed flex-1">
                      {step.description}
                    </p>
                    {/* Arrow between steps (desktop only) */}
                    {i < process.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center text-electric-blue/40"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28 px-4 sm:px-6"
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-12">
                <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
                  Why It Matters
                </p>
                <h2
                  id="benefits-heading"
                  className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
                >
                  The Benefits
                </h2>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="glass-card rounded-2xl p-8 border border-white/8 hover:border-electric-blue/30 hover:bg-white/[0.06] transition-all duration-300 group text-center relative overflow-hidden h-full">
                    {/* Large number watermark */}
                    <div
                      aria-hidden="true"
                      className="absolute top-3 right-4 font-orbitron text-7xl font-bold leading-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                      style={{
                        background: 'linear-gradient(135deg, #00D4FF, #8B00FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-orbitron text-xl font-bold gradient-text mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-text-dim leading-relaxed">{benefit.description}</p>
                    </div>
                    {/* Hover gradient overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(139,0,255,0.05))',
                      }}
                    />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Models (optional — CTO Advisory) ───────────────── */}
        {engagementModels && engagementModels.length > 0 && (
          <section
            className="py-20 sm:py-28 px-4 sm:px-6"
            style={{ background: 'rgba(8,8,32,0.5)' }}
            aria-labelledby="engagement-heading"
          >
            <div className="max-w-7xl mx-auto">
              <FadeInSection>
                <div className="text-center mb-12">
                  <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
                    Flexible Options
                  </p>
                  <h2
                    id="engagement-heading"
                    className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
                  >
                    Engagement Models
                  </h2>
                </div>
              </FadeInSection>
              <div className="grid md:grid-cols-3 gap-6">
                {engagementModels.map((model, i) => (
                  <FadeInSection key={i} delay={i * 100}>
                    <div className="glass-card rounded-2xl p-8 border border-white/8 hover:border-electric-blue/30 transition-colors duration-300 h-full flex flex-col">
                      <h3 className="font-orbitron text-lg font-bold gradient-text mb-2">
                        {model.title}
                      </h3>
                      <p className="text-text-dim text-sm mb-5">{model.description}</p>
                      <ul className="space-y-2 mt-auto" role="list">
                        {model.features.map((feat, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-text-dim text-sm"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex-shrink-0 text-electric-blue"
                            >
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path
                                  d="M2 6l2.5 3L10 2"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section
          className={`py-20 sm:py-28 px-4 sm:px-6 ${
            engagementModels && engagementModels.length > 0
              ? ''
              : 'bg-bg-secondary/50'
          }`}
          aria-labelledby="faq-heading"
          style={
            engagementModels && engagementModels.length > 0
              ? undefined
              : { background: 'rgba(8,8,32,0.5)' }
          }
        >
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-12">
                <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
                  Common Questions
                </p>
                <h2
                  id="faq-heading"
                  className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
                >
                  FAQ
                </h2>
              </div>
            </FadeInSection>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <FadeInSection key={i} delay={i * 70}>
                  <FAQAccordionItem q={item.q} a={item.a} index={i} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
          aria-labelledby="service-cta-heading"
        >
          {/* Gradient background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(139,0,255,0.07) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 border-y border-white/8 pointer-events-none"
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInSection>
              <h2
                id="service-cta-heading"
                className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4"
              >
                {ctaHeading}
              </h2>
              <p className="text-text-dim text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                {ctaSubheading}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="gradient-bg text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-bg-primary"
                >
                  Let&apos;s Talk
                </Link>
                <Link
                  href="/#services"
                  className="glass-card border border-white/20 text-text-primary font-semibold px-8 py-4 rounded-full hover:border-electric-blue/40 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-bg-primary"
                >
                  Explore All Services
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
