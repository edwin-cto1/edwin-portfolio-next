import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'
import type { ServicePageData } from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'SaaS Development | CTO1',
  description:
    'CTO1 builds SaaS platforms from MVP to enterprise-grade — multi-tenant architecture, Stripe billing, Auth0, and scalable Next.js backends ready for your first million users.',
  keywords: [
    'SaaS Development',
    'Multi-Tenant Architecture',
    'SaaS MVP',
    'Subscription Billing',
    'Stripe Integration',
    'Next.js',
    'Node.js',
    'SaaS Platform',
    'B2B SaaS',
    'CTO1',
  ],
  alternates: { canonical: '/services/saas-development' },
  openGraph: {
    title: 'SaaS Development | CTO1',
    description:
      'End-to-end SaaS platform engineering — from MVP to enterprise-grade multi-tenant architecture.',
    url: 'https://cto1.tech/services/saas-development',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SaaS Development — CTO1' }],
  },
}

const data: ServicePageData = {
  iconId: 'saas-development',
  heroTitle: 'SaaS Development',
  heroSubtitle: 'From MVP to Enterprise-Grade Platform',
  intro:
    "We build SaaS products that scale from your first customer to your first million. From day one, we architect for multi-tenancy, security, and the billing complexity that comes with growth — so you're never rebuilding what we already built right.",
  whatWeDo: [
    'Multi-tenant architecture design and implementation',
    'Subscription billing and usage-based pricing (Stripe)',
    'User authentication, RBAC, and SSO (Auth0, Clerk)',
    'REST and GraphQL API development and documentation',
    'SaaS metrics dashboards (MRR, churn, activation)',
    'Feature flagging and A/B testing infrastructure',
    'White-labeling and custom domain support',
    'Onboarding flows and product-led growth features',
  ],
  deliverables: [
    'Production-ready SaaS MVP',
    'Scalable multi-tenant backend',
    'Stripe payment and subscription system',
    'Admin and customer dashboards',
    'REST/GraphQL API and developer docs',
    'CI/CD pipeline and deployment runbook',
  ],
  technologies: [
    'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL',
    'Stripe', 'Auth0', 'Redis', 'AWS', 'Prisma',
    'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions',
  ],
  process: [
    {
      name: 'Discovery',
      description: 'Define your ICP, core jobs-to-be-done, and the minimum feature set that delivers real value.',
    },
    {
      name: 'MVP',
      description: 'Build the smallest version that validates your hypothesis — fast, focused, and deployable.',
    },
    {
      name: 'Beta',
      description: 'Onboard early customers, gather structured feedback, and iterate rapidly on what matters.',
    },
    {
      name: 'Scale',
      description: 'Harden the architecture for multi-tenant scale, add enterprise features, and optimize performance.',
    },
    {
      name: 'Optimize',
      description: 'Tune conversion funnels, improve retention, and build the growth infrastructure for the next phase.',
    },
  ],
  benefits: [
    {
      title: 'Fast to Market',
      description:
        'Launch a production-ready MVP in weeks, not months. We move fast without cutting corners on security or scalability.',
    },
    {
      title: 'Built to Scale',
      description:
        'Multi-tenant from day one. Your architecture handles enterprise customers without a painful rebuild at Series A.',
    },
    {
      title: 'Revenue Ready',
      description:
        'Billing, dunning, plan limits, and upgrade flows built in. Start charging on day one with confidence.',
    },
  ],
  faq: [
    {
      q: 'How long does it take to build a SaaS MVP?',
      a: "A focused MVP with core features, auth, billing, and a polished UI typically takes 6–10 weeks. We prioritize ruthlessly and help you define what's truly MVP vs. what can come in v2.",
    },
    {
      q: "What's the difference between single-tenant and multi-tenant SaaS?",
      a: "Single-tenant gives each customer their own isolated infrastructure (expensive to operate at scale). Multi-tenant shares infrastructure across all customers with logical data isolation — the standard model for B2B SaaS. We build multi-tenant by default with row-level security and tenant scoping throughout.",
    },
    {
      q: 'How do you handle data isolation between tenants?',
      a: 'We implement tenant isolation at multiple layers: database-level (row-level security with tenant_id on all tables), application-level (middleware guards on every API route), and optionally schema-level for enterprise customers who require it. Security is never an afterthought.',
    },
    {
      q: 'Can you add new features and scale the platform after launch?',
      a: "Yes — and it's designed to be easy. We write comprehensive documentation, maintain clean architecture boundaries, and set up CI/CD so your team (or ours) can ship features confidently. Post-launch retainer engagements are available for ongoing development.",
    },
  ],
  ctaHeading: 'Ready to Build Your SaaS?',
  ctaSubheading:
    "Let's turn your product idea into a revenue-generating platform. From zero to launch — we've done this before.",
}

export default function SaaSDevelopmentPage() {
  return <ServicePageLayout {...data} />
}
