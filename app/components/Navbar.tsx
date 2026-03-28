'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const resourcesRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()
  const p = pathname === '/' ? '' : '/'

  const navLinks = [
    { label: 'Home', href: `${p}#hero` },
    { label: 'Services', href: `${p}#services` },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: `${p}#contact` },
  ]

  const resourceLinks = [
    { label: 'Blog', href: '/blog', description: 'Technology insights & guides' },
    { label: 'Case Studies', href: '/case-studies', description: 'Real results from real projects' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close resources dropdown on outside click
  useEffect(() => {
    if (!resourcesOpen) return
    const handleClick = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {  // eslint-disable-line @typescript-eslint/no-explicit-any
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [resourcesOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!menuOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    const firstEl = focusableElements[0]
    const lastEl = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault()
            lastEl.focus()
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault()
            firstEl.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstEl?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card border-b border-white/8 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#hero"
            className="hover:opacity-80 transition-opacity flex items-center"
            aria-label="CTO1 - Core Technology Orchestration - Home"
          >
            <img
              src="/logos/cto1_logo.svg"
              alt="CTO1 — Core Technology Orchestration"
              width={220}
              height={52}
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-text-dim hover:text-text-primary transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Resources Dropdown */}
            <li ref={resourcesRef} className="relative">
              <button
                onClick={() => setResourcesOpen((prev) => !prev)}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-text-dim hover:text-text-primary transition-colors duration-200 font-medium text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-electric-blue rounded"
              >
                Resources
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 glass-card rounded-xl overflow-hidden shadow-xl shadow-black/30 border border-white/10"
                >
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setResourcesOpen(false)}
                      className="block px-5 py-3.5 hover:bg-white/5 transition-colors"
                    >
                      <span className="block text-text-primary font-medium text-sm font-space-grotesk">
                        {link.label}
                      </span>
                      <span className="block text-text-dim text-xs font-space-grotesk mt-0.5">
                        {link.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href={`${p}#contact`}
              className="gradient-bg text-white font-semibold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded focus:outline-none focus:ring-2 focus:ring-electric-blue"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        hidden={!menuOpen}
        className={`md:hidden glass-card border-t border-white/8 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col px-4 pt-4 pb-6 gap-4 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block text-text-dim hover:text-text-primary transition-colors duration-200 font-medium text-base uppercase tracking-wider py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Resources section in mobile menu */}
          <li>
            <p className="text-text-dim/50 text-xs uppercase tracking-widest font-space-grotesk py-1">
              Resources
            </p>
            <ul className="list-none pl-2 space-y-1">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-text-dim hover:text-text-primary transition-colors duration-200 font-medium text-base py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="pt-2">
            <Link
              href={`${p}#contact`}
              onClick={closeMenu}
              className="block gradient-bg text-white font-semibold px-5 py-2.5 rounded-full text-sm text-center hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
