"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">Início</Link>
        <div>Sobre</div>
        <Link href="/downloads">Downloads</Link>
      </div>
      <div className={styles.searchBar}>
        {toggleSearch && <input className={styles.searchInput} />}
        <img
          src="/images/search.svg"
          alt="ícone de busca"
          onClick={() => setToggleSearch(!toggleSearch)}
          className={styles.searchIcon}
        />
      </div>
    </div>
  );
}
