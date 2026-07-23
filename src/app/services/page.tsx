import Footer from "@/components/Footer";
import Link from "next/link";

const planningPackages = [
  ["Full-Service Planning", "From $4,500", "Complete planning, vendor guidance, design direction, and wedding-day management."],
  ["Partial Planning", "From $2,800", "Professional support for couples who have started planning but want expert direction."],
  ["Month-of Coordination", "From $1,500", "A calm, organized wedding day with every final detail handled for you."],
];

const photographyPackages = [
  [
    "The Signature Collection",
    "$4,500",
    "A beautifully curated wedding photography experience capturing every meaningful moment from preparation to celebration.",
  ],
  [
    "The Luxury Collection",
    "$7,500",
    "An elevated photography experience designed for couples seeking timeless imagery, refined editing, and complete storytelling.",
  ],
  [
    "The Editorial Collection",
    "$10,000",
    "A premium fine-art approach combining cinematic storytelling, artistic direction, and unforgettable wedding memories.",
  ],
];

export default function ServicesPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand-mark">BG</span>
          <span>
            Bridal Garage
            <small>LUXURY WEDDING EXPERIENCES</small>
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

      <section className="services-hero">
  <p className="eyebrow">Luxury Wedding Services</p>

  <h1>
    Exceptional Wedding Planning
    <br />
    For Unforgettable Celebrations
  </h1>

  <p>
    From full-service wedding planning and venue selection to photography,
    floral design, and bridal styling, Bridal Garage delivers elegant
    wedding experiences for couples across the United States.
  </p>
</section>

     <section className="services-intro">
  <p className="eyebrow">Your Complete Wedding Partner</p>

  <h2>
    Every detail thoughtfully planned.
    <br />
    Every moment beautifully remembered.
  </h2>

  <p>
    Whether you are planning an intimate ceremony or a grand luxury
    celebration, Bridal Garage provides expert wedding planning,
    photography, floral design, styling, and coordination to create
    a seamless and unforgettable experience.
  </p>
</section>

      <section className="service-feature planning-feature">
        <div className="service-feature-image" />
        <div className="service-feature-copy">
          <p className="eyebrow">Wedding planning</p>
          <h2>Plan with confidence. Celebrate with ease.</h2>
          <p>
            Your wedding should feel joyful—not overwhelming. We bring calm
            structure, a refined eye, and trusted guidance to every decision.
          </p>
          <ul>
            <li>Creative design and wedding styling</li>
            <li>Venue and vendor recommendations</li>
            <li>Timeline, budget, and guest-experience planning</li>
            <li>Wedding-day coordination</li>
          </ul>
          <Link className="button" href="/booking">Plan your wedding</Link>
        </div>
      </section>

      <section className="package-section">
        <div className="package-heading">
          <div>
            <p className="eyebrow">Planning packages</p>
            <h2>Wedding planning tailored to your vision.</h2>
          </div>
          <Link href="/booking">Book a consultation →</Link>
        </div>

        <div className="package-grid">
          {planningPackages.map(([name, price, description]) => (
            <article className="package-card" key={name}>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{description}</p>
              <Link href="/booking">View Package →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="service-feature photo-feature">
        <div className="service-feature-copy">
          <p className="eyebrow">Wedding photography</p>
          <h2>Photographs that bring you back to the feeling.</h2>
          <p>
            We capture the joyful, quiet, and beautifully unexpected moments
            that become part of your family story for years to come.
          </p>
          <ul>
            <li>Engagement and proposal photography</li>
            <li>Full wedding-day photography</li>
            <li>Digital galleries and heirloom albums</li>
            <li>Optional drone photography and highlight films</li>
          </ul>
          <Link className="button" href="/booking">Capture your day</Link>
        </div>
        <div className="service-feature-image" />
      </section>

      <section className="package-section">
        <div className="package-heading">
          <div>
            <p className="eyebrow">Photography packages</p>
            <h2>Timeless wedding photography, crafted around your story.</h2>
          </div>
          <Link href="/booking">Book photography →</Link>
        </div>

        <div className="package-grid">
          {photographyPackages.map(([name, price, description]) => (
            <article className="package-card" key={name}>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{description}</p>
              <Link href="/booking">View Collection →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="service-faq">
        <p className="eyebrow">Frequently asked questions</p>
        <h2>Helpful answers before we begin.</h2>

        <details>
          <summary>How far in advance should I book?</summary>
          <p>For the best availability, we recommend booking wedding planning or photography 6 to 12 months before your wedding date.</p>
        </details>
        <details>
          <summary>Can I book planning and photography together?</summary>
          <p>Yes. Bridal Garage offers both services so your wedding experience can feel beautifully coordinated from start to finish.</p>
        </details>
        <details>
          <summary>Do you travel for weddings?</summary>
          <p>Yes. Travel options are available for weddings throughout the United States. Travel details are confirmed during your consultation.</p>
        </details>
      </section>

      <section className="gallery-cta">
        <p className="eyebrow">Your story starts here</p>
        <h2>Let’s begin planning your beautiful day.</h2>
        <Link className="button" href="/booking">Book a consultation</Link>
      </section>

      <Footer />
    </main>
  );
}