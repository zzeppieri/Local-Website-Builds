import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Menu', href: '#services' },
  { label: 'Our Story', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
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
        <Gallery />
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

const EVENT_PHOTOS = [
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Banquet_Room.jpg',
    alt: 'Skyline Restaurant banquet room set up for a private event',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Wedding.jpg',
    alt: 'Wedding reception at Skyline Restaurant banquet facility',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Holiday_Parties.jpg',
    alt: 'Holiday party celebration at Skyline Restaurant',
  },
]

function Banquets({ services }) {
  return (
    <section id="events" className="section banquets">
      <div className="section-inner">
        <span className="section-label">Celebrations & Events</span>
        <h2 className="banquets-heading">Your Special Occasion Awaits</h2>

        <div className="banquet-photos">
          {EVENT_PHOTOS.map((photo, i) => (
            <div key={photo.src} className="banquet-photo-wrapper" style={{ animationDelay: `${i * 0.15}s` }}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="banquet-photo"
              />
            </div>
          ))}
        </div>

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
