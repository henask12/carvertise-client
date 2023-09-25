import React from "react";

function HeroSection() {
  return (
    <div className="relative h-screen text-center flex flex-col justify-center">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={require("../../assets/20-SEC.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="bg-black opacity-50 absolute inset-0"></div>

      <div className="relative z-10 text-white">
        <h1 className="text-6xl font-bold mb-6">ETHIOPIA'S LARGEST</h1>
        <h1 className="text-5xl font-bold mb-6">
          RIDESHARE ADVERTISING COMPANY
        </h1>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out">
            Brands
          </button>
          <button className="bg-green-500 hover.bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out">
            Drivers
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
