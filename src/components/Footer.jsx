// components/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Helper: scroll to top instantly on navigation
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              IronCore Fitness
            </h3>
            <p className="mb-6 max-w-md text-gray-400">
              Building strength, endurance, and community since day one. At
              IronCore Fitness, we provide world-class training facilities and
              support to help you achieve lasting results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#0a0a0a] hover:bg-red-600 p-3 rounded-lg transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#0a0a0a] hover:bg-red-600 p-3 rounded-lg transition"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#0a0a0a] hover:bg-red-600 p-3 rounded-lg transition"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={handleLinkClick} className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className="hover:text-red-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleLinkClick} className="hover:text-red-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={handleLinkClick} className="hover:text-red-500 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/membership" onClick={handleLinkClick} className="hover:text-red-500 transition">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contactus" onClick={handleLinkClick} className="hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>123 Fitness Street, Downtown, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-500" />
                <span>+92 340 5542097</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <span>info@ironcorefitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} IronCore Fitness. All rights
            reserved. | Made by Apexium | +92 340 5542097
          </p>
        </div>
      </div>

      
      
    </footer>
  );
};

export default Footer;
