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
    expect(
      screen.getByRole('heading', { name: /Edwin Portillo/i })
    ).toBeInTheDocument()
  })

  it('renders Years Experience stat label', () => {
    render(<About />)
    expect(screen.getByText(/Years Experience/i)).toBeInTheDocument()
  })

  it('renders Projects Delivered stat label', () => {
    render(<About />)
    expect(screen.getByText(/Projects Delivered/i)).toBeInTheDocument()
  })

  it('renders Technologies stat label', () => {
    render(<About />)
    expect(screen.getByText(/^Technologies$/i)).toBeInTheDocument()
  })

  it('renders bio text mentioning CTO1', () => {
    render(<About />)
    const cto1Elements = screen.getAllByText(/CTO1/i)
    expect(cto1Elements.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Connect on LinkedIn link', () => {
    render(<About />)
    const link = screen.getByRole('link', {
      name: /Connect with Edwin Portillo on LinkedIn/i,
    })
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/csedwin')
  })

  it('has about section id', () => {
    render(<About />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })
})
