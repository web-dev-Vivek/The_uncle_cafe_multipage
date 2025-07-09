import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
      title: "Address",
      details: ["123 Burger Street", "Food City, FC 12345"],
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
      title: "Phone",
      details: ["(555) 123-4567", "Call for reservations"],
    },
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
      title: "Email",
      details: ["info@burgerbliss.com", "We reply within 24 hours"],
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
      title: "Hours",
      details: ["Mon-Thu: 11AM-10PM", "Fri-Sat: 11AM-11PM", "Sun: 12PM-9PM"],
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 lg:pt-32 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 playful-font">
            Get in Touch!
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-bold px-4">
            We'd love to hear from you! Whether you have questions, feedback, or
            want to make a reservation, we're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-2 border-black/20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 playful-font">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2  rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2  rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-black mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2  rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold text-sm sm:text-base"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation</option>
                  <option value="feedback">Feedback</option>
                  <option value="catering">Catering Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="complaint">Complaint</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-black mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2  rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none font-semibold text-sm sm:text-base"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center playful-font text-sm sm:text-base"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-2 border-black/20">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 playful-font">
                Contact Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="flex-shrink-0 p-2 bg-yellow-100 rounded-lg border-2 border-orange-200">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1 playful-font text-sm sm:text-base">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-700 font-semibold text-sm sm:text-base"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-2 border-black/20">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 playful-font">
                Find Us
              </h2>
              <div className="h-48 sm:h-56 lg:h-64 bg-yellow-100 rounded-lg flex items-center justify-center border-2 border-orange-200">
                <div className="text-center">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-600 mx-auto mb-3 sm:mb-4" />
                  <p className="text-gray-700 font-bold text-sm sm:text-base">
                    Interactive Map
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                    123 Burger Street, Food City
                  </p>
                </div>
              </div>
            </div>

            {/* Special Notice */}
            <div className="bg-orange-100 rounded-lg border-2 border-orange-300 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-orange-800 mb-2 playful-font">
                Special Events & Catering
              </h3>
              <p className="text-orange-700 font-semibold text-sm sm:text-base">
                Planning a special event? We offer catering services for
                parties, corporate events, and more. Contact us to discuss your
                needs and create a custom menu for your occasion!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
