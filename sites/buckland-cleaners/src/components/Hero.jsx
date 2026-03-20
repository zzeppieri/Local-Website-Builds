import './Hero.css'

const BANNER_SRC =
  'https://lh3.googleusercontent.com/sitesv/APaQ0SQM3cQsP3Q_VJSg0QD0zSTtQjw0-Q5UOSgFjOQLPmBzksl6BaNwjmNIua4IRDr796kmpnM5bi1HGab3RK4bqd3gawlU-0fgKrYz_Mq3i1MF9peWE6dl731-JXxIsBfEcUXwu6hKXvOVvjcf5iKaBkviRPdrINK-jRJlKyBJyFOtEHeO6bjrEQ9XxTQNt-wVcBHwwKVJJsi3PVI=w1280'

export default function Hero({ name, tagline, ctaText, ctaHref }) {
  return (
    <section className="hero">
      <img
        src={BANNER_SRC}
        alt="Buckland Cleaners & Tailors storefront"
        className="hero-bg-img"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />

      {/* Floating garment care icons */}
      <div className="hero-icons" aria-hidden="true">
        <span className="hero-icon icon-1" title="Iron">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16M4 19l2-8h12l2 8M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/></svg>
        </span>
        <span className="hero-icon icon-2" title="Scissors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
        </span>
        <span className="hero-icon icon-3" title="Shirt">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2l5 4-3 1v13H7V7L4 6l5-4"/><path d="M9 2a3 3 0 0 0 6 0"/></svg>
        </span>
        <span className="hero-icon icon-4" title="Hanger">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a2 2 0 0 1 2 2c0 1.1-.9 2-2 2"/><path d="M2 19l10-7 10 7"/></svg>
        </span>
        <span className="hero-icon icon-5" title="Sparkle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        </span>
      </div>

      <div className="hero-inner">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-tagline">{tagline}</p>
        <a href={ctaHref} className="hero-cta">{ctaText}</a>
      </div>
    </section>
  )
}
