"use client";

import { createContext, useContext, useState } from "react";
import { stacks_avl } from "../../public/data/stack";

interface SearchContextValue {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredCards: { name: string; category: string; version: string; description: string; logo: string; }[];
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: any) {
  const [query, setQuery] = useState("");
  const filteredCards = stacks_avl.filter((card) => {
    const search = query.toLowerCase();

    return (
      card.name.toLowerCase().includes(search) ||
      card.category.toLowerCase().includes(search)
    );
  });

  return <SearchContext.Provider value={{query, setQuery, filteredCards}}>
    {children}
  </SearchContext.Provider>
}

export function useSearch(){
    return useContext(SearchContext)
}