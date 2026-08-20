import { createRoot } from "react-dom/client";
import ScriptedLab from "./ScriptedLab";
import MoodLab from "./MoodLab";
import "./index.css";

const mount = () => {
  const lab = document.getElementById("lab-live-root");
  if (lab) {
    createRoot(lab).render(
      <ScriptedLab video={lab.dataset.video ?? "assets/video/orb-backdrop.mp4"} />
    );
  }
  const mood = document.getElementById("mood-live-root");
  if (mood) {
    createRoot(mood).render(
      <MoodLab bg={mood.dataset.bg ?? "assets/img/orb-bg-scene.webp"} />
    );
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount, { once: true });
} else {
  mount();
}
