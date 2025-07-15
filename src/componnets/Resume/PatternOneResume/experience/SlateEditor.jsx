import React, { useMemo, useCallback } from "react";
import { createEditor, Transforms, Editor, Text } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

const SlateEditor = ({ value, onChange }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const safeValue =
    Array.isArray(value) && value.length > 0
      ? value
      : [{ type: "paragraph", children: [{ text: "" }] }];

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <div className="border p-2 bg-white rounded min-h-[150px]">
      <Slate editor={editor} value={safeValue} onChange={onChange}>
        <div className="flex gap-2 mb-2">
          <EditorButton format="bold" editor={editor} label="B" />
          <EditorButton format="italic" editor={editor} label="I" />
          <EditorButton format="underline" editor={editor} label="U" />
        </div>
        <Editable
          placeholder="Describe your role and achievements..."
          renderLeaf={renderLeaf}
          className="min-h-[100px] outline-none"
        />
      </Slate>
    </div>
  );
};

const EditorButton = ({ format, editor, label }) => {
  const isActive = isFormatActive(editor, format);
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        toggleFormat(editor, format);
      }}
      className={`px-2 py-1 border rounded ${isActive ? "bg-gray-300" : "bg-white"} hover:bg-gray-200`}
    >
      {label}
    </button>
  );
};

const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

const isFormatActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n[format] === true,
    universal: true,
  });
  return !!match;
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  return <span {...attributes}>{children}</span>;
};

export default SlateEditor;
