"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

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
          Book consultation
        </Link>
      </header>

      <section className="booking-hero">
        <p className="eyebrow">Begin your wedding journey</p>
        <h1>Tell us about your<br />dream celebration.</h1>
       <p>
  Share your wedding vision with us and our Bridal Garage team will
  help you create a celebration that reflects your style, story,
  and unforgettable moments.
</p>
      </section>

      <section className="booking-layout">
        <aside className="booking-details">
          <p className="eyebrow">Your next step</p>
          <h2>A wedding experience made for you.</h2>
          <p>
            Whether you need planning, photography, or both, we will help turn
            your vision into an unforgettable celebration.
          </p>

          <div className="booking-benefit">
            <span>01</span>
            <p><strong>Personal guidance</strong><br />Tailored recommendations for your vision.</p>
          </div>
          <div className="booking-benefit">
            <span>02</span>
            <p><strong>No obligation</strong><br />Your first consultation is complimentary.</p>
          </div>
          <div className="booking-benefit">
            <span>03</span>
            <p><strong>Thoughtful planning</strong><br />Every detail begins with a conversation.</p>
          </div>
        </aside>

        <div className="booking-form-wrap">
          {submitted ? (
            <div className="booking-success">
              <p className="eyebrow">Thank you</p>
              <h2>Your request has been received.</h2>
              <p>
                This is a preview form for now. When we connect the website to
                email, Bridal Garage will receive every consultation request.
              </p>
              <Link className="button" href="/">Return home</Link>
            </div>
          ) : (
            <>
              <p className="eyebrow">Consultation request</p>
              <h2>Let’s make it official.</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    First name
                    <input required type="text" placeholder="Your first name" />
                  </label>
                  <label>
                    Last name
                    <input required type="text" placeholder="Your last name" />
                  </label>
                </div>

                <label>
                  Email address
                  <input required type="email" placeholder="you@example.com" />
                </label>

                <label>
                  Phone number
                  <input required type="tel" placeholder="(000) 000-0000" />
                </label>

                <div className="form-row">
                  <label>
                    Wedding date
                    <input required type="date" />
                  </label>
                  <label>
                    Estimated guests
                    <select required defaultValue="">
                      <option value="" disabled>Select guests</option>
                      <option>Under 50</option>
                      <option>50–100</option>
                      <option>101–200</option>
                      <option>More than 200</option>
                    </select>
                  </label>
                </div>

                <label>
                  I’m interested in
                  <select required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Wedding Planning</option>
                    <option>Wedding Photography</option>
                    <option>Planning & Photography</option>
                    <option>Bridal Boutique Consultation</option>
                  </select>
                </label>

                <label>
                  Tell us a little about your vision
                  <textarea placeholder="Your venue, style, colors, or anything else you would like us to know." rows={5} />
                </label>

                <button className="button" type="submit">
                  Request my consultation
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}