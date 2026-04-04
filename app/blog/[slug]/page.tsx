import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { posts, getPostBySlug, getAllSlugs } from '../data/posts'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | CTO1`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://cto1.tech/blog/${post.slug}`,
      siteName: 'CTO1',
      type: 'article',
      publishedTime: post.date,
      authors: ['Edwin Portillo'],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Edwin Portillo',
      url: 'https://cto1.tech/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CTO1',
      url: 'https://cto1.tech',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cto1.tech/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cto1.tech' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cto1.tech/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://cto1.tech/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text-dim list-none flex-wrap">
              <li>
                <Link href="/" className="hover:text-electric-blue transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-text-dim/50">/</li>
              <li>
                <Link href="/blog" className="hover:text-electric-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-text-dim/50">/</li>
              <li className="text-text-primary truncate max-w-xs" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Post Header */}
              <header className="mb-10">
                <p className="text-electric-blue font-space-grotesk text-sm uppercase tracking-widest mb-4">
                  {post.targetKeyword}
                </p>
                <h1 className="font-orbitron text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-6">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-dim font-space-grotesk mb-6">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold"
                      aria-hidden="true"
                    >
                      EP
                    </div>
                    <span>Edwin Portillo</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime} min read</span>
                </div>

                <p className="text-text-dim font-space-grotesk text-lg leading-relaxed border-l-2 border-electric-blue/50 pl-4">
                  {post.excerpt}
                </p>
              </header>

              {/* Post Sections */}
              <div className="prose-custom">
                {post.sections.map((section) => (
                  <section key={section.id} id={section.id} className="mb-10">
                    <h2 className="font-orbitron text-xl font-bold text-text-primary mb-4 scroll-mt-24">
                      {section.heading}
                    </h2>
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-text-dim font-space-grotesk text-base leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-white/8">
                <p className="text-text-dim font-space-grotesk text-sm mb-4">Share this article</p>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://cto1.tech/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card px-4 py-2 rounded-full text-sm font-space-grotesk text-text-dim hover:text-electric-blue hover:border-electric-blue/30 transition-all"
                    aria-label="Share on X (Twitter)"
                  >
                    X / Twitter
                  </a>
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-10 glass-card rounded-2xl p-6 flex gap-4 items-start">
                <div
                  className="w-14 h-14 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center text-white font-bold font-orbitron"
                  aria-hidden="true"
                >
                  EP
                </div>
                <div>
                  <p className="font-orbitron font-bold text-text-primary mb-1">Edwin Portillo</p>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed">
                    Founder & CTO at CTO1. Enterprise technology advisor with deep expertise in
                    distributed systems, AI/ML, cloud architecture, and SaaS product development.
                    Helping startups and enterprises build the technology foundations they need to scale.
                  </p>
                  <Link
                    href="/about"
                    className="text-electric-blue text-sm font-semibold font-space-grotesk hover:opacity-80 transition-opacity mt-2 inline-block"
                  >
                    About Edwin →
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar — Table of Contents */}
            <aside className="lg:w-72 flex-shrink-0" aria-label="Table of contents">
              <div className="sticky top-28">
                <div className="glass-card rounded-2xl p-6 mb-6">
                  <h2 className="font-orbitron text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
                    Table of Contents
                  </h2>
                  <nav aria-label="Article sections">
                    <ol className="space-y-2 list-none">
                      {post.sections.map((section, i) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="flex gap-3 text-sm font-space-grotesk text-text-dim hover:text-electric-blue transition-colors leading-snug"
                          >
                            <span className="text-electric-blue/50 flex-shrink-0 font-mono text-xs mt-0.5">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span>{section.heading}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-orbitron text-sm font-bold text-text-primary mb-3">
                    Work with CTO1
                  </h3>
                  <p className="text-text-dim font-space-grotesk text-sm leading-relaxed mb-4">
                    Get senior technical leadership for your startup or enterprise — without the
                    full-time price tag.
                  </p>
                  <Link
                    href="/#contact"
                    className="gradient-bg text-white font-semibold px-4 py-2 rounded-full text-sm hover:opacity-90 transition-opacity block text-center"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* More Posts */}
          <section className="mt-20 pt-12 border-t border-white/8" aria-labelledby="more-posts-heading">
            <h2 id="more-posts-heading" className="font-orbitron text-2xl font-bold text-text-primary mb-8">
              More Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <article
                    key={p.slug}
                    className="glass-card rounded-2xl p-6 hover:border-electric-blue/30 transition-all duration-300"
                  >
                    <p className="text-electric-blue text-xs uppercase tracking-widest font-space-grotesk mb-2">
                      {p.targetKeyword}
                    </p>
                    <h3 className="font-orbitron text-base font-bold text-text-primary leading-tight mb-3">
                      <Link href={`/blog/${p.slug}`} className="hover:text-electric-blue transition-colors">
                        {p.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-text-dim font-space-grotesk">
                      <span>{formatDate(p.date)}</span>
                      <span>·</span>
                      <span>{p.readTime} min read</span>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
