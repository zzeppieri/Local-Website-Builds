import './Services.css'

const CATEGORY_ICONS = {
  'Residential Plumbing': '\u{1F3E0}',
  'Water Heaters': '\u{1F525}',
  'Drain & Sewer': '\u{1F527}',
  'Specialty Services': '\u2699\uFE0F',
  'Commercial Plumbing': '\u{1F3E2}',
}

const CATEGORY_IMAGES = {
  'Residential Plumbing': {
    src: 'https://calljoetheplumber.com/wp-content/uploads/2016/01/residential-plumbing.jpg',
    alt: 'Residential plumbing services by Joe the Plumber',
  },
  'Water Heaters': {
    src: 'https://calljoetheplumber.com/wp-content/uploads/2016/01/water-heater.jpg',
    alt: 'Professional water heater installation and repair',
  },
  'Drain & Sewer': {
    src: 'https://calljoetheplumber.com/wp-content/uploads/2016/01/plumbing-drains.jpg',
    alt: 'Drain and sewer cleaning services',
  },
  'Commercial Plumbing': {
    src: 'https://calljoetheplumber.com/wp-content/uploads/2016/01/commercial-plumbing-hartford-ct.jpg',
    alt: 'Commercial plumbing services in Hartford CT area',
  },
}

export default function Services({ services }) {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-subtext">
          From routine repairs to emergency plumbing, we handle it all. Licensed professionals, quality workmanship, every time.
        </p>
        {services.map((category, catIdx) => {
          const categoryImage = CATEGORY_IMAGES[category.category]
          return (
            <div key={category.category} className="services-category" style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <h3 className="category-name">
                <span className="category-icon" aria-hidden="true">{CATEGORY_ICONS[category.category] || '\u{1F6BF}'}</span>
                {category.category}
              </h3>
              <div className={`services-category-content ${categoryImage ? 'has-image' : ''}`}>
                {categoryImage && (
                  <div className="category-image">
                    <img
                      src={categoryImage.src}
                      alt={categoryImage.alt}
                      loading="lazy"
                      width="400"
                      height="280"
                    />
                  </div>
                )}
                <div className="services-grid">
                  {category.items.map((item, idx) => (
                    <div key={item.name} className="service-card" style={{ animationDelay: `${catIdx * 0.1 + idx * 0.05}s` }}>
                      <div className="service-header">
                        <span className="service-name">{item.name}</span>
                      </div>
                      {item.description && (
                        <p className="service-desc">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
