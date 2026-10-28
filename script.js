// Hero CTA helper: if a matching section has not been built yet, avoid jumping to nowhere.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) {
        event.preventDefault();
        console.info("Connect this hero link to your page section:", link.getAttribute("href"));
      }
    });
  });
});
