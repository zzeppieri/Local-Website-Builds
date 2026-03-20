import './Contact.css'

export default function Contact({ phone, phoneOrders, address, hours, email, googleMapsEmbedQuery }) {
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const mapsUrl = `https://www.google.com/maps?q=${googleMapsEmbedQuery}&output=embed`

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <h2 className="contact-heading">Visit Us</h2>
        <div className="section-divider"></div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Address</h3>
              <p>{fullAddress}</p>
            </div>
            <div className="contact-block">
              <h3>Call Us</h3>
              <p><a href={`tel:${phone}`}>{phone}</a></p>
              {phoneOrders && (
                <p className="phone-orders">
                  Orders: <a href={`tel:${phoneOrders}`}>{phoneOrders}</a>
                </p>
              )}
            </div>
            {email && (
              <div className="contact-block">
                <h3>Email</h3>
                <p><a href={`mailto:${email}`}>{email}</a></p>
              </div>
            )}
            <div className="contact-block">
              <h3>Hours</h3>
              <ul className="hours-list">
                {hours.map(h => (
                  <li key={h.days}>
                    <span className="hours-days">{h.days}</span>
                    <span className={`hours-time ${h.note === 'Closed' ? 'hours-closed' : ''}`}>
                      {h.note === 'Closed' ? 'Closed' : h.close ? `${h.open} \u2013 ${h.close}` : h.open}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="hours-note">Orders must be placed 30 min before closing</p>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Location"
              src={mapsUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
