import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'
import type { ServicePageData } from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'CTO Advisory | CTO1',
  description:
    'CTO1 provides fractional CTO services, technology strategy, and engineering leadership for startups and enterprises — immediate impact without the full-time executive cost.',
  keywords: [
    'Fractional CTO',
    'CTO Advisory',
    'Technology Strategy',
    'Tech Leadership',
    'Engineering Management',
    'Startup CTO',
    'Technology Roadmap',
    'CTO Services',
    'Technical Due Diligence',
    'CTO1',
  ],
  alternates: { canonical: '/services/cto-advisory' },
  openGraph: {
    title: 'CTO Advisory | CTO1',
    description:
      'Fractional CTO services for startups and enterprises. Technology strategy, team building, and engineering culture.',
    url: 'https://cto1.tech/services/cto-advisory',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CTO Advisory — CTO1' }],
  },
}

const data: ServicePageData = {
  iconId: 'cto-advisory',
  heroTitle: 'CTO Advisory',
  heroSubtitle: 'Strategic Technology Leadership, On Demand',
  intro:
    "Not every company needs a full-time CTO — but every company making technology decisions needs strategic technology leadership. We embed as your fractional CTO or strategic advisor to provide the senior guidance your team needs, at a fraction of the cost.",
  whatWeDo: [
    'Fractional CTO services (part-time embedded leadership)',
    'Technology strategy and multi-year roadmapping',
    'Engineering team assessment and hiring strategy',
    'Vendor selection, contract negotiation, and management',
    'Architecture reviews and technical debt prioritization',
    'Board and investor technology presentations',
    'Technical due diligence for fundraising and M&A',
    'Engineering culture and process improvement',
  ],
  deliverables: [
    'Technology roadmap (12–24 month)',
    'Engineering team assessment report',
    'Vendor evaluation and recommendations',
    'Monthly strategy sessions and summaries',
    'Architecture review report',
    'Board presentation decks and narratives',
  ],
  technologies: [
    'AWS', 'Azure', 'GCP', 'Next.js', 'Node.js',
    'React', 'PostgreSQL', 'Kubernetes', 'Terraform',
    'GitHub', 'Linear', 'Notion', 'Figma',
  ],
  process: [
    {
      name: 'Assessment',
      description: 'Audit your current technology, team, processes, and competitive landscape to establish a clear baseline.',
    },
    {
      name: 'Strategy',
      description: 'Develop a pragmatic technology roadmap aligned to your business goals, resources, and timelines.',
    },
    {
      name: 'Execution',
      description: 'Work alongside your team to prioritize, unblock, and drive the highest-impact technology initiatives.',
    },
    {
      name: 'Review',
      description: 'Regular cadenced reviews to measure progress, adjust strategy, and report to leadership and the board.',
    },
  ],
  benefits: [
    {
      title: 'Immediate Impact',
      description:
        'Day-one value without months of hiring, onboarding, and ramp-up. We start contributing from the first conversation.',
    },
    {
      title: 'Cost Effective',
      description:
        'Senior CTO-level guidance at 20–30% of a full-time executive salary. Right-sized for your stage and needs.',
    },
    {
      title: 'Strategic Vision',
      description:
        "Pattern recognition from hundreds of technology challenges across industries. We've seen your problem before.",
    },
  ],
  engagementModels: [
    {
      title: 'Fractional CTO',
      description: 'Part-time embedded technology leadership (10–20 hrs/week). Ongoing, strategic, and hands-on.',
      features: [
        'Weekly leadership syncs with your team',
        'Attend engineering stand-ups and planning',
        'Direct vendor and partner management',
        'On-call for urgent technical decisions',
        'Monthly board updates on technology',
      ],
    },
    {
      title: 'Project-Based',
      description: 'Dedicated leadership for a specific technology initiative with a defined scope and outcome.',
      features: [
        'Architecture redesign or platform migration',
        'Engineering team build-out from zero',
        'Technical due diligence for M&A',
        'Technology audit and remediation plan',
        'Post-mortem and process improvement',
      ],
    },
    {
      title: 'Advisory Board',
      description: 'High-level strategic input on a quarterly basis — ideal for boards and leadership teams.',
      features: [
        'Quarterly strategy and roadmap reviews',
        'Investor and board presentation prep',
        'Technology market and vendor guidance',
        'Network introductions (investors, partners)',
        'On-demand asynchronous Q&A',
      ],
    },
  ],
  faq: [
    {
      q: 'What does a fractional CTO actually do day-to-day?',
      a: "A fractional CTO acts as your part-time chief technology officer — attending leadership meetings, making architecture decisions, guiding your engineering team, managing vendors, and ensuring technology is aligned with business strategy. The difference from a consultant is that we're embedded in your team and accountable for outcomes, not just deliverables.",
    },
    {
      q: 'Is a fractional CTO right for my company?',
      a: "Fractional CTO services work best for: (1) startups that need senior tech leadership but aren't ready for a $300K+ full-time CTO, (2) companies between CTOs who need continuity, (3) non-technical founders building a tech product, and (4) enterprises that need specialized expertise for a specific initiative. If you're unsure, let's have a 30-minute call — we'll tell you honestly.",
    },
    {
      q: 'How is CTO advisory different from a technology consultant?',
      a: "Traditional consultants deliver a report and leave. We stay. As your fractional CTO or advisor, we own outcomes alongside your team — we're accountable for the strategy we set. We attend your standups, make hard calls with you, and measure our success by your technology's business impact, not by billable hours.",
    },
    {
      q: 'How quickly can you get started?',
      a: "We typically start within one week of contract signing. The first two weeks are an intensive assessment phase where we meet your team, review your systems, and develop our initial strategic recommendations. By the end of week two, you'll have a clear picture of your technology strengths, gaps, and priorities.",
    },
  ],
  ctaHeading: 'Ready for Strategic Technology Leadership?',
  ctaSubheading:
    "Let's talk about where your technology needs to go and how to get there. No obligation — just a straightforward conversation.",
}

export default function CTOAdvisoryPage() {
  return <ServicePageLayout {...data} />
}
