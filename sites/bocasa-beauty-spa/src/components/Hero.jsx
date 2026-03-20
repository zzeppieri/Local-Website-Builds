import './Hero.css'

export default function Hero({ name, tagline, ctaText, ctaHref }) {
  return (
    <section className="hero">
      <img
        className="hero-bg"
        src="https://d2ugbn5gb88fyp.cloudfront.net/36619/0_0.jpg"
        alt="Bocasa Beauty Spa interior showcasing elegant nail and beauty services"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-inner">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-tagline">{tagline}</p>
        <a href={ctaHref} className="hero-cta">{ctaText}</a>
      </div>
    </section>
  )
}
