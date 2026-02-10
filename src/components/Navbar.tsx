"use client"

import { useSearch } from "@/context/SearchContext"
import { greatVibes } from "@/styles/fonts"
import Link from "next/link"

function Navbar() {
  const {query, setQuery}: any = useSearch()

  return (
    <div className="p-5 flex items-center justify-between md:pl-10 md:pr-10 text-white text-sm md:text-md font-bold">
        <Link href={"/"} className={`${greatVibes.className} md:text-5xl text-3xl text-blue-500 cursor-pointer`}>first-commit</Link>
        <div className="flex md:gap-10 gap-5">
            <Link href={"/explore"} className="cursor-pointer">EXPLORE</Link>
            <Link href={"/errors"} className="cursor-pointer">ERRORS</Link>
            <input type="text" className="md:block hidden bg-transparent border border-gray-500 rounded-md pl-3" placeholder="search for a stack..." 
            onChange={((e) => setQuery(e.target.value))}
            />
        </div>
    </div>
  )
}

export default Navbar