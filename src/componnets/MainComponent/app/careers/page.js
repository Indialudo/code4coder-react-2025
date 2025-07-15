import Spinner from '@/components/Spinner';
import CareerHeader from '@/components/careers/CareerHeader'
import dynamic from 'next/dynamic';
import React from 'react'


export const metadata = {
  title: "Code4Coder - Coding Jobs | 16274 Web Programmer Jobs And Vacancies ",
  description: " Find 105,000+ programmer jobs in India, including roles like Software Engineer, Software Developer, Web Developer, UIUX Designer, Digital Marketer and much more. Discover 500 remote coding jobs today on leading job portals. Explore detailed job listings with information on requirements, compensation, duration, and employer history. Apply now for opportunities that match your skills. On Code4Coder, India's #1 job portal, access 500+ coding job openings across desired locations.",
};

const JobsSectionMain = dynamic(
  () => import("@/components/careers/jobssection/JobsSectionMain"),
  {
    loading: () => <Spinner />
  }
);

const Script = dynamic(() => import("next/script"));

const page = () => {
  return (
    <>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3149369037332600"
     crossorigin="anonymous"></Script>
        <CareerHeader />
        <JobsSectionMain />
    </>
  )
}

export default page