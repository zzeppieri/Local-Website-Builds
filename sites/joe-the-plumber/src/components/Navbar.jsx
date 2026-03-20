import './Navbar.css'

const LOGO_URL = 'https://calljoetheplumber.com/wp-content/uploads/2024/01/Joe-the-Plumber-Logo.png'

export default function Navbar({ name, links, phone }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img
            src={LOGO_URL}
            alt={`${name} logo`}
            className="navbar-logo-img"
            width="160"
            height="48"
          />
        </a>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="navbar-links">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="navbar-phone-item">
            <a href={`tel:${phone}`} className="navbar-phone">{phone}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
