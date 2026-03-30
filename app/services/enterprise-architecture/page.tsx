import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'
import type { ServicePageData } from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Enterprise Architecture | CTO1',
  description:
    'CTO1 designs scalable, resilient enterprise architectures — microservices, API design, cloud-native systems, and monolith migrations that power Fortune 500 operations.',
  keywords: [
    'Enterprise Architecture',
    'Microservices',
    'System Design',
    'API Architecture',
    'Cloud Native',
    'Scalability',
    'Monolith Migration',
    'GraphQL',
    'Kubernetes',
    'CTO1',
  ],
  alternates: { canonical: '/services/enterprise-architecture' },
  openGraph: {
    title: 'Enterprise Architecture | CTO1',
    description:
      'Designing scalable, resilient systems that power Fortune 500 operations. From microservices to monolith migrations.',
    url: 'https://cto1.tech/services/enterprise-architecture',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Enterprise Architecture — CTO1' }],
  },
}

const data: ServicePageData = {
  iconId: 'enterprise-architecture',
  heroTitle: 'Enterprise Architecture',
  heroSubtitle: "Building the Foundation of Tomorrow's Enterprise",
  intro:
    'We design resilient, scalable system architectures that underpin the world\'s most demanding applications. Whether you\'re scaling a startup or modernizing a legacy enterprise, we build systems that perform under pressure and evolve with your business.',
  whatWeDo: [
    'Distributed system design and microservices architecture',
    'API design — REST, GraphQL, and gRPC',
    'Monolith-to-microservices migrations',
    'Event-driven architecture and message queues',
    'Database architecture and data modeling',
    'Scalability and capacity planning',
    'Security architecture and threat modeling',
    'Technical debt assessment and remediation',
  ],
  deliverables: [
    'Architecture blueprints and system diagrams',
    'Tech stack recommendations report',
    'Scalability roadmap (12–24 month)',
    'System audit and gap analysis',
    'API design specifications',
    'Technical debt analysis',
  ],
  technologies: [
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
    'GraphQL', 'REST', 'gRPC', 'Kafka', 'RabbitMQ',
    'PostgreSQL', 'MongoDB', 'Redis', 'Terraform', 'Istio',
  ],
  process: [
    {
      name: 'Discovery',
      description: 'Deep-dive into your current systems, team, and business goals to understand constraints and opportunities.',
    },
    {
      name: 'Design',
      description: 'Architect a solution tailored to your scale requirements, team size, and technology preferences.',
    },
    {
      name: 'Validation',
      description: 'Review the design with your team, stress-test assumptions, and refine based on feedback.',
    },
    {
      name: 'Implementation',
      description: 'Guide your engineers through execution with clear specifications, ADRs, and hands-on support.',
    },
    {
      name: 'Optimization',
      description: 'Monitor real-world performance, identify bottlenecks, and continuously improve the architecture.',
    },
  ],
  benefits: [
    {
      title: 'Scalability',
      description:
        'Systems designed to handle 10× growth without rewrites. We plan for your future load from day one.',
    },
    {
      title: 'Reliability',
      description:
        'Fault-tolerant architectures with redundancy, circuit breakers, and graceful degradation built in.',
    },
    {
      title: 'Cost Efficiency',
      description:
        'Right-sized infrastructure that eliminates over-provisioning and optimizes cloud spend as you scale.',
    },
  ],
  faq: [
    {
      q: 'What is enterprise architecture and why does it matter?',
      a: 'Enterprise architecture is the blueprint for how your software systems, data, and infrastructure work together. A well-designed architecture reduces technical debt, enables faster feature delivery, prevents costly rewrites, and ensures your systems can scale without breaking.',
    },
    {
      q: 'How long does an enterprise architecture engagement take?',
      a: 'Initial architecture assessments and design typically take 4–8 weeks. For larger transformation projects involving monolith migrations or full-stack redesigns, engagements run 3–6 months. We provide clear milestones so you always know where we stand.',
    },
    {
      q: 'Can you migrate our existing monolith to microservices?',
      a: "Yes — but we'll first validate whether microservices are the right choice for your situation. Many companies over-invest in microservices before they need them. We use the Strangler Fig pattern and domain-driven design to migrate incrementally with zero downtime.",
    },
    {
      q: 'How do you ensure our architecture scales to millions of users?',
      a: 'We design for horizontal scalability, implement caching strategies, choose the right databases for each use case, and plan your CDN and load-balancing layers. We also conduct load testing simulations before launch so there are no surprises under real traffic.',
    },
  ],
  pricingTiers: [
    {
      name: 'Audit',
      price: '$2,500',
      description: 'Architecture review, bottleneck analysis, recommendations report',
      features: [
        'Full system and codebase review',
        'Bottleneck and risk identification',
        'Detailed recommendations report',
        'Tech stack assessment',
        '1-hour findings presentation',
      ],
    },
    {
      name: 'Design',
      price: '$15,000',
      description: 'Full system design, tech stack selection, scalability roadmap',
      features: [
        'End-to-end architecture blueprints',
        'Tech stack selection and rationale',
        '12–24 month scalability roadmap',
        'API design specifications',
        'ADRs and implementation guide',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'End-to-end architecture with implementation support',
      features: [
        'Everything in Design',
        'Hands-on implementation support',
        'Team training and knowledge transfer',
        'Ongoing architecture advisory',
        'Dedicated engagement manager',
      ],
    },
  ],
  ctaHeading: 'Ready to Architect Your Future?',
  ctaSubheading:
    "Let's design a system that scales with your ambitions. One conversation can save you years of technical debt.",
}

export default function EnterpriseArchitecturePage() {
  return <ServicePageLayout {...data} />
}
