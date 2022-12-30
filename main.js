//Project Card ONE - Animation
var textWrapper = document.querySelector('.projectone_title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

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
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectone_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
    }
  );
});
//Project Card One - Category Label Animation
var textWrapper = document.querySelector('.project_one_label');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgone').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});
//Project Card One - Project Star Animation [Universal]
var textWrapper = document.querySelector('.project_one_card_star');
$(document).ready(function () {
  $('.card_imgone').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_one_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});

//Project Card TWO - Animation
var textWrapper = document.querySelector('.projecttwo_title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

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
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projecttwo_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
    }
  );
});
//Project Card One - Category Label Animation
var textWrapper = document.querySelector('.project_two_label');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgtwo').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});
//Project Card One - Project Star Animation [Universal]
var textWrapper = document.querySelector('.project_two_card_star');
$(document).ready(function () {
  $('.card_imgtwo').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_two_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});

//Project Card THREE - Animation
var textWrapper = document.querySelector('.projectthree_title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

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
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectthree_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
    }
  );
});
//Project Card One - Category Label Animation
var textWrapper = document.querySelector('.project_three_label');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgthree').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});
//Project Card One - Project Star Animation [Universal]
var textWrapper = document.querySelector('.project_three_card_star');
$(document).ready(function () {
  $('.card_imgthree').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_three_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});

//Project Card FOUR - Animation
var textWrapper = document.querySelector('.projectfour_title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

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
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectfour_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
    }
  );
});
//Project Card One - Category Label Animation
var textWrapper = document.querySelector('.project_four_label');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgfour').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});
//Project Card One - Project Star Animation [Universal]
var textWrapper = document.querySelector('.project_four_card_star');
$(document).ready(function () {
  $('.card_imgfour').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_four_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});

//Project Card FIVE - Animation
var textWrapper = document.querySelector('.projectfive_title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgfive').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectfive_title .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectfive_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
    }
  );
});
//Project Card Five - Category Label Animation
var textWrapper = document.querySelector('.project_five_label');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgfive').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_five_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_five_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});
//Project Card Five - Project Star Animation [Universal]
var textWrapper = document.querySelector('.project_five_card_star');
$(document).ready(function () {
  $('.card_imgfive').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_five_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_five_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});

//Project Card SIX - Animation
var textWrapper = document.querySelector('.projectsix_title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgsix').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectsix_title .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.projectsix_title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
    }
  );
});
//Project Card Five - Category Label Animation
var textWrapper = document.querySelector('.project_six_label');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

$(document).ready(function () {
  $('.card_imgsix').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_six_label .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_six_label .letter',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});
//Project Card Five - Project Star Animation [Universal]
var textWrapper = document.querySelector('.project_six_card_star');
$(document).ready(function () {
  $('.card_imgsix').hover(
    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_six_card_star',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        delay: (el, i) => 150 * (i + 1),
      });
    },

    function () {
      anime.timeline({ loop: false }).add({
        targets: '.project_six_card_star',
        opacity: 0,
        duration: 800,
        easing: 'easeOutExpo',
        delay: 1000,
      });
    }
  );
});
