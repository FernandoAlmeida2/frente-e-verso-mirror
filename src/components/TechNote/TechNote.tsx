"use client";

import { TechnicalNote } from "@/app/lib/definitions";
import styles from "./note.module.css";
import { useRef } from "react";
import Link from "next/link";

type Props = {
  techNote: TechnicalNote;
  noteIndex: number;
  currentIndex: number;
};

export default function TechNote({ techNote, noteIndex, currentIndex }: Props) {
  const noteRef = useRef<null | HTMLDivElement>(null);

  if (noteIndex === currentIndex && noteRef.current) {
    noteRef!.current!.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <div ref={noteRef}>
      {/* <img
          src={`/images/covers/${techNote.imgPath}`}
          alt="Capa Frente e Verso"
          className={styles.coverImg}
        /> */}
      <Link href={`/nota_tecnica?id=${techNote.id}`} className={styles.container}>
        <div className={styles.title}>{techNote.title}</div>
        <div className={styles.info}>
          {techNote.year}
          <img
            src={`/images/logos_ods/${techNote.ods}`}
            alt="Capa Frente e Verso"
            className={styles.odsImg}
          />
        </div>
      </Link>
    </div>
  );
}
