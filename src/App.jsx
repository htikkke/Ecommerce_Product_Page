import { useState, createContext } from "react";
import Nav from "./main-components/Nav";
import Hero from "./main-components/Hero";
import thumbnailImg from "./assets/images/image-product-1-thumbnail.jpg";
import LightBox from "./main-components/LightBox";

import img1 from "./assets/images/image-product-1.jpg";
import img2 from "./assets/images/image-product-2.jpg";
import img3 from "./assets/images/image-product-3.jpg";
import img4 from "./assets/images/image-product-4.jpg";

const images = [img1, img2, img3, img4];

export const CartContext = createContext();
export default function App() {
  const [count, setCount] = useState(0);
  const [cartItem, setCartItem] = useState(null);
  const [CartOpen, setCartOpen] = useState(false);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToCart = (quantity) => {
    if (quantity === 0) return;
    setCartItem({
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      quantity: quantity,
      total: 125.0 * quantity,
      image: thumbnailImg,
    });
  };
  const handleDeleteCart = () => {
    setCartItem(null);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleDeleteCart,
        cartItem,
        setCartItem,
        count,
        setCount,
        CartOpen,
        setCartOpen,
        isLightBoxOpen,
        setIsLightBoxOpen,
        currentIndex,
        setCurrentIndex,
        handleNext,
        handlePrev,
      }}
    >
      <div
        id="main-container"
        className="w-full min-h-screen bg-white px-20 py-5 max-[770px]:px-10 max-[440px]:px-0 max-[440px]:py-0 max-[440px]:mt-2"
      >
        <Nav />
        <Hero />
        <LightBox />
      </div>
    </CartContext.Provider>
  );
}
