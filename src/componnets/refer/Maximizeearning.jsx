import React from "react";
import MaxEarningCardMain from "./maxEarnCard/MaxEarningCardMain";

const Maximizeearning = () => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 text-center">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight leading-none md:text-3xl xl:text-4xl">
            Maximise your Earnings with Master’s Courses
          </h2>
          <p className="text-xl text-gray-300">
          You will receive payment for each friend who successfully enrolls 
          using your referral link, and your buddy will receive a discount on their enrollment fee.
          </p>
        </div>
        <MaxEarningCardMain />
      </div>
    </section>
  );
};

export default Maximizeearning;
