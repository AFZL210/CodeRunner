import React from 'react'
import Editor from '@monaco-editor/react';

interface CodeEditorI {
    code: string,
    setCode: React.Dispatch<React.SetStateAction<string>>,
    height: string,
    defaultLanguage: string,
    theme: string
}

const CodeEditor: React.FC<CodeEditorI> = ({ code, setCode, height, defaultLanguage, theme }) => {
    return (
        <Editor height={height} defaultLanguage={defaultLanguage} theme={theme} defaultValue={code} onChange={(code) => setCode(code!)} />
    )
}

export default CodeEditor