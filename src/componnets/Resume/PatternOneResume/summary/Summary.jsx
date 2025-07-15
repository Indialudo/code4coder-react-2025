import React from "react";

const Summary = ({ summary, onChange }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
      <textarea
        name="summary"
        rows="3"
        placeholder="Professional Summary"
        value={summary}
        onChange={onChange}
        className="textarea w-full border p-2"
      />
    </div>
  );
};

export default Summary;
