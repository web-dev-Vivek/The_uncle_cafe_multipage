import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />,
      title: "Premium Quality",
      description: "Only the finest ingredients make it into our burgers"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: "Family Friendly",
      description: "A welcoming atmosphere for diners of all ages"
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in taste and service"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative text-center text-white max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight playful-font">
            Taste the <span className="text-yellow-400">Perfect</span> Burger
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 font-bold px-4">
            Crafted with passion, served with love. Experience burgers like never before!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              to="/menu"
              onClick={scrollToTop}
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl playful-font text-sm sm:text-base"
            >
              View Our Menu
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black hover:bg-yellow-500 font-bold rounded-lg transition-all duration-300 shadow-lg playful-font text-sm sm:text-base"
            >
              Visit Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 playful-font">
              Why Choose Burger Bliss?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-bold px-4">
              We're not just another burger joint. We're passionate about creating 
              exceptional experiences with every meal!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group bg-yellow-50 p-6 sm:p-8 rounded-lg hover:shadow-lg transition-all duration-300 border-2 border-yellow-200">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-orange-200">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 playful-font">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-semibold text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 playful-font">
              Featured Favorites
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-bold px-4">
              Discover our most popular creations that keep customers coming back!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200">
              <div className="h-40 sm:h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=400)'
              }}></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 playful-font">
                  Classic Bliss Burger
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 font-semibold text-sm sm:text-base">
                  Our signature beef patty with lettuce, tomato, cheese, and special sauce
                </p>
                <span className="text-xl sm:text-2xl font-bold text-orange-600 playful-font">
                  $12.99
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200">
              <div className="h-40 sm:h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400)'
              }}></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 playful-font">
                  BBQ Bacon Deluxe
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 font-semibold text-sm sm:text-base">
                  Smoky BBQ sauce, crispy bacon, onion rings, and melted cheddar
                </p>
                <span className="text-xl sm:text-2xl font-bold text-orange-600 playful-font">
                  $15.99
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 md:col-span-2 lg:col-span-1">
              <div className="h-40 sm:h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400)'
              }}></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 playful-font">
                  Veggie Garden Burger
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 font-semibold text-sm sm:text-base">
                  House-made veggie patty with avocado, sprouts, and herb mayo
                </p>
                <span className="text-xl sm:text-2xl font-bold text-orange-600 playful-font">
                  $11.99
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/menu"
              onClick={scrollToTop}
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg playful-font text-sm sm:text-base"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;