import React from "react";
import Button from "../../../common/buttons/Button";
import { FaWhatsapp } from "react-icons/fa";

const FourthSection = () => {
  return (
    <div className="w-full rounded-2xl text-center md:p-16 p-6 bg-yellow-300 mt-5">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-2xl lg:text-4xl md:text-3xl font-bold title-font mb-4 text-gray-900 capitalize">
          We Provide Genuine IT Certificates along with 100% Background
          Verification
        </h3>
        <a
          href="https://wa.me/9341045976"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block"
        >
          <Button
            text="enquire now"
            classes="uppercase px-6 py-4 bg-white mx-auto rounded"
            Icon={<FaWhatsapp className="text-green-500" size={24} />}
          />
        </a>
      </div>
    </div>
  );
};

export default FourthSection;
