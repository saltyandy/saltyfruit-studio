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

// Landing entrance: a hairline loader bar fills as each tile's film gets
// ready, then the sheet fades, the about text pops in and the feed cascades.
if (body.classList.contains("home")) {
  body.classList.add("home-enter");

  const fill = document.querySelector(".loader-fill");
  const pieces = [...document.querySelectorAll(".feed .piece")];

  let ready = 0;
  const advance = () => {
    ready += 1;
    if (fill) fill.style.transform = `scaleX(${ready / pieces.length})`;
  };

  const mediaReady = (piece) =>
    new Promise((done) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        advance();
        done();
      };
      const film = piece.querySelector("video");
      if (!film || film.readyState >= 2) return finish();
      film.addEventListener("loadeddata", finish, { once: true });
      setTimeout(finish, 2500); // don't hold the reveal hostage to a slow film
    });

  Promise.all(pieces.map(mediaReady)).then(() => {
    // give the bar a beat of life even on a warm cache
    const wait = Math.max(0, 850 - performance.now());
    setTimeout(() => {
      body.classList.add("loaded");
      setTimeout(() => body.classList.add("text-in"), 200);
      setTimeout(() => {
        pieces.forEach((p, i) =>
          setTimeout(() => p.classList.add("is-in"), i * 130)
        );
      }, 550);
    }, wait);
  });
}

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

// Autoplay insurance for case-media films: Chrome (and Safari) can skip the
// initial autoplay of an offscreen <video><source>…</video> and never retry.
// Nudge any still-paused film the moment its card scrolls into view.
const caseFilms = document.querySelectorAll(".case .media video[autoplay]");

if (caseFilms.length) {
  const nudge = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting && e.target.paused) e.target.play().catch(() => {});
      }
    },
    { threshold: 0.15 }
  );
  caseFilms.forEach((v) => nudge.observe(v));
}

// Before/after compare: drag (or arrow-key) the handle to wipe between the
// as-is and Aurora screens. --reveal drives both the clip and the handle.
const compare = document.querySelector(".compare");

if (compare) {
  const setReveal = (pct) => {
    const clamped = Math.min(100, Math.max(0, pct));
    compare.style.setProperty("--reveal", clamped.toFixed(2) + "%");
    compare.setAttribute("aria-valuenow", String(Math.round(clamped)));
  };
  const revealAt = (clientX) => {
    const r = compare.getBoundingClientRect();
    setReveal(((clientX - r.left) / r.width) * 100);
  };

  compare.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    compare.setPointerCapture(e.pointerId);
    revealAt(e.clientX);
  });
  compare.addEventListener("pointermove", (e) => {
    if (e.buttons) revealAt(e.clientX);
  });
  compare.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const now = parseFloat(getComputedStyle(compare).getPropertyValue("--reveal"));
    setReveal(now + (e.key === "ArrowRight" ? 4 : -4));
  });
}
