// src/pages/Home.jsx
import React from "react";
import Slider from "../components/Slider";
import Gallery from "./Gallery";
import { FaStar, FaRegStar, FaStarHalfAlt, FaUserCircle } from "react-icons/fa";

const Home = () => {
  const reviews = [
    {
      text: "The trainers are amazing, and the environment keeps me motivated every day!",
      name: "Ahmed Raza (Lahore)",
      role: "Fitness Enthusiast",
      stars: 4.5,
    },
    {
      text: "Best gym in town! Equipment is modern and the staff is very supportive.",
      name: "Muhammad Bilal (Karachi)",
      role: "Bodybuilder",
      stars: 5,
    },
    {
      text: "A safe and comfortable place to train. The community here is awesome.",
      name: "Hamza Khan (Islamabad)",
      role: "Athlete",
      stars: 4,
    },
    {
      text: "The diet and workout guidance I received completely changed my lifestyle.",
      name: "Ali Hassan (Multan)",
      role: "Student",
      stars: 4.5,
    },
    {
      text: "IronCore Fitness is more than a gym. It’s a family that supports your goals.",
      name: "Samiullah (Peshawar)",
      role: "Trainer",
      stars: 5,
    },
    {
      text: "Clean, spacious, and affordable. Highly recommend to anyone serious about fitness.",
      name: "Faisal Iqbal (Faisalabad)",
      role: "Powerlifter",
      stars: 4,
    },
  ];

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Hero Slider */}
      <section className="mb-7">
        <Slider />
      </section>

      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-blue-400">The IronCore Fitness</span>
          </h2>
          <p>
            Whether your goal is to build muscle, burn fat, or stay active,
            we provide the tools, guidance, and motivation to help you succeed.
            With expert trainers, modern equipment, and a supportive community,
            your transformation starts here.
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <Gallery />
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg hover:border-blue-500 transition border border-gray-800"
              >
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>

                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => {
                    if (i + 1 <= Math.floor(review.stars))
                      return <FaStar key={i} className="text-yellow-400" />;
                    if (i < review.stars)
                      return <FaStarHalfAlt key={i} className="text-yellow-400" />;
                    return <FaRegStar key={i} className="text-yellow-400" />;
                  })}
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-center">
                  <FaUserCircle className="text-blue-400 w-12 h-12 mr-4" />
                  <div className="text-left">
                    <h4 className="font-semibold text-white">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
