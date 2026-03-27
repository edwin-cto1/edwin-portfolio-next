import { render, screen } from '@testing-library/react'
import Footer from '@/app/components/Footer'

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

describe('Footer', () => {
  it('renders with contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the EP logo link', () => {
    render(<Footer />)
    expect(screen.getByText('EP')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Edwin Portillo\. All rights reserved\./i)).toBeInTheDocument()
  })

  it('renders the current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders LinkedIn link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /linkedin/i })
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/csedwin')
  })

  it('renders "Built with" text', () => {
    render(<Footer />)
    expect(screen.getByText(/Built with/i)).toBeInTheDocument()
  })
})
