"use client";

import Express from "@/components/explore/Express";
import Git from "@/components/explore/Git";
import Github from "@/components/explore/Github";
import Jwt from "@/components/explore/Jwt";
import Mongo from "@/components/explore/Mongo";
import Next from "@/components/explore/Next";
import Node from "@/components/explore/Node";
import OnProg from "@/components/explore/OnProg";
import Postgres from "@/components/explore/Postgres";
import React from "@/components/explore/React";
import StackCard from "@/components/explore/StackCard";
import Tailwind from "@/components/explore/Tailwind";
import { stacks_avl } from "@/data/stack";
import { useState } from "react";

function Page() {
  const [active, setActive] = useState("React");

  type ComponentMap = {
    //@ts-ignore
  [key: string]: () => JSX.Element;
};
  const components: ComponentMap = {
    React: React,
    "Next.js": Next,
    "Tailwind CSS": Tailwind,
    "Node.js": Node,
    "Express.js": Express,
    MongoDB: Mongo,
    PostgreSQL: Postgres,
    JWT: Jwt,
    Git: Git,
    GitHub: Github,
    NestJS: OnProg,
    Redis: OnProg,
    NextAuth: OnProg,
    Docker: OnProg,
    Vercel: OnProg,
  };
  const ActiveComp = components[active];
  return (
    <div className="flex w-full flex-1 p-5 gap-5 text-white">
      <div className="bg-[#040a12] w-1/4 p-3 rounded-md">
        <h1 className="text-3xl font-bold">Stacks</h1>
        <div className="mt-5 flex flex-col gap-3">
          {stacks_avl.map((stack, ind) => (
            <StackCard
              name={stack.name}
              logo={stack.logo}
              desc={stack.description}
              category={stack.category}
              version={stack.version}
              isInv={stack.name === "Express.js"}
              setActive={setActive}
              key={ind}
            />
          ))}
        </div>
      </div>
      <div className="w-3/4 h-full bg-[#040a12] p-3 rounded-md">
        <h1>hey</h1>
        <ActiveComp />
      </div>
    </div>
  );
}

export default Page;
