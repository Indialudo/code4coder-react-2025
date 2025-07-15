import React from "react";
import { Link } from "react-router-dom"; // React alternative to next/link
import tutorsImage from "../../assets/tutors.png"; // Adjust the path if needed
import Button from "../common/buttons/Button"; // Assuming you have a Button component

const TeachersCard = ({ title, head, desc, courses, secondaryBtn }) => {
  return (
    <div className="container relative md:px-5 pt-6 max-w-7xl mx-auto px-2 text-center bg-gray-900 text-white rounded-2xl">
      {title && <p className="text-darkyellow text-center">{title}</p>}

      <h3 className="text-2xl my-4 lg:text-5xl text-center md:text-4xl sm:text-3xl font-bold title-font mb-4 capitalize">
        {head}
      </h3>

      <span className="text-gray-400 mx-auto text-lg">
        {desc}
      </span>

      <div className="flex flex-col my-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        {courses && (
          <Link to="/courses">
            <Button
              text={courses}
              classes="uppercase rounded-lg w-fit px-7 py-3 md:text-xl sm:text-md text-base md:w-auto w-full bg-darkyellow text-white font-semibold"
            />
          </Link>
        )}

        {secondaryBtn && (
          <a
            href="https://wa.me/9341045976"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:w-1/4 sm:w-1/2 w-full md:px-4"
          >
            <Button
              text={secondaryBtn}
              classes="uppercase rounded-lg w-fit px-7 py-3 md:text-xl sm:text-md text-base md:w-auto w-full bg-white text-black font-semibold"
            />
          </a>
        )}
      </div>

      {/* Background image using imported asset */}
      <div
        className="md:h-80 h-60 md:bg-contain bg-cover bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: `url(${tutorsImage})` }}
      ></div>
    </div>
  );
};

export default TeachersCard;
