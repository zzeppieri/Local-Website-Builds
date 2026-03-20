import { useEffect, useRef } from 'react'
import './Services.css'

function ServiceCard({ item, index }) {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="service-card reveal"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="service-header">
        <span className="service-indicator"></span>
        <span className="service-name">{item.name}</span>
      </div>
      {item.description && (
        <p className="service-desc">{item.description}</p>
      )}
    </div>
  )
}

export default function Services({ services }) {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <div className="services-header">
          <span className="section-label">What We Do</span>
          <h2 className="services-heading">Our Services</h2>
          <p className="services-subhead">
            Full-service auto repair for domestic, foreign, and exotic vehicles.
            Every job backed by our NAPA 24-Month/24,000-Mile Warranty.
          </p>
        </div>
        {services.map((category, catIdx) => (
          <div key={category.category} className="services-category">
            <h3 className="category-name">
              <span className="category-index">{String(catIdx + 1).padStart(2, '0')}</span>
              {category.category}
            </h3>
            <div className="services-grid">
              {category.items.map((item, i) => (
                <ServiceCard key={item.name} item={item} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
