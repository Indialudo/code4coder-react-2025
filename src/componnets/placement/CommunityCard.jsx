import React from "react";
import Button from "../common/buttons/Button";
import { FaWhatsapp } from "react-icons/fa";

const CommunityCard = () => {
  return (
    <div className="container flex md:flex-row flex-col gap-3 mt-10 relative items-center md:px-5 pt-6 max-w-7xl mx-auto px-2 bg-gray-900 text-white rounded-2xl">
      <div className="md:w-1/2 w-full relative md:px-5 px-2">
        <h3 className="text-lg my-4 lg:text-3xl md:text-2xl sm:text-xl font-medium title-font mb-5 capitalize">
          Learning is better with Code4Coder Community
        </h3>
        <span className="text-gray-400 mx-auto text-lg">
          Join a community of serious & passionate tech folks, students, mentors
          and coaches to accelerate your career.
        </span>
        <a
          href="https://chat.whatsapp.com/LZqEMlLmGuQ1zVSQOtjdzF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            Icon={<FaWhatsapp size={24} />}
            text="Join Whatsapp Community"
            classes="uppercase rounded-lg w-fit my-5 px-7 py-3 md:text-xl sm:text-md text-base md:w-auto w-full bg-darkyellow text-white font-semibold"
          />
        </a>
      </div>
      <div className="md:w-1/2 w-full relative">
        <img
          src="/assets/community.png"
          width={400}
          height={400}
          alt="whats app community"
          className="w-full h-auto max-h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default CommunityCard;
