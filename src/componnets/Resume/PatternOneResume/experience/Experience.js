import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";

const Experience = ({
  experience,
  handleExperienceChange,
  addExperience,
  removeExperience,
}) => {
  const [endDateError, setEndDateError] = useState("");

  const handleEndDateChange = (index, date) => {
    const startDate = new Date(experience[index].startDate);
    if (date && date < startDate) {
      setEndDateError("End date cannot be before start date.");
      return;
    }
    setEndDateError("");
    handleExperienceChange(index, "endDate", date);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-lg space-y-6">
      <h3 className="text-2xl font-bold text-center text-indigo-700 flex items-center justify-center gap-2">
        <span className="text-yellow-500">★</span> Work Experience <span className="text-yellow-500">★</span>
      </h3>

      {experience.map((exp, index) => (
        <div
          key={index}
          className="bg-white border border-indigo-200 p-4 rounded-xl shadow-md space-y-4 transition duration-300 hover:shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Job title"
              value={exp.jobTitle}
              onChange={(e) =>
                handleExperienceChange(index, "jobTitle", e.target.value)
              }
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="text"
              placeholder="Employer"
              value={exp.employer}
              onChange={(e) =>
                handleExperienceChange(index, "employer", e.target.value)
              }
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="relative">
              <DatePicker
                selected={exp.startDate ? new Date(exp.startDate) : null}
                onChange={(date) =>
                  handleExperienceChange(index, "startDate", date)
                }
                className="p-3 border border-gray-300 rounded-lg w-full pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholderText="Start Date"
                dateFormat="dd/MM/yyyy"
              />
              <i className="fa fa-calendar absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <DatePicker
                selected={exp.endDate ? new Date(exp.endDate) : null}
                onChange={(date) => handleEndDateChange(index, date)}
                className="p-3 border border-gray-300 rounded-lg w-full pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholderText="End Date"
                dateFormat="dd/MM/yyyy"
              />
              <i className="fa fa-calendar absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              {endDateError && (
                <div className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-18px]">
                  {endDateError}
                </div>
              )}
            </div>
          </div>

          <input
            type="text"
            placeholder="City"
            value={exp.city}
            onChange={(e) =>
              handleExperienceChange(index, "city", e.target.value)
            }
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            placeholder="Description (one bullet per line)"
            value={exp.description}
            onChange={(e) =>
              handleExperienceChange(index, "description", e.target.value)
            }
            rows={4}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <div className="text-right">
            <button
              onClick={() => removeExperience(index)}
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
          onClick={addExperience}
          className="mt-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-xl transition"
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
};

export default Experience;
