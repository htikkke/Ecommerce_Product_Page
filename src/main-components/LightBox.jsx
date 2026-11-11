import { useContext } from "react";
import { CartContext } from "../App";

import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

import closeIcon from "../assets/images/icon-close.svg";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";

const images = [img1, img2, img3, img4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

export default function LightBox() {
  const {
    isLightBoxOpen,
    setIsLightBoxOpen,
    handleNext,
    handlePrev,
    currentIndex,
  } = useContext(CartContext);

  if (!isLightBoxOpen) return null;

  return (
    <div
      id="light-box-container"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
    >
      <div className="relative max-w-lg w-full flex flex-col items-center px-4">
        <button
          onClick={() => setIsLightBoxOpen(false)}
          className="self-end mb-4 cursor-pointer group"
        >
          <span
            className="block w-5 h-5 bg-white group-hover:bg-custom-orange transition-colors duration-200"
            style={{
              WebkitMask: `url("${closeIcon}") center / contain no-repeat`,
              mask: `url("${closeIcon}") center / contain no-repeat`,
            }}
          />
        </button>
        <div>
          <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-2xl">
            <img
              src={images[currentIndex]}
              alt="product-zoomed"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-20
          cursor-pointer group"
          >
            <span
              className="block w-5 h-5 bg-black group-hover:bg-custom-orange transition-colors duration-200"
              style={{
                WebkitMask: `url("${previousIcon}") center / contain no-repeat`,
                mask: `url("${previousIcon}") center / contain no-repeat`,
              }}
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md
          cursor-pointer group"
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
        <div className="flex gap-6 justify-center">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${currentIndex === index ? "border-custom-orange" : "border-transparent"} transition-all group`}
            >
              <img
                src={thumb}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover transition-all"
              />
              <div
                className={`${currentIndex === index ? "opacity-100" : "opacity-0 hover:opacity-100"} absolute inset-0 bg-white/70`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
