// src/pages/Membership.jsx
import React from "react";
import { 
  FaDumbbell, 
  FaUsers, 
  FaCrown, 
  FaMedal, 
  FaCheckCircle 
} from "react-icons/fa";

const Membership = () => {
  const plans = [
    { 
      type: "Basic Plan – Start Strong", 
      price: 3000, 
      deposit: 1000,
      icon: FaDumbbell,
      description: "Perfect for beginners building a routine.",
      features: ["Access to gym equipment", "Locker & shower access", "Free orientation session"],
      link: "/contact" 
    },
    { 
      type: "Silver Plan – Stay Consistent", 
      price: 6000, 
      deposit: 2000, 
      icon: FaUsers,
      description: "Stay active and accountable with added benefits.",
      features: ["All Basic Plan benefits", "1 group class per week", "Monthly progress check with trainer"],
      link: "/contact"
    },
    { 
      type: "Gold Plan – Level Up", 
      price: 10000, 
      deposit: 3000, 
      icon: FaMedal,
      description: "Best value for serious fitness seekers.",
      features: ["Unlimited gym access", "All group fitness classes", "2 personal training sessions / month", "Customized workout guidance"],
      link: "/contact"
    },
    { 
      type: "Platinum Plan – Go Elite", 
      price: 15000, 
      deposit: 5000, 
      icon: FaCrown,
      description: "Premium choice for ultimate results.",
      features: ["All Gold Plan benefits", "Unlimited personal training", "Customized fitness & nutrition plan", "VIP access to events", "Discounts on supplements & merchandise"],
      link: "/contact"
    },
  ];

  return (
    <div className="mt-5">
      <div className="bg-black min-h-screen text-white">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          
          {/* Title */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Membership Plans
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto capitalize">
                Choose your path. Unlock your potential. From beginners to elite athletes, IronCore Fitness has a plan designed to fit your journey. Pick the membership that matches your lifestyle and start transforming today.
              </p>
            </div>

            <div className="bg-black rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
              {/* Premium Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8 text-center">
                <h3 className="text-2xl font-bold text-white">Our Membership Packages</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {plans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <div 
                      key={index} 
                      className="relative bg-black p-6 rounded-2xl border border-gray-800 transition-all duration-500 transform hover:scale-105 group hover:border-blue-500"
                    >
                      {/* Plan Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                          <div className="relative bg-gradient-to-br from-blue-700 to-purple-700 p-4 rounded-2xl shadow-lg">
                            <IconComponent className="text-blue-300 text-2xl" />
                          </div>
                        </div>
                      </div>

                      {/* Plan Type */}
                      <h3 className="text-xl font-bold text-center mb-2 text-white">
                        {plan.type}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="text-center mb-4 bg-gray-900/60 py-4 rounded-xl border border-gray-700">
                        <div className="flex items-baseline justify-center">
                          <span className="text-3xl font-bold text-white">Rs.{plan.price.toLocaleString()}</span>
                          <span className="text-gray-400 text-sm ml-2">/month</span>
                        </div>
                      </div>

                      {/* Deposit */}
                      <div className="text-center mb-6">
                        <span className="text-gray-300 text-sm">Security Deposit: </span>
                        <span className="text-green-400 font-semibold">Rs.{plan.deposit.toLocaleString()}</span>
                      </div>

                      {/* Features List */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3 text-center flex items-center justify-center">
                          <span className="w-4 h-0.5 bg-blue-500 mr-2"></span>
                          INCLUDES
                          <span className="w-4 h-0.5 bg-blue-500 ml-2"></span>
                        </h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-center text-sm text-gray-300 group-hover:text-gray-100 transition-colors"
                            >
                              <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Join Now Button */}
                      <div className="text-center">
                        <a 
                          href={plan.link} 
                          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
                        >
                          Join Now
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Note */}
              <div className="bg-gray-900/50 px-8 py-6 border-t border-gray-800">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">
                    Security deposits are fully refundable upon membership cancellation in good condition.
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      No hidden charges
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      All utilities included
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Flexible payment options
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Membership;
