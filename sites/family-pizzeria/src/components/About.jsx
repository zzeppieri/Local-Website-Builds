import './About.css'

const PHOTO_GALLERY = [
  {
    src: 'https://familypizzawindsorct.com/uploads/1/3/0/6/13067953/3262067_orig.jpg',
    alt: 'Family Pizza delivery service',
    caption: 'Fast Delivery',
  },
  {
    src: 'https://familypizzawindsorct.com/uploads/1/3/0/6/13067953/4615953_orig.jpg',
    alt: 'Family Pizza take-out counter',
    caption: 'Easy Take-Out',
  },
  {
    src: 'https://familypizzawindsorct.com/uploads/1/3/0/6/13067953/6228513_orig.jpg',
    alt: 'Family Pizza lunch specials spread',
    caption: 'Lunch Specials',
  },
]

export default function About({ about, features, delivery }) {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner">
        <h2 className="about-heading">About Us</h2>
        <div className="section-divider"></div>
        <p className="about-text">{about}</p>

        {/* Photo gallery */}
        <div className="about-gallery">
          {PHOTO_GALLERY.map(photo => (
            <figure key={photo.caption} className="gallery-item">
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-img"
                loading="lazy"
              />
              <figcaption className="gallery-caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        {features && features.length > 0 && (
          <div className="about-features">
            {features.map(feature => (
              <span key={feature} className="feature-pill">{feature}</span>
            ))}
          </div>
        )}

        {delivery && (
          <div className="delivery-info">
            <h3 className="delivery-heading">Delivery Info</h3>
            <div className="delivery-details">
              <span>Fee: {delivery.fee}</span>
              <span>Minimum: {delivery.minimum}</span>
              <span>{delivery.area}</span>
            </div>
            {delivery.note && (
              <p className="delivery-note">{delivery.note}</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
