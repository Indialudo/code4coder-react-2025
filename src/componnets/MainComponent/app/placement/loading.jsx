import React from "react";

const loading = () => {
  return (
    <div
      role="status"
      className="animate-pulse max-w-7xl mx-auto py-8 px-4 lg:py-16 lg:px-12 text-white text-center min-h-screen"
    >
        <div className="my-auto">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
      <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 my-4 max-w-[540px]"></div>
      <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 my-4 max-w-[700px]"></div>
      <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 my-4 max-w-[540px]"></div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-20 h-5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="w-24 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-center mt-4 gap-4">
        <div className="w-20 h-5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="w-20 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="w-20 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default loading;
