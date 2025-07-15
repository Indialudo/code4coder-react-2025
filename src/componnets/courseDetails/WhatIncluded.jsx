import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaBriefcase, FaQuestionCircle, FaUser } from "react-icons/fa";

const WhatIncluded = () => {
  return (
    <section className="text-gray-600 body-font py-5 w-full md:px-4 px-2">
      <div className="container max-w-6xl md:px-5 px-2 py-10 mx-auto rounded-sm">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-black md:text-3xl sm:text-2xl text-xl title-font font-bold mb-1 capitalize text-center">
            What&apos;s Included
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 w-1/2">
            <div className="px-1 rounded-lg">
              <TbWorld className="text-mediumviolet w-10 h-10 mb-3 inline-block" />
              <p className="leading-relaxed text-darkyellow font-semibold text-sm">
                Live session
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-1/2">
            <div className="px-1 rounded-lg">
              <FaUser className="text-mediumviolet w-10 h-10 mb-3 inline-block" />
              <p className="leading-relaxed text-darkyellow font-semibold text-sm">
                Your placement, our responsibility
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-1/2">
            <div className="px-1 rounded-lg">
              <FaQuestionCircle className="text-mediumviolet w-10 h-10 mb-3 inline-block" />
              <p className="leading-relaxed text-darkyellow font-semibold text-sm">
                Live doubt sessions
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-1/2">
            <div className="px-1 rounded-lg">
              <FaBriefcase className="text-mediumviolet w-10 h-10 mb-3 inline-block" />
              <p className="leading-relaxed text-darkyellow font-semibold text-sm">
                500+ Hiring partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIncluded;
