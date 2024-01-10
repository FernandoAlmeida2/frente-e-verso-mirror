"use client";

import techNotes from "@/app/lib/placeholder-data";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useIndex() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ query: `(max-width: 700px)` });

  function scrollToLeft() {
    if (currentIndex <= 0) return;
    if (isMobile) {
      setCurrentIndex((prev) => prev - 1);
      return;
    }

    if (techNotes.length - currentIndex < 3) setCurrentIndex(0);
    else setCurrentIndex((prev) => prev - 3);
  }

  function scrollToRight() {
    if (currentIndex >= techNotes.length) return;
    if(isMobile) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    if (techNotes.length - currentIndex < 3) setCurrentIndex(techNotes.length);
    else setCurrentIndex((prev) => prev + 3);
  }

  return {
    currentIndex,
    scrollToLeft,
    scrollToRight,
  };
}
