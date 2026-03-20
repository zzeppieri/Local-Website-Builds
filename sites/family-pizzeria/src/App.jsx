import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LunchSpecials from './components/LunchSpecials'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Menu', href: '#services' },
  { label: 'Lunch Specials', href: '#lunch-specials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Order Online', href: `https://${data.onlineOrdering}`, external: true },
]

export default function App() {
  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          ctaText="View Our Menu"
          ctaHref="#services"
          orderUrl={`https://${data.onlineOrdering}`}
        />
        <LunchSpecials specials={data.lunchSpecials} />
        <Services
          services={data.services}
          type="menu"
        />
        <About
          about={data.about}
          features={data.features}
          delivery={data.delivery}
        />
        <Contact
          phone={data.phone}
          phoneOrders={data.phoneOrders}
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
        phone={data.phone}
      />
    </>
  )
}
