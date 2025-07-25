import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../header/NavBar';

function ResumeMain() {
  return (
    <div className="resume-wrapper bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-800 text-white font-sans min-h-screen">
      {/* Navbar/Header */}
      <header className="resume-header bg-black px-6 md:px-10 py-5 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold tracking-wider">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="resume-container flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-16 gap-10">
        {/* Text Section */}
        <div className="resume-text w-full md:w-2/3 text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gradient">
            Build a Job-Winning <br /> Resume in Minutes
          </h1>
          <p className="text-lg text-gray-300">
            Use recruiter-approved templates and content tips to double your hiring chances.
            Start fresh or optimize your current resume — it's fast, free, and fabulous!
          </p>

          <div className="resume-buttons flex flex-col md:flex-row gap-4 mt-6">
            <Link to="/resume-pattern" className="w-full md:w-auto">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 w-full md:w-auto">
                Create New Resume
              </button>
            </Link>
            <button className="border border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">
              Optimize My Resume
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="resume-image w-full md:w-1/3 flex justify-center">
          <img
            src="/resume/resume.jpg"
            alt="Resume Preview"
            className="rounded-2xl shadow-2xl max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="resume-footer bg-black py-6 text-center text-gray-400 text-sm">
        &copy; 2025 Resume Builder. All rights reserved.
      </footer>
    </div>
  );
}

export default ResumeMain;
