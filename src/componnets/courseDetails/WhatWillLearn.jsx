import React from "react";

const WhatWillLearn = ({ title, desc = [] }) => {
  return (
    <div className="py-10 w-full md:px-4 px-2">
      <div className="py-10 px-2 border-2 border-green-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-black md:text-3xl sm:text-2xl text-xl title-font font-bold mb-4 capitalize text-center">
            What Will You Learn
          </h2>
          {title && <p className="text-center mb-6">{title}</p>}

          <ul className="space-y-2 text-left text-black">
            {desc.map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <svg
                  className="w-4 h-4 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 16 12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWillLearn;
