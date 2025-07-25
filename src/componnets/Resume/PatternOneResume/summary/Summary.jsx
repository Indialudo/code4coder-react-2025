import React from "react";

const Summary = ({ summary, onChange }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg mt-8">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 relative inline-block w-full">
        <span className="relative z-10">⭐ Professional Summary</span>
        <span className="absolute bottom-0 left-1/2 w-2/3 h-1 bg-gradient-to-r from-blue-500 to-pink-500 transform -translate-x-1/2 rounded"></span>
      </h3>

      {/* Textarea */}
      <textarea
        name="summary"
        rows="4"
        placeholder="Write a short and impactful professional summary that highlights your experience, strengths, and goals."
        value={summary}
        onChange={onChange}
        className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-gray-700 text-sm sm:text-base"
      />
    </div>
  );
};

export default Summary;
