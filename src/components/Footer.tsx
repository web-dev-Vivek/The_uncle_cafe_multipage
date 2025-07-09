import React from 'react';
import { Coffee, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white playful-font">
                Burger Bliss
              </span>
            </div>
            <p className="text-gray-300 mb-4 font-semibold">
              Crafting the perfect burger experience with premium ingredients and 
              passionate service since 2020. Every bite tells a story of quality and flavor!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400 playful-font">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 font-semibold">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 font-semibold">info@burgerbliss.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 font-semibold">123 Burger Street, Food City</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400 playful-font">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <div className="text-gray-300 font-semibold">
                  <p>Mon-Thu: 11AM-10PM</p>
                  <p>Fri-Sat: 11AM-11PM</p>
                  <p>Sun: 12PM-9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-semibold">
            &copy; 2024 Burger Bliss. All rights reserved. Made with ❤️ for burger lovers!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;