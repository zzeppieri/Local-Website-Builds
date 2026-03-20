import './EmergencyBanner.css'

export default function EmergencyBanner({ phone, hoursNote }) {
  return (
    <div className="emergency-banner">
      <div className="section-inner emergency-inner">
        <div className="emergency-pulse" aria-hidden="true"></div>
        <span className="emergency-text">
          <strong>Plumbing Emergency?</strong> {hoursNote} &mdash;{' '}
          <a href={`tel:${phone}`} className="emergency-phone">Call {phone}</a>
        </span>
      </div>
    </div>
  )
}
