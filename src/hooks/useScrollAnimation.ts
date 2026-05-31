"use client";

import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver-backed visibility hook.
 *
 *  - Returns a stable `ref` to attach to any HTMLElement plus a monotonic
 *    `isVisible` boolean (once true, never returns to false).
 *  - Disconnects the observer on first intersection so subsequent scrolls
 *    don't re-trigger.
 *  - Honours `prefers-reduced-motion: reduce` by short-circuiting `isVisible`
 *    to true at mount, so animation-driven content renders in its final state
 *    immediately for users who request reduced motion.
 *  - SSR-safe: bails out early when `window` is undefined.
 */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  // Lazy initializer reads matchMedia once at mount. If the user prefers
  // reduced motion the hook returns visible=true without ever attaching an
  // IntersectionObserver. This avoids calling setState inside the effect
  // body (forbidden by react-hooks/set-state-in-effect under React 19).
  const [isVisible, setIsVisible] = useState<boolean>(prefersReducedMotion);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isVisible) return; // already visible (reduced motion or already seen)

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}
