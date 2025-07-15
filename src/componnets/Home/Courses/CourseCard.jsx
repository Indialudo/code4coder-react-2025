import React from "react";
import { FaEye, FaWhatsapp } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaCirclePlus } from "react-icons/fa6";

import { calculateDiscountedPrice, formatLargeNumber, getSubString } from "../../helper/helper";
import GradientButton from "../../common/buttons/GradientButton";
import { Rating } from "../../common/Rating";
import TextIcon from "../../common/TextComponents/TextIcon";
import { displayRozarPay } from "../../helper/payment/StaticPaymentFnc";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const coursePrice =
    course?.totalPrice && course?.discount
      ? calculateDiscountedPrice(course.totalPrice, course.discount)
      : 0;

  return (
    <div style={{border:"4px solid  blue"}} className="group relative transition-all duration-500 ease-in-out rounded-3xl w-full max-w-5xl py-6 bg-white mx-auto flex flex-wrap shadow-xl hover:shadow-2xl hover:scale-[1.01] border border-gray-200 hover:border-blue-400 overflow-hidden">
      
      {/* Ribbon */}
      <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg z-10">
        Bestseller
      </span>

      {/* Course Image */}
      <img
        alt="course"
        width={500}
        height={300}
        className="transition-transform duration-500 ease-in-out lg:w-1/4 w-full object-contain object-center rounded-xl group-hover:rotate-[-1deg] group-hover:scale-105"
        src={`/courses/${course?.img}`}
      />

      {/* Course Content */}
      <div className="lg:w-1/2 w-full lg:pl-10 md:px-5 px-2 mt-6 lg:mt-0 text-black">
        <h2 className="text-black md:text-1xl sm:text-2xl text-xl title-font font-bold mb-1">
          {course?.title}
        </h2>

        <div className="flex justify-start items-center sm:gap-1 flex-wrap sm:mb-0 mb-2">
          <Rating
            rating={4.5}
            students={
              !isNaN(parseInt(course?.students)) ? formatLargeNumber(course.students) : "0+"
            }
          />
        </div>

        <div className="flex items-center sm:gap-2 lg:flex-row md:flex-col sm:flex-row flex-col gap-1 sm:text-base text-sm mt-2">
          <TextIcon
            secondClasses="font-semibold"
            text="100% Job Guarantee Course"
            classes="lg:w-1/2 md:w-full sm:w-1/2 w-full text-green-500"
            Icon={<IoShieldCheckmarkSharp className="text-black" size={22} />}
          />
          <TextIcon
            secondClasses="font-semibold"
            text="Get completion certificate"
            classes="lg:w-1/2 md:w-full sm:w-1/2 w-full text-green-500"
            Icon={<TbCertificate className="text-black" size={22} />}
          />
        </div>

        <div className="flex items-center mt-2 sm:gap-2 lg:flex-row md:flex-col sm:flex-row flex-col gap-1 sm:text-base text-sm">
          <TextIcon
            secondClasses="font-semibold"
            text="Mode: Live Mode"
            classes="lg:w-1/2 md:w-full sm:w-1/2 w-full text-orange-500"
            Icon={<CiStreamOn className="text-black" size={22} />}
          />
          <TextIcon
            secondClasses="font-semibold"
            text="Language: Hindi/English"
            classes="lg:w-1/2 md:w-full sm:w-1/2 w-full text-orange-500"
            Icon={<LiaLanguageSolid className="text-black" size={22} />}
          />
        </div>

        <p className="text-sm mt-3 sm:font-semibold font-medium text-gray-400 capitalize">
          {getSubString(course?.description, 350)}
        </p>
      </div>

      {/* Right Side Price + Actions */}
      <div className="lg:w-1/4 w-full border-t lg:border-t-0 lg:border-l-2 px-2 flex flex-col justify-center items-center gap-3 pt-5 lg:pt-0">
        
        {/* Price Section */}
        <div className="w-full text-center">
          <div className="flex justify-center items-end gap-2">
            <span className="text-2xl font-extrabold text-blue-700 drop-shadow-sm">
              {course?.free ? "Free" : `₹ ${coursePrice}`}
            </span>
            {course?.discount > 0 && (
              <p className="text-md font-medium text-gray-600 line-through">
                ₹ {course?.totalPrice}
              </p>
            )}
          </div>
          {course?.discount > 0 && (
            <p className="text-sm font-bold text-green-600">Offer {course?.discount}% off</p>
          )}

          {/* Enroll Now Button */}
          {/* <button
            onClick={() => displayRozarPay(coursePrice)}
            className="mt-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm py-2 px-5 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2 w-full"
          >
            <FaCirclePlus size={18} />
            Enroll Now {course?.free ? "" : `for ₹${coursePrice}`}
          </button> */}
        </div>

        {/* View & Enquire Buttons */}
        <div className="flex flex-col items-center gap-3 w-full mt-2">
          <Link to={`/course/${course?.slug}`} className="w-full">
            <GradientButton
              text="view course"
              classes="uppercase rounded-full w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              Icon={<FaEye size={18} />}
            />
          </Link>

          <a
            href="https://wa.me/9341045976"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <GradientButton
              text="enquire now"
              classes="uppercase rounded-full w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              Icon={<FaWhatsapp size={18} />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
