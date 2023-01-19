$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  sal({
    once: true,
  });
  /***** Main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });
  /***** Articles slider *****/
  var ArticlesSwiper = new Swiper(".articles-slider .swiper", {
    // loop: true,
    spaceBetween: 16,
    pagination: {
      el: ".articles-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".articles-sec .swiper-button-next",
      prevEl: ".articles-sec .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      },
    },
  });
  /***** Books slider *****/
  var BooksSwiper = new Swiper(".books-slider .swiper", {
    // loop: true,
    spaceBetween: 16,
    pagination: {
      el: ".books-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".books-sec .swiper-button-next",
      prevEl: ".books-sec .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
    },
  });

  var OffersSwiper = new Swiper(".offers-slider .swiper", {
    // loop: true,
    spaceBetween: 16,
    pagination: {
      el: ".offers-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".offers-sec .swiper-button-next",
      prevEl: ".offers-sec .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  /***** Search *****/
  $(".search").on("click", function (e) {
    $(".search-sec").fadeIn(300).addClass("active");
    $(".search-overlay").fadeIn(300);
    $("body").addClass("overflow");
  });
  $(".search-overlay").on("click", function (e) {
    $(".search-sec").removeClass("active").fadeOut(300);
    $(".search-overlay").fadeOut(300);
    $("body").removeClass("overflow");
  });
  /***** Menu *****/
  $(".menu-btn").on("click", function (e) {
    $(".header-nav").slideToggle(300);
    $(this).toggleClass("active");
    $("body").toggleClass("overflow");
  });
});
