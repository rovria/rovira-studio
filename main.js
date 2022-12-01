var textWrapper = document.querySelector('.projectone_title')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgone').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectone_title .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectone_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      })
    },
  )
})
// Testing Category label animation
var textWrapper = document.querySelector('.project_one_label')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgone').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})
// Testing Category label animation
var textWrapper = document.querySelector('.project_card_star')
$(document).ready(function () {
  $('.card_imgone').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})
