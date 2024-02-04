"use client"

import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import axios from "axios";

export default function Home() {

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("JavaScript");

  const runCodeAsync = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/runcode', {
        code, lang
      });

      console.log(res.data.data.result)
      setOutput(res.data.data.result);
    } catch (e) {
      console.log("Error", (e as Error).message);
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[95%] md:w-[80%] h-full flex flex-col items-center">
        <div className="w-[100%] h-12 flex items-end">
          <div className="flex items-center gap-3">
            <span>Language</span>
            <select name="lang" onChange={(e) => setLang(e.target.value)} >
              <option value="js">JavaScript</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>

        <div className="w-[100%] max-h-[70vh] mt-2">
          <CodeEditor
            value={code}
            language="js"
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

        <div className="w-[100%] h-fit flex items-center justify-between gap-3 mt-2">
          <button onClick={runCodeAsync} className="px-3 bg-slate-600 text-white rounded-md py-2">Run</button>
          <CodeEditor
            value={output}
            language="js"
            placeholder={`Output`}
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              backgroundColor: "black",
              color: 'white',
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              height: '80px',
              width: '70vw',
              overflow: 'scroll'
            }}
          />
        </div>
      </div>
    </div>
  )
}
