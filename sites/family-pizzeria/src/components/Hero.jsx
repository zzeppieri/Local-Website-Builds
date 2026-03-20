import './Hero.css'

const INGREDIENTS = [
  { name: 'Fresh Dough', emoji: '', desc: 'Hand-tossed daily' },
  { name: 'San Marzano', emoji: '', desc: 'Crushed tomatoes' },
  { name: 'Mozzarella', emoji: '', desc: 'Whole milk cheese' },
  { name: 'Fresh Basil', emoji: '', desc: 'Fragrant herbs' },
  { name: 'Olive Oil', emoji: '', desc: 'Extra virgin' },
]

export default function Hero({ name, tagline, ctaText, ctaHref, orderUrl }) {
  return (
    <section className="hero">
      <div className="hero-bg-texture" aria-hidden="true"></div>
      <div className="hero-inner">
        <p className="hero-est">Est. Family Owned & Operated</p>
        <h1 className="hero-name">{name}</h1>
        <div className="hero-rule" aria-hidden="true"></div>
        <p className="hero-tagline">{tagline}</p>

        <div className="hero-ingredients" aria-label="Our fresh ingredients">
          {INGREDIENTS.map((ing, i) => (
            <div
              key={ing.name}
              className="ingredient-spot"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <span className="ingredient-dot" aria-hidden="true"></span>
              <span className="ingredient-name">{ing.name}</span>
              <span className="ingredient-desc">{ing.desc}</span>
            </div>
          ))}
        </div>

        <div className="hero-ctas">
          <a href={ctaHref} className="hero-cta hero-cta-primary">{ctaText}</a>
          <a href={orderUrl} className="hero-cta hero-cta-secondary" target="_blank" rel="noopener noreferrer">
            Order Online
          </a>
        </div>
      </div>
    </section>
  )
}
