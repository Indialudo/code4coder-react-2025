import React from "react";

const Skills = ({ skills, onSkillsChange }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <textarea
        name="skills"
        rows="2"
        placeholder="Skills (comma-separated)"
        value={skills}
        onChange={onSkillsChange}
        className="textarea w-full border p-2"
      />
    </div>
  );
};

export default Skills;
