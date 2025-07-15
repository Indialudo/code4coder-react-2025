import React from "react";
import TextIcon from "../../common/TextComponents/TextIcon";
import Button from "../../common/buttons/Button";
import { FaStar } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] text-white">
      <div className="grid max-w-screen-xl px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 items-center">
        <div className="lg:mr-auto mx-auto place-self-center lg:col-span-7 pb-8">
          <h6 className="uppercase text-darkyellow">
            FOR BEGINNERS AND EXPERIENCED LEARNERS
          </h6>
          <h1 className="max-w-2xl my-4 text-2xl font-medium tracking-tight leading-none md:text-3xl xl:text-4xl">
            Product Companies Interview Prepration
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
            Practice tougher problems which are asked in technical interview
            rounds and learn some tricks to solve them faster and with more
            confidence.
          </p>
          <div className="flex relative my-5">
            <a
              href="https://wa.me/9341045976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center lg:w-fit w-full justify-center"
            >
              <Button
                text="Enroll Now"
                classes="bg-darkyellow lg:w-fit w-full text-white rounded-md px-5 flex-row-reverse mr-4"
                Icon={<FaAnglesDown />}
              />
            </a>
          </div>

          <div className="flex w-full py-5 rounded-lg bg-gray-900 bg-opacity-45">
            <div className="md:w-1/3 w-1/2 flex justify-center items-center flex-col border-r border-blue-500">
              <div className="px-2 text-center py-2 rounded-lg">
                <h4 className="title-font flex items-center gap-2 justify-center lg:text-xl text-white font-bold md:text-lg text-base">
                  4.9
                  <FaStar size={20} className="text-lightyellow" />
                </h4>
                <TextIcon
                  text="25K+ Learners enrolled"
                  secondClasses="mx-auto text-sm font-light"
                  classes="flex w-full text-white mx-auto item-center"
                />
              </div>
            </div>
            <div className="md:w-1/3 w-1/2 flex justify-center items-center flex-col border-r border-blue-500">
              <div className="px-2 text-center py-2 rounded-lg">
                <h4 className="title-font flex items-center gap-2 justify-center lg:text-xl text-white font-bold md:text-lg text-base">
                  1 month
                </h4>
                <TextIcon
                  text="Live Session"
                  secondClasses="mx-auto text-sm font-light"
                  classes="flex w-full text-white mx-auto item-center"
                />
              </div>
            </div>
            <div className="md:w-1/3 w-1/2 flex justify-center items-center flex-col">
              <div className="px-2 text-center py-2 rounded-lg">
                <h4 className="title-font flex items-center gap-2 justify-center lg:text-xl text-white font-bold md:text-lg text-base">
                  250+
                </h4>
                <TextIcon
                  text="Problems"
                  secondClasses="mx-auto text-sm font-medium"
                  classes="flex w-full text-white mx-auto item-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            width={450}
            height={500}
            src={process.env.PUBLIC_URL + "/assets/interview.png"}
            alt="mockup"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
