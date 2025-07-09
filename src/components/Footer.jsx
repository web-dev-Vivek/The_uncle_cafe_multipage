import React from "react";
import { Coffee, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-xl sm:text-2xl font-bold text-white playful-font">
                Burger Bliss
              </span>
            </div>
            <p className="text-gray-300 mb-4 font-semibold text-sm sm:text-base">
              Crafting the perfect burger experience with premium ingredients
              and passionate service since 2020. Every bite tells a story of
              quality and flavor!
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-yellow-400 playful-font">
              Contact Info
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 font-semibold text-sm sm:text-base">
                  (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 font-semibold text-sm sm:text-base break-all">
                  info@burgerbliss.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 font-semibold text-sm sm:text-base">
                  123 Burger Street, Food City
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-yellow-400 playful-font">
              Hours
            </h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0 mt-1" />
                <div className="text-gray-300 font-semibold text-sm sm:text-base">
                  <p>Mon-Thu: 11AM-10PM</p>
                  <p>Fri-Sat: 11AM-11PM</p>
                  <p>Sun: 12PM-9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 font-semibold text-sm sm:text-base">
            &copy; 2024 Burger Bliss. All rights reserved. Made with ❤️ for
            burger lovers!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
