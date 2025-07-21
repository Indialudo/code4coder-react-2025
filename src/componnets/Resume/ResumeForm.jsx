import React, { useState } from "react";
import { generateWordDoc } from "./generateWordDoc"; // Adjust path if needed
import Education from "./PatternOneResume/Education/Education";
import Experience from "./PatternOneResume/experience/Experience";
import Skills from "./PatternOneResume/skills/Skill";
import Summary from "./PatternOneResume/summary/Summary";
import PersonalInfo from "./PatternOneResume/personalInfo/PersonalInfo";

const ResumeForm = () => {
  const [currentStep, setCurrentStep] = useState(1); // Step state
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    contact: "",
    email: "",
    linkedIn: "",
    github: "",
    portfolio: "",
    summary: "",
    skills: "",
    projects: "",
    certifications: "",
    achievements: "",
    languages: "",
    dob: "",
    address: "",
    nationality: "",
  });

  const [experience, setExperience] = useState([
    {
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ]);

  const [educationList, setEducationList] = useState([
    {
      examination: "",
      board: "",
      institute: "",
      year: "",
      percentage: "",
    },
  ]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = [...experience];
    updated.splice(index, 1);
    setExperience(updated);
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...educationList];
    updated[index][field] = value;
    setEducationList(updated);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      { degree: "", institute: "", startDate: "", endDate: "", location: "" },
    ]);
  };

  const removeEducation = (index) => {
    const updated = [...educationList];
    updated.splice(index, 1);
    setEducationList(updated);
  };

  const handleResumeSubmit = () => {
    const resumeData = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()),

      experience: experience.map((exp) => ({
        title: exp.jobTitle,
        company: exp.employer,
        duration: `${exp.startDate} – ${exp.endDate}`,
        location: exp.city,
        details: exp.description
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      })),

      education: educationList.map((edu) => ({
        examination: edu.examination,
        board: edu.board,
        institute: edu.institute,
        year: edu.year,
        percentage: edu.percentage,
      })),

      achievements: formData.achievements
        .split("\n")
        .map((a) => a.trim())
        .filter(Boolean),

      languages: formData.languages
        .split(",")
        .map((lang) => {
          const [name, level = ""] = lang.trim().split("-");
          return { name: name.trim(), level: level.trim() };
        }),
    };

    generateWordDoc(resumeData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div >
      <form
        className="bg-white shadow-md rounded-md "
        onSubmit={(e) => {
          e.preventDefault();
          handleResumeSubmit();
        }}

        style={{ height: "100vh" }}
      >

        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <PersonalInfo handleFormChange={handleFormChange} />
          )}

          {/* Step 2: Summary */}
          {currentStep === 2 && <Summary summary={formData.summary} onChange={handleFormChange} />}

          {/* Step 3: Skills */}
          {currentStep === 3 && <Skills skills={formData.skills} onSkillsChange={handleFormChange} />}

          {/* Step 4: Experience */}
          {currentStep === 4 && (
            <Experience
              experience={experience}
              handleExperienceChange={handleExperienceChange}
              addExperience={addExperience}
              removeExperience={removeExperience}
            />
          )}

          {/* Step 5: Education */}
          {currentStep === 5 && (
            <Education
              educationList={educationList}
              handleEducationChange={handleEducationChange}
              addEducation={addEducation}
              removeEducation={removeEducation}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-md"
              >
                Previous
              </button>
            )}
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
              >
                Submit
              </button>
            )}
          </div>
        </div>

      </form>
    </div>

  );
};

export default ResumeForm;
