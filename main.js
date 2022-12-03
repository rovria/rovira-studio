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

//Project Card THREE - Animation 
var textWrapper = document.querySelector('.projectthree_title')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgthree').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectthree_title .letter',
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
        targets: '.projectthree_title .letter',
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
var textWrapper = document.querySelector('.project_three_label')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgthree').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})
//Project Card One - Project Star Animation [Universal] 
var textWrapper = document.querySelector('.project_three_card_star')
$(document).ready(function () {
  $('.card_imgthree').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})

//Project Card FOUR - Animation 
var textWrapper = document.querySelector('.projectfour_title')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgfour').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectfour_title .letter',
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
        targets: '.projectfour_title .letter',
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
var textWrapper = document.querySelector('.project_four_label')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
)

$(document).ready(function () {
  $('.card_imgfour').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})
//Project Card One - Project Star Animation [Universal] 
var textWrapper = document.querySelector('.project_four_card_star')
$(document).ready(function () {
  $('.card_imgfour').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      })
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      })
    },
  )
})


var cardOne = new hoverEffect({
  parent: document.querySelector('.card_imgone'),
  intensity: 0.5,
  image1: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636b600dcbddd7e05593a2ed_img_one.jpg',
  image2: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636b600fcbddd7022b93a316_img_two.jpg',
  displacementImage: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636b5e1c8c4c67634588db11_4.png'
});

var cardTwo = new hoverEffect({
  parent: document.querySelector('.card_imgtwo'),
  intensity: 0.5,
  image1: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636c0c4317441298dfe3eed3_Img_one-project.jpg',
  image2: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636c0c4515b522132c871fdb_Img_two-project.jpg',
  displacementImage: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636b5e1c8c4c67634588db11_4.png'
});


var cardThree = new hoverEffect({
  parent: document.querySelector('.card_imgthree'),
  intensity: 0.5,
  image1: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636c174f909e752a64ba294c_project_one_milly.jpg',
  image2: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636c175203bf370478a5e92b_project_two_milly.jpg',
  displacementImage: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636b5e1c8c4c67634588db11_4.png'
});

var cardFour = new hoverEffect({
  parent: document.querySelector('.card_imgfour'),
  intensity: 0.5,
  image1: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636c18a9158ad7790917f3d7_frisky_one_img.jpg',
  image2: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636c18a688cd421102111871_frisky_two_img.jpg',
  displacementImage: 'https://uploads-ssl.webflow.com/634e33e838bd6483829835be/636b5e1c8c4c67634588db11_4.png'
});