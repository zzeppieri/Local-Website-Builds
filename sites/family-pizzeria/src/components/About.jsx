import './About.css'

export default function About({ about, features, delivery }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Us</h2>
        <div className="section-divider"></div>
        <p className="about-text">{about}</p>

        {features && features.length > 0 && (
          <div className="about-features">
            {features.map(feature => (
              <span key={feature} className="feature-pill">{feature}</span>
            ))}
          </div>
        )}

        {delivery && (
          <div className="delivery-info">
            <h3 className="delivery-heading">Delivery Info</h3>
            <div className="delivery-details">
              <span>Fee: {delivery.fee}</span>
              <span>Minimum: {delivery.minimum}</span>
              <span>{delivery.area}</span>
            </div>
            {delivery.note && (
              <p className="delivery-note">{delivery.note}</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
