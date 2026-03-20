import './LunchSpecials.css'

export default function LunchSpecials({ specials }) {
  if (!specials) return null

  return (
    <section id="lunch-specials" className="section lunch-specials">
      <div className="section-inner">
        <h2 className="lunch-heading">Lunch Specials</h2>
        <div className="section-divider"></div>
        <p className="lunch-availability">{specials.availability}</p>
        <div className="lunch-grid">
          {specials.items.map(item => (
            <div key={item.name} className="lunch-card">
              <div className="lunch-card-price">{item.price}</div>
              <h3 className="lunch-card-name">{item.name}</h3>
              {item.description && (
                <p className="lunch-card-desc">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
