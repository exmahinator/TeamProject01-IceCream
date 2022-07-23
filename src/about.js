(() => {
  const aboutBtnRef = document.querySelector("[about-button]");
  const aboutMenuRef = document.querySelector("[about-menu]");

  aboutBtnRef.addEventListener("click", () => {
    const expanded =
      aboutBtnRef.getAttribute("aria-expanded") === "true" || false;

    aboutBtnRef.classList.toggle("about-open");
    aboutBtnRef.setAttribute("aria-expanded", !expanded);

    aboutMenuRef.classList.toggle("about-open");
  });
})();