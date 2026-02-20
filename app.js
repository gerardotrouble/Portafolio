(() => {
  const $ = (s) => document.querySelector(s);

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const root = document.documentElement;
  const themeToggle = $("#themeToggle");
  const iconEl = themeToggle?.querySelector(".theme-toggle__icon");

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    if (isLight) root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");

    themeToggle?.setAttribute("aria-pressed", String(isLight));
    themeToggle?.setAttribute("aria-label", isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
    if (iconEl) iconEl.textContent = isLight ? "☀️" : "🌙";
  };

  const saved = localStorage.getItem("theme");
  applyTheme(saved === "light" ? "light" : "dark");

  themeToggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });

  const navToggle = $(".nav__toggle");
  const navMenu = $("#navMenu");

  const closeMenu = () => {
    navMenu?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  };

  navToggle?.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navMenu?.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
