import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const testimonials = [
  {
    avatar: "👩‍💼",
    testimonial: "TalentStack helped me land my dream job quickly and easily.",
    name: "Priya S.",
    title: "Software Engineer",
  },
  {
    avatar: "👨‍💼",
    testimonial: "The personalized job recommendations were spot on!",
    name: "Amit M.",
    title: "Product Manager",
  },
  {
    avatar: "👩‍🎨",
    testimonial: "I found the perfect job through TalentStack.",
    name: "Sanya R.",
    title: "Graphic Designer",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-blue-800 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
            Testimonials
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl">
            Hear from our users
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 relative"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <HiOutlineChatBubbleLeftRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 mb-2 sm:mb-3 mx-auto sm:mx-0" />
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 