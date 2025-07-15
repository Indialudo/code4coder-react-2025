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

  const safeArray = (arr) => Array.isArray(arr) ? arr : [];

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header
          new Paragraph({
            text: data.fullName || "Your Name",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
          }),
          new Paragraph({
            text: data.jobTitle || "",
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),

          // Contact Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(data.contact || "Phone")],
                  }),
                  new TableCell({
                    children: [new Paragraph(data.email || "Email")],
                  }),
                  new TableCell({
                    children: [new Paragraph(data.linkedIn || "LinkedIn")],
                  }),
                ],
              }),
            ],
          }),

          // Profile Summary
          data.summary && sectionTitle("PROFILE SUMMARY"),
          data.summary && new Paragraph({
            text: data.summary,
            spacing: { after: 200 },
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
          sectionTitle("EDUCATION"),
          ...safeArray(data.education).flatMap((edu) => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${edu?.degree || ""} - ${edu?.institute || ""}`,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              text: `${edu?.year || ""} | ${edu?.location || ""}`,
              italics: true,
            }),
          ]),

          // Certifications
          data.certifications && sectionTitle("CERTIFICATIONS"),
          data.certifications && new Paragraph({
            text: data.certifications,
            spacing: { after: 200 },
          }),

          // Achievements
          sectionTitle("KEY ACHIEVEMENTS"),
          ...safeArray(data.achievements).map((item) => bulletPoint(item)),

          // Skills
          sectionTitle("SKILLS"),
          new Paragraph({
            text: safeArray(data.skills).join(", "),
          }),

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
