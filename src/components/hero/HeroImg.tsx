import char from "../../../public/hi.png"

function HeroImg() {
  return (
    <div className="fixed z-10 left-1/2 -translate-x-1/2 bottom-0">
        <img src={char.src} width={600} alt="" />
    </div>
  )
}

export default HeroImg