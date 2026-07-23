import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutPage() {
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


      <section className="about-hero">

        <p className="eyebrow">
          About Bridal Garage
        </p>

      <h1>
  Creating unforgettable
  <br />
  weddings with intention.
</h1>

       <p>
  Bridal Garage creates elegant wedding experiences for couples who
  value thoughtful planning, beautiful design, and the unforgettable
  details that make every celebration uniquely yours.
</p>

      </section>


      <section className="about-story">

        <div>
          <p className="eyebrow">
            Our Story
          </p>

          <h2>
            Every love story deserves a celebration created with intention.
          </h2>
        </div>

        <div>
          <p>
            Bridal Garage was created with one vision: to transform wedding
            dreams into beautifully executed experiences.
          </p>

          <p>
            From the first conversation to the final celebration, we combine
            creative design, careful planning, and trusted partnerships to
            create weddings that feel personal, elegant, and effortless.
          </p>
        </div>

      </section>


      <section className="about-pillars">

        <p className="eyebrow">
          Our Approach
        </p>

        <div className="pillar-grid">

          <article>
            <span>01</span>
            <h3>Personal Vision</h3>
            <p>
              Every wedding begins with understanding your story,
              style, and dreams.
            </p>
          </article>


          <article>
            <span>02</span>
            <h3>Refined Design</h3>
            <p>
              We curate every detail to create a celebration
              that feels timeless and intentional.
            </p>
          </article>


          <article>
            <span>03</span>
            <h3>Flawless Execution</h3>
            <p>
              Our team manages every element so you can enjoy
              every moment.
            </p>
          </article>

        </div>

      </section>


      <section className="about-image">

        <div>
          <p className="eyebrow">
            Weddings Across America
          </p>

        <h2>
  Thoughtfully designed weddings.
  <br />
  Beautifully remembered moments.
</h2>

        </div>

      </section>


      <section className="gallery-cta">

        <p className="eyebrow">
          Begin your journey
        </p>

       <h2>
  Let’s create a wedding experience that reflects your story.
</h2>

        <Link className="button" href="/booking">
          Schedule Consultation
        </Link>

      </section>


      <Footer />

    </main>
  );
}