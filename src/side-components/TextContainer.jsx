import cartIcon from "../assets/images/icon-cart.svg";

export default function TextContainer() {
  return (
    <div id="text-container">
      {/* Company Name */}
      <p>Sneaker Company</p>
      {/* Product Title */}
      <div>
        <h1>Fall Limited Edition</h1>
        <h1>Sneakers</h1>
      </div>
      {/* Description */}
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      {/* Pricing Section */}
      <div>
        <div>
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <p>$250.00</p>
      </div>
      {/* Quantity Selector */}
      <div>
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
      {/* Add to Cart Button */}
      <button>
        <img src={cartIcon} alt="Cart Icon" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}
