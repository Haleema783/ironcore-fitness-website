// components/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">IronCore Fitness</h3>
            <p className="mb-6 max-w-md">
              Building strength, endurance, and community since day one. 
              At IronCore Fitness, we provide world-class training facilities and support to help you achieve lasting results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#0a0a0a] hover:bg-blue-600 p-3 rounded-lg transition">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-[#0a0a0a] hover:bg-blue-400 p-3 rounded-lg transition">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="bg-[#0a0a0a] hover:bg-pink-600 p-3 rounded-lg transition">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link></li>
              <li><Link to="/membership" className="hover:text-blue-400 transition">Membership</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span>123 Fitness Street, Downtown, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span>+92 340 5542097</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>info@ironcorefitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} IronCore Fitness. All rights reserved. | Made by Apexium | +92 340 5542097
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
