import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaBullseye,
  FaMicrophoneAlt,
  FaUserTie,
  FaLaptopCode,
  FaBriefcase,
  FaPhone,
  FaFile,
  FaCertificate,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from "../topsection/Logo";
import Hero1 from "../Hero/Hero1";
import CourseCard from "../Home/Courses/CourseCard";
import FullContent from "../Home/FullContent";
import CourseMain from "../Home/Courses/CourseMain";
import FeatureMain from "../Home/features/FeatureMain";
import PartnerMain from "../Home/Partner/PartnerMain";
import TestimonialMain from "../Home/testimonial/TestimonialMain";
import AboutMain from "../Home/about/AboutMain";
import { FaClipboardList } from "react-icons/fa6";
// import Logo from "./topsection/Logo"; // Make sure this file exists at this path

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const page = location.pathname;

  const linkClasses = (type = null) => {
    return type === page ? "bg-gray-900" : "";
  };

  const links = [
    { text: "Home", href: "/", Icon: FaHome },
    { text: "Free Quiz", href: "/quiz", Icon: FaClipboardList },
    { text: "courses", href: "/courses", Icon: FaBook },
    { text: "placement", href: "/placement", Icon: FaBullseye },
    { text: "interview", href: "/interview", Icon: FaMicrophoneAlt },
    { text: "internship", href: "/internship", Icon: FaLaptopCode },
    { text: "Certificates", href: "/certificates", Icon: FaCertificate },
    // { text: "careers", href: "/careers", Icon: FaBriefcase },
    // { text: "certificates", href: "/certificates", Icon: GrCertificate },
  ];

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50 text-white">
      <div className="container px-3 py-3 max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="logo">
          <Link
            to="/"
            className="flex flex-shrink-0 items-center justify-between"
          >
            <Logo />
          </Link>
        </div>

        <ul className="lg:flex items-center gap-2 hidden">
          {links.map((link, i) => (
            <li
              className={`text-white rounded-md px-3 py-2 text-sm font-medium capitalize ${linkClasses(link.href)}`}
              key={i}
            >
              <Link to={link.href}>{link.text}</Link>
            </li>
          ))}
          <Link
            to="tel:9341045976"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center"
          >
            <FaPhone className="mr-2" />
            9341045976
          </Link>
        </ul>

        <div className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          <IoMdMenu size={34} className="cursor-pointer" />
        </div>
      </div>

      <ul
        onClick={() => setOpen(false)}
        className="lg:hidden transition-all md:px-5 px-3 pt-12 duration-100 fixed h-screen sm:w-1/2 w-screen top-0 bg-gray-800 m-0 p-0 font-bold text-gray-300 list-none bottom-0 flex flex-col items-center z-50"
        style={{ right: open ? "0px" : "-100vw" }}
      >
        <div
          className="lg:hidden flex justify-between flex-col w-10 h-10 text-3xl cursor-pointer absolute right-3 top-6"
          onClick={() => setOpen(!open)}
        >
          <IoMdClose />
        </div>

        {links.map((link, i) => (
          <li className="my-3 w-full text-center text-white" key={i}>
            <Link
              to={link.href}
              className={`flex items-center w-full text-white rounded-md px-3 py-2 text-base font-medium capitalize ${linkClasses(link.href)}`}
            >
              <link.Icon className="mr-2" /> {link.text}
            </Link>
          </li>
        ))}

        {/* <li className="my-3 w-full text-center text-white">
          <button
            onClick={() => navigate("/refer")}
            className="w-full flex items-center hover:text-white text-green-500 font-bold rounded-md px-3 py-2 "
          >
            <FaUserTie className="mr-2" />
            Refer & Earn
          </button>
        </li> */}

        <li className="my-3 w-full text-center text-white">
          <a
            href="tel:9341045976"
            className="flex w-full items-center text-gray-300 hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            <FaPhone className="mr-2 icon-orange" />
            9341045976
          </a>
        </li>
      </ul>
      <div>
      </div>
    </nav>

  );
};

export default Navbar;
