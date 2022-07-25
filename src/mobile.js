(() => {
  const menuBtnRef = document.querySelectorAll('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open');
    })
  );
})();



(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-1]");
  const mobileMenuRef = document.querySelector("[data-menu-1]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open-1");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open-1");
  });
})();
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-2]");
  const mobileMenuRef = document.querySelector("[data-menu-2]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open-2");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open-2");
  });
})();
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-3]");
  const mobileMenuRef = document.querySelector("[data-menu-3]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open-3");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open-3");
  });
})();

