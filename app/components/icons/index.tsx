// Futuristic SVG icon components for CTO1 services

interface IconProps {
  className?: string
  size?: number
}

// Enterprise Architecture — interconnected nodes/grid
export function EnterpriseArchIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ea-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      {/* Central node */}
      <circle cx="24" cy="24" r="4" fill="url(#ea-grad)"/>
      {/* Corner nodes */}
      <circle cx="8" cy="8" r="3" fill="url(#ea-grad)" fillOpacity="0.8"/>
      <circle cx="40" cy="8" r="3" fill="url(#ea-grad)" fillOpacity="0.8"/>
      <circle cx="8" cy="40" r="3" fill="url(#ea-grad)" fillOpacity="0.8"/>
      <circle cx="40" cy="40" r="3" fill="url(#ea-grad)" fillOpacity="0.8"/>
      {/* Mid nodes */}
      <circle cx="24" cy="6" r="2.5" fill="#00D4FF" fillOpacity="0.6"/>
      <circle cx="24" cy="42" r="2.5" fill="#00D4FF" fillOpacity="0.6"/>
      <circle cx="6" cy="24" r="2.5" fill="#00D4FF" fillOpacity="0.6"/>
      <circle cx="42" cy="24" r="2.5" fill="#00D4FF" fillOpacity="0.6"/>
      {/* Connection lines */}
      <line x1="24" y1="20" x2="24" y2="8.5" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="24" y1="28" x2="24" y2="39.5" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="20" y1="24" x2="8.5" y2="24" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="28" y1="24" x2="39.5" y2="24" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.6"/>
      <line x1="21.2" y1="21.2" x2="10.1" y2="10.1" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="26.8" y1="21.2" x2="37.9" y2="10.1" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="21.2" y1="26.8" x2="10.1" y2="37.9" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="26.8" y1="26.8" x2="37.9" y2="37.9" stroke="url(#ea-grad)" strokeWidth="1" strokeOpacity="0.4"/>
      {/* Outer ring */}
      <circle cx="24" cy="24" r="18" stroke="url(#ea-grad)" strokeWidth="0.5" strokeOpacity="0.3" fill="none" strokeDasharray="3 3"/>
    </svg>
  )
}

// AI & Machine Learning — neural network / brain circuit
export function AIMLIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ai-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      {/* Input layer */}
      <circle cx="8" cy="14" r="3" fill="url(#ai-grad)" fillOpacity="0.9"/>
      <circle cx="8" cy="24" r="3" fill="url(#ai-grad)" fillOpacity="0.9"/>
      <circle cx="8" cy="34" r="3" fill="url(#ai-grad)" fillOpacity="0.9"/>
      {/* Hidden layer */}
      <circle cx="24" cy="10" r="3" fill="url(#ai-grad)"/>
      <circle cx="24" cy="20" r="3" fill="url(#ai-grad)"/>
      <circle cx="24" cy="30" r="3" fill="url(#ai-grad)"/>
      <circle cx="24" cy="40" r="3" fill="url(#ai-grad)"/>
      {/* Output layer */}
      <circle cx="40" cy="18" r="3" fill="url(#ai-grad)" fillOpacity="0.9"/>
      <circle cx="40" cy="30" r="3" fill="url(#ai-grad)" fillOpacity="0.9"/>
      {/* Connections input→hidden */}
      {[14,24,34].map(y1 => [10,20,30,40].map(y2 => (
        <line key={`${y1}-${y2}`} x1="11" y1={y1} x2="21" y2={y2} stroke="#00D4FF" strokeWidth="0.6" strokeOpacity="0.35"/>
      )))}
      {/* Connections hidden→output */}
      {[10,20,30,40].map(y1 => [18,30].map(y2 => (
        <line key={`h${y1}-${y2}`} x1="27" y1={y1} x2="37" y2={y2} stroke="#8B00FF" strokeWidth="0.6" strokeOpacity="0.35"/>
      )))}
      {/* Pulse effect on center nodes */}
      <circle cx="24" cy="20" r="6" stroke="#00D4FF" strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
      <circle cx="24" cy="30" r="6" stroke="#8B00FF" strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
    </svg>
  )
}

// SaaS Development — stacked layers / platform
export function SaaSIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="saas-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      {/* Bottom layer */}
      <path d="M6 34 L24 42 L42 34 L24 26 Z" fill="url(#saas-grad)" fillOpacity="0.25" stroke="url(#saas-grad)" strokeWidth="1"/>
      {/* Middle layer */}
      <path d="M6 26 L24 34 L42 26 L24 18 Z" fill="url(#saas-grad)" fillOpacity="0.45" stroke="url(#saas-grad)" strokeWidth="1"/>
      {/* Top layer */}
      <path d="M6 18 L24 26 L42 18 L24 10 Z" fill="url(#saas-grad)" fillOpacity="0.7" stroke="url(#saas-grad)" strokeWidth="1.5"/>
      {/* Vertical edges */}
      <line x1="6" y1="18" x2="6" y2="34" stroke="url(#saas-grad)" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="42" y1="18" x2="42" y2="34" stroke="url(#saas-grad)" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="24" y1="26" x2="24" y2="42" stroke="url(#saas-grad)" strokeWidth="1" strokeOpacity="0.5"/>
      {/* Top highlight dot */}
      <circle cx="24" cy="10" r="2.5" fill="#00D4FF"/>
    </svg>
  )
}

// Cloud Infrastructure — cloud with circuit lines
export function CloudIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cloud-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      {/* Cloud shape */}
      <path d="M36 30H14a8 8 0 010-16 8 8 0 0115.5-2A6 6 0 0136 30z" stroke="url(#cloud-grad)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      {/* Download arrows */}
      <line x1="18" y1="33" x2="18" y2="42" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="33" x2="24" y2="44" stroke="url(#cloud-grad)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="30" y1="33" x2="30" y2="42" stroke="#8B00FF" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Arrow heads */}
      <polyline points="15,39 18,42 21,39" stroke="#00D4FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="21,41 24,44 27,41" stroke="url(#cloud-grad)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="27,39 30,42 33,39" stroke="#8B00FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Circuit dots on cloud */}
      <circle cx="20" cy="22" r="1.5" fill="#00D4FF" fillOpacity="0.8"/>
      <circle cx="28" cy="20" r="1.5" fill="#8B00FF" fillOpacity="0.8"/>
    </svg>
  )
}

// eCommerce — hexagonal shopping/conversion
export function EcommerceIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ec-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      {/* Hexagon */}
      <path d="M24 4 L40 13.5 L40 32.5 L24 42 L8 32.5 L8 13.5 Z" stroke="url(#ec-grad)" strokeWidth="1.5" fill="none"/>
      {/* Inner hex */}
      <path d="M24 12 L33 17.5 L33 28.5 L24 34 L15 28.5 L15 17.5 Z" stroke="url(#ec-grad)" strokeWidth="0.75" fill="url(#ec-grad)" fillOpacity="0.1"/>
      {/* Shopping cart lines */}
      <path d="M18 20 L19.5 26 L28.5 26" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="17" y1="20" x2="18" y2="20" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="22" cy="29" r="1.5" fill="#00D4FF"/>
      <circle cx="27" cy="29" r="1.5" fill="#8B00FF"/>
      {/* Up trend arrow */}
      <polyline points="20,25 23,22 26,24 30,20" stroke="#8B00FF" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="28,20 30,20 30,22" stroke="#8B00FF" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// CTO Advisory — circuit board with leadership/star
export function CTOAdvisoryIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cto-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      {/* Outer circle */}
      <circle cx="24" cy="24" r="20" stroke="url(#cto-grad)" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
      {/* Inner circle */}
      <circle cx="24" cy="24" r="13" stroke="url(#cto-grad)" strokeWidth="1" fill="none" strokeOpacity="0.6"/>
      {/* Star/compass points */}
      <path d="M24 4 L26 20 L24 24 L22 20 Z" fill="url(#cto-grad)" fillOpacity="0.8"/>
      <path d="M44 24 L28 26 L24 24 L28 22 Z" fill="url(#cto-grad)" fillOpacity="0.6"/>
      <path d="M24 44 L22 28 L24 24 L26 28 Z" fill="url(#cto-grad)" fillOpacity="0.8"/>
      <path d="M4 24 L20 22 L24 24 L20 26 Z" fill="url(#cto-grad)" fillOpacity="0.6"/>
      {/* Center dot */}
      <circle cx="24" cy="24" r="3.5" fill="url(#cto-grad)"/>
      <circle cx="24" cy="24" r="1.5" fill="#050510"/>
      {/* Tick marks */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 24 + 17 * Math.cos(rad)
        const y1 = 24 + 17 * Math.sin(rad)
        const x2 = 24 + 19.5 * Math.cos(rad)
        const y2 = 24 + 19.5 * Math.sin(rad)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#cto-grad)" strokeWidth="1" strokeOpacity="0.5"/>
      })}
    </svg>
  )
}

// Why CTO1 icons
export function ExperienceIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="exp-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" stroke="url(#exp-grad)" strokeWidth="1.5" fill="none"/>
      <polyline points="20,8 20,20 28,26" stroke="url(#exp-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="20" r="2" fill="url(#exp-grad)"/>
    </svg>
  )
}

export function DeployIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dep-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z" stroke="url(#dep-grad)" strokeWidth="1.5" fill="none"/>
      <polyline points="13,20 18,25 27,15" stroke="url(#dep-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function TrustIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="trust-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#8B00FF"/>
        </linearGradient>
      </defs>
      <path d="M20 4 L34 10 L34 22 C34 30 20 36 20 36 C20 36 6 30 6 22 L6 10 Z" stroke="url(#dep-grad)" strokeWidth="1.5" fill="none"/>
      <path d="M20 4 L34 10 L34 22 C34 30 20 36 20 36 C20 36 6 30 6 22 L6 10 Z" fill="url(#dep-grad)" fillOpacity="0.1"/>
      <polyline points="13,20 18,25 27,15" stroke="url(#dep-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
