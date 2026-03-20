import './Hero.css'

export default function Hero({ name, tagline, ctaText, ctaHref }) {
  return (
    <section className="hero">
      <div className="hero-bg-pattern"></div>
      <div className="hero-inner">
        <div className="hero-badge">EST. 1927</div>
        <h1 className="hero-name">{name}</h1>
        <div className="hero-divider">
          <span className="hero-divider-line"></span>
          <svg className="hero-scissors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <line x1="20" y1="4" x2="8.12" y2="15.88"/>
            <line x1="14.47" y1="14.48" x2="20" y2="20"/>
            <line x1="8.12" y1="8.12" x2="12" y2="12"/>
          </svg>
          <span className="hero-divider-line"></span>
        </div>
        <p className="hero-tagline">{tagline}</p>
        <a href={ctaHref} className="hero-cta">{ctaText}</a>
      </div>
      <div className="barber-stripe hero-bottom-stripe"></div>
    </section>
  )
}
