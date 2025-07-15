import React from "react";
import Button from "../../../common/buttons/Button"; // Adjust this import if aliasing (like @) isn't set up
import { FaPhone } from "react-icons/fa";

const FirstSection = () => {
  return (
    <div className="mx-auto flex py-5 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
        <p className="text-darkyellow">Sustainability</p>
        <h3 className="text-2xl lg:text-4xl md:text-3xl font-bold title-font mb-4 text-gray-900 capitalize">
          Committed To Keep Candidates Safe
        </h3>
        <p className="mb-8 leading-relaxed">
          Fill Your Gap In Education With IT Experience Certificates For Job,
          With 100% Verification Guaranteed @9341045976 We Provide Experience
          Certificate Of Physically Present & Government Registered Company Email
          Verification, Telephonic Verification, Third Party Verification,
          Physical Verification Will Be Taken Care.
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
          src="/assets/corporate-employee.png" // Make sure this file exists in your React `public/assets/` folder
          width={351}
          height={524}
        />
      </div>
    </div>
  );
};

export default FirstSection;
