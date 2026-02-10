import HalfCircle from "./HalfCircle";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import PinPoint from "./PinPoint";

function Hero() {
  return (
    <div className="flex-1">
      <HeroText />
      <div className="flex w-[100vw] justify-around mt-10">
        <div className="">
          <div className="rotate-[15deg]">
            <PinPoint color="4287f5" text="React" />
          </div>
          <div className="transform -rotate-[15deg]">
            <PinPoint color="bda71c" text="Next" />
          </div>
        </div>
        <div className="">
          <div className="-rotate-[15deg]">
            <PinPoint color="14fc75" text="Prisma" />
          </div>
          <div className="rotate-[15deg]">
            <PinPoint color="eb5df5" text="everything" />
          </div>
        </div>
      </div>
      {/* <HeroImg /> */}
      <HalfCircle />
    </div>
  );
}

export default Hero;
