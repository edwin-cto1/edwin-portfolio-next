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
      'EDWIN PORTILLO'
    )
  })

  it('renders the eyebrow text', () => {
    render(<Hero />)
    expect(screen.getByText(/Tech Leader/i)).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Building the technology infrastructure/i)
    ).toBeInTheDocument()
  })

  it('renders View Services CTA link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /view services/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#services')
  })

  it('renders LinkedIn Profile CTA link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /linkedin profile/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/csedwin')
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
