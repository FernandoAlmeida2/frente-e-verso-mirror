"use client";

import TechNote from "@/components/TechNote/TechNote";
import techNotes from "./lib/placeholder-data";
import styles from "./page.module.css";
import { useIndex } from "@/hooks/useIndex";
import { useContext } from "react";
import SearchContext from "@/contexts/SearchContext";

export default function Home() {
  const currentIndexState = useIndex();
  const searchState = useContext(SearchContext);
  const categoryList = techNotes
    .map((technote) => technote.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <main className={styles.main}>
      {searchState?.searchState.techNotesList.length !== 0 && (
        <div className={styles.presentation}>
          <div className={styles.description}>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus, lectus ac consectetur 
            mattis, elit ante condimentum augue, ac tempor quam turpis a urna. Vestibulum ante ipsum primis 
            in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vitae ornare mi, sit amet 
            venenatis arcu.
            </div>
            <button className={styles.moreButton}>Saiba Mais</button>
          </div>
        </div>
      )}
      {searchState?.searchState.techNotesList.length !== 0 && (
        <div className={styles.contentContainer}>
          {/* {currentIndexState.currentIndex !== 0 &&
            searchState?.searchState.techNotesList.length !== 1 && (
              <img
                src="/images/left_arrow.svg"
                alt="Seta esquerda"
                className={styles.arrowLeft}
                onClick={() => currentIndexState.scrollToLeft()}
              />
            )} */}
          {categoryList.map((category, index) => (
            <div className={styles.contentCol} key={index}>
              <div>{category}</div>
              {searchState?.searchState.techNotesList
                .filter((techNote) => techNote.category === category)
                .map((techNote, index) => (
                  <TechNote
                    key={index}
                    techNote={techNote}
                    currentIndex={currentIndexState.currentIndex}
                    noteIndex={index}
                  />
                ))}
            </div>
          ))}
          {/* {currentIndexState.currentIndex < techNotes.length - 3 &&
            searchState?.searchState.techNotesList.length !== 1 && (
              <img
                src="/images/right_arrow.svg"
                alt="Seta direita"
                className={styles.arrowRight}
                onClick={() => currentIndexState.scrollToRight()}
              />
            )} */}
        </div>
      )}
      {
        searchState?.searchState.techNotesList.length === 0 && (
            <div className={styles.description}>
                Nenhum registro encontrado!
            </div>
        )
      }
    </main>
  );
}
