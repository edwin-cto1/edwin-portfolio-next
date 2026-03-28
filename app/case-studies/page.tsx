'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Metric {
  label: string
  value: string
  prefix?: string
  suffix?: string
  numeric: number
}

interface CaseStudy {
  id: string
  tag: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string
  metrics: Metric[]
  technologies: string[]
  services: string[]
  serviceLinks: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-saas',
    tag: 'FinTech SaaS',
    client: 'Series A Fintech Startup (Anonymous)',
    industry: 'Financial Technology',
    challenge:
      'A rapidly growing fintech startup had built their payments platform on a monolithic architecture. At 1,000 concurrent users, response times degraded sharply and the system began dropping transactions during peak periods. Their infrastructure costs were climbing 40% quarter-over-quarter with no end in sight, and the engineering team was spending 60% of their time on reliability incidents rather than new features.',
    solution:
      'CTO1 conducted a comprehensive architecture audit and designed a phased migration from the monolith to a domain-driven microservices architecture. We redesigned the database schema to eliminate cross-service joins, implemented Kubernetes orchestration with horizontal pod autoscaling, introduced an event streaming layer via Apache Kafka for async processing, and established a service mesh for observability and traffic management. The migration was executed in six zero-downtime phases over four months.',
    results:
      'The new architecture handled 10,000 concurrent users with sub-200ms P99 response times — 10x the previous capacity. Infrastructure costs dropped 40% despite the scale increase, achieved through right-sized services and spot instance utilization. The engineering team reduced time on reliability incidents from 60% to under 10%, freeing capacity for product development.',
    metrics: [
      { label: 'Scale Increase', value: '10x', numeric: 10, suffix: 'x' },
      { label: 'Infrastructure Cost Reduction', value: '40%', numeric: 40, suffix: '%' },
      { label: 'Uptime Achieved', value: '99.9%', numeric: 99.9, suffix: '%' },
      { label: 'Incident Time Reduced', value: '83%', numeric: 83, suffix: '%' },
    ],
    technologies: ['Kubernetes', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Istio', 'AWS EKS', 'Terraform'],
    services: ['Enterprise Architecture', 'IT Infrastructure & Cloud'],
    serviceLinks: ['/services/enterprise-architecture', '/services/it-infrastructure-cloud'],
  },
  {
    id: 'ecommerce-brand',
    tag: 'eCommerce',
    client: 'D2C Fashion Brand — $5M ARR',
    industry: 'Direct-to-Consumer Retail',
    challenge:
      'A fast-growing D2C fashion brand was leaving significant revenue on the table due to technical underperformance. Their Shopify store was converting at 1.2% — well below the 2.5% industry average — with average page load times of 5.8 seconds on mobile. Their product discovery was poor, with no search functionality worth using, and personalization was nonexistent. Customer service costs were high due to repetitive inquiries that no automation was handling.',
    solution:
      'CTO1 led a full headless commerce rebuild, decoupling the Shopify backend from a new Next.js storefront. We implemented Algolia for sub-100ms product search, built a personalization engine that adapted product recommendations based on browsing and purchase history, and integrated a lightweight AI chatbot for customer service. The new stack was deployed on Vercel\'s edge network, dramatically improving global load times. A/B testing infrastructure was added to enable continuous conversion optimization.',
    results:
      'Conversion rate improved from 1.2% to 3.1% — a 158% improvement — within 90 days of launch. Page load time dropped to 2.1 seconds on mobile (LCP). Revenue increased 34% in the first full quarter post-launch on flat traffic. Customer service inquiry volume dropped 28% due to chatbot deflection. The engineering team can now ship conversion experiments weekly rather than monthly.',
    metrics: [
      { label: 'Conversion Rate Lift', value: '158%', numeric: 158, suffix: '%' },
      { label: 'Page Load Speed', value: '2.1s', numeric: 2.1, suffix: 's' },
      { label: 'Revenue Increase', value: '34%', numeric: 34, suffix: '%' },
      { label: 'Support Inquiry Reduction', value: '28%', numeric: 28, suffix: '%' },
    ],
    technologies: ['Next.js', 'Shopify', 'Algolia', 'Vercel', 'Klaviyo', 'TypeScript', 'Tailwind CSS'],
    services: ['eCommerce Solutions', 'SaaS Development'],
    serviceLinks: ['/services/ecommerce-solutions', '/services/saas-development'],
  },
  {
    id: 'enterprise-ai',
    tag: 'Enterprise AI',
    client: 'Mid-Market Logistics Company',
    industry: 'Supply Chain & Logistics',
    challenge:
      'A logistics company managing last-mile delivery for 200+ retail clients was using manual route optimization — dispatchers building routes by hand in spreadsheets each morning. The process took 3–4 hours daily and produced routes that were an estimated 20–25% longer than optimal. At their scale, this inefficiency translated to approximately $2M per year in excess fuel, driver time, and vehicle wear. They had tried two off-the-shelf route optimization tools that couldn\'t accommodate their complex constraint set: time windows, vehicle capacity, driver certifications, and client-specific SLAs.',
    solution:
      'CTO1 designed and built a custom machine learning route optimization system trained on 18 months of the company\'s historical delivery data. The model incorporated vehicle constraints, driver skill sets, time window requirements, and real-time traffic inputs. We built a dispatcher dashboard that generated optimal routes in under 90 seconds and integrated the system with their existing ERP via a purpose-built API layer. The system was deployed on-premises due to data sensitivity requirements.',
    results:
      'Route efficiency improved by 23% versus the previous manual process. The company achieved $1.8M in annual savings from reduced fuel consumption, fewer overtime hours, and lower vehicle maintenance costs. The 3–4 hour morning dispatch process was reduced to under 10 minutes. The system was fully deployed and in production within 90 days of project kick-off.',
    metrics: [
      { label: 'Route Efficiency Gain', value: '23%', numeric: 23, suffix: '%' },
      { label: 'Annual Savings', value: '$1.8M', numeric: 1.8, prefix: '$', suffix: 'M' },
      { label: 'Dispatch Time Reduction', value: '96%', numeric: 96, suffix: '%' },
      { label: 'Deployment Timeline', value: '90 days', numeric: 90, suffix: ' days' },
    ],
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'React'],
    services: ['AI & Machine Learning', 'Enterprise Architecture'],
    serviceLinks: ['/services/ai-machine-learning', '/services/enterprise-architecture'],
  },
]

function AnimatedCounter({ value, suffix, prefix }: { value: string; suffix?: string; prefix?: string; numeric: number }) {
  return (
    <span>
      {prefix}
      {value.replace(prefix ?? '', '').replace(suffix ?? '', '')}
      {suffix}
    </span>
  )
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text-dim list-none">
              <li>
                <Link href="/" className="hover:text-electric-blue transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-text-dim/50">/</li>
              <li className="text-text-primary" aria-current="page">
                Case Studies
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-electric-blue font-space-grotesk text-sm uppercase tracking-widest mb-4">
              Results
            </p>
            <h1 className="font-orbitron text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Proven{' '}
              <span className="gradient-text">Impact</span>
            </h1>
            <p className="text-text-dim font-space-grotesk text-lg leading-relaxed">
              Real results from real engagements. See how CTO1 has helped startups and enterprises
              solve complex technical challenges and drive measurable business outcomes.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="glass-card rounded-3xl overflow-hidden"
              aria-labelledby={`${study.id}-heading`}
            >
              {/* Case Study Header */}
              <div className="p-8 sm:p-10 border-b border-white/8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block gradient-bg text-white text-xs font-semibold px-3 py-1 rounded-full font-space-grotesk uppercase tracking-wider mb-3">
                      {study.tag}
                    </span>
                    <h2
                      id={`${study.id}-heading`}
                      className="font-orbitron text-2xl sm:text-3xl font-bold text-text-primary"
                    >
                      {study.client}
                    </h2>
                    <p className="text-text-dim font-space-grotesk text-sm mt-1">{study.industry}</p>
                  </div>
                  <span className="font-orbitron text-5xl font-bold text-white/5 select-none hidden sm:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white/3 rounded-xl p-4 text-center">
                      <div className="font-orbitron text-2xl sm:text-3xl font-bold gradient-text mb-1">
                        <AnimatedCounter {...metric} />
                      </div>
                      <div className="text-text-dim font-space-grotesk text-xs leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge / Solution / Results */}
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/8">
                <div className="p-8">
                  <h3 className="font-orbitron text-sm font-bold text-electric-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span
                      className="w-5 h-5 rounded-full border border-electric-blue/50 flex items-center justify-center text-xs"
                      aria-hidden="true"
                    >
                      !
                    </span>
                    Challenge
                  </h3>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div className="p-8">
                  <h3 className="font-orbitron text-sm font-bold text-electric-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span
                      className="w-5 h-5 rounded-full border border-electric-blue/50 flex items-center justify-center text-xs"
                      aria-hidden="true"
                    >
                      →
                    </span>
                    Solution
                  </h3>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                <div className="p-8">
                  <h3 className="font-orbitron text-sm font-bold text-electric-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span
                      className="w-5 h-5 rounded-full border border-electric-blue/50 flex items-center justify-center text-xs"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    Results
                  </h3>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                    {study.results}
                  </p>
                </div>
              </div>

              {/* Footer: Tech + Services */}
              <div className="p-8 border-t border-white/8 flex flex-wrap gap-8">
                <div>
                  <p className="text-text-dim font-space-grotesk text-xs uppercase tracking-wider mb-2">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/5 border border-white/10 text-text-dim font-space-grotesk text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-text-dim font-space-grotesk text-xs uppercase tracking-wider mb-2">
                    CTO1 Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, i) => (
                      <Link
                        key={service}
                        href={study.serviceLinks[i]}
                        className="border border-electric-blue/40 text-electric-blue font-space-grotesk text-xs px-3 py-1 rounded-full hover:bg-electric-blue/10 transition-colors"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center mt-24">
          <div className="glass-card rounded-2xl p-10">
            <h2 className="font-orbitron text-2xl font-bold text-text-primary mb-4">
              Start Your Success Story
            </h2>
            <p className="text-text-dim font-space-grotesk mb-8">
              Every great outcome starts with a conversation. Tell us about your technical
              challenge and let's build a plan to solve it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="gradient-bg text-white font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                Start Your Project
              </Link>
              <Link
                href="/services/enterprise-architecture"
                className="glass-card border border-white/20 text-text-primary font-semibold px-8 py-3 rounded-full text-sm hover:border-electric-blue/40 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
