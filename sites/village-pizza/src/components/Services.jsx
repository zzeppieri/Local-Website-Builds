import { useState } from 'react'
import './Services.css'

export default function Services({ services, type }) {
  const [activeCategory, setActiveCategory] = useState(0)
  const currentCategory = services[activeCategory]

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <h2 className="services-heading">
          {type === 'menu' ? 'Our Menu' : 'Our Services'}
        </h2>

        {/* Animated category tabs */}
        <div className="category-tabs">
          {services.map((category, index) => (
            <button
              key={category.category}
              className={`category-tab ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Items for active category */}
        <div className="services-grid stagger" key={activeCategory}>
          {currentCategory.items.map(item => (
            <div key={item.name} className="service-card fade-in-up">
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
    </section>
  )
}
