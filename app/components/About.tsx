'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { EducationIcon } from './icons'

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Technologies' },
]

const expertiseTags = [
  'Enterprise Architecture',
  'AI/ML',
  'Cloud Infrastructure',
  'SaaS',
  'eCommerce',
  'Technical Leadership',
  'Team Building',
]

function useCountUp(target: number, duration = 1500, enabled = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) return

    const startTime = performance.now()
    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, enabled])

  return count
}

interface StatItemProps {
  stat: (typeof stats)[0]
  enabled: boolean
}

function StatItem({ stat, enabled }: StatItemProps) {
  const count = useCountUp(stat.value, 1500, enabled)

  return (
    <div className="text-center p-6">
      <p className="font-orbitron text-4xl sm:text-5xl font-black gradient-text mb-2">
        {count}
        {stat.suffix}
      </p>
      <p className="text-text-dim text-sm sm:text-base font-medium">{stat.label}</p>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6"
      aria-labelledby="about-heading"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(139,0,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Hero header */}
        <div className="text-center mb-16">
          <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
            Founder &amp; CTO, CTO1
          </p>
          <h2
            id="about-heading"
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold gradient-text"
          >
            Meet Edwin Portillo
          </h2>
        </div>

        {/* Stats */}
        <div
          className="glass-card rounded-2xl mb-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/8"
          aria-label="Key statistics"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} enabled={statsVisible} />
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-text-dim leading-relaxed text-base sm:text-lg">
              Edwin Portillo is a seasoned technology leader with over a decade
              of experience architecting enterprise-grade systems and leading
              high-performance engineering teams. As the founder of{' '}
              <span className="text-electric-blue font-semibold">CTO1</span>,
              Edwin brings deep technical expertise across AI/ML, cloud
              infrastructure, SaaS development, and eCommerce to organizations
              looking to transform their technology capabilities.
            </p>
            <p className="text-text-dim leading-relaxed text-base sm:text-lg">
              With a background in Systems Engineering and a career spanning
              startups to enterprise organizations, Edwin has a proven track
              record of delivering scalable solutions that drive business
              outcomes. His approach combines strategic vision with hands-on
              technical execution.
            </p>

            {/* Education */}
            <div className="glass-card rounded-xl p-4 flex items-center gap-3">
              <EducationIcon size={32} />
              <div>
                <p className="text-text-primary font-semibold text-sm">Education</p>
                <p className="text-text-dim text-sm">Systems Engineering</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="https://linkedin.com/in/csedwin"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-all duration-200 inline-flex items-center gap-2"
                aria-label="Connect with Edwin Portillo on LinkedIn"
              >
                <span>Connect on LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Profile card with expertise tags */}
          <div className="relative hidden lg:flex items-start justify-center">
            <div
              aria-hidden="true"
              className="absolute w-72 h-72 rounded-full top-0"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(139,0,255,0.08) 50%, transparent 70%)',
              }}
            />
            <div className="relative glass-card rounded-3xl p-8 space-y-4 max-w-sm w-full">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center font-orbitron font-bold text-white text-sm"
                  aria-hidden="true"
                >
                  EP
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Edwin Portillo</p>
                  <p className="text-text-dim text-sm">Founder &amp; CTO, CTO1</p>
                </div>
              </div>
              <p className="text-text-dim text-xs uppercase tracking-widest font-semibold mb-3">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {expertiseTags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-card rounded-full px-3 py-1 text-xs text-text-dim font-medium border border-electric-blue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
