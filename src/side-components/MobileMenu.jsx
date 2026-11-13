import { useContext } from "react";
import { CartContext } from "../App";
import closeIcon from "../assets/images/icon-close.svg";

export default function MobileMenu() {
  const { setOpenMobileMenu } = useContext(CartContext);
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div
      id="mobile-menu-container"
      onClick={() => setOpenMobileMenu(false)}
      className="fixed inset-0 z-50 bg-black/70"
    >
      <div
        id="nav-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-3/4 h-full flex flex-col gap-8 px-6 py-6 shadow-2xl transition-all"
      >
        <button
          onClick={() => setOpenMobileMenu(false)}
          aria-label="close-menu"
          className="self-start focus:outline-none"
        >
          <img
            src={closeIcon}
            alt="close-icon"
            className="w-4 h-4 cursor-pointer"
          />
        </button>
        {/* nav-items */}
        <ul className="w-full flex flex-col gap-6 mt-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="font-bold text-black text-lg">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
