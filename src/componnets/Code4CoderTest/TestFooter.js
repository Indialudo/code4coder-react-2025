import React from 'react'
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const TestFooter = () => {
  return (
   <>
    <footer className="body-font bg-gradient-to-r to-black from-[#0b0b3e] text-white">
        <div className="container md:px-5 px-2 py-10 mx-auto max-w-screen-xl border-t border-gray-400">
          <div className="flex flex-wrap md:text-left text-center order-first ">
            <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
              <h2 className="font-bold text-lg">Company</h2>
              <nav className="list-none mt-5 mb-10 space-y-2">
                <Link to="/link/about-us">
                  <li className="hover:tracking-widest cursor-pointer flex items-center gap-1">
                    <IoIosArrowForward /> About Us
                  </li>
                </Link>
                <Link to="/link/privacy-policy">
                  <li className="hover:tracking-widest cursor-pointer flex items-center gap-1">
                    <IoIosArrowForward /> Privacy Policy
                  </li>
                </Link>
                <Link to="/link/term-condition">
                  <li className="hover:tracking-widest cursor-pointer flex items-center gap-1">
                    <IoIosArrowForward /> Terms & Condition
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
              <h2 className="font-bold text-lg">Contact</h2>
              <nav className="list-none mt-5 mb-10 space-y-2">
                <li className="flex items-center gap-2">
                  <FaLocationDot /> India
                </li>
                <li className="flex items-center gap-2">
                  <IoCall /> 9341045976
                </li>
                <li className="flex items-center gap-2">
                  <IoMdMail /> info@code4coder.com
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
              <h2 className="font-bold text-lg">Opening</h2>
              <nav className="list-none mt-5 mb-10">
                <li className="text-xl sm:text-2xl font-bold">24x7</li>
              </nav>
            </div>
            <Link
              to="https://wa.me/9341045976"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:w-1/4 sm:w-1/2 w-full md:px-4"
            >
              <h2 className="font-bold text-lg">Enquire Now</h2>
              <button className="flex items-center justify-center gap-2 bg-green-700 text-white font-medium text-lg px-4 py-2 w-full rounded mt-4">
                <FaWhatsapp size={26} /> Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </footer>
   </>
  )
}

export default TestFooter