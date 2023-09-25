import React from "react";
import WhyChooseCard from "./WhyChooseCard";
import choosedummyData from "./choouseUsData";

function WhyChooseUs() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center">Why Choose Us</h1>
      <div className=" p-24 pt-4 flex justify-center items-center">
        <div className="container mx-auto">
          {choosedummyData.map((item) => (
            <div key={item.id} className="m-4">
              <WhyChooseCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
