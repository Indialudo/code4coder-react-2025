import React, { useState } from "react";
import Button from "../common/buttons/Button";
import GradientButton from "../common/buttons/GradientButton";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTimes,
  FaQuora,
  FaPinterest,
} from "react-icons/fa";
import { FaSquareShareNodes } from "react-icons/fa6";
import styles from "../styles/hero/hero1.module.css"; // Adjust path if needed
import HeroImgComponent from "./HeroImgComponent"; // Static import instead of dynamic
import ImgSkeleton from "./ImgSkeleton"; // If still needed for some loading fallback
import Navbar from "../header/NavBar";
import Footer from "../footer/Footer";

const Hero1 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const shareMessage = `
  //   Hey, check out Code4Coder Learning platform! 
  //   Discover professional IT training and coding courses tailored to your career goals.
  //   Join now to kickstart your journey to success! 

  //   Website: https://code4coder.com
  // `;

  const shareMessage = `
🚀 *Launch Your Tech Career with Code4Coder!*

💼 Join the most trusted online coding training platform and unlock your future in IT.

🎯 *Why Choose Code4Coder?*
🔹 💯 100% *Placement Guarantee*  
🔹 👨‍🏫 Industry-Expert Mentors  
🔹 💻 Hands-on Real-Time Projects  
🔹 🧠 Live Doubt Sessions  
🔹 📝 Resume & Interview Preparation  
🔹 🎓 For Students, Graduates & Professionals

🔥 Upgrade your skills, land your dream job — with Code4Coder!

🌐 Website: https://code4coder.com  
📞 Contact: +91 93410 45976
`;


  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      "https://code4coder.com"
    )}&quote=${encodeURIComponent(shareMessage)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      "https://code4coder.com"
    )}&text=${encodeURIComponent(shareMessage)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      "https://code4coder.com"
    )}&summary=${encodeURIComponent(shareMessage)}`,
    quora: `https://www.quora.com/q/share?url=${encodeURIComponent(
      "https://code4coder.com"
    )}&title=${encodeURIComponent(shareMessage)}`,
    pinterest: `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
      "https://code4coder.com"
    )}&media=${encodeURIComponent("https://code4coder.com")}&description=${encodeURIComponent(
      shareMessage
    )}`,
  };

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    
    // <section className="flex items-center justify-center box-border w-dvw overflow-x-hidden lg:h-[85vh] relative px-3 md:px-16 sm:px-10 bg-gradient-to-r to-black from-[#0b0b3e]">
  <>
   <section className="flex items-center justify-center w-full min-h-screen overflow-hidden relative px-4 sm:px-6 md:px-10 pt-16 sm:pt-0 bg-gradient-to-r from-[#0b0b3e] to-black">


      <div className="max-w-7xl mx-auto flex py-5 flex-wrap items-center overflow-x-hidden">
        <div className="lg:w-1/2 w-dvw space-y-3 md:my-0 mb-5 md:px-0 text-white">
          <h1 className="font-bold lg:text-7xl md:text-5xl sm:text-4xl text-3xl text-white leading-10">
            Learn New Skills Related to Your Passion
          </h1>
          <p className="text-gray-300">
            Interested in availing golden career opportunities? Join the Best Online Coding Training Institute,
            Code4Coder Academy! We’re known for providing top-notch professional IT training online courses
            to our students & professionals.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://wa.me/9341045976"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:mt-0 mt-3"
            >
              <GradientButton
                text="Enquire Now"
                classes="uppercase rounded-full"
                Icon={<FaWhatsapp size={24} />}
              />
            </a>
            <button
              onClick={togglePopup}
              className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition-all"
            >
              <FaSquareShareNodes size={24} />
              Share Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full relative flex justify-center items-center overflow-x-hidden overflow-y-hidden">
          <HeroImgComponent Styles={styles} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-600 p-6 rounded-lg w-[90%] max-w-md text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Share This Page</h2>
              <button
                onClick={togglePopup}
                className="text-white hover:text-gray-300"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button
                  text="WhatsApp"
                  classes="bg-white text-green-600 rounded-full"
                  Icon={<FaWhatsapp size={20} />}
                />
              </a>
              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Button
                  text="Facebook"
                  classes="bg-white text-blue-600 rounded-full"
                  Icon={<FaFacebook size={20} />}
                />
              </a>
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Button
                  text="Twitter"
                  classes="bg-white text-blue-400 rounded-full"
                  Icon={<FaTwitter size={20} />}
                />
              </a>
              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  text="LinkedIn"
                  classes="bg-white text-blue-700 rounded-full"
                  Icon={<FaLinkedin size={20} />}
                />
              </a>
              <a href={shareLinks.quora} target="_blank" rel="noopener noreferrer">
                <Button
                  text="Quora"
                  classes="bg-white text-red-600 rounded-full"
                  Icon={<FaQuora size={20} />}
                />
              </a>
              <a href={shareLinks.pinterest} target="_blank" rel="noopener noreferrer">
                <Button
                  text="Pinterest"
                  classes="bg-white text-red-600 rounded-full"
                  Icon={<FaPinterest size={20} />}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>

  </>
  );
};

export default Hero1;
