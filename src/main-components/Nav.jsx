import cartIcon from "../assets/images/icon-cart.svg";
import logo from "../assets/images/logo.svg";
import profile from "../assets/images/image-avatar.png";
import Cart from "./Cart";
import { useState, useContext } from "react";
import { CartContext } from "../App";

export default function Nav() {
  const [CartOpen, setCartOpen] = useState(false);
  const { cartItem } = useContext(CartContext);
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav
      id="nav-bar"
      className="flex items-center justify-between py-8 border-b border-grayish-blue
       max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-18">
        <img src={logo} />
        <ul className="flex items-center gap-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group h-full flex items-center py-6  text-dark-grayish-blue font-medium font-sans cursor-pointer"
            >
              <span className="hover:text-very-dark-blue transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <div
          onClick={() => setCartOpen(!CartOpen)}
          className="cursor-pointer relative hover:opacity-75 transition-opacity"
        >
          <img src={cartIcon} alt="Cart" />
          {cartItem && (
            <span className="absolute -top-2 -right-3 bg-custom-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItem.quantity}
            </span>
          )}
        </div>
        <img
          src={profile}
          className="w-12 h-12 rounded-full cursor-pointer border-2 border-transparent hover:border-custom-orange transition-all"
          alt="Profile"
        />
      </div>
      {CartOpen && <Cart />}
    </nav>
  );
}
