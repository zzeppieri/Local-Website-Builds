import './TrustBar.css'

export default function TrustBar({ certifications }) {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {certifications.map(cert => (
          <div key={cert} className="trust-item">
            <svg className="trust-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{cert}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
