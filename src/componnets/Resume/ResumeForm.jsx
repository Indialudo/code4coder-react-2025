import React, { useState } from "react";
import { generateWordDoc } from "./generateWordDoc"; // Adjust path if needed
import Education from "./PatternOneResume/Education/Education";
import Experience from "./PatternOneResume/experience/Experience";
import Skills from "./PatternOneResume/skills/Skill";
import Summary from "./PatternOneResume/summary/Summary";

const ResumeForm = () => {
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
    description: ""

  },
]);



  // const [educationList, setEducationList] = useState([
  //   {
  //     degree: "",
  //     institute: "",
  //     startDate: "",
  //     endDate: "",
  //     location: "",
  //   },
  // ]);

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
        description: ""
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

  return (
    <form
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleResumeSubmit();
      }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Resume Builder
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input name="fullName" placeholder="Full Name" onChange={handleFormChange} className="input border p-2" />
        <input name="jobTitle" placeholder="Job Title" onChange={handleFormChange} className="input border p-2" />
        <input name="contact" placeholder="Contact Number" onChange={handleFormChange} className="input border p-2" />
        <input name="email" placeholder="Email" onChange={handleFormChange} className="input border p-2" />
        <input name="linkedIn" placeholder="LinkedIn URL (Optional)" onChange={handleFormChange} className="input border p-2" />
      </div>

     <Summary summary={formData.summary} onChange={handleFormChange} />

      {/* skills */}
      <Skills
        skills={formData.skills}
        onSkillsChange={handleFormChange}
      />


      {/* Work Experience */}
      <Experience
        experience={experience}
        handleExperienceChange={handleExperienceChange}
        addExperience={addExperience}
        removeExperience={removeExperience}
      />
      <textarea
        name="projects"
        rows="4"
        placeholder="Projects"
        onChange={handleFormChange}
        className="textarea w-full border p-2"
      />

      {/* Education */}
      <Education
        educationList={educationList}
        handleEducationChange={handleEducationChange}
        addEducation={addEducation}
        removeEducation={removeEducation}
      />

      <textarea
        name="certifications"
        rows="2"
        placeholder="Certifications"
        onChange={handleFormChange}
        className="textarea w-full border p-2"
      />

      <textarea
        name="achievements"
        rows="3"
        placeholder={`Achievements (one per line):\nWon Hackathon 2022\nGoogle Code Jam finalist`}
        onChange={handleFormChange}
        className="textarea w-full border p-2"
      />

      <input
        name="languages"
        placeholder="Languages (e.g., English - Native, Hindi - Fluent)"
        onChange={handleFormChange}
        className="input w-full border p-2"
      />

      <div className="grid md:grid-cols-3 gap-4">
        <input name="dob" placeholder="Date of Birth" onChange={handleFormChange} className="input border p-2" />
        <input name="address" placeholder="Address" onChange={handleFormChange} className="input border p-2" />
        <input name="nationality" placeholder="Nationality" onChange={handleFormChange} className="input border p-2" />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
      >
        Generate Resume
      </button>
    </form>
  );
};

export default ResumeForm;
