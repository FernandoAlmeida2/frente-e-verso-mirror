import { TechnicalNote } from "@/app/lib/definitions";
import styles from "./note.module.css";

type Props = {
  techNote: TechnicalNote;
};

export default function TechNote({ techNote }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>{techNote.imgPath}</div>
      <div className={styles.title}>{techNote.title}</div>
      <div className={styles.description}>{techNote.description}</div>
      <div className={styles.info}>
        ANO: {techNote.year} | ODS: {techNote.ods}
      </div>
    </div>
  );
}
