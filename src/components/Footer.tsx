import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>Bridal Garage</h2>

          <p>
            Luxury wedding planning and elegant wedding décor for couples
            who want a beautiful, unforgettable celebration.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/booking">Book Consultation</Link>
        </div>

        <div className="footer-services">
          <h3>Services</h3>

          <p>Wedding Planning</p>
          <p>Wedding Photography</p>
          <p>Wedding Décor</p>
          <p>Bridal Boutique</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>United States</p>
          <p>hello@bridalgarage.com</p>
          <p>(555) 123-4567</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Bridal Garage. All rights reserved.</p>
      </div>

    </footer>
  );
}