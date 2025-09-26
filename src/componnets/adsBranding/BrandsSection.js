import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaRegSmile,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-white min-h-screen px-6 md:px-20 py-10 flex justify-between items-start relative font-sans overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 mt-10">
        {/* Logo */}
        <img
          src="/logo.png" // Replace with your logo path
          alt="Adkrity Logo"
          className="h-10 mb-4"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0C0C0D] leading-tight">
          Run <span className="text-blue-600">Facebook</span><br />
          Ads effortlessly & Get<br />
          2X–5X result !
        </h1>

        {/* Subtext */}
        <p className="text-[#2A2C38] text-[15px] max-w-xl">
          Let AdKrity to automate your ads and target the potential customers
          through AI
        </p>

        {/* CTA Button */}
        <button className="bg-blue-700 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
          Book Free Session with Expert
        </button>

        {/* Store Badges */}
        <div className="flex gap-4 mt-4">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 justify-center relative">
        {/* Person Image */}
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328d45b4?auto=format&fit=facearea&facepad=3&w=320&h=320&q=100"
          alt="Person"
          className="rounded-xl w-64 h-72 object-cover z-10"
        />

        {/* Floating Social Icons */}
        <div className="absolute top-12 left-0">
          <FaFacebookF className="text-blue-600 bg-white p-2 rounded-full text-2xl shadow-md" />
        </div>
        <div className="absolute top-28 left-2">
          <FaWhatsapp className="text-green-600 bg-white p-2 rounded-full text-2xl shadow-md" />
        </div>
        <div className="absolute top-8 right-4">
          <FaGoogle className="text-black bg-white p-2 rounded-full text-2xl shadow-md" />
        </div>
        <div className="absolute top-20 right-0">
          <FaTwitter className="text-sky-500 bg-white p-2 rounded-full text-2xl shadow-md" />
        </div>
        <div className="absolute bottom-4 right-2">
          <FaInstagram className="text-pink-600 bg-white p-2 rounded-full text-2xl shadow-md" />
        </div>

        {/* Bottom Tag Box */}
        <div className="absolute bottom-4 right-8 bg-white px-4 py-3 rounded-xl shadow-md flex items-center gap-3 z-20">
          <div className="text-sm text-[#1A1A1A] font-medium leading-tight">
            Your Digital Growth <br /> Partner
          </div>
          <FaRegSmile className="text-black text-xl" />
        </div>
      </div>

      {/* Top Right Download App Button */}
      <div className="absolute top-6 right-6">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition">
          Download App
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
