import React from 'react'
import CourseMain from '../Home/Courses/CourseMain'
import FeatureMain from '../Home/features/FeatureMain'
import PartnerMain from '../Home/Partner/PartnerMain'
import TestimonialMain from '../Home/testimonial/TestimonialMain'
import AboutMain from '../Home/about/AboutMain'
// import Navbar from '../header/NavBar'
import Hero1 from '../Hero/Hero1'
import Footer from '../footer/Footer'
// import Footer from '../footer/Footer';


const index = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Hero1/>
            <CourseMain />
            <FeatureMain />
            <PartnerMain />
            <TestimonialMain />
            <AboutMain />
            <Footer/>             
        </div>
    )
}

export default index