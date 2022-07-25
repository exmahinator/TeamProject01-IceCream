(() => {
  const mobileBtn = document.querySelectorAll('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-menu]');

  mobileBtn.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('mobile-open');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenu.classList.toggle('mobile-open');
    })
  );
})();
