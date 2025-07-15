import React from "react";
import { CiClock1 } from "react-icons/ci";
import { PiMonitorThin } from "react-icons/pi";
import { LuPencilRuler } from "react-icons/lu";

const SecondSection = () => {
  return (
    <div className="mx-auto flex py-5 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-11/12 relative h-full mb-16 md:mb-0">
        <img
          className="object-cover object-center rounded w-full h-auto"
          alt="corporate-employee"
          src="/assets/best-practices.png" // Ensure this is placed in your public/assets folder
          width={351}
          height={524}
        />
      </div>

      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
        <h3 className="text-2xl lg:text-4xl md:text-3xl font-bold title-font mb-4 text-gray-900 capitalize">
          We Follow Best Practices
        </h3>
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in ipsum id orci porta dapibus.
        </p>

        <div className="grid grid-cols-2 md:text-start text-center gap-3 w-full">
          <div className="w-full flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 px-4 py-4 bg-white shadow-md">
            <CiClock1 size={30} />
            <span>Credibility</span>
          </div>
          <div className="w-full flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 px-4 py-4 bg-white shadow-md">
            <CiClock1 size={30} />
            <span>Provide On Time</span>
          </div>
          <div className="w-full flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 px-4 py-4 bg-white shadow-md">
            <PiMonitorThin size={30} />
            <span>Modern Technology</span>
          </div>
          <div className="w-full flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 px-4 py-4 bg-white shadow-md">
            <LuPencilRuler size={30} />
            <span>Customised Certificates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
