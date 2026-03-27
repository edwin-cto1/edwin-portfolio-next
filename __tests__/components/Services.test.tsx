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

  it('renders Software Architecture service', () => {
    render(<Services />)
    expect(screen.getByText('Software Architecture')).toBeInTheDocument()
  })

  it('renders AI / ML Engineering service', () => {
    render(<Services />)
    expect(screen.getByText('AI / ML Engineering')).toBeInTheDocument()
  })

  it('renders Cloud Infrastructure service', () => {
    render(<Services />)
    expect(screen.getByText('Cloud Infrastructure')).toBeInTheDocument()
  })

  it('renders Systems Engineering service', () => {
    render(<Services />)
    expect(screen.getByText('Systems Engineering')).toBeInTheDocument()
  })

  it('renders Technical Leadership service', () => {
    render(<Services />)
    expect(screen.getByText('Technical Leadership')).toBeInTheDocument()
  })

  it('renders Drone & Robotics Systems service', () => {
    render(<Services />)
    expect(screen.getByText('Drone & Robotics Systems')).toBeInTheDocument()
  })

  it('has services section id', () => {
    render(<Services />)
    const section = document.getElementById('services')
    expect(section).toBeInTheDocument()
  })
})
