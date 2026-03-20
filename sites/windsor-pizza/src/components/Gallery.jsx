import './Gallery.css'

const FOOD_PHOTOS = [
  {
    src: 'https://slice-menu-assets-prod.imgix.net/488/1622042628_18bba28e46',
    alt: 'Extreme Pizza with premium toppings',
    label: 'Extreme Pizza',
  },
  {
    src: 'https://slice-menu-assets-prod.imgix.net/488/1622043084_435da8c7bc',
    alt: 'Buffalo Chicken Pizza with ranch drizzle',
    label: 'Buffalo Chicken',
  },
  {
    src: 'https://slice-menu-assets-prod.imgix.net/488/1622043334_e39b133456',
    alt: 'Mediterranean Pizza with fresh vegetables and feta',
    label: 'Mediterranean',
  },
  {
    src: 'https://slice-menu-assets-prod.imgix.net/488/1622042798_3d9d3845a4',
    alt: 'Chicken Special with seasoned chicken',
    label: 'Chicken Special',
  },
  {
    src: 'https://slice-menu-assets-prod.imgix.net/488/1622042966_7a0943ba05',
    alt: 'Golden fried mozzarella sticks with marinara',
    label: 'Mozzarella Sticks',
  },
  {
    src: 'https://slice-menu-assets-prod.imgix.net/488/1599116836_0aa766800d',
    alt: 'Baked ziti with marinara sauce and melted cheese',
    label: 'Baked Ziti',
  },
]

export default function Gallery() {
  return (
    <section className="section gallery">
      <div className="section-inner">
        <h2 className="gallery-heading">Our Food</h2>
        <div className="gallery-grid">
          {FOOD_PHOTOS.map((photo, idx) => (
            <div
              key={photo.label}
              className="gallery-item"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="gallery-img"
              />
              <div className="gallery-label">
                <span>{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
