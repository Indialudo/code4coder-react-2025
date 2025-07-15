import React, { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Spinner from '../../../Spinner';
import InternshipHero from '../../../internship/InternshipHero';
import InternshipBatches from '../../../internship/InternshipBatches';
import Navbar from '../../../header/NavBar';
import Footer from '../../../footer/Footer';

const InternshipPage = () => {

  
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <>
      <Helmet>
        <title>Code4Coder's Internship Program | Real-World Coding Experience</title>
        <meta
          name="description"
          content="Explore hands-on coding internships in Full Stack, Frontend (React), Backend (Node.js), Digital Marketing, Python, and more. Real projects, real mentors, real results at Code4Coder."
        />
        <meta
          name="keywords"
          content="coding internship, web development internship, mern internship, frontend react internship, backend node.js internship, code4coder internship, uiux, python"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.code4coder.com/internship" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Code4Coder's Internship Program | Real-World Coding Experience" />
        <meta property="og:description" content="Join Code4Coder's internship programs and gain hands-on coding experience in MERN, Python, UIUX, and more." />
        <meta property="og:url" content="https://www.code4coder.com/internship" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.code4coder.com/images/internship-banner.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code4Coder Internship | Hands-On Coding Experience" />
        <meta name="twitter:description" content="Get real-world experience through Code4Coder internships in MERN, Python, UIUX, and more." />
        <meta name="twitter:image" content="https://www.code4coder.com/images/internship-banner.jpg" />
      </Helmet>
      <Navbar/>
      <InternshipHero />

      <Suspense fallback={<Spinner />}>
        <InternshipBatches />
      </Suspense>
      <Footer/>
    </>
  );
};

export default InternshipPage;
