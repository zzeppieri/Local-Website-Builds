import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Menu', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          ctaText="View Menu"
          ctaHref="#services"
        />
        <Services
          services={data.services}
          type="menu"
        />
        <About about={data.about} features={data.features} />
        <Contact
          phone={data.phone}
          address={data.address}
          hours={data.hours}
          deliveryHours={data.deliveryHours}
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
