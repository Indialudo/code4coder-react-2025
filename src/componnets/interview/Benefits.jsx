import React from "react";
import BenefitsCard from "./card/BenefitsCard";

const Benefits = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight leading-none md:text-3xl xl:text-4xl">
          Benefits of Code4Coder
        </h2>
        <div className="flex flex-wrap -m-4 ">
          <BenefitsCard title="Pick the right career path" desc="Explore different careers and roles that align with your goals and interests with our career pathway and role discovery features." />
          <BenefitsCard title="Understand the role better" desc="Get your role and JD related queries resolved instantly with recruiter chat, and tailor your resume to the role with resume scorecard." />
          <BenefitsCard title="Improve performance with actionable insights" desc="Leverage interview analytics for in-depth feedback on your domain knowledge, articulation and body language. Also track your progress over a period of time." />
          <BenefitsCard title="Bring your best self to every interview" desc="Practice in real-time with our live interview simulation to boost your confidence before the next big interview." />
        
        </div>
      </div>
    </section>
  );
};

export default Benefits;
