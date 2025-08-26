"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import React from "react";
import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaQuoteLeft, FaCode, FaLink, FaHeading } from "react-icons/fa";

interface RichTextEditorProps {
  setEditorContent: (content: string) => void;
  editorContent: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ setEditorContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Strike,
      Blockquote,
      CodeBlock,
      OrderedList,
      BulletList,
      Heading.configure({ levels: [1, 2, 3] }),
      Link.configure({ openOnClick: true }),
    ],
    content: "<p>Start writing here...</p>",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  if (!editor) return null;


  return (
    <div className="w-full border rounded-lg shadow-lg p-4 bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-4 bg-gray-100 p-2 rounded-md shadow-sm">
        {[
          { icon: FaBold, action: () => editor.chain().focus().toggleBold().run(), active: "bold" },
          { icon: FaItalic, action: () => editor.chain().focus().toggleItalic().run(), active: "italic" },
          { icon: FaUnderline, action: () => editor.chain().focus().toggleUnderline().run(), active: "underline" },
          { icon: FaListUl, action: () => editor.chain().focus().toggleBulletList().run(), active: "bulletList" },
          { icon: FaListOl, action: () => editor.chain().focus().toggleOrderedList().run(), active: "orderedList" },
          { icon: FaQuoteLeft, action: () => editor.chain().focus().toggleBlockquote().run(), active: "blockquote" },
          { icon: FaCode, action: () => editor.chain().focus().toggleCodeBlock().run(), active: "codeBlock" },
          { icon: FaLink, action: () => {
              const url = prompt("Enter URL:");
              if (url) editor.chain().focus().setLink({ href: url }).run();
            }, active: "link" 
          },
          { icon: FaHeading, action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: "heading" },
        ].map(({ icon: Icon, action, active }, index) => (
          <button
            key={index}
            type="button"
            onClick={action}
            className={`p-2 text-gray-700 rounded-md border transition-all hover:bg-gray-200 ${editor.isActive(active) ? "bg-gray-300" : ""}`}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>

      {/* Text Editor */}
      <div className="border p-3 rounded-lg min-h-[200px] bg-white focus:outline-none">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RichTextEditor;
