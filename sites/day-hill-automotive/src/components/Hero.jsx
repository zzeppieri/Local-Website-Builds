import { useEffect, useRef } from 'react'
import './Hero.css'

const DIAGNOSTIC_CODES = [
  'SYS_CHECK .......... OK',
  'BRAKE_PAD .......... OK',
  'OIL_LEVEL .......... OK',
  'TRANS_FLUID ........ OK',
  'COOLANT ............ OK',
  'BATTERY ............ 12.6V',
  'TIRE_PSI ........... 35/35/34/35',
  'ALIGNMENT .......... OK',
  'EXHAUST ............ OK',
  'ALL SYSTEMS NOMINAL',
]

export default function Hero({ name, tagline, ctaText, ctaHref, phone, rating, reviewCount }) {
  const codeRef = useRef(null)

  useEffect(() => {
    const el = codeRef.current
    if (!el) return
    let line = 0
    let charIndex = 0
    let timeout

    function typeLine() {
      if (line >= DIAGNOSTIC_CODES.length) {
        // Reset after pause
        timeout = setTimeout(() => {
          el.textContent = ''
          line = 0
          charIndex = 0
          typeLine()
        }, 3000)
        return
      }
      const currentLine = DIAGNOSTIC_CODES[line]
      if (charIndex <= currentLine.length) {
        const lines = DIAGNOSTIC_CODES.slice(0, line).join('\n')
        const partial = currentLine.slice(0, charIndex)
        el.textContent = (lines ? lines + '\n' : '') + '> ' + partial + '_'
        charIndex++
        timeout = setTimeout(typeLine, 20 + Math.random() * 30)
      } else {
        line++
        charIndex = 0
        timeout = setTimeout(typeLine, 150)
      }
    }

    typeLine()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero">
      <div className="hero-grid-overlay" aria-hidden="true"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            ASE Certified &bull; Since 1979
          </div>
          <h1 className="hero-name">{name}</h1>
          <p className="hero-tagline">{tagline}</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">{rating}</span>
              <span className="stat-label">Star Rating</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">{reviewCount}+</span>
              <span className="stat-label">Reviews</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">45+</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
          <div className="hero-actions">
            <a href={ctaHref} className="hero-cta">{ctaText}</a>
            <a href={`tel:${phone}`} className="hero-cta-secondary">{phone}</a>
          </div>
        </div>
        <div className="hero-diagnostic" aria-hidden="true">
          <div className="diagnostic-header">
            <span className="diagnostic-dot green"></span>
            <span className="diagnostic-dot yellow"></span>
            <span className="diagnostic-dot red"></span>
            <span className="diagnostic-title">diagnostics.sys</span>
          </div>
          <pre className="diagnostic-code" ref={codeRef}></pre>
        </div>
      </div>
    </section>
  )
}
