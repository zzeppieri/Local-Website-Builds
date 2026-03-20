import './Hero.css'

const HERO_IMG = 'https://slicelife.imgix.net/30395/photos/original/VillagePizza_VillageSpecial.jpg'

export default function Hero({ name, tagline, ctaText, ctaHref }) {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${HERO_IMG}?w=1600&auto=format&q=75)` }}
        role="img"
        aria-label="Village Pizza Special - loaded pizza with premium toppings"
      ></div>
      <div className="hero-overlay"></div>
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
