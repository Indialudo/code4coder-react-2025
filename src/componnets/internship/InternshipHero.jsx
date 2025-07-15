import React from "react";
import Hero from "../refer/Hero";

const InternshipHero = () => {
  return (
    <>
      <Hero
        heading={
          <h1 className="mt-10 sm:mt-0 max-w-2xl mb-4 text-2xl font-medium tracking-tight leading-none md:text-3xl xl:text-4xl">
            Join our best paid internship program
          </h1>

        }
        desc="Join our “internship program” today and start your journey towards a “successful career” in the software industry!"
        href="#"
        btnText="Join Now"
        img="internship.png"
      />
      <div className="lg:mr-auto mx-auto place-self-center lg:col-span-7 pb-8">
        {/* You can add additional content here if needed */}
      </div>
    </>
  );
};

export default InternshipHero;
