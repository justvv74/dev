const openBurger = document.querySelector('.header__menu-burger'),
      closeBurger = document.querySelector('.burger-menu__close-btn'),
      windowBurger = document.querySelector('.burger-menu');

openBurger.addEventListener('click', function() {
  windowBurger.classList.add('burger-menu_active')
});

closeBurger.addEventListener('click', function() {
  windowBurger.classList.remove('burger-menu_active')
});
