import React from "react";
import { Rating } from "../common/Rating";

const UserReviewCard = ({ review }) => {
  return (
    <div className="w-full border-t-2 py-4 md:px-5 px-2">
      <div className="flex">
        <div className="lg:w-[5%] md:w-[10%] sm:w-[13%] w-[17%]">
          <img
            src={`/icons/${review.gender.toUpperCase() === "F" ? "girl.jpeg" : "boy.jpeg"}`}
            alt="User"
            className="rounded-full h-14 w-14 object-cover"
          />
        </div>
        <div className="flex lg:w-[95%] md:w-[90%] sm:w-[87%] w-[83%] md:pl-4 pl-2 flex-col">
          <div className="flex flex-grow flex-wrap sm:flex-row flex-col">
            <div className="user flex-grow">
              <span className="text-black md:text-lg sm:text-base text-sm title-font font-bold mb-1 capitalize">
                {review.author}
              </span>
              <span className="block">{review.day}, {review.date}</span>
            </div>
            <div className="rating">
              <Rating rating={review.rating} />
            </div>
          </div>
          <p className="mt-2">
            {review.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserReviewCard;
