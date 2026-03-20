import { useState } from 'react'
import './Services.css'

export default function Services({ services, type }) {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <h2 className="services-heading">
          {type === 'menu' ? 'Our Menu' : 'Our Services'}
        </h2>
        <div className="section-divider"></div>

        {/* Category tab navigation */}
        <div className="menu-tabs">
          {services.map((category, i) => (
            <button
              key={category.category}
              className={`menu-tab ${i === activeCategory ? 'menu-tab-active' : ''}`}
              onClick={() => setActiveCategory(i)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active category content */}
        {services.map((category, i) => (
          <div
            key={category.category}
            className={`services-category ${i === activeCategory ? 'category-visible' : 'category-hidden'}`}
          >
            <h3 className="category-name">{category.category}</h3>
            {category.note && (
              <p className="category-note">{category.note}</p>
            )}
            <div className="services-grid">
              {category.items.map(item => (
                <div key={item.name} className="service-card">
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
        ))}
      </div>
    </section>
  )
}
