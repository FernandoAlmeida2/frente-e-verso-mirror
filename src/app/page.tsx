"use client";

import TechNote from "@/components/TechNote/TechNote";
import techNotes from "./lib/placeholder-data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.presentation}>
        <img
          className={styles.logo}
          src="/logo.svg"
          alt="Logo Frente e Verso"
        />
        <div className={styles.description}>
          <div>
            Nonononon onononono nononono nononononono no nono nononono
            <br />
            nononononononononono. Nono nononononono nonononononono
            <br />
            nononono no nonononononono no nono nonononono nono.
          </div>
          <button className={styles.moreButton}>Saiba mais</button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <img
          src="/left_arrow.svg"
          alt="Seta esquerda"
          className={styles.arrow}
        />
        <div className={styles.content} style={{backgroundColor: pickColor}}>
          {techNotes.map((techNote, index) => (
            <TechNote techNote={techNote} key={index} />
          ))}
        </div>
        <img
          src="/right_arrow.svg"
          alt="Seta direita"
          className={styles.arrow}
        />
      </div>
    </main>
  );
}
