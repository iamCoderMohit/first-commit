"use client"

import { useRef, useState } from "react";

interface Input {
  name: string;
  logo: string;
  category: string;
  version: string;
  desc: string;
  isInv?: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>
}

function StackCard({name, logo, category, version, desc, isInv, setActive}: Input) {
  const [isDesc, setIsDesc] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>(null)
  return (
    <div className="relative w-full bg-[#0e22457d] p-2 rounded-lg cursor-pointer hover:bg-[#485b7ec5] transition-all"
    onMouseEnter={() => {
      timerRef.current = setTimeout(() => {
      setIsDesc(true)
    }, 500)
    }}
    onMouseLeave={() => {
      if(timerRef.current){
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
      setIsDesc(false)
    }} 
    onClick={() => {
      setActive(name),
      document.getElementById("main")?.scrollIntoView()
    }}
    >
      <div className="flex gap-2">
        <img src={logo} alt="" width={40} className={`${isInv && `invert`}`} />
        <div className="">
          <h1 className="text-lg">{name}</h1>
          <h1 className="text-[12px]">v{version}</h1>
        </div>
      </div>
      <div className="absolute right-2 top-2 bg-gray-800 px-3 rounded-md text-sm">{category}</div>
      <div className={`absolute bg-black p-2 rounded-md right-0 -top-15 w-2/3 ${isDesc ? "" : "hidden"}`}>{desc}</div>
    </div>
  )
}

export default StackCard