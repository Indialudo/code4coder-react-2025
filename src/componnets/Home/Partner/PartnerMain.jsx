import React from "react";
import { companies } from "../../constant/companies"; // Adjust path as needed

const PartnerMain = () => {
  return (
    <section className="bg-gray-100 box-border py-5 overflow-x-hidden">
      <div className="container md:px-5 max-w-7xl mx-auto px-2">
        <h3 className="text-2xl lg:text-5xl text-center md:text-4xl sm:text-3xl font-bold title-font mb-4 text-black capitalize">
          After Taken Our Course{" "}
          <span className="text-darkyellow"> Student & Professionals</span> are
          Placed in This Companies
        </h3>

        <div className="grid py-3 grid-cols-3 gap-2 text-gray-500 sm:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center text-center items-center">
          {companies.map((company, i) => (
            <div
              key={i}
              className="py-3 px-5 border border-darkyellow rounded-md"
            >
              <div className="flex justify-center items-center sm:h-20 h-10 relative bg-no-repeat bg-contain bg-center">
                <img
                  src={`/icons/comapanies/${company}`}
                  alt={company}
                  className="m-auto object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerMain;
