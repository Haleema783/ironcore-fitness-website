// pages/Accommodation.jsx
import React from "react";
import {
  FaWifi,
  FaBath,
  FaBed,
  FaLock,
  FaDesktop,
  FaChair,
  FaShower,
  FaWhatsapp,
} from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { Link } from "react-router-dom";

const Accommodation = () => {
  const roomTypes = [
    {
      id: 1,
      type: "Single Room",
      price: 5000,
      capacity: "1 Person",
      
      image:
        "https://plus.unsplash.com/premium_photo-1663089276389-0bba059cc73a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9zdGVsJTIwcm9vbSUyMHNpbmdsZSUyMGJlZGVkfGVufDB8fDB8fHww",
      amenities: ["Attached Bathroom", "Study Table", "WiFi", "Cupboard"],
      icons: [FaBath, FaDesktop, FaWifi, FaLock]
    },
    {
      id: 2,
      type: "Double Room",
      price: 8000,
      capacity: "2 Persons",
      
      image:
        "https://media.istockphoto.com/id/515808546/photo/interior-of-an-elegant-twin-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljMLuCAWjnGb3tD8C7X9DDYIZD56_zukZQpqAml3FwA=",
      amenities: ["Attached Bathroom", "2 Study Tables", "WiFi", "Cupboards"],
      icons: [FaShower, FaDesktop, FaWifi, FaLock]
    },
    {
      id: 3,
      type: "Dormitory (4-bed)",
      price: 3000,
      available: 10,
      capacity: "4 Persons",
      image: "https://th.bing.com/th/id/R.1a863a9c1a630aa567d8a0a7cbf9157e?rik=ZL635moQeN94JQ&riu=http%3a%2f%2fwww.woohome.com%2fwp-content%2fuploads%2f2014%2f12%2fbedroom-ideas-for-four-kids-18.jpg&ehk=E7HEys6XE1hJgYOzM4Am91xiOXvwejsLIyur%2fF%2bzvSw%3d&risl=&pid=ImgRaw&r=0",
      amenities: ["Shared Bathroom", "Lockers", "WiFi", "Common Study Area"],
      icons: [FaBath, FaLock, FaWifi, FaChair]
    },
    {
      id: 4,
      type: "Dormitory (6-bed)",
      price: 2500,
      available: 8,
      capacity: "6 Persons",
      image: "https://th.bing.com/th/id/R.2996a7cb63d682c0399e8a880711e6ec?rik=U4%2baiyfcC%2bZ52w&pid=ImgRaw&r=0",
      amenities: ["Shared Bathroom", "Lockers", "WiFi", "Laundry Access"],
      icons: [FaBath, FaLock, FaWifi, FaChair]
    },
  ];

  return (<div className="mt-0">
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Accommodation Options
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide comfortable and affordable accommodation for students. Choose
            from private or shared rooms, all equipped with essential facilities to
            make your stay stress-free and productive.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-700"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-64 object-cover"
                />
                
              </div>
              
              <div className="p-6">
                {/* Title + Capacity */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {room.type}
                    </h3>
                    <p className="text-sm text-gray-400 flex items-center">
                      <FaBed className="mr-2 text-blue-400" /> {room.capacity}
                    </p>
                  </div>
                  
                  {/* Availability */}
                  
                </div>

                {/* Amenities */}
                <h4 className="font-semibold text-gray-200 mb-3">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {room.amenities.map((amenity, index) => {
                    const IconComponent = room.icons[index];
                    return (
                      <li
                        key={index}
                        className="flex items-center bg-gray-700 px-3 py-2 rounded-lg text-sm"
                      >
                        <IconComponent className="text-blue-400 mr-2" />
                        <span className="text-gray-300">{amenity}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Button */}
                
              </div>
            </div>
          ))}
        </div>

       

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl p-12 text-center mb-20 border border-blue-700 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
            Ready to Join Our Community?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto relative z-10">
            Book your stay today and become part of our vibrant student
            community. Limited rooms available for the upcoming academic year.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 relative z-10">
            <Link
              to="/booking"
              className="bg-white text-blue-800 font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <button className="bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300">
              <span className="flex items-center justify-center">
                <FaWhatsapp className="mr-2" /> WhatsApp Inquiry
              </span>
            </button>
          </div>
        </section>
      </div>
    </div></div>
  );
};

export default Accommodation;