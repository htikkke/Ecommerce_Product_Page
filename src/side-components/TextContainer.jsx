import cartIcon from "../assets/images/icon-cart.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import { useState, useContext } from "react";
import { CartContext } from "../App";

export default function TextContainer() {
  const [count, setCount] = useState(0);
  const { handleAddToCart } = useContext(CartContext);

  return (
    <div id="text-container" className="px-6 font-sans">
      {/* Company Name */}
      <p className="text-dark-grayish-blue uppercase font-bold text-xs tracking-[2px]">
        Sneaker Company
      </p>
      {/* Product Title */}
      <h1 className="font-bold text-4xl leading-none text-very-dark-blue mt-4">
        Fall Limited Edition
        <br />
        Sneakers
      </h1>
      {/* Description */}
      <p className="text-dark-grayish-blue font-semibold mt-6 text-[15px] leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      {/* Pricing Section */}
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <p className="font-bold text-2xl text-very-dark-blue">$125.00</p>
          <span className="px-2 py-0.5 bg-black rounded-md text-white font-bold text-sm">
            50%
          </span>
        </div>
        <p className="text-sm line-through text-dark-grayish-blue font-bold">
          $250.00
        </p>
      </div>
      <div className="flex items-center gap-8 mt-4">
        {/* Quantity Selector */}
        <div className="flex items-center gap-12  px-4 py-3 bg-light-grayish-blue rounded-xl">
          <button
            onClick={() => setCount((prev) => Math.max(0, prev - 1))}
            className="text-custom-orange font-bold text-2xl cursor-pointer hover:opacity-50"
          >
            <img src={minusIcon} />
          </button>
          <p className="font-bold text-very-dark-blue">{count}</p>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="text-custom-orange font-bold text-2xl cursor-pointer hover:opacity-50"
          >
            <img src={plusIcon} />
          </button>
        </div>
        {/* Add to Cart Button */}
        <button
          className="flex items-center justify-center gap-4  px-16 py-4 bg-custom-orange rounded-xl cursor-pointer
        hover:bg-custom-orange/75 transition-opacity shadow-xl"
        >
          <img src={cartIcon} alt="Cart Icon" className="brightness-0" />
          <span className="font-bold">Add to cart</span>
        </button>
      </div>
    </div>
  );
}
