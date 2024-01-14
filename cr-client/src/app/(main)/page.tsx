"use client"

import React, { use, useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Home() {

  const [code, setCode] = useState("");
  const [lang, setLang] = useState("JavaScript");

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[95%] md:w-[80%] h-full flex flex-col items-center">
        <div className="w-[100%] h-12 flex items-end">
          <div className="flex items-center gap-3">
            <span>Language</span>
            <select name="lang" onChange={(e) => setLang(e.target.value)} >
              <option value="JavaScript">JavaScript</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
            </select>
          </div>
        </div>

        <div className="w-[100%] max-h-[70vh] mt-2">
          <CodeEditor
            value={code}
            language="cpp"
            placeholder={`Please enter ${lang} code.`}
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              maxHeight: '70vh',
              minHeight: '70vh',
              overflow: 'scroll'
            }}
          />
        </div>

        <div className="w-[100%] h-12 flex items-center justify-end gap-3 mt-2">
          <button className="px-3 bg-slate-600 text-white rounded-md py-2">Save Code</button>
          <button className="px-3 bg-slate-600 text-white rounded-md py-2">Run</button>
        </div>
      </div>
    </div>
  )
}
