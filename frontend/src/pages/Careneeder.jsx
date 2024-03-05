// CareNeederForm.js
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const CareNeederForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    phoneNumber: "",
    address: "",
    dob: "",
    age: "",
    gender: "",
    genderRequirement: "",
    communicationPreference: "",
    emergencyContact: "",
    behavioralConsideration: "",
    legalAuthorization: "",
    services: "",
    healthInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md filter drop-shadow-md md:drop-shadow-xl ">
      <h1 className="text-2xl font-semibold mb-4">Care Needer Registration</h1>
      <form onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        {/* Add other form fields similarly */}
        
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      {submitted && (
        <div className="text-center text-primaryColor ">
          Thank you for registering! {/* Add any additional message or redirection logic here */}
        </div>
      )}
    </div>
  );
};

export default CareNeederForm;