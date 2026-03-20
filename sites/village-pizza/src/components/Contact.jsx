import './Contact.css'

export default function Contact({ phone, address, hours, deliveryHours, email, googleMapsEmbedQuery }) {
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const mapsUrl = `https://www.google.com/maps?q=${googleMapsEmbedQuery}&output=embed`

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Address</h3>
              <p>{fullAddress}</p>
            </div>
            <div className="contact-block">
              <h3>Phone</h3>
              <p><a href={`tel:${phone}`}>{phone}</a></p>
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
                    <span className="hours-time">
                      {h.close ? `${h.open} – ${h.close}` : h.open}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {deliveryHours && deliveryHours.length > 0 && (
              <div className="contact-block">
                <h3>Delivery Hours</h3>
                <ul className="hours-list">
                  {deliveryHours.map(h => (
                    <li key={h.days}>
                      <span className="hours-days">{h.days}</span>
                      <span className="hours-time">
                        {h.close ? `${h.open} – ${h.close}` : h.open}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
