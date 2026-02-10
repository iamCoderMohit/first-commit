"use client";

import StackCard from "@/components/explore/StackCard";
import { stacks_avl } from "../../../public/data/stack";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useSearch } from "@/context/SearchContext";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

function Page() {
  const [active, setActive] = useState("React");
  const [content, setContent] = useState("");

  const components : {[key: string]: string} = {
    React: "react",
    "Next.js": "next",
    "Tailwind CSS": "tailwind",
    "Node.js": "node",
    "Express.js": "express",
    NestJS: "construction",
    MongoDB: "construction",
    PostgreSQL: "construction",
    Redis: "construction",
    JWT: "construction",
    NextAuth: "construction",
    Docker: "construction",
    Vercel: "construction",
    Git: "construction",
    GitHub: "construction",
  };
  const file = components[active];

  useEffect(() => {
    fetch(`/data/explore/${file}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [file]);

  const { filteredCards, query, setQuery }: any = useSearch();
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showSideBar ? "hidden" : "auto";
  }, [showSideBar]);

  return (
    <>
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
            <h1 className="text-3xl font-bold">Stacks</h1>
            <div
              className="md:hidden"
              onClick={() => setShowSideBar((prev) => !prev)}
            >
              <GoSidebarExpand />
            </div>
          </div>
          <input
            type="text"
            className="md:hidden block mt-5 w-full bg-transparent border border-gray-500 rounded-md pl-3"
            placeholder="search for a stack..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="mt-5 flex flex-col gap-3">
            {!query ? (
              stacks_avl.map((stack, ind) => (
                <StackCard
                  name={stack.name}
                  logo={stack.logo}
                  desc={stack.description}
                  category={stack.category}
                  version={stack.version}
                  isInv={stack.name === "Express.js"}
                  setActive={setActive}
                  setShowSideBar={setShowSideBar}
                  key={ind}
                />
              ))
            ) : filteredCards.length === 0 ? (
              <i>search query doesn't match any stack!</i>
            ) : (
              filteredCards.map((stack: any, ind: any) => (
                <StackCard
                  name={stack.name}
                  logo={stack.logo}
                  desc={stack.description}
                  category={stack.category}
                  version={stack.version}
                  isInv={stack.name === "Express.js"}
                  setActive={setActive}
                  setShowSideBar={setShowSideBar}
                  key={ind}
                />
              ))
            )}
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
    </>
  );
}

export default Page;
