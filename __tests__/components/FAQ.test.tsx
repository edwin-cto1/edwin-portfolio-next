import { render, screen, fireEvent } from '@testing-library/react'
import FAQ from '@/app/components/FAQ'

describe('FAQ', () => {
  it('renders the FAQ heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: /faq/i })).toBeInTheDocument()
  })

  it('renders 3 FAQ questions', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('renders the services question', () => {
    render(<FAQ />)
    expect(
      screen.getByText(/What services does Edwin Portillo offer/i)
    ).toBeInTheDocument()
  })

  it('renders the remote work question', () => {
    render(<FAQ />)
    expect(
      screen.getByText(/Is Edwin Portillo available for remote work/i)
    ).toBeInTheDocument()
  })

  it('renders the technologies question', () => {
    render(<FAQ />)
    expect(
      screen.getByText(/What technologies does Edwin Portillo specialize in/i)
    ).toBeInTheDocument()
  })

  it('first FAQ is open by default', () => {
    render(<FAQ />)
    const firstButton = screen.getAllByRole('button')[0]
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking a closed FAQ opens it', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    const secondButton = buttons[1]
    expect(secondButton).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(secondButton)
    expect(secondButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking an open FAQ closes it', () => {
    render(<FAQ />)
    const firstButton = screen.getAllByRole('button')[0]
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('has faq section id', () => {
    render(<FAQ />)
    expect(document.getElementById('faq')).toBeInTheDocument()
  })
})
