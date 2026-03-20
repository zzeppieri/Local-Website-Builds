import './About.css'

export default function About({ about, features, ownerPhoto }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Us</h2>
        <span className="gold-line" aria-hidden="true"></span>
        {ownerPhoto && (
          <figure className="about-owner">
            <img
              src={ownerPhoto.src}
              alt={ownerPhoto.alt}
              className="about-owner-img"
            />
            <figcaption className="about-owner-caption">
              {ownerPhoto.caption}
            </figcaption>
          </figure>
        )}
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
