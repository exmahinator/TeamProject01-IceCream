(() => {
  const orderBtn = document.querySelectorAll('[order-button]');
  const orderMenu = document.querySelector('[order-menu]');

  orderBtn.forEach(orderBtn =>
    orderBtn.addEventListener('click', () => {
      const expanded =
        orderBtn.getAttribute('aria-expanded') === 'true' || false;

      orderBtn.classList.toggle('order-open');
      orderBtn.setAttribute('aria-expanded', !expanded);

      orderMenu.classList.toggle('order-open');
    })
  );
})();
