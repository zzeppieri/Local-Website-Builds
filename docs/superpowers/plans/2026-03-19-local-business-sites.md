# Local Business Website Building — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 10 unique, production-grade React+Vite websites for local businesses near Windsor/Hartford CT, each with a distinctive visual identity driven by the frontend-design skill.

**Architecture:** Independent Vite apps created from a copy-once scaffold. Each site imports business data from a static JSON file and renders through themed components. CSS variables enable instant reskinning while scaffold components provide structural boilerplate.

**Tech Stack:** React 18.3.1, Vite 5.4.8, vanilla CSS with CSS variables, Google Fonts, Vercel free tier deployment.

**Spec:** `docs/superpowers/specs/2026-03-19-local-business-sites-design.md`

---

## File Structure

### Scaffold (`_scaffold/`)

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies: react, react-dom, vite, @vitejs/plugin-react |
| `vite.config.js` | Minimal Vite config with React plugin |
| `index.html` | HTML shell with `%TITLE%`, `%DESCRIPTION%`, `%FONTS_URL%` placeholders |
| `src/main.jsx` | React 18 createRoot entry |
| `src/App.jsx` | Imports data.json, renders Navbar → Hero → Services → About → Contact → Footer |
| `src/components/Navbar.jsx` | Fixed top nav, CSS-only mobile hamburger (checkbox hack) |
| `src/components/Hero.jsx` | Full-viewport hero with name, tagline, CTA button |
| `src/components/Services.jsx` | Responsive grid of service categories + items |
| `src/components/About.jsx` | About text + feature pill badges |
| `src/components/Contact.jsx` | Two-column: hours+address+phone / Google Maps iframe (lazy-loaded) |
| `src/components/Footer.jsx` | Social SVG icons, address, copyright |
| `src/base.css` | CSS reset, responsive utilities, smooth scroll |
| `src/theme.css` | CSS variable definitions (placeholder values) |
| `src/data.json` | Empty schema matching the business JSON format |

### Per-Site (`sites/{slug}/`)

Each site starts as a copy of `_scaffold/` and gets customized:
- `theme.css` — completely rewritten with unique colors, fonts, spacing
- `index.html` — placeholders replaced with real meta tags + chosen Google Fonts
- `src/data.json` — populated from `businesses/{slug}.json`
- All components — restyled/restructured by frontend-design skill

### Business Data (`businesses/`)

10 JSON files following the schema in the spec, each containing business info + designBrief.

---

## Phase 0: Build Scaffold

### Task 1: Create scaffold package.json and Vite config

**Files:**
- Create: `_scaffold/package.json`
- Create: `_scaffold/vite.config.js`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "scaffold",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.8"
  }
}
```

- [ ] **Step 2: Create vite.config.js**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 3: Create index.html with placeholders**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="%DESCRIPTION%" />
    <meta property="og:title" content="%TITLE%" />
    <meta property="og:description" content="%DESCRIPTION%" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="%OG_URL%" />
    <link rel="canonical" href="%OG_URL%" />
    <title>%TITLE%</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="%FONTS_URL%" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Create .gitignore files**

Create `_scaffold/.gitignore`:
```
node_modules
dist
```

Create root `.gitignore` at `/home/deck/projects/local-website-building/.gitignore`:
```
node_modules
dist
.DS_Store
```

- [ ] **Step 5: Install dependencies and verify**

```bash
cd /home/deck/projects/local-website-building/_scaffold
npm install
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 6: Commit**

```bash
cd /home/deck/projects/local-website-building
git add .gitignore _scaffold/package.json _scaffold/vite.config.js _scaffold/index.html _scaffold/package-lock.json _scaffold/.gitignore
git commit -m "feat: scaffold package.json, vite config, index.html template, and gitignore"
```

---

### Task 2: Create scaffold CSS files

**Files:**
- Create: `_scaffold/src/base.css`
- Create: `_scaffold/src/theme.css`

- [ ] **Step 1: Create base.css with reset and responsive utilities**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

#root {
  min-height: 100vh;
}

img, svg {
  display: block;
  max-width: 100%;
}

a {
  color: var(--accent);
  text-decoration: none;
}
a:hover {
  color: var(--accent-hover);
}

button {
  cursor: pointer;
  font: inherit;
  border: none;
  background: none;
}

/* Section utility */
.section {
  padding: var(--section-padding);
}
.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  :root {
    --section-padding: 3rem 1rem;
  }
}
```

- [ ] **Step 2: Create theme.css with placeholder variables**

```css
:root {
  /* Colors — replaced per site */
  --bg: #111111;
  --bg-light: #1a1a1a;
  --text: #f0f0f0;
  --text-muted: #999999;
  --accent: #ff6b35;
  --accent-hover: #ff8555;
  --surface: #222222;
  --border: #333333;

  /* Typography — replaced per site */
  --font-display: 'Georgia', serif;
  --font-body: 'system-ui', sans-serif;

  /* Layout */
  --nav-height: 72px;
  --section-padding: 5rem 1.5rem;
  --max-width: 1200px;
  --radius: 8px;
}
```

- [ ] **Step 3: Commit**

```bash
git add _scaffold/src/base.css _scaffold/src/theme.css
git commit -m "feat: scaffold base.css reset and theme.css variable template"
```

---

### Task 3: Create scaffold entry point and App shell

**Files:**
- Create: `_scaffold/src/main.jsx`
- Create: `_scaffold/src/App.jsx`
- Create: `_scaffold/src/data.json`

- [ ] **Step 1: Create data.json with empty schema**

```json
{
  "slug": "scaffold",
  "name": "Business Name",
  "tagline": "Your tagline here",
  "type": "business",
  "address": {
    "street": "123 Main St",
    "city": "Windsor",
    "state": "CT",
    "zip": "06095"
  },
  "phone": "(860) 555-0000",
  "email": null,
  "website": null,
  "hours": [
    { "days": "Mon-Fri", "open": "9:00 AM", "close": "5:00 PM" },
    { "days": "Sat-Sun", "open": "Closed", "close": "" }
  ],
  "services": [
    {
      "category": "Services",
      "items": [
        { "name": "Service One", "description": "Description of service", "price": null }
      ]
    }
  ],
  "socialLinks": {
    "facebook": null,
    "instagram": null,
    "yelp": null,
    "google": null
  },
  "googleMapsEmbedQuery": "Windsor+CT",
  "about": "About this business.",
  "features": ["Feature 1", "Feature 2"],
  "designBrief": {}
}
```

- [ ] **Step 2: Create main.jsx**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './theme.css'
import './base.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

Note: `theme.css` imported before `base.css` so variables are defined before they're used.

- [ ] **Step 3: Create App.jsx**

```jsx
import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  const ctaText = data.type === 'restaurant' ? 'View Menu' : 'Our Services'
  const ctaHref = '#services'

  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          ctaText={ctaText}
          ctaHref={ctaHref}
        />
        <Services
          services={data.services}
          type={data.type === 'restaurant' ? 'menu' : 'list'}
        />
        <About about={data.about} features={data.features} />
        <Contact
          phone={data.phone}
          address={data.address}
          hours={data.hours}
          email={data.email}
          googleMapsEmbedQuery={data.googleMapsEmbedQuery}
        />
      </main>
      <Footer
        name={data.name}
        socialLinks={data.socialLinks}
        address={data.address}
      />
    </>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add _scaffold/src/main.jsx _scaffold/src/App.jsx _scaffold/src/data.json
git commit -m "feat: scaffold entry point, App shell, and data schema"
```

---

### Task 4: Create Navbar component

**Files:**
- Create: `_scaffold/src/components/Navbar.jsx`

- [ ] **Step 1: Create Navbar.jsx**

CSS-only hamburger using checkbox hack. No JS state needed.

```jsx
import './Navbar.css'

export default function Navbar({ name, links }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">{name}</a>
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
```

- [ ] **Step 2: Create Navbar.css**

Create `_scaffold/src/components/Navbar.css`:

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}
.navbar-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}
.navbar-logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  text-decoration: none;
}
.navbar-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}
.navbar-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  transition: color 0.2s;
}
.navbar-links a:hover {
  color: var(--accent);
}

/* Hamburger toggle */
.nav-toggle { display: none; }
.nav-hamburger { display: none; }

@media (max-width: 768px) {
  .nav-hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 101;
  }
  .nav-hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text);
    transition: transform 0.3s, opacity 0.3s;
  }
  .nav-toggle:checked ~ .nav-hamburger span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .nav-toggle:checked ~ .nav-hamburger span:nth-child(2) {
    opacity: 0;
  }
  .nav-toggle:checked ~ .nav-hamburger span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
  .navbar-links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--bg);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
    border-bottom: 1px solid var(--border);
    transform: translateY(-100%);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    pointer-events: none;
  }
  .nav-toggle:checked ~ .navbar-links {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add _scaffold/src/components/Navbar.jsx _scaffold/src/components/Navbar.css
git commit -m "feat: scaffold Navbar component with CSS-only mobile hamburger"
```

---

### Task 5: Create Hero component

**Files:**
- Create: `_scaffold/src/components/Hero.jsx`
- Create: `_scaffold/src/components/Hero.css`

- [ ] **Step 1: Create Hero.jsx**

```jsx
import './Hero.css'

export default function Hero({ name, tagline, ctaText, ctaHref }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-tagline">{tagline}</p>
        <a href={ctaHref} className="hero-cta">{ctaText}</a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create Hero.css**

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1.5rem;
  padding-top: var(--nav-height);
  background: var(--bg);
}
.hero-inner {
  max-width: 800px;
}
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--text);
  line-height: 1.1;
  margin-bottom: 1rem;
}
.hero-tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  line-height: 1.4;
}
.hero-cta {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  font-size: 1rem;
  border-radius: var(--radius);
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}
.hero-cta:hover {
  background: var(--accent-hover);
  color: var(--bg);
  transform: translateY(-2px);
}
```

- [ ] **Step 3: Commit**

```bash
git add _scaffold/src/components/Hero.jsx _scaffold/src/components/Hero.css
git commit -m "feat: scaffold Hero component with responsive typography"
```

---

### Task 6: Create Services component

**Files:**
- Create: `_scaffold/src/components/Services.jsx`
- Create: `_scaffold/src/components/Services.css`

- [ ] **Step 1: Create Services.jsx**

```jsx
import './Services.css'

export default function Services({ services, type }) {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <h2 className="services-heading">
          {type === 'menu' ? 'Our Menu' : 'Our Services'}
        </h2>
        {services.map(category => (
          <div key={category.category} className="services-category">
            <h3 className="category-name">{category.category}</h3>
            <div className="services-grid">
              {category.items.map(item => (
                <div key={item.name} className="service-card">
                  <div className="service-header">
                    <span className="service-name">{item.name}</span>
                    {type === 'menu' && item.price && (
                      <span className="service-price">{item.price}</span>
                    )}
                  </div>
                  {item.description && (
                    <p className="service-desc">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create Services.css**

```css
.services-heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--text);
  text-align: center;
  margin-bottom: 3rem;
}
.services-category {
  margin-bottom: 2.5rem;
}
.category-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
}
.service-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}
.service-name {
  font-weight: 600;
  color: var(--text);
}
.service-price {
  color: var(--accent);
  font-weight: 600;
  white-space: nowrap;
}
.service-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
```

- [ ] **Step 3: Commit**

```bash
git add _scaffold/src/components/Services.jsx _scaffold/src/components/Services.css
git commit -m "feat: scaffold Services component with menu/list modes"
```

---

### Task 7: Create About component

**Files:**
- Create: `_scaffold/src/components/About.jsx`
- Create: `_scaffold/src/components/About.css`

- [ ] **Step 1: Create About.jsx**

```jsx
import './About.css'

export default function About({ about, features }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">{about}</p>
        {features && features.length > 0 && (
          <div className="about-features">
            {features.map(feature => (
              <span key={feature} className="feature-pill">{feature}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create About.css**

```css
.about-inner {
  text-align: center;
  max-width: 700px;
}
.about-heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--text);
  margin-bottom: 1.5rem;
}
.about-text {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}
.about-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}
.feature-pill {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text);
}
```

- [ ] **Step 3: Commit**

```bash
git add _scaffold/src/components/About.jsx _scaffold/src/components/About.css
git commit -m "feat: scaffold About component with feature pills"
```

---

### Task 8: Create Contact component

**Files:**
- Create: `_scaffold/src/components/Contact.jsx`
- Create: `_scaffold/src/components/Contact.css`

- [ ] **Step 1: Create Contact.jsx**

```jsx
import './Contact.css'

export default function Contact({ phone, address, hours, email, googleMapsEmbedQuery }) {
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const mapsUrl = `https://www.google.com/maps?q=${googleMapsEmbedQuery}&output=embed`

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Address</h3>
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
                      {h.close ? `${h.open} – ${h.close}` : h.open}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Location"
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
```

- [ ] **Step 2: Create Contact.css**

```css
.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--text);
  text-align: center;
  margin-bottom: 3rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.contact-block {
  margin-bottom: 1.5rem;
}
.contact-block h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.contact-block p,
.contact-block a {
  color: var(--text);
  font-size: 1rem;
}
.hours-list {
  list-style: none;
}
.hours-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--border);
}
.hours-days {
  color: var(--text);
  font-weight: 500;
}
.hours-time {
  color: var(--text-muted);
}
.contact-map iframe {
  width: 100%;
  height: 350px;
  border: 0;
  border-radius: var(--radius);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add _scaffold/src/components/Contact.jsx _scaffold/src/components/Contact.css
git commit -m "feat: scaffold Contact component with lazy-loaded Maps"
```

---

### Task 9: Create Footer component

**Files:**
- Create: `_scaffold/src/components/Footer.jsx`
- Create: `_scaffold/src/components/Footer.css`

- [ ] **Step 1: Create Footer.jsx**

Social icons as inline SVGs. Only renders links for non-null socialLinks entries.

```jsx
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
      <div className="section-inner footer-inner">
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
        <p className="footer-copy">&copy; {new Date().getFullYear()} {name}</p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Create Footer.css**

```css
.footer {
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: 3rem 1.5rem;
}
.footer-inner {
  text-align: center;
}
.footer-socials {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}
.social-link {
  color: var(--text-muted);
  transition: color 0.2s;
}
.social-link:hover {
  color: var(--accent);
}
.footer-address {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.footer-copy {
  color: var(--text-muted);
  font-size: 0.8rem;
  opacity: 0.7;
}
```

- [ ] **Step 3: Commit**

```bash
git add _scaffold/src/components/Footer.jsx _scaffold/src/components/Footer.css
git commit -m "feat: scaffold Footer component with SVG social icons"
```

---

### Task 10: Verify scaffold builds and runs

- [ ] **Step 1: Run build**

```bash
cd /home/deck/projects/local-website-building/_scaffold
npm run build
```

Expected: `dist/` directory created, exit code 0, no errors.

- [ ] **Step 2: Run preview and verify it starts**

```bash
cd /home/deck/projects/local-website-building/_scaffold
npm run preview &
sleep 2
curl -s -o /dev/null -w "%{http_code}" http://localhost:4173
kill %1
```

Expected: HTTP 200. This confirms the build output serves correctly.

- [ ] **Step 3: Commit verified scaffold**

```bash
git add _scaffold/
git commit -m "feat: scaffold verified — builds and serves successfully"
```

---

## Phase 1: Content Scraping

### Task 11: Scrape Tier 1 business websites (4 parallel agents)

**Files:**
- Create: `businesses/family-pizzeria.json`
- Create: `businesses/buckland-cleaners.json`
- Create: `businesses/village-pizza.json`
- Create: `businesses/scruples-salon.json`

Dispatch 4 parallel agents. Each agent:

- [ ] **Step 1: WebFetch the business's current website**

Use the fallback order from the spec if primary fails:
1. Business website → 2. Google Maps → 3. Yelp → 4. Facebook → 5. Manual

Known risks:
- Village Pizza: JS-rendered SPA — try Yelp/Google first
- All: verify phone numbers match across sources

- [ ] **Step 2: Structure data into JSON matching the spec schema**

Required fields must meet minimums:
- `name`, `address`, `phone` — exact
- `hours` — at least weekday + weekend
- `services` — at least 3 items
- `about` — at least 2 sentences

- [ ] **Step 3: Write the designBrief for the business**

Follow the design brief system from the spec. Each brief must include:
`industry`, `mood`, `colorDirection`, `inspiration`, `avoidance`, `heroStyle`, `uniqueElement`

Pizza site differentiation (from spec):
- Family Pizzeria: warm, family-oriented, rustic-Italian, amber tones, serif display
- Village Pizza: modern minimalist, light palette, clean lines, casual

- [ ] **Step 4: Save JSON to `businesses/{slug}.json`**

- [ ] **Step 5: Verify data completeness against checklist**

- [ ] **Step 6: Commit**

```bash
git add businesses/
git commit -m "feat: scraped content and design briefs for Tier 1 businesses"
```

---

### Task 12: Scrape Tier 2 business websites (3 parallel agents)

**Files:**
- Create: `businesses/south-windsor-barber.json`
- Create: `businesses/bocasa-beauty-spa.json`
- Create: `businesses/windsor-pizza.json`

Same process as Task 11. Additional notes:
- Windsor Pizza design brief: bold street-food energy, dark palette, condensed sans-serif — must look completely different from Family Pizzeria and Village Pizza.
- Bocasa Beauty Spa: may timeout on primary site — try Yelp first.

- [ ] **Step 1: WebFetch each business website (fallback: Google → Yelp → Facebook → manual)**
- [ ] **Step 2: Structure data into JSON matching spec schema**
- [ ] **Step 3: Verify required fields meet minimums (name, address, phone, hours, 3+ services, 2+ sentence about)**
- [ ] **Step 4: Write designBrief for each business**
- [ ] **Step 5: Save JSON files to `businesses/`**
- [ ] **Step 6: Commit**

```bash
git add businesses/
git commit -m "feat: scraped content and design briefs for Tier 2 businesses"
```

---

### Task 13: Scrape Tier 3 business websites (3 parallel agents)

**Files:**
- Create: `businesses/skyline-restaurant.json`
- Create: `businesses/joe-the-plumber.json`
- Create: `businesses/day-hill-automotive.json`

Same process as Task 11.

- [ ] **Step 1: WebFetch each business website (fallback: Google → Yelp → Facebook → manual)**
- [ ] **Step 2: Structure data into JSON matching spec schema**
- [ ] **Step 3: Verify required fields meet minimums**
- [ ] **Step 4: Write designBrief for each business**
- [ ] **Step 5: Save JSON files to `businesses/`**
- [ ] **Step 6: Commit**

```bash
git add businesses/
git commit -m "feat: scraped content and design briefs for Tier 3 businesses"
```

---

## Phase 2: Tier 1 Site Builds (4 Parallel Agents)

### Task 14: Build Family Pizzeria site

**Files:**
- Create: `sites/family-pizzeria/` (full Vite app)

Each build agent follows this procedure:

- [ ] **Step 1: Copy scaffold and set up site**

```bash
cd /home/deck/projects/local-website-building
cp -r _scaffold/ sites/family-pizzeria/
cd sites/family-pizzeria
sed -i 's/"name": "scaffold"/"name": "family-pizzeria"/' package.json
cp ../../businesses/family-pizzeria.json src/data.json
npm install
```

- [ ] **Step 2: Apply frontend-design skill**

Read `src/data.json` designBrief. Using the `frontend-design` skill:
- Choose distinctive fonts (Google Fonts) that match the brief's mood
- Create a complete `theme.css` with unique color palette
- Customize all component markup and styles to match the aesthetic
- Add CSS animations/effects matching the brief's `uniqueElement`
- Update `index.html`: replace `%TITLE%` (format: `{name} — {tagline}`), `%DESCRIPTION%` (first 160 chars of about), `%FONTS_URL%`, and `%OG_URL%` (format: `https://{slug}.vercel.app`)

**Constraint:** Must not reuse fonts from any other completed site.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: exit 0, no errors.

- [ ] **Step 4: Verify content accuracy**

Check that all data in the rendered site matches `businesses/family-pizzeria.json`:
- Business name, phone, address, hours all correct
- Menu items match scraped data
- No placeholder text remaining (grep for "Lorem", "TODO", "placeholder", "Business Name")

- [ ] **Step 5: Commit**

```bash
git add sites/family-pizzeria/
git commit -m "feat: Family Pizzeria site — warm rustic Italian aesthetic"
```

---

### Task 15: Build Buckland Cleaners site

**Files:** Create: `sites/buckland-cleaners/` (full Vite app)
Design direction: clean, professional, trust-focused. Service business (not restaurant) — uses `type: "list"`.

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/buckland-cleaners/ && git commit`)

---

### Task 16: Build Village Pizza site

**Files:** Create: `sites/village-pizza/` (full Vite app)
Design direction: modern minimalist, light palette, clean lines. Must look completely different from Family Pizzeria.

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/village-pizza/ && git commit`)

---

### Task 17: Build Scruples Salon site

**Files:** Create: `sites/scruples-salon/` (full Vite app)
Design direction: luxurious, calm, feminine, modern. Salon/spa aesthetic — elegant serif headings, muted tones.

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/scruples-salon/ && git commit`)

---

### Task 18: Review Tier 1 sites for visual distinctiveness

After Tasks 14-17 complete:

- [ ] **Step 1: Build all 4 sites and check for errors**

```bash
for site in family-pizzeria buckland-cleaners village-pizza scruples-salon; do
  echo "=== Building $site ==="
  cd /home/deck/projects/local-website-building/sites/$site
  npm run build
done
```

- [ ] **Step 2: Verify no two sites share fonts or color schemes**

Check each site's `theme.css` — no repeated `--font-display` or `--font-body` values. No similar `--accent` colors.

- [ ] **Step 3: Grep for placeholder content across all sites**

```bash
cd /home/deck/projects/local-website-building/sites
grep -r "Lorem\|TODO\|placeholder\|Business Name\|555-0000" --include="*.jsx" --include="*.json" --include="*.css"
```

Expected: no matches.

- [ ] **Step 4: Verify responsive behavior**

For each site, run `npm run preview` and manually check at 375px, 768px, and 1440px widths:
- Navbar hamburger appears on mobile, horizontal links on desktop
- Hero text scales via clamp(), no overflow
- Services grid collapses to single column on mobile
- Contact section stacks vertically on mobile

- [ ] **Step 5: Lighthouse audit (manual)**

For each site, run Lighthouse in Chrome DevTools against `npm run preview`:
- Target: 90+ on Performance, Accessibility, Best Practices, SEO
- Maps iframe may lower Performance — acceptable if rest of page scores well

- [ ] **Step 6: Commit any fixes**

---

## Phase 3: Tier 2 Site Builds (3 Parallel Agents)

### Task 19: Build South Windsor Barber Shop site

**Files:** Create: `sites/south-windsor-barber/` (full Vite app)
**Font constraint:** Must not reuse fonts from Tier 1 sites (list fonts used so far in the avoidance field).

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/south-windsor-barber/ && git commit`)

---

### Task 20: Build Bocasa Beauty Spa site

**Files:** Create: `sites/bocasa-beauty-spa/` (full Vite app)

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/bocasa-beauty-spa/ && git commit`)

---

### Task 21: Build Windsor Pizza site

**Files:** Create: `sites/windsor-pizza/` (full Vite app)
**Critical:** Must look completely different from Family Pizzeria and Village Pizza. Bold street-food energy, dark palette, condensed sans-serif.

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/windsor-pizza/ && git commit`)

---

### Task 22: Review Tier 2 sites + cross-check with Tier 1

- [ ] **Step 1: Build all 7 sites and check for errors**
- [ ] **Step 2: Verify all 7 sites have unique fonts (no repeats across any site)**
- [ ] **Step 3: Grep all 7 sites for placeholder content**
- [ ] **Step 4: Verify responsive behavior at 375px, 768px, 1440px**
- [ ] **Step 5: Lighthouse audit (target 90+)**
- [ ] **Step 6: Commit any fixes**

---

## Phase 4: Tier 3 Site Builds (3 Parallel Agents)

### Task 23: Build Skyline Restaurant site

**Files:** Create: `sites/skyline-restaurant/` (full Vite app)

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/skyline-restaurant/ && git commit`)

---

### Task 24: Build Joe the Plumber site

**Files:** Create: `sites/joe-the-plumber/` (full Vite app)

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/joe-the-plumber/ && git commit`)

---

### Task 25: Build Day Hill Automotive site

**Files:** Create: `sites/day-hill-automotive/` (full Vite app)

- [ ] **Step 1: Copy scaffold, update package.json, copy business JSON, npm install**
- [ ] **Step 2: Apply frontend-design skill (read designBrief, theme, customize components, replace index.html placeholders)**
- [ ] **Step 3: Verify build** (`npm run build` — exit 0)
- [ ] **Step 4: Verify content accuracy** (no placeholder text, data matches JSON)
- [ ] **Step 5: Commit** (`git add sites/day-hill-automotive/ && git commit`)

---

### Task 26: Final review — all 10 sites

- [ ] **Step 1: Build all 10 sites**

```bash
for site in family-pizzeria buckland-cleaners village-pizza scruples-salon south-windsor-barber bocasa-beauty-spa windsor-pizza skyline-restaurant joe-the-plumber day-hill-automotive; do
  echo "=== Building $site ==="
  cd /home/deck/projects/local-website-building/sites/$site
  npm run build || echo "FAILED: $site"
  cd /home/deck/projects/local-website-building
done
```

- [ ] **Step 2: Verify all 10 sites have unique fonts (no repeats)**

- [ ] **Step 3: Grep all sites for placeholder content**

- [ ] **Step 4: Verify content accuracy for all 10**

- [ ] **Step 5: Verify responsive behavior at 375px, 768px, 1440px for all 10**

- [ ] **Step 6: Lighthouse audit all 10 (target 90+ on each category)**

- [ ] **Step 7: Commit any final fixes**

```bash
git add sites/ businesses/
git commit -m "feat: all 10 business sites complete and verified"
```

---

## Phase 5: Deployment

### Task 27: Initialize GitHub repo and push

- [ ] **Step 1: Create GitHub repo**

```bash
cd /home/deck/projects/local-website-building
gh repo create zzeppieri/local-biz-sites --private --source=. --remote=origin
```

- [ ] **Step 2: Create root .gitignore**

```
node_modules
dist
.DS_Store
```

- [ ] **Step 3: Push to GitHub**

```bash
git push -u origin master
```

User will provide a PAT for this step.

---

### Task 28: Deploy sites to Vercel

- [ ] **Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

- [ ] **Step 2: Deploy each site**

For each of the 10 sites:

```bash
cd /home/deck/projects/local-website-building/sites/{slug}
vercel --name {slug} --yes
```

- [ ] **Step 3: Record all preview URLs**

Save URLs to a `DEPLOYMENTS.md` file in project root:

```markdown
# Deployed Sites

| Business | URL |
|----------|-----|
| Family Pizzeria | https://family-pizzeria.vercel.app |
| Buckland Cleaners | https://buckland-cleaners.vercel.app |
| ... | ... |
```

- [ ] **Step 4: Commit deployments file**

```bash
git add DEPLOYMENTS.md
git commit -m "docs: add deployment URLs for all 10 sites"
```
