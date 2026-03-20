import { useState } from 'react'
import './Services.css'

export default function Services({ services, type }) {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <span className="section-label">Culinary Excellence</span>
        <h2 className="services-heading">Our Menu</h2>

        <div className="menu-tabs">
          {services.map((category, i) => (
            <button
              key={category.category}
              className={`menu-tab ${i === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(i)}
            >
              {category.category}
            </button>
          ))}
        </div>

        <div className="menu-content">
          {services[activeCategory] && (
            <div className="menu-category-reveal" key={activeCategory}>
              <div className="services-grid">
                {services[activeCategory].items.map((item, i) => (
                  <div
                    key={item.name}
                    className="service-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="service-header">
                      <span className="service-name">{item.name}</span>
                      {type === 'menu' && item.price && (
                        <span className="service-price">{item.price}</span>
                      )}
                    </div>
                    <div className="service-line"></div>
                    {item.description && (
                      <p className="service-desc">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
