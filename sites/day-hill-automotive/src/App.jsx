import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
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
  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} phone={data.phone} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          ctaText="Schedule Service"
          ctaHref="#contact"
          phone={data.phone}
          rating={data.reviews.rating}
          reviewCount={data.reviews.count}
        />
        <TrustBar certifications={data.certifications} />
        <Services services={data.services} />
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
