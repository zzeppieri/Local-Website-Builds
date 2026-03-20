import './TrustBar.css'

export default function TrustBar({ certifications }) {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {certifications.map(cert => (
          <div key={cert.name} className="trust-item">
            <img
              src={cert.image}
              alt={`${cert.name} certification badge`}
              className="trust-badge-img"
              loading="lazy"
              width="48"
              height="48"
            />
            <span>{cert.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
