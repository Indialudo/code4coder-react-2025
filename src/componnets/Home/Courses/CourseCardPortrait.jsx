import React from "react";
import { Link } from "react-router-dom";
import { getSubString } from "../helper/helper";
import GradientButton from "../components/common/buttons/GradientButton";
import { FaWhatsapp } from "react-icons/fa";
import { Rating } from "../components/common/Rating";

// Static image import
import courseBg from "../assets/images/front-end-development-company-in-hyderabad-1000x1000.jpg";

const CourseCardPortrait = ({ course }) => {
  return (
    <div className="w-full max-w-sm bg-gradient-to-r to-[#05054e] from-[#0b0b3e] rounded-lg shadow-xl">
      <div
        className="w-full h-56 bg-contain bg-no-repeat bg-top rounded-t-lg"
        style={{
          backgroundImage: `url(${courseBg})`,
        }}
        role="img"
        aria-label={course.title}
      />

      <div className="pt-5 pb-3 text-white">
        <div className="sm:px-5 px-2 mb-3">
          <Link to={`/courses/${course.id}`} className="my-2 block">
            <h5 className="text-xl font-semibold tracking-tight uppercase">
              {getSubString(course.title, 20)}
            </h5>
          </Link>

          <p className="text-base mb-3 font-semibold text-gray-400 capitalize">
            {getSubString(course.description, 150)}
          </p>

          <p className="text-base font-semibold text-green-500 capitalize">
            100% Job Guarantee Course
          </p>

          <p className="text-base font-semibold text-green-500 capitalize">
            Get completion certificate
          </p>

          <span className="text-base mb-3 font-semibold text-gray-400 capitalize block">
            Mode: <span className="text-orange-500">Live Mode</span>
          </span>

          <Rating rating={4.5} />
        </div>

        <div className="flex flex-wrap justify-between md:gap-1 gap-2 rounded-sm sm:px-5 px-2 border-t-2 pt-3 items-center">
          <span className="text-3xl font-extrabold">
            {course?.free ? "Free" : `₹ ${course?.price}`}
          </span>

          <Link to="/contact">
            <GradientButton
              text="enquire now"
              classes="uppercase rounded-full"
              Icon={<FaWhatsapp size={24} />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCardPortrait;
