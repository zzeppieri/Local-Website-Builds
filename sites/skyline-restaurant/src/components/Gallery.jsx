import { useState } from 'react'
import './Gallery.css'

const PHOTOS = [
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Seafood_Dinner.jpg',
    alt: 'Fresh seafood dinner plate at Skyline Restaurant',
    category: 'food',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Rare_Meat.jpg',
    alt: 'Premium steak cooked to perfection at Skyline Restaurant',
    category: 'food',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Gallery_Patio.jpg',
    alt: 'Outdoor patio dining area at Skyline Restaurant',
    category: 'venue',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Shrimp_Dinner.jpg',
    alt: 'Shrimp dinner entree at Skyline Restaurant',
    category: 'food',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Venue.jpg',
    alt: 'Skyline Restaurant venue interior dining room',
    category: 'venue',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Gallery_Pasta.jpg',
    alt: 'House-made Italian pasta dish at Skyline Restaurant',
    category: 'food',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Appetizers.jpg',
    alt: 'Appetizer selection at Skyline Restaurant',
    category: 'food',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Banquet_Room.jpg',
    alt: 'Private banquet room setup at Skyline Restaurant',
    category: 'venue',
  },
  {
    src: 'https://skylinerestaurantct.com/wp-content/uploads/2020/07/Skyline_Restaurant_Gallery_Burger.jpg',
    alt: 'Hand-crafted gourmet burger at Skyline Restaurant',
    category: 'food',
  },
]

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Food & Drinks', value: 'food' },
  { label: 'Our Spaces', value: 'venue' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'all' ? PHOTOS : PHOTOS.filter(p => p.category === filter)

  return (
    <section id="gallery" className="section gallery">
      <div className="section-inner">
        <span className="section-label">A Taste of Skyline</span>
        <h2 className="gallery-heading">Gallery</h2>

        <div className="gallery-filters">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`gallery-filter ${filter === f.value ? 'active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((photo, i) => (
            <button
              key={photo.src}
              className="gallery-item"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(photo)}
              aria-label={`View: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="gallery-img"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-zoom-icon">+</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-label="Image lightbox">
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close lightbox">&times;</button>
          <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" />
          <p className="lightbox-caption">{lightbox.alt}</p>
        </div>
      )}
    </section>
  )
}
