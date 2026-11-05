import cartIcon from "../assets/images/icon-cart.svg";
import logo from "../assets/images/logo.svg";
import profile from "../assets/images/image-avatar.png";
import Cart from "./Cart";
import { useState, useContext } from "react";
import { CartContext } from "../App";

export default function Nav() {
  const [CartOpen, setCartOpen] = useState(false);
  return (
    <nav
      id="nav-bar"
      className="flex items-center justify-between py-8 border-b border-grayish-blue
       max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-18">
        <img src={logo} />
        <ul className="flex items-center gap-8">
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Collections
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Men
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Women
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            About
          </li>
          <li className="text-dark-grayish-blue text-sm font-sans cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <div
          onClick={() => setCartOpen(!CartOpen)}
          className="cursor-pointer relative hover:opacity-75 transition-opacity"
        >
          <img src={cartIcon} alt="Cart" />
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
