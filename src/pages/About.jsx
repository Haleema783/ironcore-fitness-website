// pages/About.jsx
import React from "react";

const About = () => {
  const team = [
    {
      name: "Ahmed Khan",
      role: "Gym Manager",
      img: "https://static.vecteezy.com/system/resources/thumbnails/046/837/306/small/fitness-trainer-smiling-in-gym-with-dumbbells-diverse-trainer-health-and-wellness-promotion-professional-athlete-strength-training-coach-photo.jpg"
    },
    {
      name: "Ayesha Malik",
      role: "Head Trainer",
      img: "https://t3.ftcdn.net/jpg/05/62/09/28/360_F_562092860_mWJBNRqTg4rarfoJaSdkaLlfy1dkrP33.jpg"
    },
    {
      name: "Imran Ali",
      role: "Nutritionist",
      img: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png"
    },
    {
      name: "Bilal Ahmed",
      role: "Fitness Coach",
      img: "https://media.istockphoto.com/id/1988016215/photo/happy-coach-using-digital-tablet-in-a-gym-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=bCu-fOR_HsGVd7fmnLRQRCus8ypk3_DZc5Mt10b2DwQ="
    }
  ];

  return (
    <div className="mt-5">
      <div className="bg-black min-h-screen text-white">
        <div className="container mx-auto px-6 py-16">

          {/* Intro / Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-red-700">
                About Us
              </h2>
              <p className="mb-4">
             At IronCore Fitness, we believe fitness is for every body. 
             True strength isn’t just about lifting heavier. It’s about improving your health, confidence, and quality of life.              </p>
              <p className="mb-4">
             Our mission is to create a space where everyone feels welcome from first-time gym-goers and athletes 
             to those managing health conditions like diabetes, joint pain, or recovery after injury.              </p>
              <p className="mb-4">
             With cutting-edge equipment, personalized programs, and certified trainers, we guide you every step of the way. Whether you want to build strength,
             improve mobility, lose weight, recover safely, or simply feel better in daily life, IronCore Fitness is here for you.              </p>
              <h3 className="text-xl font-semibold mt-6 mb-4">What We Offer:</h3>
              <p>
                ✅ Certified, professional trainers <br />
                ✅ Modern equipment & facilities designed for all fitness levels <br />
                ✅ Customized programs for athletes, beginners, and recovery needs <br />
                ✅ A supportive, non-judgmental community that lifts each other u
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-xl opacity-20 blur-lg"></div>
              <img
                src="https://static.where-e.com/United_States/Luxeworks-Fitness-Port-Richey_3cf0bedafeb668a8da1d815f95965fc1.jpg"
                alt="gym"
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#0a0a0a] rounded-xl p-10 mb-20 border border-gray-700 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-800 rounded-full filter blur-3xl opacity-10"></div>
            
            <h2 className="text-3xl font-bold mb-6 relative z-10 text-red-500">Our Mission</h2>
            <p className="max-w-3xl mx-auto leading-relaxed relative z-10 text-gray-300">
              At IronCore Fitness, our mission is to empower individuals to unlock 
              their full potential through fitness. We are committed to building a community where strength, discipline, and determination thrive.
            </p>
          </div>

          {/* Team */}
          <h2 className="text-3xl font-bold text-center mb-12 text-red-500">
            Management Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative mx-auto mb-4 w-32 h-32 rounded-full bg-gradient-to-r from-red-500 to-red-700 p-1">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-red-500">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-700 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-900 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-red-500" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p>Certified trainers dedicated to your success every rep, every step.</p>
              </div>
              
              <div className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-700 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-900 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-red-500" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
                    <path d="M3 9h18M9 21V9" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
                <p>Train with cutting-edge equipment in a clean, motivating environment.</p>
              </div>
              
              <div className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-700 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-900 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-red-500" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path d="M12 6v6l4 2" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Results That Last</h3>
                <p>From fitness goals to lifestyle changes we help you achieve it all.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
