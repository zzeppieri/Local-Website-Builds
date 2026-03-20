import './About.css'

export default function About({ about, features, licenses, serviceArea }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Joe the Plumber</h2>
        <p className="about-text">{about}</p>

        {features && features.length > 0 && (
          <div className="about-features">
            {features.map((feature, i) => (
              <span key={feature} className="feature-pill" style={{ animationDelay: `${i * 0.05}s` }}>
                {feature}
              </span>
            ))}
          </div>
        )}

        {licenses && licenses.length > 0 && (
          <div className="about-licenses">
            <h3 className="licenses-heading">License Numbers</h3>
            <div className="licenses-list">
              {licenses.map(lic => (
                <span key={lic} className="license-tag">{lic}</span>
              ))}
            </div>
          </div>
        )}

        {serviceArea && (
          <div id="service-area" className="about-service-area">
            <h3 className="service-area-heading">Service Area</h3>
            <p className="service-area-text">{serviceArea}</p>
          </div>
        )}
      </div>
    </section>
  )
}
