"use client"

import React, { useState } from "react";
import axios from "axios";
import CodeEditor from "@/components/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import OutputViewer from "@/components/OutputViewer";

export default function Home() {

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("js");

  const runCodeAsync = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/runcode`, {
        code, lang
      });

      console.log(res.data.data.result)
      setOutput(res.data.data.result);
    } catch (e) {
      console.log("Error", (e as Error).message);
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-[100%] md:w-[100%] h-full flex flex-col items-center">
        <div className="w-[100%] h-12 flex items-end">
          <div className="flex items-center gap-3">
            <span>Language</span>
            <select name="lang" onChange={(e) => setLang(e.target.value)} >
              <option value="js">JavaScript</option>
              <option value="cpp">C++</option>
              <option value="py">Python</option>
            </select>
            <button onClick={runCodeAsync} className="px-3 bg-slate-600 text-white rounded-md py-2">Run</button>
          </div>
        </div>

        <div className="w-[100%] h-fit flex items-center justify-between gap-3 mt-2">
          <ResizablePanelGroup direction="horizontal" className="w-[100%] h-[calc(100vh-48px)]">
            <ResizablePanel className="">
              <CodeEditor code={code} setCode={setCode} defaultLanguage="javascript" height="90vh" theme="vs-dark" />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="w-full h-[20%]">
              <OutputViewer output={output} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  )
}
