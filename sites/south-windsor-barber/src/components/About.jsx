import './About.css'

export default function About({ about, features }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">Our Story</h2>
        <div className="about-divider">
          <span className="about-divider-line"></span>
        </div>
        <p className="about-text">{about}</p>
        {features && features.length > 0 && (
          <div className="about-features">
            <h3 className="features-label">The Experience</h3>
            <div className="features-grid">
              {features.map(feature => (
                <div key={feature} className="feature-item">
                  <span className="feature-check">&#10003;</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
