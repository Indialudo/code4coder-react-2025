import React from "react";
import Button from "../../../common/buttons/Button";
import { FaPhone } from "react-icons/fa";

const ThirdSection = () => {
  return (
    <div className="mx-auto flex py-5 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
        <h3 className="text-2xl lg:text-4xl md:text-3xl font-bold title-font mb-4 text-gray-900 capitalize">
          Transform Communities Across the Globe
        </h3>
        <p className="mb-8 leading-relaxed">
          Our Company is the Best IT Experience Certificates Provider in
          Genuine Experience Certificate Provider in Bangalore, We are Here to
          Provide You With Work Experience Certificates, Genuine Experience
          Certificate Provider In Bangalore and all Documents Supporting Your
          Verification From an Existing Company.
        </p>

        <div className="flex justify-center">
          <a href="tel:+919608960535" className="button-link">
            <Button
              text="Get in Touch"
              Icon={<FaPhone />}
              classes="bg-lightyellow text-white flex-row-reverse"
            />
          </a>
        </div>
      </div>

      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-11/12 relative h-full">
        <img
          className="object-cover object-center rounded w-full h-auto"
          alt="corporate-employee"
          src="/assets/globe.png" // Ensure this file is in public/assets/
          width={351}
          height={524}
        />
      </div>
    </div>
  );
};

export default ThirdSection;
