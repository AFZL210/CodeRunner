"use client"

import React, { useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';

const CodePage = () => {

  const [code, setCode] = useState("");

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[95%] md:w-[80%] h-full flex flex-col items-center">
        <div className="w-[100%] h-12 flex items-end">
          <div className="flex items-center gap-3">
            <span>Author: Afzal</span>
            <span>Language: C++</span>
          </div>
        </div>

        <div className="w-[100%] max-h-[70vh] mt-2">
          <CodeEditor
            value={code}
            language="cpp"
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
      </div>
    </div>
  )
}

export default CodePage