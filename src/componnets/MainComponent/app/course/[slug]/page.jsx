import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hero from "../../../../courseDetails/Hero";
import { courses, reviews } from "../../../../constant/data";
import WhatWillLearn from "../../../../courseDetails/WhatWillLearn";
import WhatIncluded from "../../../../courseDetails/WhatIncluded";
import Accordion from "../../../../common/accordian";
import Review from "../../../../courseDetails/Review";
import Navbar from "../../../../header/NavBar";
import Footer from "../../../../footer/Footer";

const Course = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { slug } = useParams();
  const course = courses.find((course) => course.slug === slug);
  const courseReviews = reviews.filter((review) => review.courseSlug === slug);

  if (!course) return <div className="text-center p-10">Course not found.</div>;


  return (
    <div className="bg-gray-200 pb-20">
      <Helmet>
        <title>{course.title} | Code4Coder Courses</title>
        <meta name="description" content={course.metaDescription || course.WhatWillLearnDesc} />
        <meta name="keywords" content={course.keywords || "code4coder, coding course, web development, MERN, full stack, react"} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://code4coder.com/courses/${course.slug}`} />

        {/* Optional: Open Graph for social media */}
        <meta property="og:title" content={`${course.title} | Code4Coder`} />
        <meta property="og:description" content={course.metaDescription || course.WhatWillLearnDesc} />
        <meta property="og:image" content={course.image || "https://code4coder.com/default-course-banner.png"} />
        <meta property="og:url" content={`https://code4coder.com/courses/${course.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />
      <Hero course={course} />
      <WhatWillLearn
        title={course.WhatWillLearnDesc}
        desc={course.WhatWillLearn}
      />
      <WhatIncluded />
      <Accordion modules={course.ModulesWeLearn} />
      <Review review={courseReviews} course={course} />
    </div>
  );
};

export default Course;
