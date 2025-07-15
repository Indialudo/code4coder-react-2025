import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../../../interview/hero/Hero";
import Benefits from "../../../interview/Benefits";
import PartnerMain from "../../../Home/Partner/PartnerMain";
import PlacedStudents from "../../../interview/PlacedStudents";
import Pricing from "../../../interview/Pricing";
import Navbar from "../../../header/NavBar";
import Footer from "../../../footer/Footer";

const InterviewPrepPage = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    // Dynamically load the AdSense script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3149369037332600";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Coding Interview Prep | Code4Coder</title>
        <meta
          name="description"
          content="Elevate your interview game with Code4Coder's Coding Interview Prep. Get expert guidance, mock interviews, DSA mastery, and real-world problem-solving strategies."
        />
        <meta
          name="keywords"
          content="interview preparation, coding interview, DSA, mock interviews, system design, code4coder"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://code4coder.com/interview-preparation" />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Coding Interview Prep | Code4Coder" />
        <meta
          property="og:description"
          content="Ace your next tech interview with our expert-led preparation program covering DSA, mock interviews, system design, and more."
        />
        <meta property="og:url" content="https://code4coder.com/interview-preparation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://code4coder.com/images/interview-banner.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coding Interview Prep | Code4Coder" />
        <meta
          name="twitter:description"
          content="Get placed with confidence. Learn DSA, solve real problems, and prepare with mock interviews."
        />
        <meta name="twitter:image" content="https://code4coder.com/images/interview-banner.jpg" />
      </Helmet>
      <Navbar />
      <Hero />
      <Benefits />
      <Pricing />
      <PartnerMain />
      <PlacedStudents />
      <Footer />
    </>
  );
};

export default InterviewPrepPage;
