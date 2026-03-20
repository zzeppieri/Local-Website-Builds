import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Menu', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Order', href: '#contact' },
]

const LOGO_URL = 'https://shop-logos.imgix.net/shops/488/original/488.png'
const HERO_IMAGE = 'https://slicelife.imgix.net/488/photos/original/product-ziti-with-marinara-sauce-6451600_(1).jpeg'

export default function App() {
  return (
    <>
      <Navbar name={data.name} links={NAV_LINKS} logoUrl={LOGO_URL} />
      <main>
        <Hero
          name={data.name}
          tagline={data.tagline}
          ctaText="View Menu"
          ctaHref="#services"
          phone={data.phone}
          features={data.features}
          heroImage={HERO_IMAGE}
        />
        <Services
          services={data.services}
          type="menu"
        />
        <Gallery />
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
