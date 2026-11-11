import { useContext } from "react";
import { CartContext } from "../App";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";

const images = [product1, product2, product3, product4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

export default function ImageContainer() {
  const {
    setIsLightBoxOpen,
    currentIndex,
    setCurrentIndex,
    handleNext,
    handlePrev,
  } = useContext(CartContext);
  return (
    <div id="image-container" className="px-6 max-[440px]:p-0">
      {/* Main-Large-Image */}
      <div className="relative">
        <img
          onClick={() => setIsLightBoxOpen(true)}
          src={images[currentIndex]}
          className="w-full rounded-2xl cursor-pointer max-[440px]:rounded-none"
          alt="Product Preview"
        />
        {/* Prev-button */}
        <button
          onClick={handlePrev}
          className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full  items-center justify-center shadow-md z-20
                  cursor-pointer group max-[440px]:flex"
        >
          <span
            className="block w-5 h-5 bg-black group-hover:bg-custom-orange transition-colors duration-200"
            style={{
              WebkitMask: `url("${previousIcon}") center / contain no-repeat`,
              mask: `url("${previousIcon}") center / contain no-repeat`,
            }}
          />
        </button>
        {/* Next-button */}
        <button
          onClick={handleNext}
          className="hidden absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md
                  cursor-pointer group max-[440px]:flex"
        >
          <span
            className="block w-5 h-5 bg-black group-hover:bg-custom-orange transition-colors duration-200"
            style={{
              WebkitMask: `url("${nextIcon}") center / contain no-repeat`,
              mask: `url("${nextIcon}") center / contain no-repeat`,
            }}
          />
        </button>
      </div>
      {/* Thumbnail-Images-for-desktop-design*/}
      <div className="flex items-center justify-between w-full mt-4 max-[440px]:hidden">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-20 h-20 rounded-xl cursor-pointer group border-2 overflow-hidden transition-all ${
              currentIndex === index
                ? "border-custom-orange"
                : "border-transparent"
            }`}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover transition-opacity"
            />
            <div
              className={`${
                currentIndex === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-50"
              } absolute inset-0 bg-white/60 transition-opacity`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
