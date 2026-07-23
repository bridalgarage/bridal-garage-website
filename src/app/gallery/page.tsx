import Link from "next/link";
import Footer from "@/components/Footer";

const photos = [
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
    title: "Romantic garden ceremony",
    category: "Wedding Planning",
    size: "tall",
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    title: "A beautiful beginning",
    category: "Wedding Photography",
    size: "wide",
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    title: "Champagne reception details",
    category: "Event Styling",
    size: "",
  },
  {
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
    title: "Florals made for forever",
    category: "Wedding Flowers",
    size: "",
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    title: "A celebration of love",
    category: "Wedding Photography",
    size: "wide",
  },
  {
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
    title: "Timeless bridal fashion",
    category: "Bridal Boutique",
    size: "tall",
  },
];

export default function GalleryPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand-mark">BG</span>
          <span>
            Bridal Garage
            <small>WHERE DREAM WEDDINGS BEGIN</small>
          </span>
        </Link>

        <nav>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/services">Services</Link>
  <Link href="/gallery">Gallery</Link>
  <Link href="/shop">Shop</Link>
</nav>

        <Link className="button button-small" href="/booking">
          Book  consultation
        </Link>
      </header>

      <section className="gallery-hero">
        <p className="eyebrow">The Bridal Garage journal</p>
        <h1>Moments made<br />to be remembered.</h1>
        <p>
          A collection of celebrations, details, and love stories thoughtfully
          captured by Bridal Garage.
        </p>
      </section>

      <section className="gallery-intro">
        <p className="eyebrow">Wedding inspiration</p>
        <h2>Every detail tells a story.</h2>
        <p>
          From intimate garden ceremonies to elegant receptions, explore the
          moments that inspire the weddings we create.
        </p>
      </section>

      <section className="gallery-grid-section">
        <div className="gallery-filter">
          <span>All stories</span>
          <span>Weddings</span>
          <span>Photography</span>
          <span>Décor</span>
          <span>Bridal fashion</span>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <article className={`gallery-card ${photo.size}`} key={photo.title}>
              <img src={photo.image} alt={photo.title} />
              <div className="gallery-caption">
                <p>{photo.category}</p>
                <h2>{photo.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-cta">
        <p className="eyebrow">Your story starts here</p>
        <h2>Let’s create something unforgettable.</h2>
        <Link className="button" href="/booking">
          Book a consultation
        </Link>
      </section>

      <Footer />
    </main>
  );
}