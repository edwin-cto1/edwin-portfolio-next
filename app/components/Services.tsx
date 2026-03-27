'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 'enterprise-architecture',
    icon: '🏗️',
    title: 'Enterprise Architecture',
    description:
      'Designing scalable, resilient systems that power Fortune 500 operations. From microservices to monolith migrations.',
  },
  {
    id: 'ai-machine-learning',
    icon: '🤖',
    title: 'AI & Machine Learning',
    description:
      'Custom ML models, intelligent automation, and AI-powered decision systems that drive measurable ROI.',
  },
  {
    id: 'saas-development',
    icon: '💻',
    title: 'SaaS Development',
    description:
      'End-to-end SaaS platform engineering — from MVP to enterprise-grade multi-tenant architecture.',
  },
  {
    id: 'it-infrastructure-cloud',
    icon: '☁️',
    title: 'IT Infrastructure & Cloud',
    description:
      'AWS, Azure, GCP architecture and DevOps pipelines. Zero-downtime migrations and infrastructure modernization.',
  },
  {
    id: 'ecommerce-solutions',
    icon: '🛒',
    title: 'eCommerce Solutions',
    description:
      'High-performance eCommerce platforms built for conversion. Headless commerce, payment integrations, and scale.',
  },
  {
    id: 'cto-advisory',
    icon: '🚀',
    title: 'CTO Advisory',
    description:
      'Fractional CTO services for startups and enterprises. Technology strategy, team building, and engineering culture.',
  },
]

interface ServiceCardProps {
  service: (typeof services)[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), index * 100)
          observer.disconnect()
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      role="article"
      aria-labelledby={`service-title-${service.id}`}
      className={`glass-card rounded-2xl p-6 sm:p-8 hover:border-electric-blue/30 hover:bg-white/6 transition-all duration-500 group cursor-default ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, border-color 0.3s, background-color 0.3s`,
      }}
    >
      <div
        className="text-3xl mb-4 inline-block"
        aria-hidden="true"
      >
        {service.icon}
      </div>
      <h3
        id={`service-title-${service.id}`}
        className="font-orbitron text-lg font-bold text-text-primary mb-3 group-hover:gradient-text transition-colors"
      >
        {service.title}
      </h3>
      <p className="text-text-dim leading-relaxed text-sm sm:text-base">
        {service.description}
      </p>
      {/* Gradient border on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,0,255,0.06))',
        }}
      />
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
            What I Do
          </p>
          <h2
            id="services-heading"
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            Services
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto text-base sm:text-lg">
            Full-spectrum technology leadership from architecture to deployment.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
