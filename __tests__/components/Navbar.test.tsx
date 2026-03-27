import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/app/components/Navbar'

// Mock Next.js Link
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

describe('Navbar', () => {
  it('renders the CTO1 logo', () => {
    render(<Navbar />)
    expect(screen.getByText('CTO1')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    // There are desktop + mobile links; just check they exist
    const homeLinks = screen.getAllByRole('link', { name: /home/i })
    const serviceLinks = screen.getAllByRole('link', { name: /services/i })
    const aboutLinks = screen.getAllByRole('link', { name: /about/i })
    const contactLinks = screen.getAllByRole('link', { name: /contact/i })

    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
    expect(serviceLinks.length).toBeGreaterThanOrEqual(1)
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1)
    expect(contactLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Get in Touch links', () => {
    render(<Navbar />)
    const getInTouchLinks = screen.getAllByRole('link', { name: /get in touch/i })
    expect(getInTouchLinks.length).toBeGreaterThanOrEqual(1)
    expect(getInTouchLinks[0]).toHaveAttribute('href', '#contact')
  })

  it('renders the hamburger toggle button', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    expect(button).toBeInTheDocument()
  })

  it('hamburger button toggles aria-expanded', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('has role navigation with accessible label', () => {
    render(<Navbar />)
    expect(
      screen.getByRole('navigation', { name: /main navigation/i })
    ).toBeInTheDocument()
  })
})
