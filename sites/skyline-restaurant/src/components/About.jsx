import './About.css'

export default function About({ about, features }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <span className="section-label">A Legacy of Fine Dining</span>
        <h2 className="about-heading">Our Story</h2>
        <div className="about-year">
          <span className="year-number">1939</span>
          <span className="year-label">Year Established</span>
        </div>
        <p className="about-text">{about}</p>
        {features && features.length > 0 && (
          <div className="about-features">
            {features.map((feature, i) => (
              <span
                key={feature}
                className="feature-pill"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
