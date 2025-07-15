import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { featuredTraining } from "../../constant/data"; // Adjust path as needed
import FeatureCard from "./FeatureCard"; // Adjust path if not in the same folder

const FeatureMain = () => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] box-border py-5 overflow-x-hidden">
      <div className="container md:px-5 max-w-7xl mx-auto px-2">
        <h3 className="text-2xl lg:text-5xl text-center md:text-4xl sm:text-3xl font-bold title-font mb-4 text-white capitalize">
          Our Featured Training
        </h3>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
          Being the best software training place, we offer excellent training
          programs to our candidates. Preparing them for bright career
          opportunities, we equip them with the right skills and proper
          training.
        </p>
        <div className="flex flex-wrap justify-center md:my-8 my-4 gap-5 overflow-x-hidden w-full">
          {featuredTraining.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              icon={item.icon || FaBriefcase}
              desc={item.desc}
              subTitle={item?.subTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureMain;
