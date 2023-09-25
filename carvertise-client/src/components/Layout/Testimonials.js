import React, { useState } from "react";

const Testimonials = () => {
  const [step, setStep] = useState(1);

  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "Carvertise is an amazing platform! I earned $1,000 from my first campaign.",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Becoming a driver with Carvertise was so easy, and the extra income is fantastic.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      testimonial:
        "I love driving my car with Carvertise ads. It's a fun way to make money.",
    },
  ];

  // Step 1: Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Step 2: Car Information
  const [carInfo, setCarInfo] = useState({
    make: "",
    model: "",
    year: "",
    licensePlate: "",
    color: "",
    description: "",
  });

  // Step 3: Driving Information
  const [drivingInfo, setDrivingInfo] = useState({
    homeCity: "",
    workCity: "",
    avgMilesWeek: "",
    avgMilesWeekend: "",
    rideshare: "",
    allowContact: false,
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access data from personalInfo, carInfo, and drivingInfo
    // Send the data to your backend or perform any other necessary actions
  };

  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-3xl mx-auto flex">
        {/* Testimonials */}
        <div className="w-1/2 p-6">
          <div className="carousel">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="carousel-item mb-6">
                <p className="text-lg">{testimonial.testimonial}</p>
                <p className="text-gray-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="w-1/2 p-6">
          {/* Stepper */}
          <div className="heading text-center">
            <h2>EARN $450 – $1500</h2>
            <div className="subheading text-center">each campaign</div>
            <h3>Become a driver in just 3 easy steps</h3>
          </div>
          <div className="flex items-center mb-8">
            <div
              className={`w-1/3 text-center ${
                step === 1 ? "text-blue-500 font-semibold" : "text-gray-500"
              }`}
            >
              Step 1
            </div>
            <div
              className={`w-1/3 text-center ${
                step === 2 ? "text-blue-500 font-semibold" : "text-gray-500"
              }`}
            >
              Step 2
            </div>
            <div
              className={`w-1/3 text-center ${
                step === 3 ? "text-blue-500 font-semibold" : "text-gray-500"
              }`}
            >
              Step 3
            </div>
          </div>

          {/* Form Steps */}
          {step === 1 && (
            <form onSubmit={handleNext}>
              {/* Step 1: Personal Information */}
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Phone"
                  name="phone"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              >
                Next
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext}>
              {/* Step 2: Car Information */}
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Make"
                  name="make"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Model"
                  name="model"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Year"
                  name="year"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="License Plate"
                  name="licensePlate"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Color"
                  name="color"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Description of Routine"
                  name="description"
                  rows="4"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handlePrevious}
                className="mr-4 text-gray-500 hover:text-gray-600"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Next
              </button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleFormSubmit}>
              {/* Step 3: Driving Information */}
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Home City"
                  name="homeCity"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Work City"
                  name="workCity"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Average Miles Driven Each Week"
                  name="avgMilesWeek"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Average Miles Driven Each Weekend"
                  name="avgMilesWeekend"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">
                  Are you in any rideshare?
                </label>
                <div className="flex items-center">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="rideshare"
                      value="Yes"
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="rideshare"
                      value="No"
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                    name="allowContact"
                  />
                  <span className="ml-2 text-gray-600">
                    Allow us to contact you
                  </span>
                </label>
              </div>
              <button
                type="button"
                onClick={handlePrevious}
                className="mr-4 text-gray-500 hover:text-gray-600"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
