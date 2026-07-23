"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

type CartItem = {
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("bridalGarageCart");
    if (savedCart) setItems(JSON.parse(savedCart));
  }, []);

  function saveCart(updatedItems: CartItem[]) {
    setItems(updatedItems);
    localStorage.setItem("bridalGarageCart", JSON.stringify(updatedItems));
  }

  function changeQuantity(name: string, amount: number) {
    const updatedItems = items
      .map((item) => item.name === name ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0);
    saveCart(updatedItems);
  }

  function removeItem(name: string) {
    saveCart(items.filter((item) => item.name !== name));
  }

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand-mark">BG</span>
          <span>Bridal Garage<small>WHERE DREAM WEDDINGS BEGIN</small></span>
        </Link>
        <nav>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/services">Services</Link>
  <Link href="/gallery">Gallery</Link>
  <Link href="/shop">Shop</Link>
</nav>
        <Link className="button button-small" href="/booking">Book Consultation</Link>
      </header>

      <section className="cart-page">
        <p className="eyebrow">Your wedding collection</p>
        <h1>Your selected wedding pieces</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your bag is waiting for something beautiful.</p>
            <Link className="button" href="/shop">Continue shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <p className="product-category">{item.category}</p>
                    <h2>{item.name}</h2>
                    <strong>${item.price.toLocaleString()}</strong>
                    <div className="quantity-controls">
                      <button onClick={() => changeQuantity(item.name, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.name, 1)}>+</button>
                    </div>
                    <button className="remove-button" onClick={() => removeItem(item.name)}>
                      Remove
                    </button>
                  </div>
                  <strong>${(item.price * item.quantity).toLocaleString()}</strong>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <p className="eyebrow">Order summary</p>
              <div><span>Subtotal</span><strong>${subtotal.toLocaleString()}</strong></div>
              <div><span>Shipping</span><span>Calculated at checkout</span></div>
              <hr />
              <div className="total"><span>Total</span><strong>${subtotal.toLocaleString()}</strong></div>
              <Link className="button" href="/checkout">Secure checkout</Link>
              <Link className="cart-continue" href="/shop">← Continue shopping</Link>
            </aside>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}