import { greatVibes } from "@/styles/fonts"

function Navbar() {
  return (
    <div className="p-5 flex items-center justify-between pl-10 pr-10">
        <div className={`${greatVibes.className} text-5xl text-blue-500 cursor-pointer`}>first-commit</div>
        <div className="flex gap-10">
            <button className="cursor-pointer">EXPLORE</button>
            <button className="cursor-pointer">SEARCH</button>
            <button className="cursor-pointer">ERRORS</button>
        </div>
        <div>
            <button className="bg-[#edf2ef] px-4 py-1 rounded-3xl cursor-pointer">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar