import React from "react";
import { FaCode } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 box-border py-5 overflow-x-hidden" style={{marginTop:'100px'}}>
      <div className="container md:px-5 max-w-7xl mx-auto px-2">
        <div className="flex gap-5 md:flex-row flex-col">
          {/* Image Grid */}
          <div className="md:w-1/2 w-full">
            <div className="flex flex-wrap">
              <div className="w-1/2 p-2">
                <img
                  src="/assets/images/images.jpeg"
                  className="w-full h-auto"
                  alt=""
                  width={300}
                  height={250}
                />
              </div>
              <div className="w-1/2 p-2">
                <img
                  src="/assets/images/images (1).jpeg"
                  className="w-full h-auto"
                  alt=""
                  width={300}
                  height={250}
                />
              </div>
              <div className="w-1/2 p-2">
                <img
                  src="/assets/images/images (2).jpeg"
                  className="w-full h-auto"
                  alt=""
                  width={300}
                  height={250}
                />
              </div>
              <div className="w-1/2 p-2">
                <img
                  src="/assets/images/instructor.png"
                  className="w-full h-auto"
                  alt=""
                  width={300}
                  height={250}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 w-full">
            <h4 className="text-xl lg:text-4xl text-darkyellow md:text-3xl sm:text-2xl font-medium title-font mb-4 capitalize pacifico-font">
              About Us
            </h4>
            <h3 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl font-bold title-font mb-4 capitalize">
              Welcome to the code4code{" "}
              <FaCode className="text-darkyellow inline" /> - learning coding
              best platform
            </h3>
            <p className="mb-4 text-gray-500">
              Code4Coder is an online transformative upskilling platform for
              working tech professionals. Our industry-vetted approach towards
              teaching &amp; training young professionals not only helps them
              upskill but also #CreateImpact in the real world.
            </p>
            <p className="mb-4 text-gray-500">
              We are devoted to creating an ecosystem that nurtures our learners
              and assists them in unlocking talent, skills &amp; opportunities
              at every stage of their careers. Learners enrolled with us are
              taught, guided, and mentored by industry veterans and experts from
              leading tech organisations, including Google, Meta, Netflix,
              Microsoft, Amazon, Hotstar, Twitter etc.
            </p>

            {/* Stats Section */}
            <div className="flex md:flex-row flex-col gap-3">
              <div className="md:w-1/2 w-full pr-3 gap-3 flex flex-wrap">
                <h4 className="text-2xl pl-3 h-fit lg:text-5xl border-l-4 border-darkyellow md:text-4xl sm:text-3xl font-bold title-font mb-4 capitalize text-darkyellow">
                  10+
                </h4>
                <div className="flex flex-col">
                  <span className="capitalize text-gray-500">Years of</span>
                  <span className="uppercase font-bold">EXPERIENCE</span>
                </div>
              </div>

              <div className="md:w-1/2 w-full pr-3 items-center sm:gap-3 gap-1 flex flex-wrap">
                <h4 className="text-2xl pl-3 h-fit lg:text-5xl border-l-4 border-darkyellow md:text-4xl sm:text-3xl font-bold title-font mb-4 capitalize text-darkyellow">
                  18,700
                </h4>
                <div className="flex flex-col">
                  <span className="capitalize text-gray-500">
                    Placement Reports
                  </span>
                  <span className="uppercase font-bold">
                    LAST 12 MONTHS STUDENTS ARE PLACED IN THE Company
                  </span>
                </div>
              </div>
            </div>

            {/* Optional Button */}
            {/* <button className="bg-darkyellow mt-5 text-white hover:text-black font-medium text-lg px-10 py-2 rounded">
              Read more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
