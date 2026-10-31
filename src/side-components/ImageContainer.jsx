import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

export default function ImageContainer() {
  return (
    <div id="image-container" className="px-6">
      {/* Main-Large-Image */}
      <div>
        <img
          src={product1}
          className="w-full rounded-2xl cursor-pointer"
          alt="Product Preview"
        />
      </div>
      {/* Thumbnail-Images */}
      <div className="flex items-center justify-between w-full mt-4">
        <div className="relative w-20 h-20 rounded-xl cursor-pointer group border-2 border-transparent overflow-hidden transition-all">
          <img
            src={product1}
            className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
          />
        </div>
        <div className="relative w-20 h-20 rounded-xl cursor-pointer group border-2 border-transparent  overflow-hidden transition-all">
          <img
            src={product2}
            className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
          />
        </div>
        <div className="relative w-20 h-20 rounded-xl cursor-pointer group border-2 border-transparent  overflow-hidden transition-all">
          <img
            src={product3}
            className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
          />
        </div>
        <div className="relative w-20 h-20 rounded-xl cursor-pointer group border-2 border-transparent  overflow-hidden transition-all">
          <img
            src={product4}
            className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
}
