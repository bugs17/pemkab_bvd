"use client";

import {
  useEditor,
  EditorContent,
  EditorProvider,
  useCurrentEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect, useState } from "react";

function MenuBar({tglChange, curentTgl}) {
  const { editor } = useCurrentEditor();

  

  if (!editor) {
    return null;
  }

  return (
    <div className="flex mb-4 flex-row justify-between items-center border-b-[1px] pb-3 border-slate-400">
      <div className="flex gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${
            editor.isActive("bold")
              ? "btn btn-xs btn-success text-slate-100"
              : "btn btn-xs btn-outline"
          }`}
        >
          <FaBold size={15} />
          bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${
            editor.isActive("italic")
              ? "btn btn-xs btn-success text-slate-100"
              : "btn btn-xs btn-outline"
          }`}
        >
          <FaItalic size={15} />
          italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`${
            editor.isActive("strike")
              ? "btn btn-xs btn-success text-slate-100"
              : "btn btn-xs btn-outline"
          }`}
        >
          <AiOutlineStrikethrough size={15} />
          strike
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${
            editor.isActive("paragraph")
              ? "btn btn-xs btn-success text-slate-100"
              : "btn btn-xs btn-outline"
          }`}
        >
          <AiOutlineStrikethrough size={15} />
          paragraph
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${
            editor.isActive("blockquote")
              ? "btn btn-xs btn-success text-slate-100"
              : "btn btn-xs btn-outline"
          }`}
        >
          blockquote
        </button>
      </div>

      <div className="flex items-center flex-row gap-2">
      
        <span className="label-text">Tanggal</span>
        <label className="form-control w-full max-w-xs">
          <input
            required
            value={curentTgl}
            onChange={e => tglChange(e.target.value)}
            type="date"
            className="file-input input-sm file-input-bordered w-full max-w-xs"
          />
        </label>
      </div>
    </div>
  );
}



const TextEditorNew = ({ content, onChange, onTglChange, tgl }) => {
  

  const extension = [StarterKit];


  


  return (
    <div className="overflow-y-auto rounded  p-4">
    <EditorProvider
        slotBefore={<MenuBar curentTgl={tgl} tglChange={onTglChange} />}
        extensions={extension}
        content={content}
        
        editorProps={{
          attributes: {
            class:
              "bg-slate-200 caret-success cursor-text rounded-md p-8 h-96 overflow-y-scroll border-gray-400 focus:border-[2px]",
          },
          
        }}
        onUpdate={({editor}) => {
          onChange(editor.getHTML())
        }}
      >
      </EditorProvider>
    </div>
  );

};

export default TextEditorNew;
