import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoPeopleSharp } from "react-icons/io5";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";

const features = [
  {
    icon: <MdOutlineVerifiedUser className="w-16 h-16 text-blue-600" />,
    title: "Verified Companies",
  },
  {
    icon: <IoPeopleSharp className="w-16 h-16 text-blue-600" />,
    title: "Personalized Matches",
  },
  {
    icon: <HiMiniCursorArrowRipple className="w-16 h-16 text-blue-600" />,
    title: "One-Click Apply",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-16 h-16 text-blue-600" />,
    title: "Resume Tips",
  },
];

const WhyChooseTalentStack = () => {
  return (
    <div className="bg-blue-800 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-white text-center">
          Why Choose TalentStack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-4"
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTalentStack; 