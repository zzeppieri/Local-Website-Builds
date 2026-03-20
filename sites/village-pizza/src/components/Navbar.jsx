import './Navbar.css'

const LOGO_URL = 'https://shop-logos.imgix.net/shops/30395/original/VillagePizza2.jpg'

export default function Navbar({ name, links }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img
            src={`${LOGO_URL}?w=120&auto=format`}
            alt={`${name} logo`}
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text">{name}</span>
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
        </ul>
      </div>
    </nav>
  )
}
