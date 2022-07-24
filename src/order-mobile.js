(() => {
  const orderMobileBtn = document.querySelector("[order-mobile-btn]");
  const orderMobileMenu = document.querySelector("[order-mobile-menu]");

  orderMobileBtn.addEventListener("click", () => {
    const expanded =
      orderMobileBtn.getAttribute("aria-expanded") === "true" || false;

    orderMobileBtn.classList.toggle("order-mobile-open");
    orderMobileBtn.setAttribute("aria-expanded", !expanded);

    orderMobileMenu.classList.toggle("order-mobile-open");
  });
})();