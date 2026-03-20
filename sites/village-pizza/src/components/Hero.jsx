import './Hero.css'

export default function Hero({ name, tagline, ctaText, ctaHref }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-tagline">{tagline}</p>
        <a href={ctaHref} className="hero-cta">{ctaText}</a>
        <div className="hero-delivery-badge">
          <span className="dot"></span>
          Open for delivery & pickup
        </div>
      </div>
    </section>
  )
}
