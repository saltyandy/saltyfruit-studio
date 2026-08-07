// Menu panel + takeover sheet behavior, shared by case-study and about pages.

const body = document.body;

const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuBackdrop = document.querySelector(".menu-backdrop");

menuToggle?.addEventListener("click", () => body.classList.add("menu-open"));
menuClose?.addEventListener("click", () => body.classList.remove("menu-open"));
menuBackdrop?.addEventListener("click", () => body.classList.remove("menu-open"));

const readMore = document.querySelector(".read-more");
const sheet = document.querySelector(".sheet");
const sheetClose = document.querySelector(".sheet-close");

readMore?.addEventListener("click", () => {
  body.classList.add("sheet-open");
  sheet.scrollTop = 0;
  sheetClose?.focus();
});

sheetClose?.addEventListener("click", () => {
  body.classList.remove("sheet-open");
  readMore?.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (body.classList.contains("menu-open")) body.classList.remove("menu-open");
  else if (body.classList.contains("sheet-open")) body.classList.remove("sheet-open");
});

// Golf Guru live demo: scale the fixed 900×1125 iframe to the slot so the
// app keeps its desktop phone frame at tile sizes.
const ggPhone = document.querySelector(".gg-phone");

if (ggPhone) {
  const fit = () =>
    ggPhone.style.setProperty("--gg-scale", ggPhone.clientWidth / 900);
  new ResizeObserver(fit).observe(ggPhone);
  fit();
}

// Orb session-flow diagram: scale the fixed 646×807 stage to the slot,
// reveal the steps progressively once the slot scrolls into view.
const orbFlow = document.querySelector(".orb-flow");

if (orbFlow) {
  const fit = () =>
    orbFlow.style.setProperty("--orb-scale", orbFlow.clientWidth / 646);
  new ResizeObserver(fit).observe(orbFlow);
  fit();

  new IntersectionObserver(
    (entries, observer) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      orbFlow.classList.add("is-live");
      observer.disconnect();
    },
    { threshold: 0.35 }
  ).observe(orbFlow);
}
