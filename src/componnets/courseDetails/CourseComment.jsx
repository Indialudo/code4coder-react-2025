import React from "react";
import ReactStars from "react-stars";

const CourseComment = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap">
        <div>
          <h3 className="text-black pb-2 md:text-xl sm:text-lg text-base title-font font-bold mb-1 capitalize">
            Leave Comment
          </h3>
        </div>
        <div className="w-full mb-2">
          <span className="text-gray-400 md:text-xl sm:text-lg text-base font-normal">
            Rate the Place
          </span>
          <ReactStars
            count={5}
            value={5}
            half={false}
            size={50}
            color1={"#DFDFDF"}
            color2={"rgb(255, 188, 11)"}
            edit={true}
          />
        </div>
        <div className="my-2 w-full">
          <label
            htmlFor="message"
            className="block mb-2 text-base text-gray-500"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="2"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:outline-lightyellow"
          ></textarea>
        </div>
        <button className="uppercase bg-darkyellow hover:bg-opacity-80 text-white rounded font-bold text-center mx-auto w-full py-1 mt-5">
          Submit Comment
        </button>
      </div>
    </section>
  );
};

export default CourseComment;
