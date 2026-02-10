"use client";

import ErrorCard from "@/components/errors/ErrorCard";
import { errors } from "../../../public/data/error";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

function page() {
  const [active, setActive] = useState("app not starting");
  const [content, setContent] = useState("");

  const components : {[key: string]: string} = {
    "app not starting": "one",
    "module not found": "two",
    "hydration failed": "three",
    "port already in use": "four",
    "cannot read property of undefined": "five",
    "useState is not defined": "construction",
    "CORS policy error": "construction",
    "environment variables not working": "construction",
    "API route returning 404": "construction",
    "build failing": "construction",
  };

  const file = components[active];
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    fetch(`/data/error/${file}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [file]);

    useEffect(() => {
    document.body.style.overflow = showSideBar ? "hidden" : "auto";
  }, [showSideBar]);

  return (
    <div className="flex md:flex-row flex-col w-full flex-1 p-5 gap-5 text-white">
      <div
        className="md:hidden text-white pl-3 cursor-pointer"
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        <div className="text-2xl">
          <GoSidebarCollapse />
        </div>
      </div>
      <div
        className={`bg-[#040a12] md:w-1/4 p-3 rounded-md md:static w-3/4 fixed top-0 bottom-0 left-0 overflow-y-auto no-scrollbar transform transition-transform duration-300 ${showSideBar ? "translate-x-0" : "-translate-x-[100vw]"} md:translate-x-0`}
      >
          <div className="flex justify-between items-center text-2xl cursor-pointer">
            <h1 className="text-3xl font-bold">Common Errors</h1>
            <div
              className="md:hidden"
              onClick={() => setShowSideBar((prev) => !prev)}
            >
              <GoSidebarExpand />
            </div>
          </div>
        <div className="mt-5 flex flex-col gap-3">
          {errors.map((err) => (
            <ErrorCard
              name={err.name}
              stack={err.stack}
              setActive={setActive}
              setShowSideBar={setShowSideBar}
            />
          ))}
        </div>
      </div>
      <div className="md:w-3/4 h-full bg-[#040a12] p-3 rounded-md">
        <div className="prose prose-invert max-w-none">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export default page;
