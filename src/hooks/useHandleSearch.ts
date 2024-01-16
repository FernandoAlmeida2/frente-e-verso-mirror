"use client";

import techNotes from "@/app/lib/placeholder-data";
import { useState } from "react";

function normalizeString(word: string) {
  return word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function useHandleSearch() {
  const [techNotesList, setTechNotesList] = useState(techNotes);

  function filterMatches(word: string) {
    if (word.length > 2) {
      setTechNotesList(
        techNotesList.filter((techNote) =>
          normalizeString(techNote.title).includes(normalizeString(word))
        )
      );
    } else if (techNotesList.length !== techNotes.length) {
      setTechNotesList(techNotes);
    }
  }

  return {
    techNotesList,
    filterMatches,
  };
}
