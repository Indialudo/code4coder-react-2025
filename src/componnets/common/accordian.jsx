"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = ({ modules }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="space-y-2 max-w-6xl mx-auto py-5 w-full xl:px-0 lg:px-4 md:px-4 px-2">
      <h3 className="text-black md:text-3xl sm:text-2xl text-xl title-font font-bold mb-1 capitalize text-center">
        Course Modules
      </h3>
      <div className="rounded border border-gray-300">
        {modules.map((item, index) => (
          <div
            key={index}
            className={`w-full border-b bg-[#F7F7F7] border-gray-300 transition-all relative duration-300`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-4 text-left focus:outline-none flex items-center gap-x-1 justify-between"
            >
              <span className="flex-1 md:font-bold font-semibold">
                Module {index + 1} - {item.module}
              </span>
              <span>
                {index === activeIndex ? (
                  <FaMinus className="md:h-5 md:w-5 h-3 w-3 transition-transform duration-300 text-violet-700" />
                ) : (
                  <FaPlus className="md:h-5 md:w-5 h-3 w-3 transition-transform duration-300 text-violet-700" />
                )}
              </span>
            </button>
            <div
              className={`bg-[#FFFEFE] text-gray-600 overflow-hidden transition-all relative duration-300 ${
                index === activeIndex ? "h-auto" : "h-0"
              }`}
            >
              {/* <div className="p-4">{item.desc}</div> */}
              <ul className="gap-4">
                {item.topics.map((topic, i) => (
                  <li
                    key={i}
                    className="md:px-4 px-2 py-2 flex justify-between items-center border-b"
                  >
                    <span className="">{`${index + 1}.${i + 1} ${topic}`}</span>

                    <p className="sm:text-sm text-xs text-gray-400">
                      Live Class
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
