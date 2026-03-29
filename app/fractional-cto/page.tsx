import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { RoadmapIcon, BlueprintIcon, TeamIcon, SecurityIcon, InvestorIcon, PartnerIcon } from '../components/icons'

export const metadata: Metadata = {
  title: 'Fractional CTO Services | CTO1 — Expert Tech Leadership for Startups',
  description:
    'Fractional CTO services for startups and growing companies. Get senior technical leadership from $3K/month — strategy, architecture, team building, and investor readiness. No full-time hire needed.',
  keywords: [
    'fractional cto',
    'fractional cto services',
    'fractional cto for startups',
    'part time cto',
    'startup cto services',
    'hire fractional cto',
    'cto consulting',
  ],
  alternates: { canonical: '/fractional-cto' },
  openGraph: {
    title: 'Fractional CTO Services | CTO1',
    description:
      'Senior technical leadership for startups — strategy, architecture, team building from $3K/month.',
    url: 'https://cto1.tech/fractional-cto',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fractional CTO Services — CTO1' }],
  },
}

const included = [
  {
    Icon: RoadmapIcon,
    title: 'Technology Roadmap',
    description:
      'A prioritized 12–24 month technology roadmap aligned to your business goals, updated quarterly as your strategy evolves.',
  },
  {
    Icon: BlueprintIcon,
    title: 'Architecture Review & Design',
    description:
      'Ongoing architecture oversight: reviewing major decisions, guiding your team, and ensuring your system can scale.',
  },
  {
    Icon: TeamIcon,
    title: 'Engineering Team Leadership',
    description:
      'Coaching your engineers, improving hiring standards, implementing engineering processes, and building team culture.',
  },
  {
    Icon: SecurityIcon,
    title: 'Security & Compliance',
    description:
      'Identifying security risks, guiding SOC 2 / GDPR readiness, and ensuring your architecture meets compliance requirements.',
  },
  {
    Icon: InvestorIcon,
    title: 'Investor & Board Readiness',
    description:
      'Technical due diligence preparation, investor Q&A support, and translating your technology story for non-technical stakeholders.',
  },
  {
    Icon: PartnerIcon,
    title: 'Vendor & Partner Evaluation',
    description:
      'Evaluating technology vendors, cloud providers, and technical partners with an objective, senior perspective.',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$3,000',
    period: '/month',
    hours: '10 hours/month',
    description: 'Strategic guidance for early-stage startups that need senior direction without heavy involvement.',
    features: [
      '10 dedicated CTO hours per month',
      'Monthly 90-min strategy session',
      'Technology roadmap creation',
      'Async Q&A and document reviews',
      'Architecture guidance',
      'Investor readiness support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$7,000',
    period: '/month',
    hours: '25 hours/month',
    description: 'Hands-on leadership for companies in active growth — shipping features, scaling teams, and handling complexity.',
    features: [
      '25 dedicated CTO hours per month',
      'Weekly check-ins with engineering team',
      'Hands-on architecture design',
      'Engineering process implementation',
      'Team coaching and hiring support',
      'On-call availability for critical decisions',
      'Quarterly board/investor presentations',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    hours: 'Dedicated availability',
    description: 'Full embedded CTO presence for companies at scale or undergoing major technical transformation.',
    features: [
      'Dedicated availability (20–40+ hrs/month)',
      'Embedded engineering team leadership',
      'Major architecture transformation',
      'Full technology strategy ownership',
      'Executive team collaboration',
      'Custom engagement structure',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
]

const faqs = [
  {
    q: 'What is the difference between a fractional CTO and a CTO consultant?',
    a: 'A fractional CTO takes on an ongoing leadership role within your company — they attend meetings, guide your team, and make or influence decisions as if they were a full-time executive, just on a part-time basis. A consultant typically comes in for a specific project or assessment with a defined deliverable. Our fractional CTO service is the former — embedded, ongoing leadership.',
  },
  {
    q: 'Do you work with non-technical founders?',
    a: 'Absolutely — and non-technical founders are often our best clients. We serve as your technical co-founder equivalent: vetting and managing contractors, ensuring code quality, reviewing vendor proposals, and translating technical realities into business decisions. We make sure you\'re never at a disadvantage in technical conversations.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We have deep experience in SaaS, fintech, eCommerce, logistics, and enterprise software. Our approach is adaptable — the fundamentals of great architecture, engineering culture, and technical strategy apply across industries.',
  },
  {
    q: 'How quickly can an engagement start?',
    a: 'We can typically onboard a new client within 1–2 weeks. We start with a technical audit session to understand your current state, followed by an alignment meeting to define goals and success metrics. Most clients have a completed technology roadmap within the first 30 days.',
  },
  {
    q: 'Can a fractional CTO help us prepare for a funding round?',
    a: 'Yes — and this is one of the highest-ROI applications of fractional CTO services. We help you clean up technical debt before due diligence, prepare architecture documentation that investors expect, and coach you through technical Q&A. Investors at Seed through Series B consistently scrutinize technical foundations.',
  },
  {
    q: 'What happens when we\'re ready to hire a full-time CTO?',
    a: 'We help you make that transition successfully. We can define the ideal CTO profile for your stage, participate in the interview process, and help onboard your new hire. Our goal is always to build capability within your company, not dependency on us.',
  },
]

export default function FractionalCTOPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fractional CTO Services',
    provider: {
      '@type': 'Organization',
      name: 'CTO1',
      url: 'https://cto1.tech',
    },
    description:
      'Fractional CTO services providing senior technical leadership for startups and growing companies.',
    url: 'https://cto1.tech/fractional-cto',
    areaServed: 'Worldwide',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '3000',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: 3000, priceCurrency: 'USD', unitText: 'month' },
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: '7000',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: 7000, priceCurrency: 'USD', unitText: 'month' },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-bg-primary">
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-electric-blue font-space-grotesk text-sm uppercase tracking-widest mb-4">
              Fractional CTO Services
            </p>
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Fractional CTO Services for Startups{' '}
              <span className="gradient-text">& Growing Companies</span>
            </h1>
            <p className="text-text-dim font-space-grotesk text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Get senior technical leadership that moves your company forward — without the $350K
              full-time CTO price tag. Strategy, architecture, team building, and investor
              readiness, all in one engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="gradient-bg text-white font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/blog/what-is-a-fractional-cto"
                className="glass-card border border-white/20 text-text-primary font-semibold px-8 py-4 rounded-full text-base hover:border-electric-blue/40 transition-all"
              >
                What Is a Fractional CTO?
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Numbers */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/8" aria-label="Impact statistics">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Companies Advised' },
              { value: '$200M+', label: 'Client Revenue Impacted' },
              { value: '10x', label: 'Average Scale Achieved' },
              { value: '30 days', label: 'Average Time to Value' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-orbitron text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-text-dim font-space-grotesk text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="included-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2
                id="included-heading"
                className="font-orbitron text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              >
                What's Included in Every Engagement
              </h2>
              <p className="text-text-dim font-space-grotesk text-lg max-w-2xl mx-auto">
                Every fractional CTO engagement comes with a comprehensive suite of technical
                leadership capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-6">
                  <div className="mb-4">
                    <item.Icon size={28} />
                  </div>
                  <h3 className="font-orbitron text-base font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary"
          aria-labelledby="pricing-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2
                id="pricing-heading"
                className="font-orbitron text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              >
                Transparent Pricing
              </h2>
              <p className="text-text-dim font-space-grotesk text-lg max-w-2xl mx-auto">
                Choose the engagement level that fits your stage and needs. No hidden fees, no
                long-term lock-in.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 flex flex-col ${
                    tier.highlighted
                      ? 'gradient-bg text-white'
                      : 'glass-card'
                  }`}
                >
                  <div className="mb-6">
                    <p
                      className={`font-space-grotesk text-sm uppercase tracking-wider mb-2 ${
                        tier.highlighted ? 'text-white/80' : 'text-electric-blue'
                      }`}
                    >
                      {tier.hours}
                    </p>
                    <h3
                      className={`font-orbitron text-2xl font-bold mb-1 ${
                        tier.highlighted ? 'text-white' : 'text-text-primary'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span
                        className={`font-orbitron text-4xl font-bold ${
                          tier.highlighted ? 'text-white' : 'gradient-text'
                        }`}
                      >
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span
                          className={`font-space-grotesk text-sm ${
                            tier.highlighted ? 'text-white/70' : 'text-text-dim'
                          }`}
                        >
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p
                      className={`font-space-grotesk text-sm leading-relaxed ${
                        tier.highlighted ? 'text-white/80' : 'text-text-dim'
                      }`}
                    >
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 list-none">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className={`font-space-grotesk text-sm flex items-start gap-2 ${
                          tier.highlighted ? 'text-white/90' : 'text-text-dim'
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            tier.highlighted ? 'text-white' : 'text-electric-blue'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className={`text-center font-semibold px-6 py-3 rounded-full text-sm transition-all ${
                      tier.highlighted
                        ? 'bg-white text-bg-primary hover:bg-white/90'
                        : 'gradient-bg text-white hover:opacity-90'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className="font-orbitron text-3xl font-bold text-text-primary mb-4"
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass-card rounded-xl p-6">
                  <h3 className="font-orbitron text-base font-bold text-text-primary mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-10 text-center">
            <h2 className="font-orbitron text-3xl font-bold text-text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-dim font-space-grotesk text-lg mb-8">
              Schedule a free 30-minute consultation. We'll assess your needs and recommend the
              right engagement structure for your stage.
            </p>
            <Link
              href="/#contact"
              className="gradient-bg text-white font-semibold px-10 py-4 rounded-full text-base hover:opacity-90 transition-opacity inline-block"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
