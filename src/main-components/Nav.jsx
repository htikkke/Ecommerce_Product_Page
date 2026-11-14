import { useContext } from "react";
import { CartContext } from "../App";

import cartIcon from "../assets/images/icon-cart.svg";
import logo from "../assets/images/logo.svg";
import profile from "../assets/images/image-avatar.png";
import mobileMenu from "../assets/images/icon-menu.svg";

import Cart from "./Cart";
import MobileMenu from "../side-components/MobileMenu";

export default function Nav() {
  const { cartItem, cartOpen, setCartOpen, openMobileMenu, setOpenMobileMenu } =
    useContext(CartContext);
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav
      id="nav-bar"
      aria-label="Main-Navigation"
      className="relative flex items-center justify-between h-28 border-b border-grayish-blue
       max-w-6xl mx-auto max-[440px]:border-b-transparent max-[440px]:px-5 max-[440px]:h-20"
    >
      <div className="flex items-center gap-18 max-[770px]:gap-12 max-[440px]:justify-between max-[440px]:gap-0 max-[440px]:px-5">
        <div className="flex items-center gap-5">
          <button
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            aria-expanded={openMobileMenu}
            aria-label={
              openMobileMenu ? "Close mobile menu" : "Open mobile menu"
            }
            className="hidden max-[440px]:block focus:outline-none focus:ring-2 focus:ring-custom-orange rounded p-1"
          >
            <img
              src={mobileMenu}
              className="w-5 h-5 cursor-pointer"
              alt="menu-icon"
            />
          </button>

          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-custom-orange rounded"
          >
            <img src={logo} alt="Sneakers Logo" />
          </a>
        </div>
        {/* Desktop-Nav-items */}
        <ul className="flex items-center gap-8 max-[770px]:gap-6 max-[440px]:hidden">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group h-full flex items-center text-dark-grayish-blue font-medium font-sans cursor-pointer"
            >
              <a
                href="#"
                className="hover:text-very-dark-blue transition-colors focus:outline-none focus:ring-2 focus:ring-custom-orange rounded px-1"
              >
                {item}
              </a>
              <span className="absolute -bottom-11 left-0 w-full h-1 bg-custom-orange opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-10 max-[770px]:gap-5 max-[440px]:px-5">
        <button
          onClick={() => setCartOpen(!cartOpen)}
          aria-expanded={cartOpen}
          aria-label="Toggle shopping cart"
          className="cursor-pointer relative hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-custom-orange rounded p-1"
        >
          <img src={cartIcon} alt=" " />
          {cartItem && (
            <span className="absolute -top-2 -right-3 bg-custom-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItem.quantity}
            </span>
          )}
        </button>
        <img
          src={profile}
          tabIndex={0}
          className="w-12 h-12 rounded-full cursor-pointer border-2 border-transparent hover:border-custom-orange transition-all"
          alt="User Profile Avatar"
        />
      </div>
      {cartOpen && <Cart />}
      {openMobileMenu && <MobileMenu />}
    </nav>
  );
}
