"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useToggleSearch } from "@/hooks/useToggleSearch";

export default function Header() {
  const toggleState = useToggleSearch();

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">Início</Link>
        <div>Sobre</div>
        <Link href="/downloads">Downloads</Link>
      </div>
      <div className={styles.searchBar}>
        {toggleState.toggleSearch && <input className={styles.searchInput} />}
        <img
          src="/images/search.svg"
          alt="ícone de busca"
          onClick={toggleState.toggle}
          className={styles.searchIcon}
        />
      </div>
    </div>
  );
}
