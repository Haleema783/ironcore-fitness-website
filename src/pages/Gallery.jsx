// pages/Gallery.jsx
import React, { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    {
      id: 1,
      src: "https://s.wsj.net/public/resources/images/BN-WS437_Cardio_P_20171221155221.jpg",
      caption: "Strength Training Zone",
      category: "workout-areas",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&auto=format&fit=crop&q=60",
      caption: "Cardio Machines",
      category: "equipment",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
      caption: "Personal Training Session",
      category: "trainers",
    },
    {
      id: 4,
      src: "https://gvac.com/wp-content/uploads/2024/01/d7856845cfa7f5b62db5313105d7c8a5.jpg",
      caption: "Yoga & Classes Studio",
      category: "classes",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&auto=format&fit=crop&q=60",
      caption: "Boxing & CrossFit",
      category: "workout-areas",
    },
    {
      id: 6,
      src: "https://www.fitinteriors.co.uk/wp-content/uploads/2024/01/the-padel-resort-01b.jpg",
      caption: "Locker Rooms",
      category: "facilities",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&auto=format&fit=crop&q=60",
      caption: "Free Weights",
      category: "equipment",
    },
    {
      id: 8,
      src: "https://physiqfitness.com/wp-content/uploads/2023/09/Physiq-Team-Training.png",
      caption: "Group Fitness Event",
      category: "events",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "workout-areas", label: "Workout Areas" },
    { id: "equipment", label: "Equipment" },
    { id: "classes", label: "Classes" },
    { id: "trainers", label: "Trainers" },
    { id: "facilities", label: "Facilities" },
    { id: "events", label: "Events" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((image) => image.category === activeFilter);

  return (
    <div className="bg-black min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a glimpse inside IronCore Fitness — where strength, passion,
            and dedication come alive.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800 bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    <p className="text-white text-lg font-semibold mb-1">
                      {image.caption}
                    </p>
                    <span className="text-blue-400 text-sm capitalize">
                      {image.category.replace("-", " ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-6xl mb-4">📷</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No images found
            </h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
