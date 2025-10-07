import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { FaWhatsapp } from "react-icons/fa";
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Facilities from './pages/Facilities';
import ContactUs from './pages/ContactUs';
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
  className="fixed bottom-7 right-7 z-50"
>
  <div className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition">
    <FaWhatsapp className="text-white text-[40px]" />
  </div>
</a>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
