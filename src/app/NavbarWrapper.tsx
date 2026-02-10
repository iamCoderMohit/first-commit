"use client";

import { useState } from "react";
import { stacks_avl } from "../../public/data/stack";
import Navbar from "@/components/Navbar";
import { SearchProvider } from "@/context/SearchContext";

function NavbarWrapper({ children }: {children: any}) {


  return (
    <SearchProvider>
      <Navbar />
      <main className="flex-1 flex" id="main">
        {children}
      </main>
    </SearchProvider>
  );
}

export default NavbarWrapper;
