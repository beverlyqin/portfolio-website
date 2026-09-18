"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = containerRef.current?.querySelectorAll<HTMLElement>(
      "main h1, main h2, main h3, main h4, main p, main li, main figcaption"
    );
    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}
