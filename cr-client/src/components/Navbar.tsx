"use client"

import React, { useState } from 'react'
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const [codeId, setCodeId] = useState("");

    const searchCode = () => {
        if (codeId.length === 0) {
            return alert("CodeId cannot be empty");
        }

        window.location.href = "/code/codeid"
    }

    return (
        <div className="w-full h-12 bg-gray-200 flex justify-around items-center">
            <h1 className="font-bold cursor-pointer" onClick={() => window.location.href = "/"}>CodeRunner</h1>
            <ul className="flex gap-3 items-center">
                <li className="flex gap-2 items-center">
                    <input type="text" placeholder="Code ID" className="px-3 rounded-md max-w-36" value={codeId} onChange={(e) => setCodeId(e.target.value)} onKeyDown={(e) => {
                        if (e.key == "Enter") searchCode();
                    }} />
                    <button onClick={searchCode}><PaperPlaneIcon /></button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar