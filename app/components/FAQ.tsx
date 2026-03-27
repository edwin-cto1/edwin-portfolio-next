'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 'services-offered',
    question: 'What services does Edwin Portillo offer?',
    answer:
      'Edwin Portillo offers a comprehensive suite of technology services including software architecture, AI/ML engineering, cloud infrastructure (AWS & Azure), systems engineering, technical leadership and CTO advisory, and drone & robotics systems development. Each service is tailored to deliver scalable, production-grade solutions.',
  },
  {
    id: 'remote-work',
    question: 'Is Edwin Portillo available for remote work?',
    answer:
      'Yes, Edwin Portillo is fully available for remote work and distributed team collaboration. He is also open to on-site engagements depending on project requirements and location. Whether you need a fully remote consultant or an embedded technical leader, Edwin can accommodate your working style.',
  },
  {
    id: 'technologies',
    question: 'What technologies does Edwin Portillo specialize in?',
    answer:
      'Edwin specializes in Python, JavaScript, and TypeScript for backend and full-stack development; React and Node.js for web applications; AWS and Azure for cloud infrastructure; Docker and Kubernetes for containerization and orchestration; TensorFlow and OpenCV for machine learning and computer vision; PostgreSQL and Redis for data management; and C++ for systems-level and robotics development.',
  },
]

interface FAQItemProps {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden border border-white/8">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/4 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-inset"
      >
        <span className="font-semibold text-text-primary text-base sm:text-lg">
          {faq.question}
        </span>
        <span
          aria-hidden="true"
          className={`flex-shrink-0 w-5 h-5 text-electric-blue transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-5 text-text-dim leading-relaxed text-sm sm:text-base">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 px-4 sm:px-6"
      aria-labelledby="faq-heading"
    >
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text mb-4"
          >
            FAQ
          </h2>
          <p className="text-text-dim max-w-xl mx-auto">
            Everything you need to know about working with Edwin.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => (
            <div key={faq.id} role="listitem">
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
