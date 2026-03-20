import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Menu', href: '#services' },
  { label: 'Our Story', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  const banquetServices = data.services.filter(s => s.category === 'Banquets & Events')
  const menuServices = data.services.filter(s => s.category !== 'Banquets & Events')

  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          ctaText="Explore Our Menu"
          ctaHref="#services"
        />
        <Services
          services={menuServices}
          type="menu"
        />
        <About about={data.about} features={data.features} />
        <Banquets services={banquetServices} />
        <Contact
          phone={data.phone}
          address={data.address}
          hours={data.hours}
          email={data.email}
          happyHour={data.happyHour}
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

function Banquets({ services }) {
  return (
    <section id="events" className="section banquets">
      <div className="section-inner">
        <span className="section-label">Celebrations & Events</span>
        <h2 className="banquets-heading">Your Special Occasion Awaits</h2>
        <div className="banquets-grid">
          {services.map(cat =>
            cat.items.map((item, i) => (
              <div key={item.name} className="banquet-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="banquet-icon">{getBanquetIcon(item.name)}</div>
                <h3 className="banquet-name">{item.name}</h3>
                <p className="banquet-desc">{item.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

function getBanquetIcon(name) {
  if (name.toLowerCase().includes('wedding')) return '\u2661'
  if (name.toLowerCase().includes('banquet')) return '\u2606'
  return '\u2662'
}
