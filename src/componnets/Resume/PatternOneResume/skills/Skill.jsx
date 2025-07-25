import React from "react";

const Skills = ({ skills, onSkillsChange }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-lg space-y-6">
      <h3 className="text-2xl font-bold text-center text-indigo-700 flex items-center justify-center gap-2">
        <span className="text-yellow-500">★</span> Skills <span className="text-yellow-500">★</span>
      </h3>

      <div className="bg-white border border-indigo-200 p-4 rounded-xl shadow-md space-y-3">
        <textarea
          name="skills"
          rows="3"
          placeholder="e.g., HTML, CSS, React, Node.js"
          value={skills}
          onChange={onSkillsChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
    </div>
  );
};

export default Skills;
