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
            className="font-orbitron text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            aria-label="CTO1 - Back to top"
          >
            CTO1
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

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/csedwin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-electric-blue transition-colors text-sm flex items-center gap-2"
            aria-label="Edwin Portillo on LinkedIn (opens in new tab)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
