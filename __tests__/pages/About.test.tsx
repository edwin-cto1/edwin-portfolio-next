import { render, screen } from '@testing-library/react'
import AboutPage from '@/app/about/page'

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

jest.mock('@/app/components/Navbar', () => {
  const MockNavbar = () => (
    <nav role="navigation" aria-label="Main navigation" />
  )
  MockNavbar.displayName = 'MockNavbar'
  return MockNavbar
})

jest.mock('@/app/components/Footer', () => {
  const MockFooter = () => <footer role="contentinfo" />
  MockFooter.displayName = 'MockFooter'
  return MockFooter
})

describe('About Page', () => {
  it('renders without errors', () => {
    render(<AboutPage />)
  })

  it('has main landmark', () => {
    render(<AboutPage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the Meet Edwin Portillo heading', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { name: /Edwin Portillo/i })
    ).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<AboutPage />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })
})
