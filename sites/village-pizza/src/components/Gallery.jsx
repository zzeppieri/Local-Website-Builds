import './Gallery.css'

const PHOTOS = [
  {
    src: 'https://slicelife.imgix.net/30395/photos/original/VillagePizza_CheesePizza2.jpg',
    alt: 'Classic mozzarella cheese pizza from Village Pizza',
    label: 'Cheese Pizza',
  },
  {
    src: 'https://slicelife.imgix.net/30395/photos/original/VillagePizza_VeggiePizza.jpg',
    alt: 'Fresh veggie pizza loaded with vegetables',
    label: 'Veggie Pizza',
  },
  {
    src: 'https://slicelife.imgix.net/30395/photos/original/VillagePizza_ChickenBaconRanch.jpg',
    alt: 'Chicken bacon ranch pizza with creamy ranch drizzle',
    label: 'Chicken Bacon Ranch',
  },
  {
    src: 'https://slicelife.imgix.net/30395/photos/original/VillagePizza_Calzone.jpg',
    alt: 'Golden baked calzone stuffed with cheese and fillings',
    label: 'Calzone',
  },
  {
    src: 'https://slicelife.imgix.net/30395/photos/original/VillagePizza_BuffaloWings.jpg',
    alt: 'Crispy buffalo wings tossed in spicy sauce',
    label: 'Buffalo Wings',
  },
  {
    src: 'https://slicelife.imgix.net/30395/photos/original/VillagePizza_HouseSalad.jpg',
    alt: 'Fresh house salad with mixed greens and vegetables',
    label: 'House Salad',
  },
]

export default function Gallery() {
  return (
    <section className="section gallery">
      <div className="section-inner">
        <h2 className="gallery-heading">Our Food</h2>
        <p className="gallery-subtext">Made fresh daily with quality ingredients</p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <div key={photo.label} className="gallery-item">
              <img
                src={`${photo.src}?w=600&h=450&fit=crop&auto=format&q=75`}
                alt={photo.alt}
                loading="lazy"
                className="gallery-img"
              />
              <div className="gallery-label">{photo.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
