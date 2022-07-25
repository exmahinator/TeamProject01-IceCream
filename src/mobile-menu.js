(() => {
  const mobileMenuBtn = document.querySelectorAll('[mobile-menu-button]');
  const mobileMenuWindow = document.querySelector('[mobile-menu]');

  mobileMenuBtn.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('mobile-is-open');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenuWindow.classList.toggle('mobile-is-open');
    })
  );
})();
