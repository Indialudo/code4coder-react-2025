// import React from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';

// const Experience = ({
//   experience,
//   handleExperienceChange,
//   addExperience,
//   removeExperience,
// }) => {
//   const modules = {
//     toolbar: [
//       ['bold', 'italic', 'underline'],
//       [{ list: 'bullet' }, { list: 'ordered' }],
//       ['link'],
//     ],
//   };

//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold">Work Experience</h3>

//       {experience.map((exp, index) => (
//         <div key={index} className="border p-4 rounded space-y-3 shadow-sm">
//           <div className="grid md:grid-cols-2 gap-3">
//             <input
//               type="text"
//               placeholder="Job title"
//               value={exp.jobTitle}
//               onChange={(e) =>
//                 handleExperienceChange(index, "jobTitle", e.target.value)
//               }
//               className="p-2 border rounded w-full"
//             />
//             <input
//               type="text"
//               placeholder="Employer"
//               value={exp.employer}
//               onChange={(e) =>
//                 handleExperienceChange(index, "employer", e.target.value)
//               }
//               className="p-2 border rounded w-full"
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-3">
//             <input
//               type="month"
//               value={exp.startDate}
//               onChange={(e) =>
//                 handleExperienceChange(index, "startDate", e.target.value)
//               }
//               className="p-2 border rounded w-full"
//             />
//             <input
//               type="month"
//               value={exp.endDate}
//               onChange={(e) =>
//                 handleExperienceChange(index, "endDate", e.target.value)
//               }
//               className="p-2 border rounded w-full"
//             />
//           </div>

//           <input
//             type="text"
//             placeholder="City"
//             value={exp.city}
//             onChange={(e) =>
//               handleExperienceChange(index, "city", e.target.value)
//             }
//             className="p-2 border rounded w-full"
//           />

//           <div>
//             <label className="block font-medium mb-1">Description</label>
//             <div className="mt-2 bg-white border rounded p-2 min-h-[150px]">
//               <ReactQuill
//                 value={exp.description || ""}
//                 onChange={(data) =>
//                   handleExperienceChange(index, "description", data)
//                 }
//                 modules={modules}
//                 placeholder="Describe your role and achievements..."
//               />
//             </div>
//           </div>

//           <div className="text-right">
//             <button
//               onClick={() => removeExperience(index)}
//               type="button"
//               className="text-red-500 hover:underline"
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addExperience}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         + Add Experience
//       </button>
//     </div>
//   );
// };

// export default Experience;
