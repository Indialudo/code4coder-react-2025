import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { studentComments } from "../../constant/data"; // Adjust path if needed
import { Rating } from "../../common/Rating"; // Adjust path if needed

const TestimonialMain = () => {
  return (
    <section className="services_main bg-gradient-to-r to-black from-[#0b0b3e] box-border py-5 overflow-x-hidden">
      <div className="container md:px-5 max-w-7xl mx-auto px-2">
        <h4 className="text-xl lg:text-4xl text-start md:text-3xl sm:text-2xl font-bold title-font mb-4 text-white capitalize">
          Student & Professional Reviews
        </h4>
        <span className="text-gray-300 mx-auto text-center">Code4Coder.com</span>
        <div className="flex flex-wrap sm:items-center sm:gap-3 sm:flex-row flex-col">
          <Rating rating={5} />
          <span className="text-gray-300 sm:text-center">
            4.9 out of 5 based on 89059 ratings.
          </span>
        </div>

        <div className="my-10 w-full flex items-center justify-center">
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            style={{
              "--swiper-pagination-color": "#ff8c00",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            }}
            className="mySwiper flex justify-center items-center"
          >
            {studentComments.map((review, i) => (
              <SwiperSlide key={i} style={{ height: "initial", width: "100%" }}>
                <div className="p-6 w-full cursor-grab flex flex-col justify-between text-start mx-auto h-full rounded-lg shadow bg-gray-800 hover:bg-gray-700">
                  <div className="w-full">
                    <p className="font-normal text-gray-300 mb-3">{review.content}</p>
                  </div>
                  <div className="flex justify-start items-center space-x-3 mt-auto">
                    <img
                      src={`/icons/${
                        review.gender.toUpperCase() === "F" ? "girl.jpeg" : "boy.jpeg"
                      }`}
                      alt="reviewer"
                      className="rounded-full h-14 w-14 object-cover"
                    />
                    <div className="space-y-0.5 font-medium text-left text-gray-300">
                      <div>{review.author}</div>
                      <div className="text-sm font-light text-gray-500">
                        <Rating rating={review.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMain;
