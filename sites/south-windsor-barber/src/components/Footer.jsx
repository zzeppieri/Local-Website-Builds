import './Footer.css'

const SOCIAL_ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  yelp: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.986-4.378c.564-.83 1.872-.482 1.872.498v4.077zm-8.274 5.89l-1.478-4.986c-.283-.955 1.03-1.67 1.678-.912l3.487 4.076c.648.757-.125 1.82-1.01 1.82h-2.677zM6.79 17.196l3.88-3.39c.74-.648 1.78.2 1.327 1.08l-2.4 4.68c-.453.88-1.87.518-1.87-.488v-1.882zm-.18-6.89l4.562 2.346c.87.447.56 1.748-.396 1.658L5.83 13.836c-.956-.09-1.162-1.38-.264-1.646l1.044-.884zM10.5 2.819l1.508 5.086c.288.97-1.016 1.664-1.662.886L6.84 4.62c-.646-.778.137-1.834 1.024-1.834h2.636z"/>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
    </svg>
  ),
}

export default function Footer({ name, socialLinks, address }) {
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const activeSocials = Object.entries(socialLinks).filter(([, url]) => url)

  return (
    <footer className="footer">
      <div className="barber-stripe"></div>
      <div className="section-inner footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{name}</span>
          <span className="footer-est">Established 1927</span>
        </div>
        {activeSocials.length > 0 && (
          <div className="footer-socials">
            {activeSocials.map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={platform}
              >
                {SOCIAL_ICONS[platform]}
              </a>
            ))}
          </div>
        )}
        <p className="footer-address">{fullAddress}</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
