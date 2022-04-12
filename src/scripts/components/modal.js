
  const modalOpen = document.querySelector('#open-modal'),
  modalClose = document.querySelector('#modal-close'),
  modalWindow = document.querySelector('#modal'),
  modalShadow = document.querySelector('#modal-shadow'),
  primaryWindow = document.querySelector('body');

modalOpen.addEventListener('click', function() {
modalWindow.classList.add('modal_visible')
primaryWindow.classList.add('body-noscroll')
})

modalClose.addEventListener('click', function() {
modalWindow.classList.remove('modal_visible')
primaryWindow.classList.remove('body-noscroll')
})

modalShadow.addEventListener('click', function() {
modalWindow.classList.remove('modal_visible')
primaryWindow.classList.remove('body-noscroll')
})
