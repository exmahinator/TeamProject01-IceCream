(() => {
  const btnBlurry = document.querySelector("[blurry-button]");
  const heroBlurry = document.querySelector("[blurry]");

  btnBlurry.addEventListener("click", () => {
    const expanded =
      btnBlurry.getAttribute("aria-expanded") === "true" || false;

    btnBlurry.classList.toggle("is-blurry");
    btnBlurry.setAttribute("aria-expanded", !expanded);

    heroBlurry.classList.toggle("is-blurry");
  });
})();