import { playfair } from "@/styles/fonts";

interface Input{
    color: string;
    text: string
}

function PinPoint({color, text}: Input) {
  return (  
    <div className={`w-fit px-5 rounded-2xl py-1 text-black ${playfair.className} font-bold flex justify-around items-center gap-3`}
    style={{backgroundColor: `#${color}`}}
    >
        <h1>{text}</h1>
        <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
  )
}

export default PinPoint