import { useState } from "react";
import Nav from "./main-components/Nav";
import Hero from "./main-components/Hero";

export default function App() {
  const [cartItem, setCartItem] = useState(null);

  const handleAddToCart = (quantity) => {
    if (quantity === 0) return;
    setCartItem({
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      quantity: quantity,
      total: 125.0 * quantity,
      image: "/image-product-1-thumbnail.jpg",
    });
  };
  return (
    <div
      id="main-container"
      className="w-full min-h-screen bg-white px-20 py-5"
    >
      <Nav />
      <Hero />
    </div>
  );
}
