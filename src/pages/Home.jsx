// src/pages/Home.jsx
import React from "react";
import Slider from "../components/Slider";
import Gallery from "./Gallery";
import Services from "./Services";
import Facilities from "./Facilities";import { FaStar, FaRegStar, FaStarHalfAlt, FaUserCircle } from "react-icons/fa";

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
            Welcome to{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              The IronCore Fitness
            </span>
          </h2>
          <p className="text-gray-300">
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
        {/* Services */}
        <section className="mb-12">
          <Services />
        </section>
      
        
       
      </div>
    </div>
  );
};

export default Home;
