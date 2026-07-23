"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

type Product = {
  name: string;
  category: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    name: "Crystal Charger Plate Collection",
    category: "Wedding Décor",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Luxury Candle Centerpiece Set",
    category: "Event Styling",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pearl Bridal Veil",
    category: "Bridal Accessories",
    price: 295,
    image:
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Personalized Wedding Welcome Sign",
    category: "Wedding Details",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Silk Bridal Robe",
    category: "Bridal Collection",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Elegant Floral Arrangement",
    category: "Floral Design",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
  },
];

export default function ShopPage() {
  const [addedName, setAddedName] = useState("");

  function addToBag(product: Product) {
    const savedCart = localStorage.getItem("bridalGarageCart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find(
      (item: Product & { quantity: number }) => item.name === product.name
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("bridalGarageCart", JSON.stringify(cart));
    setAddedName(product.name);
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
          Book  consultation
        </Link>
      </header>

      <section className="shop-hero">
        <p className="eyebrow">The Bridal Garage Collection</p>
        <h1>Beautiful details<br />for unforgettable weddings.</h1>
        <p>
          Explore our curated collection of wedding décor, bridal accessories,
and celebration essentials designed to bring elegance and beauty
to your special day.
        </p>
      </section>

      <section className="shop-content">
        {addedName && (
          <div className="added-message">
            <span>{addedName} has been added to your bag.</span>
            <Link href="/cart">View bag →</Link>
          </div>
        )}

        <div className="shop-toolbar">
          <p>Luxury wedding pieces curated by Bridal Garage</p>
          <div className="shop-filters">
  <button>Wedding Décor</button>
  <button>Bridal Collection</button>
</div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <span className="product-tag">New arrival</span>
                <button className="wishlist">♡</button>
              </div>

              <p className="product-category">{product.category}</p>
              <h2>{product.name}</h2>

              <div className="product-bottom">
                <strong>${product.price.toLocaleString()}</strong>
                <button
                  className="add-button"
                  onClick={() => addToBag(product)}
                >
                  Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}