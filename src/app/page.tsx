"use client"

import TechNote from "@/components/TechNote/TechNote";
import techNotes from "./lib/placeholder-data";
import styles from "./page.module.css";
import { useIndex } from "@/hooks/useIndex";

export default function Home() {
  const currentIndexState = useIndex();

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
            Nonononon onononono nononono nononononono no nono nononono nononononononononono. Nono nononononono nonononononono nononono no nonononononono no nono nonononono nono.
          </div>
          <button className={styles.moreButton}>Saiba Mais</button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        {currentIndexState.currentIndex !== 0 && <img
          src="/images/left_arrow.svg"
          alt="Seta esquerda"
          className={styles.arrowLeft}
          onClick={() => currentIndexState.scrollToLeft()}
        />}
        <div className={styles.content}>
          {techNotes.map((techNote, index) => (
            <TechNote
              key={index}
              techNote={techNote}
              currentIndex={currentIndexState.currentIndex}
              noteIndex={index}
            />
          ))}
        </div>
        {currentIndexState.currentIndex !== (techNotes.length - 1) && <img
          src="/images/right_arrow.svg"
          alt="Seta direita"
          className={styles.arrowRight}
          onClick={() => currentIndexState.scrollToRight()}
        />}
      </div>
    </main>
  );
}
