import './Navbar.css'

export default function Navbar({ name, links }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="logo-main">Skyline</span>
          <span className="logo-sub">Restaurant & Banquet</span>
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
          <li>
            <a href="tel:8606239296" className="nav-cta">Reservations</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
