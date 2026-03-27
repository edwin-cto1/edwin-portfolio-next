import '@testing-library/jest-dom'

// Mock canvas for ParticleBackground tests
HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
  clearRect: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  closePath: jest.fn(),
  createRadialGradient: jest.fn().mockReturnValue({
    addColorStop: jest.fn(),
  }),
  fillRect: jest.fn(),
  strokeStyle: '',
  fillStyle: '',
  lineWidth: 0,
  globalAlpha: 1,
}) as any

// Mock window.matchMedia (not available in jsdom)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock IntersectionObserver (not available in jsdom)
class MockIntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []
  constructor(
    private callback: IntersectionObserverCallback,
    private options?: IntersectionObserverInit
  ) {}
  observe(_target: Element) {}
  unobserve(_target: Element) {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn((cb) => {
  setTimeout(cb, 0)
  return 1
})

global.cancelAnimationFrame = jest.fn()
