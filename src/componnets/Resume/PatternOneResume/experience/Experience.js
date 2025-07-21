import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css"; // Ensure this is imported

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
      return; // Prevent updating the end date if it's earlier than the start date
    }
    setEndDateError(""); // Clear error if the date is valid
    handleExperienceChange(index, "endDate", date);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Work Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="border p-4 rounded space-y-3 shadow-sm">
          <div className="grid md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Job title"
              value={exp.jobTitle}
              onChange={(e) =>
                handleExperienceChange(index, "jobTitle", e.target.value)
              }
              className="input-field p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Employer"
              value={exp.employer}
              onChange={(e) =>
                handleExperienceChange(index, "employer", e.target.value)
              }
              className="input-field p-2 border rounded w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {/* Ensure DatePicker container takes full width */}
            <div className="relative">
              <DatePicker
                selected={exp.startDate ? new Date(exp.startDate) : null}
                onChange={(date) =>
                  handleExperienceChange(index, "startDate", date)
                }
                className="p-2 border rounded pl-10 cursor-pointer"
                placeholderText="Start Date"
                dateFormat="dd/MM/yyyy"
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "viewport",
                  },
                }}
              />
              <i
                className="fa fa-calendar absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="relative ">
              <DatePicker
                selected={exp.endDate ? new Date(exp.endDate) : null}
                onChange={(date) => handleEndDateChange(index, date)}
                className="p-2 border rounded pl-10 cursor-pointer"
                placeholderText="End Date"
                dateFormat="dd/MM/yyyy"
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "viewport",
                  },
                }}
                showFullMonthYearPicker
              />
              <i
                className="fa fa-calendar absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
              {/* Error message below the input with red color */}
              {endDateError && (
                <div
                  style={{ color: "red" }}
                  className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-18px]"
                >
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
            className="input-field p-2 border rounded w-full"
          />

          <textarea
            placeholder="Description (one bullet per line)"
            value={exp.description}
            onChange={(e) =>
              handleExperienceChange(index, "description", e.target.value)
            }
            rows={4}
            className="input-field p-2 border rounded w-full"
          />

          <div className="text-right">
            <button
              onClick={() => removeExperience(index)}
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
        onClick={addExperience}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Add Experience
      </button>
    </div>
  );
};

export default Experience;
