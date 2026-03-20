import './Navbar.css'

export default function Navbar({ name, links, phone }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img
            src="https://dayhillauto.com/Files/Images/logo.jpg"
            alt="Day Hill Automotive Inc logo"
            className="logo-img"
            width="40"
            height="40"
            loading="eager"
          />
          <span className="logo-text">{name}</span>
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
          <li className="nav-phone">
            <a href={`tel:${phone}`} className="nav-phone-link">{phone}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
