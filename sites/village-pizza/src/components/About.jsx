import './About.css'

export default function About({ about, features }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">{about}</p>
        {features && features.length > 0 && (
          <div className="about-features">
            {features.map(feature => (
              <span key={feature} className="feature-pill">{feature}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
