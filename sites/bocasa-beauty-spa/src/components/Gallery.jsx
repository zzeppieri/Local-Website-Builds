import './Gallery.css'

const PHOTOS = [
  {
    src: 'https://d2ugbn5gb88fyp.cloudfront.net/36622/0_0.jpg',
    alt: 'Professional nail art and manicure services at Bocasa Beauty Spa',
  },
  {
    src: 'https://d2ugbn5gb88fyp.cloudfront.net/36623/0_0.jpg',
    alt: 'Relaxing spa pedicure treatment at Bocasa Beauty Spa',
  },
  {
    src: 'https://d2ugbn5gb88fyp.cloudfront.net/36627/0_0.jpg',
    alt: 'Beauty treatment in the elegant Bocasa Beauty Spa salon',
  },
  {
    src: 'https://d2ugbn5gb88fyp.cloudfront.net/36628/0_0.jpg',
    alt: 'Eyelash extensions applied by Bocasa Beauty Spa specialists',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="section-inner gallery-inner">
        <h2 className="gallery-heading">Our Work</h2>
        <p className="gallery-subtitle">A glimpse into the Bocasa experience</p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <div key={photo.src} className="gallery-card">
              <img
                className="gallery-img"
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
