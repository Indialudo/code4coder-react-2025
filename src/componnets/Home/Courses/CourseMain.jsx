import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

// Adjust these imports according to your folder structure
import { courses } from "../../constant/data";
import CourseCard from "./CourseCard";
import Button from "../../common/buttons/Button";
import Navbar from "../../header/NavBar";
import Footer from "../../footer/Footer";

const CourseMain = () => {
  const initialVisibleCourses = 6;
  const [visibleCourses, setVisibleCourses] = useState(initialVisibleCourses);

  const handleSeeMoreClick = () => {
    setVisibleCourses((prev) => prev + 3);
  };

  return (
    <>
    <Navbar/>
     <section className="services_main bg-gray-100 box-border py-5 overflow-x-hidden" style={{marginTop:"50px"}}>
      <div className="container md:px-5 max-w-7xl mx-auto px-2">
        <h3 className="text-2xl lg:text-5xl text-center md:text-4xl sm:text-3xl font-bold title-font mb-4 text-gray-900 capitalize">
          Our Popular courses
        </h3>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
          Our job-oriented IT courses are designed for developing an excellent
          path for the students. Code4Coder offers Complete Placement
          Assistance on these popular courses. Check it out!
        </p>

        <div className="flex flex-wrap justify-center md:my-8 my-4 lg:gap-10 md:gap-0 gap-10 overflow-x-hidden w-full">
          {courses.slice(0, visibleCourses).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {visibleCourses < courses.length && (
          <Button
            text="See More"
            classes="text-white cursor-pointer bg-green-500 mx-auto rounded-md"
            handleSeeMoreClick={handleSeeMoreClick}
            Icon={<FaArrowDown size={24} />}
          />
        )}
      </div>
    </section>
    </>
   
  );
};

export default CourseMain;
