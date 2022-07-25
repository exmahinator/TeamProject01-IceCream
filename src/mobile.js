(() => {
  const menuBtnRef = document.querySelectorAll('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('-');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open');
    })
  );
})();
(() => {
  const menuBtnRef = document.querySelectorAll('[data-menu-button-1]');
  const mobileMenuRef = document.querySelector('[data-menu-1]');

  menuBtnRef.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('hop');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open-1');
    })
  );
})();
(() => {
  const menuBtnRef = document.querySelectorAll('[data-menu-button-2]');
  const mobileMenuRef = document.querySelector('[data-menu-2]');

  menuBtnRef.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('hop');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open-2');
    })
  );
})();
(() => {
  const menuBtnRef = document.querySelectorAll('[data-menu-button-3]');
  const mobileMenuRef = document.querySelector('[data-menu-3]');

  menuBtnRef.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('hop');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open-3');
    })
  );
})();

