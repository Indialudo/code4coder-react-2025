import React from "react";

const SliderCard = ({ review }) => {
  return (
    <div className="md:p-4 h-full p-2 w-max sm:max-w-lg max-w-md">
      <div className="w-full max-w-sm bg-gray-800 border justify-center items-center border-gray-200 rounded-lg shadow p-4">
        <div className="flex items-center">
          <img
            width={120}
            height={120}
            className="w-24 h-24 rounded-full shadow-lg"
            src={process.env.PUBLIC_URL + "/icons/boy.jpeg"}
            alt="Author"
          />
          <div className="flex flex-col min-w-28 pl-2 text-start">
            <h5 className="mb-1 text-base font-medium text-white">
              {review.author}
            </h5>
            <div
              className="h-10 mb-3 w-11/12 relative bg-contain bg-center bg-no-repeat"
            >
              <img
                src={process.env.PUBLIC_URL + `/icons/comapanies/${review.company}`}
                alt="Company logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xs font-medium me-2 px-3 py-2 rounded-full mx-auto cursor-pointer bg-darkyellow text-white">
              {review.hike} hike
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
