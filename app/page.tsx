import Link from 'next/link'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyCTO1 from './components/WhyCTO1'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 px-4 sm:px-6"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(139,0,255,0.05) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          id="cta-heading"
          className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6"
        >
          Ready to transform your technology?
        </h2>
        <p className="text-text-dim text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with CTO1 to build scalable, enterprise-grade technology
          solutions that drive real business outcomes.
        </p>
        <Link
          href="#contact"
          className="gradient-bg text-white font-semibold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-electric-blue/20 inline-block"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyCTO1 />
        <TechStack />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
