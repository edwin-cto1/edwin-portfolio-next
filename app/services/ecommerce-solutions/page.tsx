import type { Metadata } from 'next'
import ServicePageLayout from '@/app/components/ServicePageLayout'
import type { ServicePageData } from '@/app/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'eCommerce Solutions | CTO1',
  description:
    'CTO1 builds high-performance eCommerce platforms optimized for conversion — headless commerce, Stripe/PayPal integration, Algolia search, and lightning-fast Next.js storefronts.',
  keywords: [
    'eCommerce Development',
    'Headless Commerce',
    'Shopify',
    'Next.js eCommerce',
    'Stripe Integration',
    'Conversion Optimization',
    'Custom Storefront',
    'eCommerce Platform',
    'Online Store',
    'CTO1',
  ],
  alternates: { canonical: '/services/ecommerce-solutions' },
  openGraph: {
    title: 'eCommerce Solutions | CTO1',
    description:
      'High-performance eCommerce platforms built for conversion. Headless commerce, payment integrations, and scale.',
    url: 'https://cto1.tech/services/ecommerce-solutions',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'eCommerce Solutions — CTO1' }],
  },
}

const data: ServicePageData = {
  iconId: 'ecommerce-solutions',
  heroTitle: 'eCommerce Solutions',
  heroSubtitle: 'High-Performance Stores Built for Conversion',
  intro:
    'We engineer eCommerce platforms that convert visitors into customers and customers into advocates. Our stores are built for speed, optimized for search, and designed to scale — so your platform is never the bottleneck on your biggest sales day.',
  whatWeDo: [
    'Headless commerce architecture and implementation',
    'Custom storefront development with Next.js',
    'Payment gateway integration (Stripe, PayPal, Buy Now Pay Later)',
    'Inventory and order management systems',
    'Search and discovery optimization with Algolia',
    'Performance optimization (Core Web Vitals, LCP, CLS)',
    'SEO and structured data for eCommerce',
    'International, multi-currency, and multi-language support',
  ],
  deliverables: [
    'Production eCommerce platform',
    'Payment gateway and checkout integration',
    'Inventory and order management system',
    'Analytics and conversion tracking dashboard',
    'SEO audit and implementation',
    'Performance audit (Core Web Vitals)',
  ],
  technologies: [
    'Next.js', 'TypeScript', 'Shopify', 'Stripe',
    'PayPal', 'Algolia', 'PostgreSQL', 'Redis',
    'Cloudflare', 'Vercel', 'Medusa.js', 'Sanity',
  ],
  process: [
    {
      name: 'Strategy',
      description: 'Define your target customer, conversion goals, competitive positioning, and technology approach.',
    },
    {
      name: 'Design',
      description: 'Build conversion-focused UX/UI wireframes and a design system optimized for your brand and customers.',
    },
    {
      name: 'Build',
      description: 'Develop the storefront, integrations, and backend systems with performance and security at every layer.',
    },
    {
      name: 'Launch',
      description: 'QA, load test, SEO audit, and go-live with staged rollout and monitoring in place.',
    },
    {
      name: 'Grow',
      description: 'A/B test, optimize conversion funnels, add features, and scale infrastructure with your growth.',
    },
  ],
  benefits: [
    {
      title: 'Conversion Optimized',
      description:
        'Every design and technical decision is made through a conversion lens — faster checkout, less friction, more revenue.',
    },
    {
      title: 'Lightning Fast',
      description:
        'Core Web Vitals A+ scores out of the box. Sub-second page loads that Google rewards with higher rankings.',
    },
    {
      title: 'Secure Payments',
      description:
        'PCI-DSS compliant payment flows, fraud detection, and enterprise-grade checkout security your customers can trust.',
    },
  ],
  faq: [
    {
      q: 'Should I use Shopify or build a custom headless solution?',
      a: "It depends on your needs and scale. Shopify is excellent for straightforward stores launching quickly — it handles hosting, payments, and basic customization. A custom headless solution (Next.js + Shopify API, or Medusa.js) is better when you need full design control, complex custom functionality, or significant performance requirements. We'll help you make the right call for your business.",
    },
    {
      q: 'How do you optimize for conversion rate?',
      a: "We combine technical performance (fast load times directly impact conversion), UX best practices (frictionless checkout, clear CTAs, trust signals), and data-driven iteration (A/B testing on key funnel steps). A 1-second improvement in load time can increase conversions by 7%. We optimize every millisecond.",
    },
    {
      q: 'How long does it take to launch an eCommerce store?',
      a: "A custom-designed storefront with payment integration, product catalog, and order management typically launches in 8–14 weeks. Shopify-based stores with custom theming can go live in 4–6 weeks. Timeline depends on catalog size, custom features, and integration complexity.",
    },
    {
      q: 'Can you migrate from our existing platform?',
      a: "Yes. We've migrated stores from WooCommerce, Magento, BigCommerce, and custom solutions. We handle data migration (products, customers, orders), URL redirect mapping to preserve SEO equity, and a staged go-live to eliminate downtime. Your SEO rankings and customer history are protected.",
    },
  ],
  pricingTiers: [
    {
      name: 'Launch',
      price: '$10,000',
      description: 'Storefront, payments, inventory, launch ready',
      features: [
        'Custom storefront design',
        'Payment gateway integration',
        'Inventory management system',
        'SEO and analytics setup',
        'Launch-ready in 8 weeks',
      ],
    },
    {
      name: 'Scale',
      price: '$30,000',
      description: 'Headless commerce, personalization, performance',
      features: [
        'Headless commerce architecture',
        'Personalization engine',
        'Core Web Vitals optimization',
        'Advanced search with Algolia',
        'Multi-currency support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Custom platform, ERP integration, omnichannel',
      features: [
        'Everything in Scale',
        'ERP and PIM integration',
        'Omnichannel commerce',
        'Custom checkout experience',
        'Dedicated engineering team',
      ],
    },
  ],
  ctaHeading: 'Ready to Launch Your Store?',
  ctaSubheading:
    "Let's build an eCommerce platform that turns browsers into buyers. Performance, conversion, and scale — built in from day one.",
}

export default function EcommerceSolutionsPage() {
  return <ServicePageLayout {...data} />
}
