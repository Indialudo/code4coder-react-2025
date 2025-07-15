
import Button from "../common/buttons/Button";
import { FaWhatsapp } from "react-icons/fa";
import Heading from "./Heading";
import FooterLinks from "./FooterLinks";
import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className=" body-font bg-gradient-to-r to-black from-[#0b0b3e] text-white">
      <div className="container md:px-5 px-2 py-10 mx-auto max-w-screen-xl border-b border-gray-400">
        <div className="flex flex-wrap md:text-left text-center order-first ">
          <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
            <Heading text="company" />
            <nav className="list-none mt-5 mb-10">
            <Link to="/link/about-us">
              <li>
                <FooterLinks icon={IoIosArrowForward} text="About Us" classes="hover:tracking-widest cursor-pointer" />
              </li>
              </Link>
              <Link to="/link/privacy-policy">
              <li>
                <FooterLinks icon={IoIosArrowForward} text="Privacy policy" classes="hover:tracking-widest cursor-pointer" />
              </li>
              </Link>
              <Link to="/link/term-condition">
              <li>
                <FooterLinks icon={IoIosArrowForward} text="Terms & Condition" classes="hover:tracking-widest cursor-pointer" />
              </li>
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
            <Heading text="contact" />
            <nav className="list-none mt-5 mb-10">
              <li>
                <FooterLinks icon={FaLocationDot} text="India" />
              </li>
              <li>
                <FooterLinks icon={IoCall} text="9341045976" />
              </li>
              <li>
                <FooterLinks icon={IoMdMail} text="info@code4coder.com" />
              </li>

            </nav>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
            <Heading text="opening" />
            <nav className="list-none mt-5 mb-10">
              <li>
                <FooterLinks text="24x7" classes="text-xl sm:text-2xl font-bold" />
              </li>
            </nav>
          </div>
          <Link to="https://wa.me/9341045976"
            target="_blank"
            rel="noopener noreferrer" className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
           
              <Heading text="Enquire Now" />
              <Button
                text="Enquire Now"
                Icon={<FaWhatsapp size={26} />}
                classes="bg-darkgreen text-white font-mediam text-lg px-4 md:w-full rounded-sm"
              />
        
          </Link>

        </div>
      </div>
      <div>
        <div className="container px-5 py-6 mx-auto max-w-screen-xl flex items-center sm:flex-row flex-col">
          <p className="text-sm  sm:ml-6 sm:mt-0 mt-4">
            <Link href="code4coder.com" className="hover:underline">
              © code4coder.com
            </Link>
            , All Right Reserved.2015
          </p>
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
