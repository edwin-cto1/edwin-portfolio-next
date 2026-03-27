const values = [
  {
    icon: '⚡',
    title: '10+ Years Enterprise Experience',
    description:
      'Proven track record delivering mission-critical systems across startups and Fortune 500 organizations.',
  },
  {
    icon: '🎯',
    title: '50+ Successful Deployments',
    description:
      'From MVP launches to large-scale enterprise migrations, with a relentless focus on quality and reliability.',
  },
  {
    icon: '🌐',
    title: 'Trusted by Startups to Enterprise',
    description:
      'Flexible engagement models that scale with your needs — fractional, project-based, or embedded.',
  },
]

export default function WhyCTO1() {
  return (
    <section
      id="why-cto1"
      className="relative py-20 sm:py-24 px-4 sm:px-6"
      aria-labelledby="why-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
            Why Choose Us
          </p>
          <h2
            id="why-heading"
            className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
          >
            Why CTO1
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="glass-card rounded-2xl p-8 text-center hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {v.icon}
              </div>
              <h3 className="font-orbitron text-base font-bold text-text-primary mb-3">
                {v.title}
              </h3>
              <p className="text-text-dim text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
