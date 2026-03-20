import './Contact.css'

export default function Contact({ phone, address, hours, email, happyHour, googleMapsEmbedQuery }) {
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const mapsUrl = `https://www.google.com/maps?q=${googleMapsEmbedQuery}&output=embed`

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <span className="section-label">Visit Us</span>
        <h2 className="contact-heading">Contact & Hours</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Location</h3>
              <p>{fullAddress}</p>
              <p className="contact-note">Near Bradley International Airport</p>
            </div>
            <div className="contact-block">
              <h3>Reservations</h3>
              <p><a href={`tel:${phone}`}>{phone}</a></p>
            </div>
            {email && (
              <div className="contact-block">
                <h3>Email</h3>
                <p><a href={`mailto:${email}`}>{email}</a></p>
              </div>
            )}
            <div className="contact-block">
              <h3>Dining Hours</h3>
              <ul className="hours-list">
                {hours.map(h => (
                  <li key={h.days}>
                    <span className="hours-days">{h.days}</span>
                    <span className="hours-time">
                      {h.close ? `${h.open} \u2013 ${h.close}` : h.open}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {happyHour && (
              <div className="contact-block happy-hour">
                <h3>Happy Hour</h3>
                <p>{happyHour.days}, {happyHour.open} \u2013 {happyHour.close}</p>
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
