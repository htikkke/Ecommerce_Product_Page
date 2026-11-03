export default function Cart() {
  return (
    <div
      id="cart-container"
      className="absolute right-4 md:right-24 top-24 w-90 md:w-95 bg-white rounded-xl shadow-2xl z-50 font-sans"
    >
      {/* Cart Header */}
      <div className="px-6 py-6 border-b border-grayish-blue">
        <h2 className="font-bold text-lg text-very-dark-blue">Cart</h2>
      </div>
      {/* Cart body / Empty-State */}
      <div className="flex items-center justify-center h-52 px-6">
        <p className="text-dark-grayish-blue font-bold text-sm tracking-wide">
          Your cart is empty
        </p>
      </div>
    </div>
  );
}
