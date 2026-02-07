import { greatVibes, playwrite } from "@/styles/fonts"

function HeroText() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 flex justify-center flex-col items-center text-6xl font-bold text-blue-500 top-40 z-15 gap-5">
        <h1 className={greatVibes.className}>No More</h1>
        <h1 className={playwrite.className}>Starter Documentation</h1>
        <h1 className={playwrite.className}>We're here for you</h1>
    </div>
  )
}

export default HeroText