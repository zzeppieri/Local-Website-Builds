import './Services.css'

export default function Services({ services, type }) {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <h2 className="services-heading">
          {type === 'menu' ? 'Our Menu' : 'Our Services'}
        </h2>
        {services.map(category => (
          <div key={category.category} className="services-category">
            <h3 className="category-name">{category.category}</h3>
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
