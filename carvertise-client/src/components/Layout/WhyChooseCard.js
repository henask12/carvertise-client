import React from "react";

function WhyChooseCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-12 md:p-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-80 h-auto md:w-80 md:h-auto mx-auto"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

export default WhyChooseCard;
