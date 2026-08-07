import { createRoot } from "react-dom/client";
import ScriptedLab from "./ScriptedLab";
import "./index.css";

const mount = () => {
  const root = document.getElementById("lab-live-root");
  if (!root) return;
  createRoot(root).render(
    <ScriptedLab video={root.dataset.video ?? "assets/video/orb-backdrop.mp4"} />
  );
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount, { once: true });
} else {
  mount();
}
