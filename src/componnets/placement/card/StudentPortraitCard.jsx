import React from "react";
import studentImage from "../assets/images/student1.png"; // Adjust path as needed
import swiggyIcon from "../assets/icons/swiggy.webp";     // Adjust path as needed

const StudentPortraitCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden border h-full mb-auto">
      <div className="w-full bg-darkyellow relative">
        <div className="w-11/12 mx-auto h-96 mt-auto relative">
          <img
            src={studentImage}
            alt="Student"
            className="object-contain absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="px-2 py-3 absolute bottom-0 left-0 right-0 bg-gray-500 bg-blend-color-dodge bg-opacity-70">
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex w-max items-center">
              <img
                alt="testimonial"
                src="https://dummyimage.com/106x106"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col md:pl-4 pl-2">
                <span className="title-font font-medium text-white">author</span>
                <span className="text-white text-sm capitalize">destination</span>
              </span>
            </div>
            <div className="flex flex-col justify-center items-end w-1/3">
              <span className="title-font font-medium text-white">Placed At</span>
              <div
                className="h-9 bg-contain bg-right-top bg-no-repeat w-full"
                style={{ backgroundImage: `url(${swiggyIcon})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-6 px-2 py-4">
        <div className="font-bold text-xl mb-2">
          Code4Coder’s Pay after Placement model was one of the most impressive factors
        </div>
      </div>

      <div className="md:px-6 px-2 pb-2">
        <span className="inline-block bg-blue-200 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mr-2 mb-2">
          Tech Background
        </span>
        <span className="inline-block bg-green-200 rounded-full px-4 py-2 text-sm font-semibold text-green-700 mr-2 mb-2">
          Web Development
        </span>
        <span className="inline-block bg-red-200 rounded-full px-4 py-2 text-sm font-semibold text-red-700 mr-2 mb-2">
          Working Professional
        </span>
      </div>
    </div>
  );
};

export default StudentPortraitCard;
