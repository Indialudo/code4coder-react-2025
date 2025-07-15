import React, { Suspense, lazy } from "react";
import Spinner from "../Spinner"; // Loading spinner component
import Hero1 from "../Hero/Hero1";

// Lazy-loaded components
const CourseMain = lazy(() => import("./Courses/CourseMain"));
const PartnerMain = lazy(() => import("./Partner/PartnerMain"));
const AboutMain = lazy(() => import("./about/AboutMain"));
const FeatureMain = lazy(() => import("./features/FeatureMain"));
const TestimonialMain = lazy(() => import("./testimonial/TestimonialMain"));

const FullContent = () => {
  return (
    <>
      <Hero1 />
      <Suspense fallback={<Spinner />}>
        <CourseMain />
        <FeatureMain />
        <PartnerMain />
        <TestimonialMain />
        <AboutMain />
      </Suspense>
    </>
  );
}

export default FullContent;
