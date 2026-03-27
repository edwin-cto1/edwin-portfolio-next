import { render, screen } from '@testing-library/react'
import Hero from '@/app/components/Hero'

// Mock ParticleBackground to avoid canvas issues
jest.mock('@/app/components/ParticleBackground', () => {
  const MockParticles = () => <canvas data-testid="particle-canvas" />
  MockParticles.displayName = 'MockParticleBackground'
  return MockParticles
})

jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Enterprise Technology/i
    )
  })

  it('renders the eyebrow text', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Enterprise Technology Leadership/i)
    ).toBeInTheDocument()
  })

  it('renders Explore Services CTA link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /explore services/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#services')
  })

  it('renders Get in Touch CTA link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /get in touch/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('renders the hero section with id', () => {
    render(<Hero />)
    const section = document.getElementById('hero')
    expect(section).toBeInTheDocument()
  })

  it('renders the particle background', () => {
    render(<Hero />)
    expect(screen.getByTestId('particle-canvas')).toBeInTheDocument()
  })
})
