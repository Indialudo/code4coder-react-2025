import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../../placement/Hero';
import PlacementReview from '../../../placement/PlacementReview';
import TeachersSection from '../../../placement/TeachersSection';
import Loading from './loading'; // your skeleton loader
import Navbar from '../../../header/NavBar';
import Footer from '../../../footer/Footer';

const PlacementPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 150); // change delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3149369037332600";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Placement Assistance | Code4Coder – 100% Job Guarantee Courses</title>
        <meta
          name="description"
          content="Discover how Code4Coder helps students get placed with top companies through dedicated mentorship, real-world projects, and career guidance. 100% job assistance included!"
        />
        <meta
          name="keywords"
          content="code4coder placements, job assistance, coding job guarantee, full stack developer jobs, web development career"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://code4coder.com/placement" />

        <meta property="og:title" content="Code4Coder Placement Support – 100% Job Assistance" />
        <meta
          property="og:description"
          content="Real student success stories and how Code4Coder ensures your job placement with hands-on coding, mock interviews, and expert mentors."
        />
        <meta property="og:url" content="https://code4coder.com/placement" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://code4coder.com/images/placement-banner.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code4Coder Placement Support – 100% Job Assistance" />
        <meta name="twitter:description" content="Start your career in tech with Code4Coder's industry-aligned placement training." />
        <meta name="twitter:image" content="https://code4coder.com/images/placement-banner.jpg" />
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <>
           <Navbar/>
          <Hero />
          <PlacementReview />
          <TeachersSection />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default PlacementPage;
