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
        noteRef!.current!.scrollIntoView({ block: 'nearest', behavior: "smooth", inline: 
        "start" });
      }

  return (
    <div className={styles.container} ref={noteRef}>
      <Link className={styles.image} href={`/report?id=${techNote.id}`}>{techNote.imgPath}</Link>
      <div className={styles.title}>{techNote.title}</div>
      <div className={styles.description}>{techNote.description}</div>
      <div className={styles.info}>
        ANO: {techNote.year} | ODS: {techNote.ods}
      </div>
    </div>
  );
}
