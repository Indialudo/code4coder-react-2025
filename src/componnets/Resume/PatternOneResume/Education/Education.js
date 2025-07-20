import React from "react";

const Education = ({
  educationList,
  handleEducationChange,
  addEducation,
  removeEducation,
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Education</h3>
      {educationList.map((edu, index) => (
        <div
          key={index}
          className="border p-4 rounded space-y-3 shadow-sm bg-gray-50"
        >
          <input
            type="text"
            placeholder="Examination (e.g., Bachelor of Engineering)"
            value={edu.examination}
            onChange={(e) =>
              handleEducationChange(index, "examination", e.target.value)
            }
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Board/University (e.g., CBSE, R.G.P.V)"
            value={edu.board}
            onChange={(e) =>
              handleEducationChange(index, "board", e.target.value)
            }
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Institution (e.g., Indian School of Learning)"
            value={edu.institute}
            onChange={(e) =>
              handleEducationChange(index, "institute", e.target.value)
            }
            className="p-2 border rounded w-full"
          />
          <div className="grid md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Year (e.g., 2019)"
              value={edu.year}
              onChange={(e) =>
                handleEducationChange(index, "year", e.target.value)
              }
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Percentage/CGPA (e.g., 7.8 CGPA or 61%)"
              value={edu.percentage}
              onChange={(e) =>
                handleEducationChange(index, "percentage", e.target.value)
              }
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="text-right">
            <button
              onClick={() => removeEducation(index)}
              type="button"
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Add Education
      </button>
    </div>
  );
};

export default Education;
