"use client";

import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>Início</div>
        <div>Sobre</div>
        <div>Downloads</div>
      </div>
      <div className={styles.searchBar}>
        {toggleSearch && (
          <input className={styles.searchInput} />
        )}
        <img
            src="search.svg"
            alt="ícone de busca"
            onClick={() => setToggleSearch(!toggleSearch)}
            className={styles.searchIcon}
          />
      </div>
    </div>
  );
}
