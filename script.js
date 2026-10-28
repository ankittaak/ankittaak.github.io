(() => {
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
    toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  });
  navLinks.forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
  }));

  // Reveal cards when they enter the viewport. Respect the reduced-motion setting.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    revealItems.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min((index % 5) * 65, 260)}ms`;
      observer.observe(el);
    });
  } else {
    revealItems.forEach(el => el.classList.add("is-visible"));
  }

  // Scroll progress indicator
  const progress = document.querySelector(".scroll-progress");
  let ticking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();

  // Set current year in footer.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight current navigation section while scrolling.
  const sectionIds = ["about", "services", "projects", "contact"];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();
