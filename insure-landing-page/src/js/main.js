const burgerBtn = document.querySelector('.menu__button')
const burgerLines = burgerBtn.querySelector('span')
const body = document.querySelector('body')
const mobileNav = document.querySelector('.menu__nav')

burgerBtn.addEventListener('click', e => {
  e.preventDefault()
  window.scrollTo(0, 0)
  body.classList.toggle('hide-scroll')
  mobileNav.classList.toggle('menu-active')
  burgerLines.classList.toggle('menu-active')
})
