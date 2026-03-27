import { render, screen } from '@testing-library/react'
import About from '@/app/components/About'

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

describe('About', () => {
  it('renders the about section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('renders Years Experience stat label', () => {
    render(<About />)
    expect(screen.getByText(/Years Experience/i)).toBeInTheDocument()
  })

  it('renders Projects Delivered stat label', () => {
    render(<About />)
    expect(screen.getByText(/Projects Delivered/i)).toBeInTheDocument()
  })

  it('renders Technologies Mastered stat label', () => {
    render(<About />)
    expect(screen.getByText(/Technologies Mastered/i)).toBeInTheDocument()
  })

  it('renders Industry Domains stat label', () => {
    render(<About />)
    expect(screen.getByText(/Industry Domains/i)).toBeInTheDocument()
  })

  it('renders bio text mentioning Comfrt', () => {
    render(<About />)
    expect(screen.getByText(/Comfrt/i)).toBeInTheDocument()
  })

  it('renders LinkedIn profile link', () => {
    render(<About />)
    const link = screen.getByRole('link', {
      name: /View Edwin Portillo's LinkedIn profile/i,
    })
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/csedwin')
  })

  it('has about section id', () => {
    render(<About />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })
})
