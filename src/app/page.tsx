import Footer from "@/components/Footer";
const services = [
  {
    title: "Full-Service Wedding Planning",
    text: "From your engagement to your wedding day, we handle every detail with precision and elegance.",
  },
  {
    title: "Luxury Venue Selection",
    text: "Exclusive estates, five-star resorts, vineyards, and iconic venues across the United States.",
  },
  {
    title: "Wedding Photography",
    text: "Editorial-style photography capturing authentic emotions and timeless memories.",
  },
  {
    title: "Wedding Cinematography",
    text: "Beautiful cinematic films that let you relive your celebration for generations.",
  },
  {
    title: "Floral & Event Design",
    text: "Luxury floral styling and bespoke décor tailored to your unique vision.",
  },
  {
    title: "Guest Experience",
    text: "From invitations to accommodations and timelines, every guest enjoys a seamless celebration.",
  },
];

 const collections = [
  {
    name: "Luxury Wedding Planning",
    className: "card-1",
  },
  {
    name: "Destination Weddings",
    className: "card-2",
  },
  {
    name: "Fine Art Photography",
    className: "card-3",
  },
  {
    name: "Elegant Reception Design",
    className: "card-4",
  },
];
export default function Home() {
  return (
    <main>

      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">B</span>
          <div>
            Bridal Garage
            <small>LUXURY WEDDING EXPERIENCES</small>
          </div>
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/shop">Shop</a>
          <a href="/booking">Booking</a>
        </nav>

        <a className="button button-small" href="/booking">
          Consult
        </a>
      </header>


      <section className="hero">
        <div className="hero-content">
        <p className="eyebrow">Premier Wedding Planning Across the USA</p>

<h1>
  Extraordinary Weddings
  <br />
  Designed With
  <br />
  Timeless Elegance
</h1>

<p className="hero-text">
  We create unforgettable luxury weddings through exceptional planning,
  world-class design, and flawless execution—turning your vision into
  an experience you'll cherish forever.
</p>

          <div className="hero-actions">
            <a className="button" href="/booking">
              Begin Your Journey
            </a>

            <a className="text-link" href="/gallery">
              View Gallery
            </a>
          </div>
        </div>
      </section>


      <section className="intro">
        <p className="eyebrow">Welcome to Bridal Garage</p>

<h2>
  Luxury Wedding Planning for Modern Couples Across the United States
</h2>

<p>
  At Bridal Garage, we create elegant wedding experiences that blend
  timeless sophistication with modern style. From intimate ceremonies
  to grand celebrations, our team delivers personalized planning,
  exceptional design, and flawless execution—making every love story
  unforgettable.
</p>
      </section>


      <section className="section">
        <div className="section-heading">
          <h2>Curated Collections</h2>
          <a className="text-link" href="/shop">
            Explore Shop
          </a>
        </div>

        <div className="collection-grid">
          {collections.map((item) => (
            <div
              key={item.name}
              className={`collection-card ${item.className}`}
            >
              <span>{item.name}</span>
              <b>
  {item.name === "Luxury Bridal Couture" && "Explore Boutique"}
  {item.name === "Exclusive Wedding Venues" && "View Venues"}
  {item.name === "Floral & Event Design" && "See Designs"}
  {item.name === "Reception Styling" && "Get Inspired"}
</b>
            </div>
          ))}
        </div>
      </section>


      <section className="services">

        <div className="services-image"></div>

        <div className="services-content">
          <p className="eyebrow">Our Expertise</p>

          <h2>
            Every detail perfectly designed.
          </h2>

          <p>
            Our team manages every element of your celebration,
            creating a seamless luxury wedding experience.
          </p>

          {services.map((service, index) => (
            <div className="service" key={service.title}>
  <div className="service-number">
    <span>0{index + 1}</span>
  </div>

  <div className="service-content">
    <h3>{service.title}</h3>
    <p>{service.text}</p>

    <a href="/services" className="service-link">
      Learn More →
    </a>
  </div>
</div>
          ))}

          <a className="button" href="/services">
            View All Services
          </a>
        </div>

      </section>




      <section className="quote">
        <p>
          “A wedding is not just an event. It is the beginning of a lifetime
          story.”
        </p>

        <span>
          Bridal Garage
        </span>
      </section>    
        <section className="section">

        <div className="section-heading">
          <h2>Featured Weddings</h2>
          <a className="text-link" href="/gallery">
            View Gallery
          </a>
        </div>

        <div className="collection-grid">

          <div className="collection-card card-1">
            <span>Estate Weddings</span>
            <b>Timeless Luxury</b>
          </div>

          <div className="collection-card card-2">
            <span>Destination Weddings</span>
            <b>Unforgettable Locations</b>
          </div>

          <div className="collection-card card-3">
            <span>Intimate Celebrations</span>
            <b>Beautifully Personal</b>
          </div>

          <div className="collection-card card-4">
            <span>Grand Receptions</span>
            <b>Elegant Experiences</b>
          </div>

        </div>

      </section>


      <section className="services">

        <div className="services-content">

          <p className="eyebrow">
            Why Bridal Garage
          </p>

          <h2>
            Designed with passion.
            Executed with precision.
          </h2>

          <p>
            Every celebration receives a personalized approach,
            combining creative design, trusted partners, and flawless
            execution.
          </p>


          <div className="service">
            <span>01</span>

            <div>
              <h3>Personalized Planning</h3>
              <p>
                Every wedding is carefully designed around your story,
                style, and vision.
              </p>
            </div>
          </div>


          <div className="service">
            <span>02</span>

            <div>
              <h3>Luxury Vendor Network</h3>
              <p>
                Access exceptional photographers, designers, venues,
                and wedding professionals.
              </p>
            </div>
          </div>


          <div className="service">
            <span>03</span>

            <div>
              <h3>Stress-Free Experience</h3>
              <p>
                From the first consultation to the final celebration,
                every detail is managed.
              </p>
            </div>
          </div>

        </div>


        <div className="services-image"></div>

      </section>


      <section className="quote">

        <p>
  "From our first consultation to the final dance,
  Bridal Garage handled every detail with elegance and care.
  Our wedding day felt effortless, personal, and unforgettable."
</p>

<span>
  Emily & James — California Wedding
</span>
      </section>


      <section className="consultation">

        <p className="eyebrow">
          Begin Your Story
        </p>

        <h2>
  Create a luxury wedding experience designed around your unique love story.
</h2>
<p>
  Bridal Garage creates elegant wedding experiences for couples
  across the United States, combining thoughtful planning,
  beautiful design, and unforgettable details.
</p>
        <a className="button" href="/booking">
          Schedule Consultation
        </a>

      </section>


      <Footer />
...

    </main>
  );
}