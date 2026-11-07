import { useState, createContext } from "react";
import Nav from "./main-components/Nav";
import Hero from "./main-components/Hero";
import thumbnailImg from "./assets/images/image-product-1-thumbnail.jpg";
import LightBox from "./main-components/LightBox";

export const CartContext = createContext();
export default function App() {
  const [count, setCount] = useState(0);
  const [cartItem, setCartItem] = useState(null);
  const [CartOpen, setCartOpen] = useState(false);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

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
      }}
    >
      <div
        id="main-container"
        className="w-full min-h-screen bg-white px-20 py-5"
      >
        <Nav />
        <Hero />
        <LightBox />
      </div>
    </CartContext.Provider>
  );
}
