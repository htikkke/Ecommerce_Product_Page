import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import { useState } from "react";

export default function ImageContainer() {
  const [selectedProduct, setSelectedProduct] = useState(product1);
  return (
    <div id="image-container" className="px-6">
      {/* Main-Large-Image */}
      <div>
        <img
          src={selectedProduct}
          className="w-full rounded-2xl cursor-pointer"
          alt="Product Preview"
        />
      </div>
      {/* Thumbnail-Images */}
      <div className="flex items-center justify-between w-full mt-4">
        <div
          className={`relative w-20 h-20 rounded-xl cursor-pointer group border-2 overflow-hidden transition-all ${selectedProduct === product1 ? "border-custom-orange" : "border-transparent"}`}
        >
          <img
            onClick={() => setSelectedProduct(product1)}
            src={product1}
            className={`w-full h-full object-cover group-hover:opacity-50 transition-opacity ${selectedProduct === product1 ? "opacity-50" : ""}`}
          />
        </div>
        <div
          className={`relative w-20 h-20 rounded-xl cursor-pointer group border-2 overflow-hidden transition-all ${selectedProduct === product2 ? "border-custom-orange" : "border-transparent"}`}
        >
          <img
            onClick={() => setSelectedProduct(product2)}
            src={product2}
            className={`w-full h-full object-cover group-hover:opacity-50 transition-opacity ${selectedProduct === product2 ? "opacity-50" : ""}`}
          />
        </div>
        <div
          className={`relative w-20 h-20 rounded-xl cursor-pointer group border-2 overflow-hidden transition-all ${selectedProduct === product3 ? "border-custom-orange" : "border-transparent"}`}
        >
          <img
            onClick={() => setSelectedProduct(product3)}
            src={product3}
            className={`w-full h-full object-cover group-hover:opacity-50 transition-opacity ${selectedProduct === product3 ? "opacity-50" : ""}`}
          />
        </div>
        <div
          className={`relative w-20 h-20 rounded-xl cursor-pointer group border-2 overflow-hidden transition-all ${selectedProduct === product4 ? "border-custom-orange" : "border-transparent"}`}
        >
          <img
            onClick={() => setSelectedProduct(product4)}
            src={product4}
            className={`w-full h-full object-cover group-hover:opacity-50 transition-opacity ${selectedProduct === product4 ? "opacity-50" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
