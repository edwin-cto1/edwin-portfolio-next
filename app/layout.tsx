import type { Metadata } from 'next'
import { Orbitron, Space_Grotesk, Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CTO1 | Enterprise Technology Services',
  description:
    'CTO1 delivers enterprise technology solutions including AI/ML, cloud infrastructure, SaaS development, eCommerce, and CTO advisory services.',
  keywords: [
    'Enterprise Technology',
    'CTO Advisory',
    'AI/ML',
    'SaaS Development',
    'Cloud Infrastructure',
    'eCommerce',
    'Enterprise Architecture',
    'Edwin Portillo',
    'CTO1',
    'AWS',
    'Azure',
    'GCP',
  ],
  authors: [{ name: 'Edwin Portillo' }],
  creator: 'Edwin Portillo',
  metadataBase: new URL('https://cto1.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cto1.tech',
    siteName: 'CTO1',
    title: 'CTO1 | Enterprise Technology Services',
    description:
      'CTO1 delivers enterprise technology solutions including AI/ML, cloud infrastructure, SaaS development, eCommerce, and CTO advisory services.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CTO1 - Enterprise Technology Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTO1 | Enterprise Technology Services',
    description:
      'CTO1 delivers enterprise technology solutions including AI/ML, cloud infrastructure, SaaS development, eCommerce, and CTO advisory services.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CTO1',
  founder: { '@type': 'Person', name: 'Edwin Portillo' },
  url: 'https://cto1.tech',
  description:
    'Enterprise technology services — AI/ML, SaaS, cloud infrastructure, eCommerce',
  sameAs: ['https://linkedin.com/in/csedwin'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.VERCEL_ENV !== 'production' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </head>
      <body className="font-space-grotesk bg-bg-primary text-text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-electric-blue focus:text-bg-primary focus:font-semibold focus:rounded"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-HQEG9ZZ2V8" />
    </html>
  )
}
