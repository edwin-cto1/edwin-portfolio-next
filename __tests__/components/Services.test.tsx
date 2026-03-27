import { render, screen } from '@testing-library/react'
import Services from '@/app/components/Services'

describe('Services', () => {
  it('renders the services section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /services/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(6)
  })

  it('renders Enterprise Architecture service', () => {
    render(<Services />)
    expect(screen.getByText('Enterprise Architecture')).toBeInTheDocument()
  })

  it('renders AI & Machine Learning service', () => {
    render(<Services />)
    expect(screen.getByText('AI & Machine Learning')).toBeInTheDocument()
  })

  it('renders SaaS Development service', () => {
    render(<Services />)
    expect(screen.getByText('SaaS Development')).toBeInTheDocument()
  })

  it('renders IT Infrastructure & Cloud service', () => {
    render(<Services />)
    expect(screen.getByText('IT Infrastructure & Cloud')).toBeInTheDocument()
  })

  it('renders eCommerce Solutions service', () => {
    render(<Services />)
    expect(screen.getByText('eCommerce Solutions')).toBeInTheDocument()
  })

  it('renders CTO Advisory service', () => {
    render(<Services />)
    expect(screen.getByText('CTO Advisory')).toBeInTheDocument()
  })

  it('has services section id', () => {
    render(<Services />)
    const section = document.getElementById('services')
    expect(section).toBeInTheDocument()
  })
})
