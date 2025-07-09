import React, { useState } from "react";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  CreditCard,
  MapPin,
} from "lucide-react";
import { useApp } from "../App";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, updateCartQuantity, removeFromCart, clearCart } = useApp();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const delivery = subtotal > 30 ? 0 : 4.99;
  const total = subtotal + tax + delivery;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 lg:pt-32 bg-yellow-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 border-4 ">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border-4 border-orange-300">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 playful-font">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-700 mb-6 sm:mb-8 font-bold text-sm sm:text-base">
              Thank you for your order! We'll start preparing your delicious
              meal right away!
            </p>
            <div className="space-y-4">
              <p className="text-orange-600 font-bold text-base sm:text-lg">
                Estimated delivery time: 25-35 minutes
              </p>
              <Link
                to="/menu"
                onClick={scrollToTop}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg playful-font text-sm sm:text-base"
              >
                Order Again
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 lg:pt-32 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 border-4 ">
            <ShoppingCart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 playful-font">
              Your Cart is Empty
            </h1>
            <p className="text-gray-700 mb-6 sm:mb-8 font-bold text-sm sm:text-base">
              Add some delicious items to your cart to get started!
            </p>
            <Link
              to="/menu"
              onClick={scrollToTop}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg playful-font text-sm sm:text-base"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 lg:pt-32 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 playful-font">
            Checkout
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-bold">
            Review your order and complete your purchase!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-2 border-black/20">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 playful-font">
                Your Order
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-yellow-50 rounded-lg border-2 border-orange-200"
                  >
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-cover bg-center rounded-lg border-2  flex-shrink-0"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-black font-bold playful-font text-sm sm:text-base truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm font-semibold truncate">
                        {item.description}
                      </p>
                      <p className="text-orange-600 font-bold text-sm sm:text-base">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 rounded-full bg-yellow-200 hover:bg-yellow-300 text-black transition-all duration-300 border-2 border-orange-300"
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <span className="text-black font-bold w-6 sm:w-8 text-center text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 rounded-full bg-yellow-200 hover:bg-yellow-300 text-black transition-all duration-300 border-2 border-orange-300"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 sm:p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-all duration-300 border-2 border-orange-300"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary & Payment */}
          <div className="space-y-4 sm:space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-2 border-black/20">
              <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 playful-font">
                Order Summary
              </h2>
              <div className="space-y-2 text-gray-700 font-semibold text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>
                    {delivery === 0 ? "FREE" : `₹${delivery.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t-2  pt-2 mt-2">
                  <div className="flex justify-between text-black font-bold text-base sm:text-lg">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-2 border-black/20">
              <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 flex items-center playful-font">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-orange-600" />
                Delivery Address
              </h2>
              <div className="text-gray-700 font-semibold text-sm sm:text-base">
                <p>123 Main Street</p>
                <p>Apartment 4B</p>
                <p>New York, NY 10001</p>
              </div>
              <button className="mt-2 sm:mt-3 text-orange-600 hover:text-orange-700 text-xs sm:text-sm font-bold">
                Change Address
              </button>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-2 border-black/20">
              <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 flex items-center playful-font">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-orange-600" />
                Payment Method
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-2 border-orange-200">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="text-orange-600"
                  />
                  <span className="text-black font-semibold text-sm sm:text-base">
                    Credit Card ending in 4242
                  </span>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-xs sm:text-sm font-bold">
                  Add New Payment Method
                </button>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg text-base sm:text-lg playful-font"
            >
              Place Order - ₹{total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
