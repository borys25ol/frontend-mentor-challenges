function setClickEvent() {
  const cardFooter = document.querySelector('.card__footer')
  const cardShare = document.querySelector('.card__share')
  const cardAuthor = document.querySelector('.card__author')

  const shareIcon = document.querySelector('.card__share-icon')

  shareIcon.addEventListener('click', () => {
    cardFooter.classList.toggle('card__footer--active')
    shareIcon.classList.toggle('card__share-icon--active')
    cardShare.classList.toggle('disabled')
    cardAuthor.classList.toggle('disabled')
  })
}

window.addEventListener('DOMContentLoaded', () => {
  setClickEvent()
})
