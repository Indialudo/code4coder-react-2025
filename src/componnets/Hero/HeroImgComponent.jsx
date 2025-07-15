import React from "react";

const HeroImgComponent = ({ Styles }) => {
  return (
    <>
      <div className="absolute md:w-80 md:h-80 bg-yellow-400 rounded-md w-48 h-w-48 -rotate-12 mx-auto"></div>
      <div className="absolute md:w-80 md:h-80 bg-green-600 rounded-md w-48 h-w-48 -rotate-45 mx-auto"></div>
      <div className="absolute md:w-80 md:h-80 bg-transparent border-4 border-white rounded-md w-48 h-w-48 -rotate-6 mx-auto"></div>
      <div
        className={`absolute w-36 h-36 sm:left-28 left-0 text-center ${Styles.spin} sm:top-16 top-1 shadow-lg bg-indigo-600 rounded-full -rotate-6 mx-auto flex justify-center items-center`}
      >
        <span className="text-[#000] font-bold text-xl">
          {/* 100% Job Guarenty */}

         100% Placement Guarantee
        </span>
      </div>

      <img
        src="/assets/heroGirl.png"
        className="z-10 drop-shadow-md max-w-full"
        width={400}
        height={450}
        alt="Hero Girl"
      />
      <img
        src="/assets/graphic.png"
        width={400}
        height={250}
        alt="Graphic"
        className="absolute z-[2] -rotate-45 max-w-full"
      />
    </>
  );
};

export default HeroImgComponent;
