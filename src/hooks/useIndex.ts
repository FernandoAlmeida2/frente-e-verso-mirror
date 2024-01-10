"use client";

import techNotes from "@/app/lib/placeholder-data";
import { useState } from "react";

export function useIndex() {
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

  return {
    currentIndex,
    scrollToLeft,
    scrollToRight,
  };
}
