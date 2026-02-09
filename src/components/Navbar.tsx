import { greatVibes } from "@/styles/fonts"
import Link from "next/link"

function Navbar() {
  return (
    <div className="p-5 flex items-center justify-between pl-10 pr-10 text-white">
        <Link href={"/"} className={`${greatVibes.className} text-5xl text-blue-500 cursor-pointer`}>first-commit</Link>
        <div className="flex gap-10">
            <Link href={"/explore"} className="cursor-pointer">EXPLORE</Link>
            <Link href={"/search"} className="cursor-pointer">SEARCH</Link>
            <Link href={"/errors"} className="cursor-pointer">ERRORS</Link>
        </div>
        <div>
            <button className="bg-[#edf2ef] px-4 py-1 rounded-3xl cursor-pointer text-black">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar