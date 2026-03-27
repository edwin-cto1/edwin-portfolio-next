import { render, screen } from '@testing-library/react'
import TechStack from '@/app/components/TechStack'

describe('TechStack', () => {
  it('renders the tech stack heading', () => {
    render(<TechStack />)
    expect(screen.getByRole('heading', { name: /tech stack/i })).toBeInTheDocument()
  })

  it('has tech section id', () => {
    render(<TechStack />)
    const section = document.getElementById('tech')
    expect(section).toBeInTheDocument()
  })

  it('renders technology items in the accessible list', () => {
    render(<TechStack />)
    // The first list has aria-label with technologies
    const list = screen.getByRole('list', {
      name: /Technologies: Python/i,
    })
    expect(list).toBeInTheDocument()
  })

  it('renders Python in the ticker', () => {
    render(<TechStack />)
    // Technology items appear multiple times due to duplication; find at least one
    const items = screen.getAllByText('Python')
    expect(items.length).toBeGreaterThanOrEqual(1)
  })

  it('renders TypeScript in the ticker', () => {
    render(<TechStack />)
    const items = screen.getAllByText('TypeScript')
    expect(items.length).toBeGreaterThanOrEqual(1)
  })

  it('renders TensorFlow in the ticker', () => {
    render(<TechStack />)
    const items = screen.getAllByText('TensorFlow')
    expect(items.length).toBeGreaterThanOrEqual(1)
  })
})
