"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { studentComments } from "@/constant/data";
import StudentPortraitCard from "../card/StudentPortraitCard";

const GridSlider = () => {
  return (
    <>
      <div className="my-10 w-full flex items-center justify-center">
        <Swiper
           breakpoints={{
            420: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },

          
          }}
           grid={{
             rows: 3,
             fill: "row",
           }}
           spaceBetween={5}
           pagination={{
             clickable: true,
           }}
           autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
           modules={[Autoplay ,Grid, Pagination]}
           className="mySwiper"
          style={{
            "--swiper-pagination-color": "#ff8c00",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
          <SwiperSlide>
            <StudentPortraitCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default GridSlider;
