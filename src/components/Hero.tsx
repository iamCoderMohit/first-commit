import HalfCircle from "./HalfCircle"
import HeroImg from "./HeroImg"
import HeroText from "./HeroText"
import PinPoint from "./PinPoint"

function Hero() {
  return (
    <div className="flex-1">
      <HeroText />
      <PinPoint color="4287f5" text="sample text" />
      <PinPoint color="4287f5" text="sample text" />
      <HeroImg />
      <HalfCircle />
    </div>
  )
}

export default Hero