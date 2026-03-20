import './Navbar.css'

const LOGO_SRC =
  'https://lh3.googleusercontent.com/sitesv/APaQ0SQtjPcObC_OsaR1pCNj_ig2hHNzaORKkIW5Pt6jx64CtSue0OoA4F0sPLVRyAY1tnZ-oPe5iQOWYm5jeoGqxI5ApOh84SGKxTfzkuGtcFI7fbpcyJ_wHJ9tBHkFMVLA81lD1rBurAcftV3f2WEXe9MGKvIOYgeFq-c=w16383'

export default function Navbar({ name, links }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img
            src={LOGO_SRC}
            alt={`${name} logo`}
            className="navbar-logo-img"
            width="40"
            height="40"
            loading="eager"
          />
          {name}
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
