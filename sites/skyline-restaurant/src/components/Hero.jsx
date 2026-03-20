import './Hero.css'

export default function Hero({ name, tagline, ctaText, ctaHref }) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <p className="hero-established">Est. 1939</p>
        <h1 className="hero-name">Skyline</h1>
        <p className="hero-subtitle">Restaurant & Banquet</p>
        <div className="hero-divider">
          <span className="divider-line"></span>
          <span className="divider-diamond"></span>
          <span className="divider-line"></span>
        </div>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <a href={ctaHref} className="hero-cta">{ctaText}</a>
          <a href="tel:8606239296" className="hero-cta hero-cta-outline">Make a Reservation</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span className="scroll-line"></span>
      </div>
    </section>
  )
}
