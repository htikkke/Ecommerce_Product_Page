import { useContext } from "react";
import { CartContext } from "../App";
import deleteIcon from "../assets/images/icon-delete.svg";

export default function Cart() {
  const { cartItem, handleDeleteCart, setCount, setCartOpen } =
    useContext(CartContext);
  return (
    <div
      id="cart-container"
      className="absolute right-4 md:right-0 top-24 w-90 md:w-95 bg-white rounded-xl shadow-2xl z-50 font-sans"
    >
      {/* Cart-Header */}
      <div className="px-6 py-6 border-b border-grayish-blue">
        <h2 className="font-bold text-lg text-very-dark-blue">Cart</h2>
      </div>
      {/* Cart-body */}
      <div className="p-6">
        {cartItem ? (
          <div id="item-container" className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <img
                src={cartItem.image}
                alt="Thumbnail"
                className="w-14 h-14 rounded-md object-cover"
              />
              <div className="text-dark-grayish-blue text-sm">
                <p>{cartItem.name}</p>
                <p>
                  ${cartItem.price.toFixed(2)} x {cartItem.quantity}{" "}
                  <strong className="text-very-dark-blue font-bold ml-1">
                    ${cartItem.total.toFixed(2)}
                  </strong>
                </p>
              </div>
              <button
                onClick={handleDeleteCart}
                className="hover:opacity-75 transition-opacity cursor-pointer"
              >
                <img
                  onClick={() => setCount(0)}
                  src={deleteIcon}
                  alt="deleteIcon"
                />
              </button>
            </div>
            <button
              onClick={() => {
                setCartOpen(false);
                setCount(0);
                handleDeleteCart();
              }}
              className="w-full py-4 bg-custom-orange text-black font-bold rounded-xl hover:opacity-75 transition-opacity cursor-pointer"
            >
              Checkout
            </button>
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
