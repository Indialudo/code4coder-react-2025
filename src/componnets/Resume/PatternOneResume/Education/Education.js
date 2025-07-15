import React from 'react';

const Education = ({
  educationList,
  handleEducationChange,
  addEducation,
  removeEducation,
}) => {
  return (
    <>
      {/* Education */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Education</h3>
        {educationList.map((edu, index) => (
          <div key={index} className="border p-4 rounded space-y-3 shadow-sm">
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                handleEducationChange(index, 'degree', e.target.value)
              }
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Institute"
              value={edu.institute}
              onChange={(e) =>
                handleEducationChange(index, 'institute', e.target.value)
              }
              className="p-2 border rounded w-full"
            />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="month"
                placeholder="Start Date"
                value={edu.startDate}
                onChange={(e) =>
                  handleEducationChange(index, 'startDate', e.target.value)
                }
                className="p-2 border rounded w-full"
              />
              <input
                type="month"
                placeholder="End Date"
                value={edu.endDate}
                onChange={(e) =>
                  handleEducationChange(index, 'endDate', e.target.value)
                }
                className="p-2 border rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Location"
              value={edu.location}
              onChange={(e) =>
                handleEducationChange(index, 'location', e.target.value)
              }
              className="p-2 border rounded w-full"
            />
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
    </>
  );
};

export default Education;
