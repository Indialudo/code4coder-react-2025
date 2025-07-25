import React from "react";

const Education = ({
  educationList,
  handleEducationChange,
  addEducation,
  removeEducation,
}) => {
  return (
    <div className="resume-education-container bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-lg space-y-6">
      <h3 className="text-2xl font-bold text-center text-indigo-700 flex items-center justify-center gap-2">
        <span className="text-yellow-500">★</span> Education <span className="text-yellow-500">★</span>
      </h3>

      {educationList.map((edu, index) => (
        <div
          key={index}
          className="resume-education-card bg-white border border-indigo-200 p-4 rounded-xl shadow-md space-y-4 transition duration-300 hover:shadow-lg"
        >
          <input
            type="text"
            placeholder="Examination (e.g., Bachelor of Engineering)"
            value={edu.examination}
            onChange={(e) =>
              handleEducationChange(index, "examination", e.target.value)
            }
            className="resume-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="Board/University (e.g., CBSE, R.G.P.V)"
            value={edu.board}
            onChange={(e) =>
              handleEducationChange(index, "board", e.target.value)
            }
            className="resume-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="Institution (e.g., Indian School of Learning)"
            value={edu.institute}
            onChange={(e) =>
              handleEducationChange(index, "institute", e.target.value)
            }
            className="resume-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Passout Year (e.g., 2019)"
              value={edu.year}
              onChange={(e) =>
                handleEducationChange(index, "year", e.target.value)
              }
              className="resume-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="text"
              placeholder="Percentage/CGPA (e.g., 7.8 CGPA or 61%)"
              value={edu.percentage}
              onChange={(e) =>
                handleEducationChange(index, "percentage", e.target.value)
              }
              className="resume-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="text-right">
            <button
              onClick={() => removeEducation(index)}
              type="button"
              className="text-red-600 hover:underline text-sm font-medium"
            >
              ✖ Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-center">
        <button
          type="button"
          onClick={addEducation}
          className="resume-add-button mt-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-xl transition"
        >
          + Add Education
        </button>
      </div>
    </div>
  );
};

export default Education;
