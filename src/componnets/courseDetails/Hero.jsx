import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "../common/Rating";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import GradientButton from "../common/buttons/GradientButton";
import { FaCirclePlus } from "react-icons/fa6";
import { BsCameraVideoFill } from "react-icons/bs";
import TextIcon from "../common/TextComponents/TextIcon";
import { MdOutlineWatchLater } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { calculateDiscountedPrice } from "../helper/helper";
import { displayRozarPay } from "../helper/payment/StaticPaymentFnc";
import heroBg from "../../assets/images/hero-bg.8a027827091068f1f050.jpg";

const Hero = ({ course }) => {
  const coursePrice = calculateDiscountedPrice(course?.totalPrice, course?.discount);

  return (
    <section className="w-full relative z-10">
      {/* ✅ Use backgroundImage via style */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-no-repeat bg-cover bg-opacity-50"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute bg-black top-0 left-0 right-0 bottom-0 z-[-1] bg-opacity-80" />
      <div className="py-8 md:px-4 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-12 text-white text-center">
        <h1 className="mt-10 sm:mt-0 mb-4 text-2xl sm:font-bold font-semibold tracking-tight leading-none text-darkyellow md:text-3xl lg:text-4xl ">
          {course.title}
        </h1>


        {course.subTitle && (
          <p className="md:mb-8 mb-4 text-base font-normal lg:text-lg sm:px-16 xl:px-44 ">
            {course.subTitle}
          </p>
        )}

        <div className="flex justify-center items-center gap-1 flex-wrap sm:mb-0 mb-2 ">
          <div className="flex gap-1">
            {Array(5).fill(null).map((_, i) => (
              <FaStar key={i} size={24} className="text-lightyellow" />
            ))}
          </div>
          <span className="text-white text-sm font-bold">
            ({course.totalReviews} <span style={{ color: "red", fontSize: "17px" }}>ratings</span>)
          </span>
        </div>

        <p className="mb-8 text-base font-normal lg:text-lg sm:px-16 xl:px-48 ">
          {course.title} | 100% Job Guarantee Program
        </p>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/vishal">
            <GradientButton
              text="enquire now"
              classes="uppercase rounded-full w-[13rem]"
              Icon={<FaWhatsapp size={20} />}
            />
          </Link>

          {/* <span>
            <GradientButton
              onclick={() => displayRozarPay(coursePrice)}
              text="enroll now"
              classes="uppercase rounded-full w-[13rem]"
              Icon={<FaCirclePlus size={20} />}
            />
          </span> */}
        </div>

        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <div className="flex flex-wrap text-center items-center mt-2 gap-5 justify-between">
            <div>
              <TextIcon
                text="Mode"
                classes="flex lg:w-1/2 md:w-full sm:w-1/2 w-full text-gray-300 item-center font-semibold"
                Icon={<BsCameraVideoFill className="text-gray-300" size={22} />}
              />
              <p className="text-white text-xl font-bold">Live Class</p>
            </div>

            <div>
              <TextIcon
                text="Duration"
                classes="flex lg:w-1/2 md:w-full sm:w-1/2 w-full text-gray-300 item-center font-semibold"
                Icon={<MdOutlineWatchLater className="text-gray-300" size={22} />}
              />
              <p className="text-white text-xl font-bold">{course.duration}</p>
            </div>

            <div>
              <TextIcon
                text="Certificate"
                classes="flex lg:w-1/2 md:w-full sm:w-1/2 w-full text-gray-300 item-center font-semibold"
                Icon={<CgProfile className="text-gray-300" size={22} />}
              />
              <p className="text-white text-xl font-bold">Certified Course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
