import React from "react";
import NavigationBar from "../components/NavigationBar";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#0078d4] text-white m-auto">
        <div className="container mx-auto px-4 py-20 text-left">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Microsoft 365</h1>
            <p className="text-xl mb-6">
              Premium Office apps, extra cloud storage, advanced security, and
              more—all in one convenient subscription.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#0078d4] px-6 py-2 font-semibold hover:bg-gray-100">
                For 1 person
              </button>
              <button className="border border-white px-6 py-2 font-semibold hover:bg-white hover:text-[#0078d4]">
                For up to 6 people
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
