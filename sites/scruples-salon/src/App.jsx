import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/530ca746e4b0196f621aa839/1395942224741-VM5SWSK3JAT6Z89C1AK2/Scruples+Salon+%26+Day+Spa.png'

const OWNER_PHOTO = {
  src: 'https://images.squarespace-cdn.com/content/v1/530ca746e4b0196f621aa839/1545087703940-5Q3QHEB9PM32KQ942M03/IMG_6121.png',
  alt: 'Crystal Theocles, proprietor of Scruples Salon & Day Spa',
  caption: 'Crystal Theocles, Proprietor',
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} logoUrl={LOGO_URL} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          ctaText="Explore Services"
          ctaHref="#services"
        />
        <Services
          services={data.services}
          type="list"
        />
        <About about={data.about} features={data.features} ownerPhoto={OWNER_PHOTO} />
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
