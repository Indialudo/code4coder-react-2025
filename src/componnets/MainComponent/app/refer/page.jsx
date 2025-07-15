
import Hero from "@/components/refer/Hero";
import React from "react";
import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";


export const metadata = {
  title: "Refer and earn program - Code4Coder",
  description: "Participate in Code4Coder's Refer and Earn Scheme. You can make up to Rs. 2,00000 a month by offering your network access to courses and educational materials.",
};

const TeacherRefer = dynamic(
  () => import("@/components/refer/TeacherRefer"),
  {
    loading: () => <Spinner />
  }
);
const HowWeWork = dynamic(
  () => import("@/components/refer/HowWeWork"),
  {
    loading: () => <Spinner />
  }
);
const Maximizeearning = dynamic(
  () => import("@/components/refer/Maximizeearning"),
  {
    loading: () => <Spinner />
  }
);
const ReferalReview = dynamic(
  () => import("@/components/refer/ReferalReview"),
  {
    loading: () => <Spinner />
  }
);
const HowToRedeemReward = dynamic(
  () => import("@/components/refer/HowToRedeemReward"),
  {
    loading: () => <Spinner />
  }
);
const Script = dynamic(() => import("next/script"));

const page = () => {
  return (
    <>
      {/* <Head> */}
        {/* <Head> */}
          {/* Basic Meta Tags */}
          {/* <meta charSet="utf-8" />
          <title>Refer and Earn Program | Code4Coder</title>
          <meta name="robots" content="index,follow" />
          <meta name="description" content="Refer Code4Coder to your friends and earn exciting rewards!" /> */}

          {/* Open Graph Tags */}
          {/* <meta property="og:title" content="Refer and Earn Program | Code4Coder" />
          <meta property="og:description" content="Refer Code4Coder to your friends and earn exciting rewards!" />
          <meta property="og:url" content="https://code4coder.com/refer" /> */}
          {/* <meta property="og:image" content="https://example.com/your-image.jpg" /> */}
          {/* <meta property="og:image:alt" content="Code4Coder: Learn to code like it's 2030" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="720" /> */}

          {/* Canonical Link */}
          {/* <link rel="canonical" href="https://code4coder.com/refer" /> */}

          {/* Facebook Pixel */}
          {/* <noscript>
            <img
              height="1"
              width="1"
              alt="Facebook Pixel"
              className="hidden"
              src="https://www.facebook.com/tr?id=3250905641816288&amp;ev=PageView&amp;noscript=1"
            />
          </noscript> */}

          {/* Viewport and Mobile Settings */}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Code4Coder" />
          <meta name="mobile-web-app-capable" content="yes" /> */}

          {/* Google Site Verification */}
          {/* <meta name="google-site-verification" content="Your-Google-Verification-Code" /> */}

          {/* Favicon and App Icons */}
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" /> */}

          {/* Preload Fonts and CSS */}
          {/* <link rel="preload" href="/path-to-your-font.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" href="/_next/static/css/your-styles.css" as="style" />
          <link rel="stylesheet" href="/_next/static/css/your-styles.css" /> */}

          {/* Polyfills and Other Scripts */}
          {/* <script defer src="/_next/static/chunks/polyfills-your-version.js"></script> */}
          {/* ... Other script tags ... */}

          {/* Structured Data */}
          {/* <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Code4Coder",
              "url": "https://code4coder.com",
              "logo": "https://code4coder.com/path-to-your-logo.png"
            })}
          </script> */}
        {/* </Head> */}
      {/* </Head> */}
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3149369037332600"
     crossorigin="anonymous"></Script>
      <Hero
        heading={
          <h1 className="max-w-2xl my-4 text-2xl font-medium tracking-tight leading-none md:text-3xl xl:text-4xl">
            Refer &amp; Earn up to{" "}
            <span className="text-darkyellow">₹2 lakh</span> every month
          </h1>
        }
        desc="We regularly organise events with top data scientists, engineers,
      product managers and industry experts on career building and
      emerging technologies."
        href="#"
        btnText="Refer Now"
        img="referehero.jpeg"
      />
      <HowWeWork />
      <Maximizeearning />
      <ReferalReview />
      <HowToRedeemReward />
      <TeacherRefer />
    </>
  );
};

export default page;
