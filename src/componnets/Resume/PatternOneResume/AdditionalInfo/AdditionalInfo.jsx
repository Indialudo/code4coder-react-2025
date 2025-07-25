// ./PatternOneResume/AdditionalInfo/AdditionalInfo.jsx
import React from "react";

const AdditionalInfo = ({ formData, handleFormChange }) => {
  return (
    <div className="bg-white border border-indigo-200 p-4 rounded-xl shadow-md space-y-4 transition duration-300 hover:shadow-lg">
      <textarea
        name="certifications"
        rows="2"
        placeholder="Certifications"
        value={formData.certifications}
        onChange={handleFormChange}
        className="textarea w-full border p-2"
      />

      <textarea
        name="achievements"
        rows="3"
        placeholder={`Achievements (one per line):\nWon Hackathon 2022\nGoogle Code Jam finalist`}
        value={formData.achievements}
        onChange={handleFormChange}
        className="textarea w-full border p-2"
      />

      <input
        name="languages"
        placeholder="Languages (e.g., English - Native, Hindi - Fluent)"
        value={formData.languages}
        onChange={handleFormChange}
        className="input w-full border p-2"
      />

      <div className="grid md:grid-cols-3 gap-4">
        <input
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleFormChange}
          className="input border p-2"
        />
        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleFormChange}
          className="input border p-2"
        />
        <input
          name="nationality"
          placeholder="Nationality"
          value={formData.nationality}
          onChange={handleFormChange}
          className="input border p-2"
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
