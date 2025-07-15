import React from "react";
import RatingsCard from "./RatingsCard";
import ReviewCard from "./ReviewCard";
import CourseComment from "./CourseComment";

const Review = ({ review = [], course = {} }) => {
  return (
    <section aria-labelledby="reviews-heading" className="py-5 w-full md:px-4 px-2">
      <h2
        id="reviews-heading"
        className="text-black border-b pb-2 border-gray-500 md:text-3xl sm:text-2xl text-xl title-font font-bold mb-1 capitalize text-center"
      >
        Course Reviews
      </h2>

      <div className="container rounded bg-[#FFFEFE] shadow-md max-w-6xl mt-8 md:px-5 px-2 py-10 mx-auto">
        <RatingsCard review={review} course={course} />
      </div>

      <div className="container rounded bg-[#FFFEFE] shadow-md max-w-6xl mt-8 py-6 mx-auto">
        <ReviewCard review={review} />
      </div>

      <div className="container rounded bg-[#FFFEFE] shadow-md max-w-6xl mt-8 md:px-5 px-2 py-6 mx-auto">
        <CourseComment />
      </div>
    </section>
  );
};

export default Review;
