import React from 'react';
import { FaStar } from 'react-icons/fa'; // optional FontAwesome star icon

const PersonalInfo = ({ handleFormChange }) => {
  return (
    <div className="resume-form-section bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl text-indigo-900">
      
      {/* Centered Title with Star */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold flex justify-center items-center gap-2 text-indigo-700">
          <FaStar className="text-yellow-500 animate-pulse" />
          Let’s Start With Your Header
          <FaStar className="text-yellow-500 animate-pulse" />
        </h2>
        <p className="text-lg mt-2 text-indigo-800">
          Include your full name and multiple ways for employers to reach you.
        </p>
      </div>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-sm mb-1 font-medium text-indigo-700">Full Name</label>
          <input
            name="fullName"
            placeholder="John Doe"
            onChange={handleFormChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1 font-medium text-indigo-700">Job Title</label>
          <input
            name="jobTitle"
            placeholder="Frontend Developer"
            onChange={handleFormChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1 font-medium text-indigo-700">Contact Number</label>
          <input
            name="contact"
            placeholder="+91 9876543210"
            onChange={handleFormChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1 font-medium text-indigo-700">Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            onChange={handleFormChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-sm mb-1 font-medium text-indigo-700">LinkedIn URL (Optional)</label>
          <input
            name="linkedIn"
            placeholder="https://linkedin.com/in/yourprofile"
            onChange={handleFormChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
