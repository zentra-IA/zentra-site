"use client";

import { useEffect } from "react";

/** Lightweight enhancement. Content remains visible if JS is disabled. */
export default function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-z-reveal]"));
    if (!nodes.length || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add("z-js");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("z-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -35px 0px", threshold: 0.08 });
    nodes.forEach(node => observer.observe(node));
    return () => {observer.disconnect(); document.documentElement.classList.remove("z-js");};
  }, []);
  return null;
}
