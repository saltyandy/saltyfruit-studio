import Lenis from "lenis";
import { createRoot } from "react-dom/client";

import { Rings3 } from "./rings3";
import { setLenis } from "./smooth-scroll";
import "./styles.css";

/* Same glide as the V3 landing page ("a tiny bit of lenis") — the whole
   case page scrolls through it, and the rings chapters need the shared
   instance for their anchor locks + wheel snap. */
const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
setLenis(lenis);
const raf = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

const mount = document.getElementById("rings-explainer");
if (mount) createRoot(mount).render(<Rings3 />);
