import { useContext } from "react";
import { CartContext } from "../App";
import deleteIcon from "../assets/images/image-delete.png";

export default function Cart() {
  const { cartItem, handleAddToCart } = useContext(CartContext);
  return (
    <div
      id="cart-container"
      className="absolute right-4 md:right-24 top-24 w-90 md:w-95 bg-white rounded-xl shadow-2xl z-50 font-sans"
    >
      {/* Cart-Header */}
      <div className="px-6 py-6 border-b border-grayish-blue">
        <h2 className="font-bold text-lg text-very-dark-blue">Cart</h2>
      </div>
      {/* Cart-body */}
      <div className="p-6">
        {cartItem ? (
          <div id="item-container" className="flex flex-col gap-6">
            <div>
              <img src={cartItem.image} alt="Thumbnail" />
              <div>
                <p>{cartItem.name}</p>
                <p>
                  ${cartItem.price.toFixed(2)} x {cartItem.quantity}{" "}
                  <strong>${cartItem.total.toFixed(2)}</strong>
                </p>
              </div>
              <button>
                <img src={deleteIcon} alt="deleteIcon" />
              </button>
            </div>
            <button>Checkout</button>
          </div>
        ) : (
          <div
            id="empty-state-container"
            className="flex items-center justify-center h-52 px-6"
          >
            <p className="text-dark-grayish-blue font-bold text-sm tracking-wide">
              Your cart is empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
