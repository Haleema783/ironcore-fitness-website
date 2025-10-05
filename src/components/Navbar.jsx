// components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Links list
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/facilities", label: "Facilities" },
    { to: "/about", label: "About" },
    { to: "/membership", label: "Membership" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contactus", label: "ContactUs" },
  ];

  return (
    <nav className="bg-black fixed top-0 w-full z-50">
      <nav className="bg-black text-white shadow-xl border-b border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3" onClick={scrollToTop}>
              <img
                src="https://img.freepik.com/premium-vector/fitness-logo-gym-icon-background-trainer-logo-bodybuilding-strong-icon-vector-illustration_368471-670.jpg"
                alt="IronCore Logo"
                className="h-10 w-10 object-cover"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                IronCore Fitness
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.to}
                  onClick={scrollToTop}  
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 rounded-md text-sm font-medium bg-red-600 text-white transition-all"
                      : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 p-2 rounded-md"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 bg-gray-900 rounded-lg mt-2">
              <div className="flex flex-col space-y-1 px-2 pt-2">
                {navLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    to={link.to}
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop(); 
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "px-3 py-2 rounded-md text-base font-medium bg-red-600 text-white"
                        : "px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800"
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
