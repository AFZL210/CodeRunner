"use client"

import React, { useState } from 'react'

const Navbar = () => {

    const [codeId, setCodeId] = useState("");

    return (
        <div className="w-full h-12 bg-gray-200 flex justify-around items-center">
            <h1 className="font-bold cursor-pointer" onClick={() => window.location.href = "/"}>CodeRunner</h1>
        </div>
    )
}

export default Navbar