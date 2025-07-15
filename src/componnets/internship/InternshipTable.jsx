import React from "react";

const InternshipTable = () => {
  const internshipData = [
    { course: "MERN Full Stack Internship", duration: "3 months", registrationLink: "#" },
    { course: "Python Internship", duration: "2 Month", registrationLink: "#" },
    { course: "Digital Marketing Internship", duration: "3 Month", registrationLink: "#" },
    { course: "UIUX Designer Internship", duration: "2 Month", registrationLink: "#" },
    { course: "Web Development Internship", duration: "2 Month", registrationLink: "#" },
    { course: "React JS Internship", duration: "2 Months", registrationLink: "#" },
    { course: "Node Js Internship", duration: "2 Months", registrationLink: "#" },
    { course: "MY SQL Js Internship", duration: "2 Month", registrationLink: "#" },
    { course: "Cloud Computing Internship", duration: "45 Days", registrationLink: "#" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr className="bg-lightyellow text-white">
            <th className="sm:px-4 px-2 py-3 md:w-3/4 sm:w-3/5 title-font tracking-wider font-medium md:text-lg sm:text-base text-sm">
              Internship
            </th>
            <th className="sm:px-4 px-2 py-3 title-font tracking-wider font-medium md:text-lg sm:text-base text-sm">
              Duration
            </th>
            <th className="sm:px-4 px-2 py-3 title-font tracking-wider font-medium md:text-lg sm:text-base text-sm">
              Reg Link
            </th>
          </tr>
        </thead>
        <tbody>
          {internshipData.map((data, i) => (
            <tr key={i}>
              <td className="ms:px-4 px-2 md:text-lg sm:text-base text-sm py-3 md:w-3/4 sm:w-3/5">
                {data.course}
              </td>
              <td className="ms:px-4 px-2 md:text-lg sm:text-base text-sm py-3">
                {data.duration}
              </td>
              <td className="ms:px-4 px-2 md:text-lg sm:text-base text-sm py-3">
                {/* Replace with actual registration link if needed */}
                <a href="tel:9341045976" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InternshipTable;
