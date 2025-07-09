import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee, ShoppingCart } from "lucide-react";
import { useApp } from "../App";
import LOGO from "../assets/logo.jpg"; // Adjust the path as necessary

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cart } = useApp();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border-b-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={scrollToTop}
            >
              <img className="w-10" src={LOGO} alt="" />
              <span className="text-lg sm:text-2xl text-black playful-font">
                The_Uncle_cafe
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className={`px-2 lg:px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-black hover:bg-yellow-100 hover:text-orange-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              to="/checkout"
              className="relative p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition-all duration-300"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-black hover:text-orange-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-black hover:text-orange-600 hover:bg-yellow-100 focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
                className={`block px-3 py-2 rounded-lg text-base font-bold transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-orange-500 text-white"
                    : "text-black hover:bg-yellow-100 hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
