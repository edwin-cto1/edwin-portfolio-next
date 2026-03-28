'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) errs.message = 'Message is required.'
    else if (form.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.'
    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setErrors({ message: 'Something went wrong. Please try again or email edwin@cto1.com directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6"
      aria-labelledby="contact-heading"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            Contact
          </h2>
          <p className="text-text-dim max-w-xl mx-auto">
            Ready to build something extraordinary? Let&apos;s connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-orbitron text-xl font-bold text-text-primary mb-4">
                Direct Contact
              </h3>
              <p className="text-text-dim leading-relaxed mb-6">
                Whether you need a software architect, AI/ML expertise, or
                technical leadership — I&apos;m here to help you build the
                future.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="https://linkedin.com/in/csedwin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card rounded-xl p-4 hover:border-electric-blue/30 transition-all group"
                aria-label="Connect with Edwin Portillo on LinkedIn"
              >
                <div
                  className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-text-primary group-hover:text-electric-blue transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-text-dim text-sm">linkedin.com/in/csedwin</p>
                </div>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-3">
                Availability
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full bg-green-400"
                  aria-hidden="true"
                />
                <span className="text-text-dim text-sm">
                  Open to new opportunities
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full bg-electric-blue"
                  aria-hidden="true"
                />
                <span className="text-text-dim text-sm">
                  Remote &amp; on-site available
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2.5}
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-orbitron text-xl font-bold gradient-text mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-dim">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h3 className="font-orbitron text-xl font-bold text-text-primary mb-6">
                  Send a Message
                </h3>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      placeholder="Your full name"
                      className="w-full bg-white/90 border border-white/20 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-electric-blue/60 focus:ring-1 focus:ring-electric-blue/40 transition-colors"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-1.5 text-red-400 text-xs"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      aria-describedby={
                        errors.email ? 'email-error' : undefined
                      }
                      aria-invalid={!!errors.email}
                      placeholder="your@email.com"
                      className="w-full bg-white/90 border border-white/20 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-electric-blue/60 focus:ring-1 focus:ring-electric-blue/40 transition-colors"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        role="alert"
                        className="mt-1.5 text-red-400 text-xs"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      aria-describedby={
                        errors.message ? 'message-error' : undefined
                      }
                      aria-invalid={!!errors.message}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/90 border border-white/20 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-electric-blue/60 focus:ring-1 focus:ring-electric-blue/40 transition-colors resize-vertical"
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        role="alert"
                        className="mt-1.5 text-red-400 text-xs"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl hover:opacity-90 disabled:opacity-60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
                    aria-label={submitting ? 'Sending message...' : 'Send message'}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
