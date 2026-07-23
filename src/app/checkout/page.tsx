"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import Footer from "@/components/Footer";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("bridalGarageCart");
    if (savedCart) setItems(JSON.parse(savedCart));
  }, []);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.removeItem("bridalGarageCart");
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
          Book Consultation
        </Link>
      </header>

      <section className="checkout-page">
        {submitted ? (
          <div className="checkout-success">
            <p className="eyebrow">Thank you</p>
            <h1>Thank you for choosing Bridal Garage.</h1>
            <p>
              Your wedding pieces have been reserved. Secure payment and order
confirmation will be available once online payments are connected.
            </p>
            <Link className="button" href="/shop">
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="checkout-heading">
              <div>
                <p className="eyebrow">Complete your wedding order</p>
                <h1>Finalize your beautiful selection.</h1>
              </div>
              <Link href="/cart">← Return to bag</Link>
            </div>

            <div className="checkout-layout">
              <form className="checkout-form" onSubmit={handleSubmit}>
                <section>
                  <h2>Contact information</h2>
                  <label>
                    Email address
                    <input required type="email" placeholder="you@example.com" />
                  </label>
                </section>

                <section>
                  <h2>Delivery address</h2>

                  <div className="form-row">
                    <label>
                      First name
                      <input required type="text" />
                    </label>
                    <label>
                      Last name
                      <input required type="text" />
                    </label>
                  </div>

                  <label>
                    Street address
                    <input required type="text" placeholder="123 Main Street" />
                  </label>

                  <label>
                    Apartment, suite, or unit <span>(optional)</span>
                    <input type="text" />
                  </label>

                  <div className="form-row">
                    <label>
                      City
                      <input required type="text" />
                    </label>
                    <label>
                      State
                      <input required type="text" placeholder="CA" />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      ZIP code
                      <input required type="text" />
                    </label>
                    <label>
                      Phone number
                      <input required type="tel" placeholder="(000) 000-0000" />
                    </label>
                  </div>
                </section>

                <section>
                  <h2>Payment</h2>
                  <div className="payment-preview">
                    <span>🔒</span>
                    <p>
                      <strong>Secure payment will be added with Stripe.</strong>
                      <br />
                      Your card details will never be stored on Bridal Garage.
                    </p>
                  </div>
                </section>

                <button className="button" type="submit">
                  Place order — ${subtotal.toLocaleString()}
                </button>
              </form>

              <aside className="checkout-summary">
                <p className="eyebrow">Order summary</p>

                {items.length === 0 ? (
                  <p className="summary-empty">Your bag is empty.</p>
                ) : (
                  items.map((item) => (
                    <div className="summary-item" key={item.name}>
                      <span>{item.name} × {item.quantity}</span>
                      <strong>${(item.price * item.quantity).toLocaleString()}</strong>
                    </div>
                  ))
                )}

                <hr />

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>${subtotal.toLocaleString()}</strong>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Calculated next</span>
                </div>

                <div className="summary-total">
                  <span>Total</span>
                  <strong>${subtotal.toLocaleString()}</strong>
                </div>
              </aside>
            </div>
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}