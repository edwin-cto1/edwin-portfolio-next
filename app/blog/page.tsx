import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { posts } from './data/posts'

export const metadata: Metadata = {
  title: 'Blog | CTO1 — Technology Insights for Startups & Enterprises',
  description:
    'Expert insights on fractional CTO services, AI consulting, SaaS architecture, cloud migration, and eCommerce technology. Stay ahead with the CTO1 content hub.',
  keywords: [
    'fractional cto blog',
    'technology consulting insights',
    'ai consulting articles',
    'saas architecture guide',
    'cloud migration blog',
    'cto advisory content',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | CTO1 — Technology Insights',
    description: 'Expert insights on fractional CTO, AI consulting, SaaS architecture, and cloud migration.',
    url: 'https://cto1.tech/blog',
    siteName: 'CTO1',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CTO1 Blog' }],
  },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogIndexPage() {
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
                Blog
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-electric-blue font-space-grotesk text-sm uppercase tracking-widest mb-4">
              Resources
            </p>
            <h1 className="font-orbitron text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Technology{' '}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-text-dim font-space-grotesk text-lg leading-relaxed">
              Expert guidance on fractional CTO services, AI consulting, SaaS architecture,
              cloud migrations, and the technology decisions that define your company's future.
            </p>
          </div>
        </section>

        {/* Post Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass-card rounded-2xl overflow-hidden flex flex-col hover:border-electric-blue/30 transition-all duration-300 group"
              >
                {/* Card Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-space-grotesk text-electric-blue uppercase tracking-widest">
                      {post.targetKeyword}
                    </span>
                  </div>
                  <h2 className="font-orbitron text-lg font-bold text-text-primary leading-tight mb-3 group-hover:gradient-text transition-colors">
                    <Link href={`/blog/${post.slug}`} className="hover:text-electric-blue transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-auto p-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-text-dim font-space-grotesk">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-electric-blue text-sm font-semibold font-space-grotesk hover:opacity-80 transition-opacity flex items-center gap-1"
                    aria-label={`Read ${post.title}`}
                  >
                    Read
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M13 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center mt-24">
          <div className="glass-card rounded-2xl p-10">
            <h2 className="font-orbitron text-2xl font-bold text-text-primary mb-4">
              Ready to Apply These Insights?
            </h2>
            <p className="text-text-dim font-space-grotesk mb-8">
              Let CTO1 put this expertise to work for your business. Schedule a free consultation
              and get a custom technology roadmap.
            </p>
            <Link
              href="/#contact"
              className="gradient-bg text-white font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity inline-block"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
