import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseResumePattern = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate("/create-resume");
  };

  return (
    <div className="resume-pattern-wrapper min-h-screen bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-500 px-4 py-10 flex flex-col items-center justify-center text-white">
      <h2 className="resume-pattern-title text-4xl font-extrabold mb-10 text-center drop-shadow-lg">
        ✨ Choose Your Resume Template ✨
      </h2>

      <div className="resume-pattern-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {/* Resume Pattern Card */}
        <div className="resume-card bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 text-black">
          <img
            src="/resume/resume.jpg"
            alt="Resume Pattern"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 space-y-3">
            <h3 className="text-xl font-semibold text-center">Modern Resume</h3>
            <p className="text-sm text-center text-gray-600">Clean layout, best for tech & design roles</p>
            <button
              onClick={handleSelect}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold w-full py-2 rounded-lg transition-all"
            >
              Let's Start 🚀
            </button>
          </div>
        </div>

        {/* Placeholder for more patterns */}
        <div className="resume-card bg-white rounded-xl shadow-xl overflow-hidden opacity-70 cursor-not-allowed text-black">
          <img
            src="/resume/coming-soon.jpg"
            alt="Coming Soon"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Coming Soon</h3>
            <p className="text-gray-500 text-sm">More templates will be added soon</p>
          </div>
        </div>

        {/* Another Placeholder */}
        <div className="resume-card bg-white rounded-xl shadow-xl overflow-hidden opacity-70 cursor-not-allowed text-black">
          <img
            src="/resume/coming-soon2.jpg"
            alt="Coming Soon"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Coming Soon</h3>
            <p className="text-gray-500 text-sm">Stay tuned for updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseResumePattern;
