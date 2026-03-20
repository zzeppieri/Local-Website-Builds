import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EmergencyBanner from './components/EmergencyBanner'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} phone={data.phone} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          phone={data.phone}
          features={data.features}
        />
        <EmergencyBanner phone={data.phone} hoursNote={data.hoursNote} />
        <Services services={data.services} />
        <About
          about={data.about}
          features={data.features}
          licenses={data.licenses}
          serviceArea={data.serviceArea}
        />
        <Contact
          phone={data.phone}
          phoneSecondary={data.phoneSecondary}
          address={data.address}
          secondaryLocation={data.secondaryLocation}
          hours={data.hours}
          hoursNote={data.hoursNote}
          email={data.email}
          googleMapsEmbedQuery={data.googleMapsEmbedQuery}
        />
      </main>
      <Footer
        name={data.name}
        socialLinks={data.socialLinks}
        address={data.address}
        licenses={data.licenses}
      />
    </>
  )
}
