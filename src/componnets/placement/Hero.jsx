import React from "react";
import Button from "../common/buttons/Button";
import TextIcon from "../common/TextComponents/TextIcon";
import { Link } from "react-router-dom"; // Use if using react-router, otherwise use <a>

const Hero = () => {
  return (
    <section className="w-full py-8 bg-gray-900 relative z-10">
      <img
        src="/assets/SuccessStories-Hero-Image2.png"
        width={200}
        height={250}
        alt="grid"
        className="opacity-80 md:w-auto w-1/2 md:h-[500px] h-auto sm:bottom-0 sm:top-auto top-0 left-0 absolute z-0"
      />
      <img
        src="/assets/SuccessStories-Hero-Image1.png"
        width={300}
        height={350}
        alt="grid"
        className="opacity-80 md:w-auto w-1/2 md:h-auto h-auto bottom-0 right-0 absolute z-0"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <img
          src="/assets/Dot grid.svg"
          alt="grid"
          className="object-cover w-full h-full opacity-30"
        />
      </div>
      <div className="absolute bg-black top-0 left-0 right-0 bottom-0 z-[-1] bg-opacity-50"></div>

      <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 text-white text-center">
        <h4 className="mt-12 sm:mt-0 mb-4 text-3xl sm:font-bold font-semibold tracking-tight leading-none text-white md:text-4xl lg:text-5xl ">
          Success <span className="text-darkyellow underline">Stories</span>
        </h4>

        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-300">
          Our learners are the centre of our universe. We take a lot of pride in
          their journey. <br />
          These stories and testimonials fuel our ambitions at Code4Coder.
        </p>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="/courses">
            <Button
              text="Explore Our course"
              classes="uppercase rounded-lg w-fit px-7 py-3 md:text-xl sm:text-md text-base md:w-auto w-full bg-darkyellow text-white font-semibold"
            />
          </a>
        </div>

        <div className="mx-auto text-center max-w-7xl px-2">
          <div className="flex flex-wrap -m-4 text-center bg-gray-800 bg-opacity-65 rounded-2xl">
            {[
              { label: "Our Highest Package", value: "39 LPA" },
              { label: "Average Package", value: "10 LPA" },
              { label: "Salary Hike", value: "121%" },
              { label: "Hiring Partners", value: "500+" },
            ].map(({ label, value }, i) => (
              <div key={i} className="p-4 md:w-1/4 w-1/2 flex justify-center flex-col">
                <div className="px-4 py-6 rounded-lg">
                  <TextIcon
                    text={label}
                    secondClasses="mx-auto md:text-xl sm:text-base text-sm font-semibold"
                    classes="flex pb-3 w-full text-gray-300 mx-auto item-center"
                  />
                  <h2 className="title-font font-medium lg:text-3xl text-gray-50 md:text-3xl sm:text-2xl text-xl">
                    {value}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
