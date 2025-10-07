// pages/Facilities.jsx
import React from "react";
import { 
  FaDumbbell, 
  FaRunning, 
  FaSwimmer, 
  FaBicycle, 
  FaSpa, 
  FaUserShield,
  FaUtensils,
  FaShower,
  FaWifi,
  FaParking,
  FaHeartbeat,
  FaClock
} from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    { title: "Strength Zone", description: "Top-quality free weights, squat racks, and machines for strength training.", icon: FaDumbbell },
    { title: "Cardio Zone", description: "Modern treadmills, bikes, and ellipticals for endurance workouts.", icon: FaRunning },
    { title: "Swimming Pool", description: "Indoor heated pool for cardio, recovery, and relaxation.", icon: FaSwimmer },
    { title: "Cycling Studio", description: "High-energy spin classes with immersive lighting and music.", icon: FaBicycle },
    { title: "Sauna & Spa", description: "Relax and recover with our steam, sauna, and spa facilities.", icon: FaSpa },
    { title: "24/7 Security", description: "CCTV and secure access to ensure members’ safety at all times.", icon: FaUserShield },
    { title: "Healthy Café", description: "Nutritious shakes, protein snacks, and post-workout meals.", icon: FaUtensils },
    { title: "Showers & Lockers", description: "Modern locker rooms with hot showers and changing space.", icon: FaShower },
    { title: "Free Wi-Fi", description: "Stay connected with high-speed internet while training.", icon: FaWifi },
    { title: "Parking Area", description: "Ample, secure parking space for cars and bikes.", icon: FaParking },
    { title: "Medical Support", description: "On-site first aid and emergency response readiness.", icon: FaHeartbeat },
    { title: "24/7 Access", description: "Train anytime with round-the-clock access for premium members.", icon: FaClock },
  ];

  return (
    <div className="mt-5">
      <div className="bg-black min-h-screen text-gray-100">
        <div className="container mx-auto px-6 py-16">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4">
              Gym Facilities & Amenities
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              At IronCore Fitness, we offer world-class facilities to make your training
              experience complete, safe, and enjoyable.
            </p>
          </div>

          {/* Facilities Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center 
                               transition-all duration-500 hover:scale-105 hover:border-red-500 
                               shadow-md hover:shadow-red-600/50 group"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-md">
                        <IconComponent className="text-white text-2xl" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {facility.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm">
                      {facility.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
