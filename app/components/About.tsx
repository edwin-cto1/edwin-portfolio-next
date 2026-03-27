'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Technologies Mastered' },
  { value: 3, suffix: '', label: 'Industry Domains' },
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
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
            About Me
          </p>
          <h2
            id="about-heading"
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold gradient-text"
          >
            About
          </h2>
        </div>

        {/* Stats */}
        <div
          className="glass-card rounded-2xl mb-16 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/8"
          aria-label="Key statistics"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} enabled={statsVisible} />
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-text-dim leading-relaxed text-base sm:text-lg">
              Tech visionary with expertise spanning software architecture, AI/ML
              systems, and autonomous robotics. I bring a rare combination of
              deep technical knowledge and strategic leadership to every
              engagement — designing systems that are not just functional, but
              future-proof.
            </p>
            <p className="text-text-dim leading-relaxed text-base sm:text-lg">
              Currently driving innovation at{' '}
              <span className="text-electric-blue font-semibold">Comfrt</span>,
              Edwin has a rich background in Systems Engineering, having designed
              and built mission-critical platforms across defense, aerospace, and
              consumer technology sectors.
            </p>
            <p className="text-text-dim leading-relaxed text-base sm:text-lg">
              Fluent in English and Spanish, Edwin excels at bridging technical
              and business communication — whether mentoring engineering teams,
              presenting to executives, or collaborating with cross-functional
              stakeholders across the globe.
            </p>

            <div className="pt-4">
              <Link
                href="https://linkedin.com/in/csedwin"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-all duration-200 inline-flex items-center gap-2"
                aria-label="View Edwin Portillo's LinkedIn profile"
              >
                <span>View LinkedIn Profile</span>
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

          {/* Visual accent */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute w-72 h-72 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(139,0,255,0.08) 50%, transparent 70%)',
              }}
            />
            <div className="relative glass-card rounded-3xl p-8 space-y-4 max-w-sm w-full">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center font-orbitron font-bold text-white text-lg"
                  aria-hidden="true"
                >
                  EP
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Edwin Portillo</p>
                  <p className="text-text-dim text-sm">Software Architect</p>
                </div>
              </div>
              {[
                'Software Architecture',
                'AI / ML Engineering',
                'Cloud Infrastructure',
                'Systems Engineering',
                'Technical Leadership',
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full bg-electric-blue flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-text-dim text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
