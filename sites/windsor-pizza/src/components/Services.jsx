import { useState } from 'react'
import './Services.css'

export default function Services({ services, type }) {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <h2 className="services-heading">
          {type === 'menu' ? 'The Menu' : 'Our Services'}
        </h2>

        {/* Neon-style category tabs */}
        <div className="category-tabs">
          {services.map((category, idx) => (
            <button
              key={category.category}
              className={`category-tab ${idx === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(idx)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active category items */}
        <div className="services-panel">
          <div className="services-grid">
            {services[activeCategory].items.map((item, idx) => (
              <div
                key={item.name}
                className="service-card"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="service-header">
                  <span className="service-name">{item.name}</span>
                  {type === 'menu' && item.price && (
                    <span className="service-price">{item.price}</span>
                  )}
                </div>
                {item.description && (
                  <p className="service-desc">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
