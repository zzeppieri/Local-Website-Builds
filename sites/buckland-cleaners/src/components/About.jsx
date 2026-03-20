import './About.css'

const STOREFRONT_SRC =
  'https://lh3.googleusercontent.com/sitesv/APaQ0SR1mC4TUpAphUvOCYpCnwElKdRLIoFneERoWybTdIahAI4gElfi0LPM4kveePsofKBH6fs8bXq5w8kLd-oJ_CLRngnjZY5bs36Jk8Gwqdvc5IunGHQjRkKf4TBgk0Ix3b2jjAZsZtpnenFJpHUOhFmZlfE5CPQ0ovO_KnyjXN1KRsWxFpJMurxgi7JuhAaVXH5M-0Rzjm5k7GE=w1280'

export default function About({ about, features }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Us</h2>
        <div className="about-photo-wrap">
          <img
            src={STOREFRONT_SRC}
            alt="Buckland Cleaners & Tailors storefront on Buckland Road, South Windsor CT"
            className="about-photo"
            loading="lazy"
            width="640"
            height="360"
          />
        </div>
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
