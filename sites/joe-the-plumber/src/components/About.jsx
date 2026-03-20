import './About.css'

const FLEET_URL = 'https://calljoetheplumber.com/wp-content/uploads/2022/03/JTP-Trucks-2.jpg'
const PLUMBING_TRUCK_URL = 'https://calljoetheplumber.com/wp-content/uploads/2016/01/Work-Truck-Joe-the-Plumber.png'

export default function About({ about, features, licenses, serviceArea }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Joe the Plumber</h2>

        <div className="about-content">
          <div className="about-text-block">
            <p className="about-text">{about}</p>
          </div>
          <div className="about-gallery">
            <img
              src={FLEET_URL}
              alt="Joe the Plumber fleet of service vehicles"
              loading="lazy"
              width="560"
              height="320"
              className="about-photo"
            />
            <img
              src={PLUMBING_TRUCK_URL}
              alt="Joe the Plumber branded work truck"
              loading="lazy"
              width="400"
              height="260"
              className="about-photo about-photo-secondary"
            />
          </div>
        </div>

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
