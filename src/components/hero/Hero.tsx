import HalfCircle from "./HalfCircle";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import PinPoint from "./PinPoint";

function Hero() {
  return (
    <div className="flex-1">
      <HeroText />
      <div className="flex justify-around mt-10">
        <div className="">
          <div className="rotate-5">
            <PinPoint color="4287f5" text="React" />
          </div>
          <div className="-rotate-5">
            <PinPoint color="bda71c" text="Next" />
          </div>
        </div>
        <div className="">
          <div className="-rotate-5">
            <PinPoint color="14fc75" text="Prisma" />
          </div>
          <div className="rotate-5">
            <PinPoint color="eb5df5" text="everything" />
          </div>
        </div>
      </div>
      <HeroImg />
      <HalfCircle />
    </div>
  );
}

export default Hero;
