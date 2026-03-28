import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'AI & Machine Learning Consulting Services | CTO1',
  description:
    'AI and machine learning consulting for businesses ready to operationalize AI. Custom model development, MLOps, AI strategy, and ROI-focused implementation. Book a free assessment.',
  keywords: [
    'ai ml consulting',
    'ai consulting services',
    'machine learning consulting',
    'ai strategy consulting',
    'mlops consulting',
    'custom ai development',
    'ai implementation',
  ],
  alternates: { canonical: '/ai-ml-consulting' },
  openGraph: {
    title: 'AI & Machine Learning Consulting Services | CTO1',
    description:
      'Custom AI and ML consulting — strategy through deployment. ROI-focused implementation for startups and enterprises.',
    url: 'https://cto1.tech/ai-ml-consulting',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI & ML Consulting — CTO1' }],
  },
}

const useCases = [
  {
    category: 'Operations',
    cases: [
      { title: 'Predictive Maintenance', description: 'Predict equipment failures before they happen — reducing downtime and maintenance costs by 20–40%.' },
      { title: 'Process Automation', description: 'Automate document processing, data extraction, and routine decisions with ML models trained on your workflows.' },
      { title: 'Demand Forecasting', description: 'Improve inventory accuracy and reduce stockouts with ML models trained on your historical data and external signals.' },
    ],
  },
  {
    category: 'Customer Experience',
    cases: [
      { title: 'Personalization Engines', description: 'Serve individualized product recommendations, content, and pricing that drive conversion and retention.' },
      { title: 'Churn Prediction', description: 'Identify at-risk customers weeks before they leave — with enough time to intervene effectively.' },
      { title: 'Intelligent Support', description: 'Deploy AI assistants that resolve 60–80% of routine support inquiries without human involvement.' },
    ],
  },
  {
    category: 'Revenue & Growth',
    cases: [
      { title: 'Lead Scoring', description: 'Rank leads by conversion probability so your sales team focuses on the right opportunities at the right time.' },
      { title: 'Dynamic Pricing', description: 'Optimize pricing in real time based on demand signals, competitor pricing, and customer segments.' },
      { title: 'Fraud Detection', description: 'Identify fraudulent transactions and behavior patterns with ML models that adapt to new attack vectors.' },
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'AI Readiness Assessment',
    description:
      'We evaluate your data infrastructure, identify your highest-value AI opportunities, and assess organizational readiness. You receive a prioritized AI roadmap with ROI estimates for each initiative.',
    duration: '2–4 weeks',
  },
  {
    step: '02',
    title: 'Data Foundation',
    description:
      'Many AI projects fail because of data quality, not models. We assess your data, clean and structure it for ML use cases, and build the pipelines needed for ongoing model training.',
    duration: '4–8 weeks',
  },
  {
    step: '03',
    title: 'Pilot Development',
    description:
      'We build and deploy a targeted ML solution for your highest-priority use case. Focus is on getting something real into production quickly, measuring results, and validating the approach.',
    duration: '6–8 weeks',
  },
  {
    step: '04',
    title: 'MLOps & Production',
    description:
      'We build the operational infrastructure that keeps your models performing over time: monitoring, retraining pipelines, drift detection, and integration with your existing systems.',
    duration: '4–6 weeks',
  },
  {
    step: '05',
    title: 'Scale & Expand',
    description:
      'Using the data infrastructure and operational patterns established in the pilot, we expand your AI capabilities across additional use cases and business units.',
    duration: 'Ongoing',
  },
]

const faqs = [
  {
    q: 'Do we need a large dataset to start with AI?',
    a: 'Not necessarily. Some ML approaches (transfer learning, few-shot models) work well with limited data. For others, we can help you identify data you already have that you may not be fully leveraging, or design a data collection strategy. Our AI Readiness Assessment always starts with understanding what you have.',
  },
  {
    q: 'How long does it take to see ROI from AI?',
    a: 'For automation-focused projects (chatbots, document processing), expect measurable ROI within 60–90 days of deployment. For predictive projects (churn, demand forecasting), allow 3–6 months for model validation and integration. We set clear expectations at the start of every engagement.',
  },
  {
    q: 'Will our team be able to maintain AI systems after you\'re done?',
    a: 'Yes — that\'s a core deliverable of every engagement. We build with your team\'s skill set in mind, provide comprehensive documentation, and offer training so your engineers can maintain, monitor, and retrain models independently. We aim to leave your organization more capable, not dependent on us.',
  },
  {
    q: 'How do you handle data privacy and security?',
    a: 'Data privacy is built into our approach from the start. We assess your regulatory requirements (GDPR, CCPA, HIPAA, etc.) during discovery, implement appropriate data handling controls, and can work with privacy-preserving techniques like federated learning and differential privacy where required.',
  },
  {
    q: 'What\'s the difference between your AI consulting and just using ChatGPT APIs?',
    a: 'LLM APIs are one tool in a much larger toolkit. Our consulting covers the full AI landscape — classical ML, deep learning, computer vision, NLP, and LLM-based systems — and focuses on picking the right tool for each problem. Many high-ROI AI applications don\'t use LLMs at all. We choose based on your specific problem, not what\'s trending.',
  },
]

export default function AiMlConsultingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI & Machine Learning Consulting',
    provider: {
      '@type': 'Organization',
      name: 'CTO1',
      url: 'https://cto1.tech',
    },
    description:
      'AI and machine learning consulting services — strategy, custom model development, MLOps, and ROI-focused implementation.',
    url: 'https://cto1.tech/ai-ml-consulting',
    areaServed: 'Worldwide',
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
              AI & Machine Learning Consulting
            </p>
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              AI & Machine Learning{' '}
              <span className="gradient-text">Consulting Services</span>
            </h1>
            <p className="text-text-dim font-space-grotesk text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              We help businesses move beyond AI hype to AI ROI. From strategy and data foundations
              to custom model development and production MLOps — we build AI that actually works
              in the real world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="gradient-bg text-white font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity"
              >
                Get a Free AI Assessment
              </Link>
              <Link
                href="/services/ai-machine-learning"
                className="glass-card border border-white/20 text-text-primary font-semibold px-8 py-4 rounded-full text-base hover:border-electric-blue/40 transition-all"
              >
                View Full AI Services
              </Link>
            </div>
          </div>
        </section>

        {/* ROI Proof Points */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/8" aria-label="AI impact statistics">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '$1.8M', label: 'Logistics savings delivered' },
              { value: '90 days', label: 'Average time to production' },
              { value: '60–80%', label: 'Support automation rate' },
              { value: '23%', label: 'Average efficiency gain' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-orbitron text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-text-dim font-space-grotesk text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="usecases-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2
                id="usecases-heading"
                className="font-orbitron text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              >
                AI Use Cases That Drive Real ROI
              </h2>
              <p className="text-text-dim font-space-grotesk text-lg max-w-2xl mx-auto">
                We don't implement AI for its own sake. Every engagement starts by identifying the
                specific use cases that will deliver measurable business value for your company.
              </p>
            </div>
            <div className="space-y-10">
              {useCases.map((category) => (
                <div key={category.category}>
                  <h3 className="font-orbitron text-sm text-electric-blue uppercase tracking-widest mb-5">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {category.cases.map((useCase) => (
                      <div key={useCase.title} className="glass-card rounded-2xl p-6">
                        <h4 className="font-orbitron text-base font-bold text-text-primary mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2
                id="process-heading"
                className="font-orbitron text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              >
                Our AI Consulting Process
              </h2>
              <p className="text-text-dim font-space-grotesk text-lg max-w-2xl mx-auto">
                A structured, phased approach that takes you from AI readiness to production
                deployment — with clear milestones and measurable outcomes at every stage.
              </p>
            </div>
            <div className="space-y-6">
              {process.map((step, i) => (
                <div key={step.step} className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="font-orbitron text-4xl font-bold text-white/10 flex-shrink-0 w-16 text-center">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-orbitron text-lg font-bold text-text-primary">
                        {step.title}
                      </h3>
                      <span className="text-xs font-space-grotesk text-electric-blue border border-electric-blue/30 px-3 py-0.5 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden sm:flex flex-shrink-0 items-center self-center" aria-hidden="true">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#00D4FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
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

        {/* Case Study Callout */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="text-electric-blue font-space-grotesk text-xs uppercase tracking-widest mb-2">
                Case Study
              </p>
              <h3 className="font-orbitron text-xl font-bold text-text-primary mb-2">
                $1.8M Saved in 90 Days with Custom Route Optimization ML
              </h3>
              <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                A logistics company was spending $2M/year on manual route planning. CTO1 built a
                custom ML optimization system that reduced fuel costs by 23% and was fully
                deployed within 90 days.
              </p>
            </div>
            <Link
              href="/case-studies#enterprise-ai"
              className="flex-shrink-0 gradient-bg text-white font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Read Case Study
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-10 text-center">
            <h2 className="font-orbitron text-3xl font-bold text-text-primary mb-4">
              Ready to Operationalize AI?
            </h2>
            <p className="text-text-dim font-space-grotesk text-lg mb-8">
              Start with a free AI Readiness Assessment. In 30 minutes we'll identify your top
              2–3 AI opportunities and give you a realistic view of ROI and timeline.
            </p>
            <Link
              href="/#contact"
              className="gradient-bg text-white font-semibold px-10 py-4 rounded-full text-base hover:opacity-90 transition-opacity inline-block"
            >
              Get a Free AI Assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
