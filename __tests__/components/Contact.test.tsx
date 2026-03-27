import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '@/app/components/Contact'

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

describe('Contact', () => {
  it('renders the contact section', () => {
    render(<Contact />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('renders the contact section heading via id', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /^Contact$/i })).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByRole('form', { name: /contact form/i })).toBeInTheDocument()
  })

  it('renders name input with label', () => {
    render(<Contact />)
    const input = screen.getByLabelText(/^Name/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'contact-name')
  })

  it('renders email input with label', () => {
    render(<Contact />)
    const input = screen.getByLabelText(/^Email/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'contact-email')
  })

  it('renders message textarea with label', () => {
    render(<Contact />)
    const textarea = screen.getByRole('textbox', { name: /^Message/i })
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('id', 'contact-message')
  })

  it('renders send message button', () => {
    render(<Contact />)
    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    render(<Contact />)
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Name is required.')).toBeInTheDocument()
      expect(screen.getByText('Email is required.')).toBeInTheDocument()
      expect(screen.getByText('Message is required.')).toBeInTheDocument()
    })
  })

  it('shows invalid email error', async () => {
    render(<Contact />)
    fireEvent.change(screen.getByLabelText(/^Name/i), {
      target: { value: 'Test User' },
    })
    fireEvent.change(screen.getByLabelText(/^Email/i), {
      target: { value: 'not-an-email' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /^Message/i }), {
      target: { value: 'This is a long enough message' },
    })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(
        screen.getByText(/Please enter a valid email address/i)
      ).toBeInTheDocument()
    })
  })

  it('renders LinkedIn link', () => {
    render(<Contact />)
    const link = screen.getByRole('link', {
      name: /Connect with Edwin Portillo on LinkedIn/i,
    })
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/csedwin')
  })

  it('has contact section id', () => {
    render(<Contact />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })
})
