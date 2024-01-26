"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useToggleSearch } from "@/hooks/useToggleSearch";
import { ChangeEvent, useContext, useState } from "react";
import SearchContext from "@/contexts/SearchContext";

export default function Header() {
  const toggleState = useToggleSearch();
  const [valueSearch, setValueSearch] = useState("");
  const searchState = useContext(SearchContext);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setValueSearch(e.target.value);
    searchState?.searchState.filterMatches(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">Início</Link>
        <div>Sobre</div>
        <Link href="/downloads">Downloads</Link>
        <Link href="/ficha_tecnica">Ficha Técnica</Link>
        <Link href="/fale_conosco">Fale Conosco</Link>
      </div>
      <label className={styles.searchBar}>
        {toggleState.toggleSearch && (
          <input
            className={styles.searchInput}
            value={valueSearch}
            onChange={handleInput}
          />
        )}
        <img
          src="/images/search.svg"
          alt="ícone de busca"
          onClick={toggleState.toggle}
          className={styles.searchIcon}
        />
      </label>
    </div>
  );
}
