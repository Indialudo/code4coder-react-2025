"use client"
import Image from "next/image"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { studentReferRatings } from "@/constant/alldata/refer/rating"

const RefereReviewSlider = () => {
  return (
    <div className="my-10 w-full flex items-center justify-center">
          <Swiper
            breakpoints={{
              420: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },

              // 1080: {
              //   slidesPerView: 3,
              // },
            }}
         
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            style={{
              "--swiper-pagination-color": "#ff8c00",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            }}
            className="mySwiper flex justify-center items-center"
          >
            {studentReferRatings.map((review, i) => (
              <SwiperSlide key={i} style={{height: "initial", width: "100%"}}>
                <div className="p-6 w-full cursor-grab flex flex-col justify-between text-start mx-auto h-full rounded-lg shadow bg-gray-800 hover:bg-gray-700">
                  <div className="w-full">

                  <p className="font-normal text-gray-300 mb-3">
                    {review.content}
                  </p>
                  </div>
                  <div className="flex justify-start items-center space-x-3 mt-auto">
                    <Image
                      src={`/icons/${
                        review.gender.toUpperCase() === "F"
                          ? "girl.jpeg"
                          : "boy.jpeg"
                      }`}
                      width={200}
                      height={200}
                      alt=""
                      className="rounded-full h-14 w-14"
                    />{" "}
                    <div className="space-y-0.5 font-medium text-left text-gray-300">
                      <div>{review.author}</div>
                      <div className="text-sm text-green-700 font-bold">
                      🎉 earned ₹ {review.win}
                          </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default RefereReviewSlider