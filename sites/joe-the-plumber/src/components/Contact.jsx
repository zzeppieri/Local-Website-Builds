import './Contact.css'

export default function Contact({ phone, phoneSecondary, address, secondaryLocation, hours, hoursNote, email, googleMapsEmbedQuery }) {
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const secondaryAddr = secondaryLocation
    ? `${secondaryLocation.street}, ${secondaryLocation.city}, ${secondaryLocation.state} ${secondaryLocation.zip}`
    : null
  const mapsUrl = `https://www.google.com/maps?q=${googleMapsEmbedQuery}&output=embed`

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtext">Ready to fix your plumbing? Give us a call or visit one of our two locations.</p>

        <div className="contact-phone-block">
          <a href={`tel:${phone}`} className="contact-phone-cta">
            <span className="phone-cta-icon">&#9742;</span>
            {phone}
          </a>
          {phoneSecondary && (
            <a href={`tel:${phoneSecondary}`} className="contact-phone-secondary">
              Second Line: {phoneSecondary}
            </a>
          )}
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Main Office</h3>
              <p>{fullAddress}</p>
            </div>
            {secondaryAddr && (
              <div className="contact-block">
                <h3>Niantic Office</h3>
                <p>{secondaryAddr}</p>
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
              {hoursNote && <p className="hours-note">{hoursNote}</p>}
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
