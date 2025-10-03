import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { FaWhatsapp } from "react-icons/fa";
import About from './pages/About';
import Services from './pages/Services';
import Accommodation from './pages/Accommodation';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Facilities from './pages/Facilities';
import Location from './pages/Location';
import ContactUs from './pages/ContactUs';
import Payments from './pages/Payments';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  



  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/923405542097"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="fixed bottom-7 right-7 text-green-500 z-50 text-[50px]" />
        </a>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
