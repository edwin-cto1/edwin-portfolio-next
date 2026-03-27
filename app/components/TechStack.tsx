const technologies = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'TensorFlow',
  'PostgreSQL',
  'Redis',
  'GraphQL',
  'C++',
  'OpenCV',
]

export default function TechStack() {
  // Duplicate for seamless loop
  const tickerItems = [...technologies, ...technologies]

  return (
    <section
      id="tech"
      className="relative py-20 sm:py-24 overflow-hidden"
      aria-labelledby="tech-heading"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(0,212,255,0.03) 50%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <p className="font-space-grotesk text-sm font-semibold tracking-[0.3em] uppercase text-electric-blue mb-3">
          Technology Stack
        </p>
        <h2
          id="tech-heading"
          className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text"
        >
          Tech Stack
        </h2>
      </div>

      {/* Ticker row 1 */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #050510, transparent)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, #050510, transparent)',
          }}
        />

        <ul
          className="flex gap-6 animate-ticker w-max"
          aria-label="Technologies: Python, JavaScript, TypeScript, React, Node.js, AWS, Azure, Docker, Kubernetes, TensorFlow, PostgreSQL, Redis, GraphQL, C++, OpenCV"
          style={{ animationDuration: '30s' }}
        >
          {tickerItems.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              className="flex-shrink-0 glass-card rounded-full px-6 py-3 text-text-dim font-medium text-sm whitespace-nowrap hover:text-electric-blue hover:border-electric-blue/30 transition-colors cursor-default"
              aria-hidden={i >= technologies.length}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Ticker row 2 (reverse) */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #050510, transparent)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, #050510, transparent)',
          }}
        />

        <ul
          className="flex gap-6 animate-ticker-reverse w-max"
          aria-hidden="true"
          style={{ animationDuration: '35s' }}
        >
          {[...tickerItems].reverse().map((tech, i) => (
            <li
              key={`rev-${tech}-${i}`}
              className="flex-shrink-0 glass-card rounded-full px-6 py-3 text-text-dim font-medium text-sm whitespace-nowrap hover:text-electric-purple hover:border-electric-purple/30 transition-colors cursor-default"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
