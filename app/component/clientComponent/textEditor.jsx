'use client'

import { useEditor, EditorContent, EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";



function MenuBar() {
  const {editor} = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className='flex gap-2 mb-4 border-b-[1px] pb-3 border-slate-400'>
        <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive("bold") ? "btn btn-xs btn-success text-slate-100" : "btn btn-xs btn-outline"}`}
        >
        <FaBold size={15} />
          bold
        </button>

        <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive("italic") ? "btn btn-xs btn-success text-slate-100" : "btn btn-xs btn-outline"}`}
        >
        <FaItalic size={15} />
          italic
        </button>
    </div>
  )
}

const TextEditor = ({content}) => {
  

  const extension = [StarterKit]
  
  return (
    <div className='bg-slate-200 h-96 rounded p-4'>
      <EditorProvider 
        slotBefore={<MenuBar />}
        injectCSS={false}
        autofocus={true}
        extensions={extension}
        content={content}
        
      >
      <></>
      </EditorProvider>
    </div>
  )
  
  // <EditorContent className='bg-slate-200 rounded-md h-80 overflow-y-scroll p-3 border-none' editor={editor} />
}

export default TextEditor

