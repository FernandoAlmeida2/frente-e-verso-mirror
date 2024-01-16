"use client";

import { TechnicalNote } from "@/app/lib/definitions";
import { useHandleSearch } from "@/hooks/useHandleSearch";
import { createContext } from "react";

type SearchContextType = {
  searchState: {
    techNotesList: TechnicalNote[];
    filterMatches: Function;
  };
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;

type SearchProviderProps = { children: React.ReactNode };

export function SearchProvider({ children }: SearchProviderProps) {
  const searchState = useHandleSearch();

  return (
    <SearchContext.Provider value={{ searchState }}>
      {children}
    </SearchContext.Provider>
  );
}
