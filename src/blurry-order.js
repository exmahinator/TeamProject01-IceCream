(() => {
  const btnOrderBlurry = document.querySelector("[blurry-order-button]");
  const heroOrderBlurry = document.querySelector("[blurry-order]");

  btnOrderBlurry.addEventListener("click", () => {
    const expanded =
      btnOrderBlurry.getAttribute("aria-expanded") === "true" || false;

    btnOrderBlurry.classList.toggle("order-blurry");
    btnOrderBlurry.setAttribute("aria-expanded", !expanded);

    heroOrderBlurry.classList.toggle("order-blurry");
  });
})();