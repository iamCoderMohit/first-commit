import { greatVibes, playwrite, poppins } from "@/styles/fonts"

function HeroText() {
  return (
    <div className={`fixed left-1/2 -translate-x-1/2 flex justify-center flex-col items-center md:text-6xl text-4xl font-bold text-blue-500 w-full top-1/2 -translate-y-1/2 z-20 gap-5 ${poppins.className}`}>
        <h1 className="text-center">No More</h1>
        <h1 className={`text-center text-green-400`}>Starter Documentation</h1>
        <h1 className={`text-center text-green-100`}>We're here for you</h1>
    </div>
  )
}

export default HeroText