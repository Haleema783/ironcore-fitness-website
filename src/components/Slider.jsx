// components/Slider.jsx
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://wallpapers.com/images/featured/workout-tbx6fzhe2jsty564.jpg",
      title: "Dark Forest",
      description: "Mysterious woodland under the moonlight"
    },
    {
      image: "https://i.pinimg.com/1200x/40/e6/c5/40e6c5f5681473f4914d7a5b98245cdd.jpg",
      title: "Night Cityscape",
      description: "Urban landscape illuminated by city lights"
    },
    {
      image: "https://structure.com.pk/wp-content/uploads/2025/02/4-1.webp",
      title: "Cosmic Wonder",
      description: "Starry night sky with celestial phenomena"
    }
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg bg-gray-900 shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0  bg-opacity-50 z-10"></div>
          
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="text-white px-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-shadow"></h2>
              <p className="text-lg md:text-xl opacity-90 text-shadow"></p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows - redesigned for dark theme */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators - redesigned for dark theme */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-400 scale-125' 
                : 'bg-gray-500 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;