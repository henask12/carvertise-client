import React from "react";

function AboutCard({ name, role, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}

export default AboutCard;
