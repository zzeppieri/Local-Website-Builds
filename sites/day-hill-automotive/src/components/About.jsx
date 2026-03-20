import { useEffect, useRef } from 'react'
import './About.css'

export default function About({ about, features }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner reveal" ref={ref}>
        <span className="section-label">Who We Are</span>
        <h2 className="about-heading">About Day Hill Automotive</h2>
        <div className="about-photo-wrapper">
          <img
            src="https://dayhillauto.com/Files/images/team.jpg"
            alt="The Day Hill Automotive team — ASE certified mechanics serving Windsor CT since 1979"
            className="about-team-photo"
            loading="lazy"
            width="760"
            height="420"
          />
        </div>
        <p className="about-text">{about}</p>
        {features && features.length > 0 && (
          <div className="about-features">
            {features.map(feature => (
              <span key={feature} className="feature-pill">
                <svg className="feature-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
