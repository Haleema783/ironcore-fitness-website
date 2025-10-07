// pages/Services.jsx
import React from "react";
import { 
  FaUserAlt, 
  FaUsers, 
  FaAppleAlt, 
  FaRunning, 
  FaDumbbell, 
  FaLock, 
  FaBlender, 
  FaClock, 
  FaSpa 
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions tailored to your fitness goals.",
      icon: <FaUserAlt className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts to stay motivated and accountable.",
      icon: <FaUsers className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "Nutrition Guidance",
      description: "Customized meal plans and diet consultations from experts.",
      icon: <FaAppleAlt className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "Cardio Zone",
      description: "State-of-the-art treadmills, bikes, and ellipticals for endurance training.",
      icon: <FaRunning className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "Strength Training",
      description: "Wide range of free weights and resistance machines for muscle building.",
      icon: <FaDumbbell className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "Locker Rooms",
      description: "Secure lockers, showers, and changing areas for members.",
      icon: <FaLock className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "Supplement Bar",
      description: "Protein shakes, pre-workouts, and snacks available on-site.",
      icon: <FaBlender className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "24/7 Access",
      description: "Train anytime with round-the-clock gym access for members.",
      icon: <FaClock className="text-4xl text-red-500 mx-auto mb-4" />
    },
    {
      title: "Recovery Zone",
      description: "Foam rollers, massage chairs, and stretching areas for recovery.",
      icon: <FaSpa className="text-4xl text-red-500 mx-auto mb-4" />
    }
  ];

  return (
    <div className="mt-8">
      <div className="bg-black min-h-screen py-12 text-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-6">
            Our Gym Services
          </h1>

          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
            At IronCore Fitness, we provide a wide range of premium services to help you
            achieve your fitness goals and build a healthier lifestyle.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center 
                           transition-all duration-500 hover:scale-105 hover:border-red-500 
                           shadow-md hover:shadow-red-600/50"
              >
                {/* Icon */}
                {service.icon}

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
