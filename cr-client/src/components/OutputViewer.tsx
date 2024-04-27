import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';

interface OutputViewerI {
    output: string
}

const OutputViewer: React.FC<OutputViewerI> = ({ output }) => {
    return (
        <CodeEditor
            value={output}
            language="js"
            placeholder={`Output`}
            padding={15}
            style={{
                backgroundColor: "black",
                color: 'white',
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                height: '90vh',
                width: '70vw',
                overflow: 'scroll'
            }}
        />
    )
}

export default OutputViewer