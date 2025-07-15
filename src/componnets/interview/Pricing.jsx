import React from "react";
import PricingCard from "./card/PricingCard";
import { priceData } from "../constant/interview/priceData";

const Pricing = () => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight leading-none md:text-3xl xl:text-4xl">
          Our Highly Rated
        </h2>
        <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight text-darkyellow leading-none md:text-3xl xl:text-4xl">
          Outcome-based Interview Programme
        </h2>
        <div className="grid mt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center align-middle">
          {priceData.map((price, i) => (
            <PricingCard key={i} data={price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
