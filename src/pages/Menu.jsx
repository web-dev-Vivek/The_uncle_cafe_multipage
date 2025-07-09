import React, { useState, useRef } from 'react';
import { Star, Plus } from 'lucide-react';
import { gsap } from 'gsap';
import { useApp } from '../App';

const Menu = () => {
  const [selectedCategories, setSelectedCategories] = useState(['burgers']);
  const { addToCart } = useApp();
  const buttonRefs = useRef({});

  const categories = [
    { id: 'burgers', name: 'Burgers' },
    { id: 'sides', name: 'Sides' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const menuItems = {
    burgers: [
      {
        id: 'burger-1',
        name: "Classic Bliss Burger",
        description: "Our signature beef patty with lettuce, tomato, cheese, and special sauce",
        price: 12.99,
        image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'burgers',
        featured: true
      },
      {
        id: 'burger-2',
        name: "BBQ Bacon Deluxe",
        description: "Smoky BBQ sauce, crispy bacon, onion rings, and melted cheddar",
        price: 15.99,
        image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'burgers',
        featured: true
      },
      {
        id: 'burger-3',
        name: "Veggie Garden Burger",
        description: "House-made veggie patty with avocado, sprouts, and herb mayo",
        price: 11.99,
        image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'burgers',
        featured: false
      },
      {
        id: 'burger-4',
        name: "Spicy Jalapeño Burger",
        description: "Pepper jack cheese, jalapeños, chipotle mayo, and spicy seasoning",
        price: 13.99,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'burgers',
        featured: false
      },
      {
        id: 'burger-5',
        name: "Mushroom Swiss Burger",
        description: "Sautéed mushrooms, Swiss cheese, and garlic aioli",
        price: 14.99,
        image: "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'burgers',
        featured: false
      },
      {
        id: 'burger-6',
        name: "Double Trouble Burger",
        description: "Two beef patties, double cheese, bacon, and our special sauce",
        price: 18.99,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'burgers',
        featured: true
      }
    ],
    sides: [
      {
        id: 'side-1',
        name: "Crispy French Fries",
        description: "Golden, crispy fries seasoned with sea salt",
        price: 4.99,
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'sides',
        featured: false
      },
      {
        id: 'side-2',
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries with honey mustard dip",
        price: 5.99,
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'sides',
        featured: true
      },
      {
        id: 'side-3',
        name: "Onion Rings",
        description: "Beer-battered onion rings with ranch dipping sauce",
        price: 6.99,
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'sides',
        featured: false
      },
      {
        id: 'side-4',
        name: "Loaded Nachos",
        description: "Tortilla chips with cheese, jalapeños, and sour cream",
        price: 8.99,
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'sides',
        featured: false
      }
    ],
    drinks: [
      {
        id: 'drink-1',
        name: "Craft Sodas",
        description: "Choice of cola, lemon-lime, or orange",
        price: 2.99,
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'drinks',
        featured: false
      },
      {
        id: 'drink-2',
        name: "Fresh Lemonade",
        description: "Made fresh daily with real lemons",
        price: 3.99,
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'drinks',
        featured: true
      },
      {
        id: 'drink-3',
        name: "Milkshakes",
        description: "Vanilla, chocolate, or strawberry",
        price: 5.99,
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'drinks',
        featured: true
      },
      {
        id: 'drink-4',
        name: "Iced Tea",
        description: "Sweetened or unsweetened",
        price: 2.49,
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'drinks',
        featured: false
      }
    ],
    desserts: [
      {
        id: 'dessert-1',
        name: "Chocolate Brownie",
        description: "Warm brownie with vanilla ice cream",
        price: 6.99,
        image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'desserts',
        featured: true
      },
      {
        id: 'dessert-2',
        name: "Apple Pie",
        description: "Classic apple pie with cinnamon ice cream",
        price: 5.99,
        image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'desserts',
        featured: false
      },
      {
        id: 'dessert-3',
        name: "Cheesecake",
        description: "New York style cheesecake with berry compote",
        price: 7.99,
        image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: 'desserts',
        featured: false
      }
    ]
  };

  const handleOrderClick = (item) => {
    const button = buttonRefs.current[item.id];
    if (button) {
      gsap.to(button, {
        y: -20,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.set(button, { y: 0 });
        }
      });
    }
    addToCart(item);
  };

  const handleCategoryChange = (categoryId, checked) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, categoryId]);
    } else {
      setSelectedCategories(prev => prev.filter(id => id !== categoryId));
    }
  };

  const getFilteredItems = () => {
    if (selectedCategories.length === 0) return [];
    return selectedCategories.flatMap(category => menuItems[category] || []);
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 lg:pt-32 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 playful-font">
            Our Delicious Menu
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-semibold px-4">
            Explore our amazing selection of handcrafted burgers, sides, drinks, and desserts
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Sidebar - Hidden on mobile, shown as horizontal scroll on tablet */}
          <div className="lg:w-64 bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:h-fit lg:sticky lg:top-24 border-2 border-yellow-200">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 playful-font">Menu Categories</h2>
            <div className="flex lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:bg-yellow-50 p-2 rounded-lg transition-all duration-300 whitespace-nowrap lg:whitespace-normal">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 bg-yellow-100 border-2 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 flex-shrink-0"
                  />
                  <span className="text-black font-bold text-sm sm:text-base lg:text-lg">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1" id="menu-section">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {getFilteredItems().map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200">
                  <div className="relative">
                    <div 
                      className="h-32 sm:h-40 lg:h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    {item.featured && (
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full flex items-center shadow-md border-2 border-orange-300">
                        <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1 fill-current" />
                        <span className="text-xs font-bold">FEATURED</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 playful-font">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed font-semibold text-sm sm:text-base">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl sm:text-2xl font-bold text-orange-600 playful-font">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        ref={(el) => buttonRefs.current[item.id] = el}
                        onClick={() => handleOrderClick(item)}
                        className="flex items-center px-3 sm:px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-bold text-sm sm:text-base"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;