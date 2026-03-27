import type { Metadata } from 'next'
import { Orbitron, Space_Grotesk, Inter } from 'next/font/google'
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
  title: 'Edwin Portillo | Software Architect & Tech Leader',
  description:
    'Edwin Portillo — Software Architect, AI/ML Engineer, and Tech Leader building the technology infrastructure of tomorrow.',
  keywords: [
    'Software Architect',
    'AI/ML Engineer',
    'Tech Leader',
    'Systems Engineer',
    'Cloud Infrastructure',
    'Edwin Portillo',
    'Drone Systems',
    'Robotics',
    'AWS',
    'Azure',
  ],
  authors: [{ name: 'Edwin Portillo' }],
  creator: 'Edwin Portillo',
  metadataBase: new URL('https://edwinportillo.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edwinportillo.dev',
    siteName: 'Edwin Portillo Portfolio',
    title: 'Edwin Portillo | Software Architect & Tech Leader',
    description:
      'Edwin Portillo — Software Architect, AI/ML Engineer, and Tech Leader building the technology infrastructure of tomorrow.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edwin Portillo - Software Architect & Tech Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edwin Portillo | Software Architect & Tech Leader',
    description:
      'Edwin Portillo — Software Architect, AI/ML Engineer, and Tech Leader building the technology infrastructure of tomorrow.',
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
  '@type': 'Person',
  name: 'Edwin Portillo',
  url: 'https://edwinportillo.dev',
  sameAs: ['https://linkedin.com/in/csedwin'],
  jobTitle: 'Software Architect & Tech Leader',
  description:
    'Tech visionary with expertise spanning software architecture, AI/ML systems, and autonomous robotics.',
  knowsAbout: [
    'Software Architecture',
    'AI/ML Engineering',
    'Cloud Infrastructure',
    'Systems Engineering',
    'Technical Leadership',
    'Drone & Robotics Systems',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Comfrt',
  },
  alumniOf: [],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
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
    </html>
  )
}
