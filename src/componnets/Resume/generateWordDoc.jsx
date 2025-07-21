import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";

export const generateWordDoc = (data) => {
  const sectionTitle = (text) =>
    new Paragraph({
      text,
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 150 },
      thematicBreak: true,
    });

  const bulletPoint = (text) =>
    new Paragraph({
      text: `• ${text}`,
      spacing: { after: 80 },
    });




  const safeArray = (arr) => (Array.isArray(arr) ? arr : []);

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // -- Header: Name
          new Paragraph({
            children: [
              new TextRun({
                text: data.fullName?.toUpperCase() || "YOUR NAME",
                bold: true,
                size: 32,
              }),
            ],
            alignment: AlignmentType.LEFT,

          }),

          // -- Job Title
          new Paragraph({
            text: data.jobTitle || "Job Title",
            alignment: AlignmentType.LEFT,

          }),

          // Personal Info Section (DOB, Email, Contact, etc. with bold for DOB, Email, and Contact)
          new Paragraph({
            children: [
              new TextRun({
                text: `DOB: `,
                bold: true,
              }),
              new TextRun({
                text: `${data.dob || "DD-MMM-YYYY"}`,
              }),
              new TextRun({
                text: ` | Email: `,
                bold: true,
              }),
              new TextRun({
                text: `${data.email || "example@example.com"}`,
              }),
              new TextRun({
                text: ` | Contact: `,
                bold: true,
              }),
              new TextRun({
                text: `${data.contact || "+91 0000000000"}`,
              }),
            ],
            alignment: AlignmentType.LEFT,

          }),


          // Personal Info Section (LinkedIn, GitHub, Portfolio with clickable links)
          new Paragraph({
            children: [
              new TextRun({
                text: `LinkedIn: `,
                bold: true,
              }),
              new TextRun({
                text: `${data.linkedIn || "https://linkedin.com/in/username"}`,
                hyperlink: data.linkedIn || "https://linkedin.com/in/username",  // Make it a clickable link
                color: "0000FF",  // Blue color for the link
                underline: true,  // Underline to make it look like a link
              }),

            ],
            alignment: AlignmentType.LEFT,
          }),



          // Profile Summary
          data.summary && sectionTitle("PROFILE SUMMARY"),
          data.summary && new Paragraph({
            text: data.summary,
            spacing: { after: 200 },
          }),

          // Skills
          sectionTitle("SKILLS"),
          new Paragraph({
            text: safeArray(data.skills).join(", "),
          }),

          // Experience Section
          sectionTitle("EXPERIENCE"),
          ...safeArray(data.experience).flatMap((exp) => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${exp?.title || ""} at ${exp?.company || ""}`,
                  bold: true,
                  size: 26,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${exp?.duration || ""} | ${exp?.location || ""}`,
                  italics: true,
                  size: 24,
                }),
              ],
            }),
            ...safeArray(exp?.details).map((point) => bulletPoint(point)),
            new Paragraph({ text: "" }),
          ]),

          // Projects Section
          data.projects && sectionTitle("PROJECTS"),
          data.projects && new Paragraph({
            text: data.projects,
            spacing: { after: 200 },
          }),

          // Education Section
          // sectionTitle("EDUCATION"),
          // ...safeArray(data.education).flatMap((edu) => [
          //   new Paragraph({
          //     children: [
          //       new TextRun({
          //         text: `${edu?.degree || ""} - ${edu?.institute || ""}`,
          //         bold: true,
          //       }),
          //     ],
          //   }),
          //   new Paragraph({
          //     text: `${edu?.year || ""} | ${edu?.location || ""}`,
          //     italics: true,
          //   }),
          // ]),

          // ACADEMIC QUALIFICATION section in Word Document
          sectionTitle("ACADEMIC QUALIFICATION"),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              // Table Header Row — BOLD
              new TableRow({
                children: [
                  "Examination",
                  "Board/University",
                  "Institution",
                  "Year",
                  "Percentage/CGPA",
                ].map(
                  (header) =>
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: header,
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                    })
                ),
              }),

              // Education Data Rows
              ...safeArray(data.education).map((edu) =>
                new TableRow({
                  children: [
                    edu.examination || "",
                    edu.board || "",
                    edu.institute || "",
                    edu.year || "",
                    edu.percentage || "",
                  ].map(
                    (value) =>
                      new TableCell({
                        children: [new Paragraph(value)],
                      })
                  ),
                })
              ),
            ],
          }),



          // Certifications
          data.certifications && sectionTitle("CERTIFICATIONS"),
          data.certifications && new Paragraph({
            text: data.certifications,
            spacing: { after: 200 },
          }),

          // Achievements
          sectionTitle("KEY ACHIEVEMENTS"),
          ...safeArray(data.achievements).map((item) => bulletPoint(item)),



          // Languages
          sectionTitle("LANGUAGES"),
          new Paragraph({
            text: safeArray(data.languages)
              .map((lang) =>
                `${lang?.name || ""}${lang?.level ? " - " + lang.level : ""}`
              )
              .join(" | "),
          }),
        ].filter(Boolean), // remove any undefined/null children
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${data.fullName || "resume"}-Resume.docx`);
  });
};
