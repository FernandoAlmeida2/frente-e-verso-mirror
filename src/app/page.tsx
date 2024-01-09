"use client";

import TechNote from "@/components/TechNote/TechNote";
import techNotes from "./lib/placeholder-data";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function scrollToLeft() {
    if (currentIndex <= 0) return;

    if (techNotes.length - currentIndex < 3) setCurrentIndex(0);
    else setCurrentIndex((prev) => prev - 3);
  }

  function scrollToRight() {
    if (currentIndex >= techNotes.length) return;

    if (techNotes.length - currentIndex < 3) setCurrentIndex(techNotes.length);
    else setCurrentIndex((prev) => prev + 3);
  }

  return (
    <main className={styles.main}>
      <div className={styles.presentation}>
        <img
          className={styles.logo}
          src="/images/logo.svg"
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
          src="/images/left_arrow.svg"
          alt="Seta esquerda"
          className={styles.arrow}
          onClick={() => scrollToLeft()}
        />
        <div className={styles.content}>
          {techNotes.map((techNote, index) => (
            <TechNote
              key={index}
              techNote={techNote}
              currentIndex={currentIndex}
              noteIndex={index}
            />
          ))}
        </div>
        <img
          src="/images/right_arrow.svg"
          alt="Seta direita"
          className={styles.arrow}
          onClick={() => scrollToRight()}
        />
      </div>
    </main>
  );
}
