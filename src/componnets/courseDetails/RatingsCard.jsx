import React from "react";
import { Rating } from "../common/Rating";

const RatingsCard = ({ course = {}, review = [] }) => {
  const reviewsBar = course.reviewsBar || [];

  return (
    <div className="rounded-sm">
      <h3 className="text-black pb-2 md:text-xl sm:text-lg text-base title-font font-bold mb-1 capitalize">
        Ratings and Reviews
      </h3>

      <div className="flex items-center mb-2">
        <Rating rating={course.rating} students={course.totalReviews} />
      </div>

      <p className="text-sm font-medium text-black">
        Rated {course.rating || 0} out of 5
      </p>

      {[5, 4, 3, 2, 1].map((star, i) => {
        const index = 5 - star; // so 5-star corresponds to index 0
        const barPercent = reviewsBar[index] || 0;

        return (
          <div key={star} className="flex items-center justify-between mt-4">
            <span className="text-xl font-medium">{`${star} star`}</span>

            <div
              className="lg:w-[90%] md:w-[87%] sm:w-[85%] w-3/4 h-5 md:mx-4 mx-2 relative"
              role="progressbar"
              aria-valuenow={barPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-5 absolute z-[1] rounded bg-darkyellow"
                style={{ width: `${barPercent}%` }}
              />
              <div className="h-5 rounded absolute left-0 bg-gray-200 w-full" />
              <span className="text-sm font-medium text-black absolute right-2 top-1/2 z-[2] transform -translate-y-1/2">
                {`${barPercent}%`}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingsCard;
