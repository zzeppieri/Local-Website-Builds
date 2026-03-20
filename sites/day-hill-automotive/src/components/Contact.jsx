import { useEffect, useRef } from 'react'
import './Contact.css'

export default function Contact({ phone, address, hours, email, googleMapsEmbedQuery }) {
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const mapsUrl = `https://www.google.com/maps?q=${googleMapsEmbedQuery}&output=embed`
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section contact">
      <div className="section-inner reveal" ref={ref}>
        <span className="section-label">Get In Touch</span>
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Location</h3>
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
                      {h.close === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact-block">
              <h3>Amenities</h3>
              <ul className="amenities-list">
                <li>Free WiFi in Waiting Room</li>
                <li>After-Hours Drop-Off Available</li>
                <li>Local Shuttle Service (7-9 AM)</li>
              </ul>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Day Hill Automotive Location"
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
