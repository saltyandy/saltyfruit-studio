import type Lenis from "lenis";

/* Stand-in for the landing page's homepage-v3/smooth-scroll — same
   contract (a shared Lenis instance the rings chapters can pause for
   their anchor locks), minus the GSAP ticker the portfolio doesn't
   need. main.tsx creates the instance and registers it here. */
let activeLenis: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  activeLenis = lenis;
}

export function getLenis(): Lenis | null {
  return activeLenis;
}
