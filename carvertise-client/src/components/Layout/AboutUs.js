import React from "react";
import AboutCard from "./AboutCard";
import dummyData from "./dummyData";

function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <div className="flex justify-center items-center">
        <div className="container mx-auto flex flex-wrap justify-center">
          {dummyData.map((item) => (
            <div key={item.id} className="m-4">
              <AboutCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
