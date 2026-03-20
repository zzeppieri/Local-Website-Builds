import './Services.css'

const CATEGORY_ICONS = {
  'Massage': '\u2766',
  'Facials': '\u2727',
  'Body Treatments': '\u2740',
  'Nails': '\u2662',
  'Waxing': '\u2736',
  'Hair Services': '\u2702',
  'Makeup & Beauty': '\u2764',
}

export default function Services({ services, type }) {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <h2 className="services-heading">Our Services</h2>
        <span className="gold-line" aria-hidden="true"></span>
        <p className="services-subtitle">
          Comprehensive treatments designed to enhance your appearance and promote good health
        </p>

        <div className="category-grid">
          {services.map(category => (
            <div key={category.category} className="category-card">
              <div className="category-card-front">
                <span className="category-icon" aria-hidden="true">
                  {CATEGORY_ICONS[category.category] || '\u2726'}
                </span>
                <h3 className="category-name">{category.category}</h3>
                <p className="category-count">{category.items.length} services</p>
                <span className="category-hint">Hover to explore</span>
              </div>
              <div className="category-card-back">
                <h3 className="category-back-name">{category.category}</h3>
                <ul className="category-items-list">
                  {category.items.map(item => (
                    <li key={item.name} className="category-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded detail below cards */}
        {services.map(category => (
          <div key={category.category} className="services-detail" id={`services-${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <h3 className="detail-heading">{category.category}</h3>
            <div className="detail-grid">
              {category.items.map(item => (
                <div key={item.name} className="detail-card">
                  <div className="detail-header">
                    <span className="detail-name">{item.name}</span>
                    <span className="detail-price">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="detail-desc">{item.description}</p>
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
