import { blogs } from "@/constant/blog/data";
import React from "react";

const Page = (props) => {
  const slug = props.params.slug;
  const course = blogs.find((blog) => blog.slug === slug);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 lg:px-10">
        <div className="lg:flex">
          {/* Left Side - Cards */}
          <div className="lg:w-3/4 lg:mr-8">
            <div className="lg:overflow-x-auto lg:m-20 mt-20">
              {course.content.map((content, i) => {
                return (
                  <div className="blog-step-1" key={i}>
                    <p className="text-3xl font-bold text-orange-500">
                      {content.title}
                    </p>
                    {content.description && (
                      <p
                        className="font-sans text-base font-normal text-black leading-normal mt-5 lg:text-lg"
                        style={{
                          fontSize: "17px",
                          letterSpacing: "0",
                          margin: "15px 0",
                          minWidth: "16px",
                        }}
                      >
                        {content.description}
                      </p>
                    )}
                    {content.subpoints &&
                      content.subpoints.map((subpoint, j) => {
                        return (
                          <div key={j}>
                            {subpoint.subdetailTitle && (
                              <p className="text-lg mt-2 font-bold">
                                {subpoint.subdetailTitle}
                              </p>
                            )}
                            {subpoint.subdetailPoints && (
                              <ul className="list-disc lg:pl-4 pl-4 lg:ml-5">
                                {subpoint.subdetailPoints.map((detail, k) => {
                                  return (
                                    <li key={k}>
                                      <b>{detail.title}:</b> {detail.desc}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
              {course.conclusion && (
                <div className="blog-step-5 mt-8">
                  <p className="text-3xl font-bold text-orange-500">
                    Conclusion
                  </p>
                  {course.conclusion.map((conclusion, i) => (
                    <>
                      <p
                        key={1}
                        className="font-sans font-normal text-black leading-normal mt-5"
                        style={{
                          fontSize: "17px",
                          letterSpacing: "0",
                          margin: "15px 0",
                        }}
                      >
                        {conclusion.text}
                      </p>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Fixed Content */}
          <div className="lg:w-1/2 mt-20">
            <div className="lg:ml-4 lg:mt-0  fixed">
              <h2 className="text-xl font-semibold mb-4">Related blogposts</h2>

              {course?.related?.map((content, i) => {
                return (
                  <ol key={i} className="list-decimal pl-4">
                  <li className="text-gray-700 mb-2">
                   {content.relateds}
                  </li>
                  {/* <li className="text-gray-700 mb-2">
                    What is Unit Testing? Its Importance and Techni...
                  </li>
                  <li className="text-gray-700 mb-2">What is DOM?</li> */}
                  {/* Add more points as needed */}
                </ol>
                );
              })}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug.toString(),
  }));
}

export default Page;
