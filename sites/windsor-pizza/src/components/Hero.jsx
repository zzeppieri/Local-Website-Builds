import './Hero.css'

export default function Hero({ name, tagline, ctaText, ctaHref, phone, features }) {
  const deliveryFeature = features?.find(f => f.toLowerCase().includes('delivery'))
  const pickupFeature = features?.find(f => f.toLowerCase().includes('pickup') && !f.toLowerCase().includes('curbside'))

  return (
    <section className="hero">
      <div className="hero-bg-pattern"></div>
      <div className="hero-inner">
        <div className="hero-badge">Est. Windsor, CT</div>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <a href={ctaHref} className="hero-cta hero-cta-primary">{ctaText}</a>
          <a href={`tel:${phone}`} className="hero-cta hero-cta-secondary">Call to Order</a>
        </div>
        {(deliveryFeature || pickupFeature) && (
          <div className="hero-delivery-info">
            {deliveryFeature && <span className="delivery-tag">{deliveryFeature}</span>}
            {pickupFeature && <span className="delivery-tag">{pickupFeature}</span>}
          </div>
        )}
      </div>
    </section>
  )
}
