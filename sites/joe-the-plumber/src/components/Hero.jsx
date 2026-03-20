import './Hero.css'

const HERO_TRUCK_URL = 'https://calljoetheplumber.com/wp-content/uploads/2022/10/Work-Truck-Heating-Cooling.png'

export default function Hero({ name, tagline, phone, features }) {
  const topFeatures = ['24/7 Emergency Service', 'Licensed & Insured', 'BBB Accredited']

  return (
    <section className="hero">
      <div className="hero-bg-pipes" aria-hidden="true">
        <div className="pipe pipe-1"></div>
        <div className="pipe pipe-2"></div>
        <div className="pipe pipe-3"></div>
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badges">
              {topFeatures.map((f, i) => (
                <span key={f} className="hero-badge" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                  {f}
                </span>
              ))}
            </div>
            <h1 className="hero-name">{name}</h1>
            <p className="hero-tagline">{tagline}</p>
            <div className="hero-ctas">
              <a href={`tel:${phone}`} className="hero-cta hero-cta-phone">
                <span className="cta-phone-icon">&#9742;</span>
                Call Now: {phone}
              </a>
              <a href="#services" className="hero-cta hero-cta-secondary">
                Our Services
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={HERO_TRUCK_URL}
              alt="Joe the Plumber service truck — Heating and Cooling"
              loading="eager"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
