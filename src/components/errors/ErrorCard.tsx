interface Input {
  name: string;
  stack: string[];
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setShowSideBar?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ErrorCard({ name, stack, setActive, setShowSideBar }: Input) {
  return (
    <div
      className="w-full bg-[#0e22457d] p-2 rounded-lg cursor-pointer hover:bg-[#485b7ec5] transition-all"
      onClick={() => {
        if (setShowSideBar) {
          setShowSideBar(false);
        }
        (setActive(name), document.getElementById("main")?.scrollIntoView());
      }}
    >
      <h1 className="text-lg mb-3">{name}</h1>
      <div className="flex gap-3">
        {stack.map((s) => (
          <h1 className="bg-gray-700 px-2 rounded-full">{s}</h1>
        ))}
      </div>
    </div>
  );
}

export default ErrorCard;
