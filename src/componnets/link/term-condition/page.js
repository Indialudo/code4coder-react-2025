import { sectionsTermCondition } from '../../constant/data';
import React from 'react';

const TermCondition = () => {
  // Constants for content
 

  // Function to generate automatic subsections
  const generateSubSections = (content) => {
    return content.map((paragraph, index) => ({
      title: `${index + 1}.${index + 1}`,
      content: [paragraph],
    }));
  };

  // Function to generate content with automatic subsections
  const generateContentWithSubSections = (section) => {
    const generatedSubSections = generateSubSections(section.content);
    return {
      ...section,
      subSections: generatedSubSections,
    };
  };

  // Generate content with automatic subsections for sections that need it
  const sectionsWithSubSections = sectionsTermCondition.map((section) => {
    if (section.generateSubSections) {
      return generateContentWithSubSections(section);
    }
    return section;
  });

  return (
    <div className="container mx-auto p-4 sm:p-8 bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Term & Condition</h1>
      </div>
      <div className="mx-auto max-w-5xl">
        {sectionsWithSubSections.map((section, index) => (
          <div key={index} className="mt-8">
            <div className="text-center">
              <h1 className="section-title text-3xl font-bold text-black-900 mb-4">{section.title}</h1>
            </div>
            <div className="text-gray-700">
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="mt-3">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.subSections && section.subSections.map((subSection, subIndex) => (
              <div key={subIndex} className="mt-4 ml-4">
                <div className="text-center">
                  <h2 className="sub-section-title text-xl font-bold text-black-700 mb-2">{subSection.title}</h2>
                </div>
                <div className="text-gray-700">
                  {subSection.content.map((subParagraph, subIdx) => (
                    <p key={subIdx} className="mt-2">
                      {subParagraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermCondition;
