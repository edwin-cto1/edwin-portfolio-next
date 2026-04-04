import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative py-10 px-4 sm:px-6 border-t border-white/8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(0,212,255,0.02))',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="#hero"
            className="hover:opacity-80 transition-opacity"
            aria-label="CTO1 - Back to top"
          >
            <img
              src="/logos/cto1_logo.svg"
              alt="CTO1 — Core Technology Orchestration"
              style={{ height: '32px', width: 'auto' }}
            />
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/about"
              className="text-text-dim hover:text-text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-text-dim hover:text-text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-text-dim text-sm text-center">
            &copy; {currentYear} CTO1. All rights reserved. | Built
            with{' '}
            <span aria-label="lightning bolt" role="img">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{display:'inline',verticalAlign:'middle'}}><path d="M8 1L3 8h4l-1 5 6-7H8l1-5z" fill="url(#bolt-grad)"/><defs><linearGradient id="bolt-grad" x1="0" y1="0" x2="14" y2="14"><stop stopColor="#00D4FF"/><stop offset="1" stopColor="#8B00FF"/></linearGradient></defs></svg>
            </span>{' '}
            by Edwin Portillo
          </p>

        </div>
      </div>
    </footer>
  )
}
