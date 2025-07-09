import React from "react";
import { Heart, Users, Award, Clock } from "lucide-react";
import Burger from "../assets/burger.jpeg"; // Adjust the path as necessary

const About = () => {
  const stats = [
    { number: "5+", label: "Years of Excellence" },
    { number: "50k+", label: "Happy Customers" },
    { number: "15+", label: "Signature Burgers" },
    { number: "4.9", label: "Average Rating" },
  ];

  const team = [
    {
      name: "Chef Marcus Johnson",
      role: "Head Chef & Founder",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "With 15 years of culinary experience, Marcus founded Burger Bliss to create the perfect burger experience.",
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Sarah ensures every aspect of our restaurant runs smoothly and maintains our high standards.",
    },
    {
      name: "David Rodriguez",
      role: "Head of Customer Experience",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "David leads our front-of-house team to deliver exceptional service to every guest.",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: "Passion for Quality",
      description:
        "We source only the finest ingredients and prepare everything fresh daily",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />,
      title: "Community First",
      description:
        "We're proud to be part of this community and support local suppliers",
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />,
      title: "Excellence in Service",
      description:
        "Every interaction matters, and we strive to exceed expectations",
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />,
      title: "Timeless Recipes",
      description: "Classic techniques combined with modern innovation",
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 lg:pt-32 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 playful-font">
            Our Amazing Story
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-bold px-4">
            From humble beginnings to becoming the neighborhood's favorite
            burger spot, discover the passion and dedication behind Burger
            Bliss!
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 playful-font">
              A Dream Born from Passion
            </h2>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed font-semibold text-sm sm:text-base">
              It all started in 2020 when Chef Marcus Johnson had a simple yet
              ambitious dream: to create the perfect burger experience. After
              years of working in fine dining, he realized that the most
              satisfying meals often came from the simplest ingredients prepared
              with care and passion.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed font-semibold text-sm sm:text-base">
              Marcus opened Burger Bliss with a commitment to quality that goes
              beyond just great food. We believe in building relationships with
              our customers, supporting local farmers, and creating a space
              where families and friends can gather to enjoy exceptional burgers
              in a warm, welcoming atmosphere.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold text-sm sm:text-base">
              Today, Burger Bliss has become a beloved fixture in our community,
              serving thousands of satisfied customers who have become part of
              our extended family. Every burger we serve carries the same
              passion and dedication that started it all.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div
              className="h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-lg shadow-lg border-4 border-yellow-300"
              style={{
                backgroundImage: `url(${Burger})`,
              }}
            ></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-16 sm:mb-20 border-4 border-yellow-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-2 playful-font">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-bold text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-8 sm:mb-12 playful-font">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border-2 border-yellow-200"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="p-2 sm:p-3 bg-yellow-100 rounded-full border-2 border-orange-200">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 playful-font">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-semibold text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-8 sm:mb-12 playful-font">
            Meet Our Amazing Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-yellow-200"
              >
                <div
                  className="h-48 sm:h-56 lg:h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 playful-font">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold text-sm sm:text-base">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
