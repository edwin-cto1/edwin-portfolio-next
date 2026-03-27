import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'About Edwin Portillo | CTO1',
  description:
    'Edwin Portillo is a seasoned technology leader and founder of CTO1, specializing in enterprise architecture, AI/ML, cloud infrastructure, SaaS development, and eCommerce.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <About />
      </main>
      <Footer />
    </>
  )
}
