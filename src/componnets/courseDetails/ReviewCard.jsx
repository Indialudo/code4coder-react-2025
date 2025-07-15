import React, { useState } from "react";
import UserReviewCard from "./UserReviewCard";
import { reviews } from "../constant/data"; // Adjust path based on actual file location

const ReviewCard = ({ review }) => {
  const initialVisibleReview = 2;

  const [error, setError] = useState(false);
  const [visibleReview, setVisibleReview] = useState(initialVisibleReview);

  const handleSeeMoreClick = () => {
    if (visibleReview >= 8 || visibleReview >= review.length) {
      setError(true);
    } else {
      setVisibleReview((prevVisibleReview) => prevVisibleReview + 2);
    }
  };

  const visibleReviews = review.slice(0, visibleReview);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap">
        <div className="md:px-5 px-2">
          <h3 className="text-black pb-2 md:text-xl sm:text-lg text-base title-font font-bold mb-1 capitalize">
            All Ratings and Reviews
          </h3>
        </div>
        {reviews.length >= 1 ? (
          <>
            {visibleReviews.map((reviewItem) => (
              <UserReviewCard key={reviewItem.id} review={reviewItem} />
            ))}
            <div
              className={`px-2 w-full border-t-2 pt-3 ${
                error ? "block" : "hidden"
              } `}
            >
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full"
                role="alert"
              >
                <span className="font-medium">Danger alert!</span> If you want
                to see more review of users you need to enroll our courses
              </div>
            </div>
            <button
              onClick={handleSeeMoreClick}
              className="capitalize bg-transparent text-gray-500 font-bold text-center mx-auto border-t-2 w-full pt-5"
            >
              see all reviews
            </button>
          </>
        ) : (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full"
            role="alert"
          >
            No Reviews Yet
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewCard;
