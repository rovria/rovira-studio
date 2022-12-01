//Project Card ONE - Animation 
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
//Project Card One - Category Label Animation
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
//Project Card One - Project Star Animation [Universal] 
var textWrapper = document.querySelector('.project_one_card_star')
$(document).ready(function () {
  $('.card_imgone').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})

//Project Card TWO - Animation 
var textWrapper = document.querySelector('.projecttwo_title')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgtwo').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projecttwo_title .letter',
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
        targets: '.projecttwo_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      })
    },
  )
})
//Project Card One - Category Label Animation
var textWrapper = document.querySelector('.project_two_label')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgtwo').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})
//Project Card One - Project Star Animation [Universal] 
var textWrapper = document.querySelector('.project_two_card_star')
$(document).ready(function () {
  $('.card_imgtwo').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})