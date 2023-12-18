


// JQuery
$(window).scroll(function () {
   var sc = $(window).scrollTop()
   if (sc > 1) {
      $('.header').addClass('scroll')
   }
   else {
      $('.header').removeClass('scroll')
   }
});

   // Searcher
   $(document).on('click', '#searcher', function (event) {
      $(this).addClass('active');
      $('.header__title').addClass('active');
      $('.header__burger').addClass('activeFor');
   });

   // Scroll animation
   $('.main__info').addClass('animation')

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 200) {
         $('.header__link.first').removeClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 500) {
         $('.about__cards').addClass('animation')
         $('.header__link.first').addClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 700) {
         $('.numbers__info').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1200) {
         $('.services__column.first').addClass('animation')
         $('.services__column.second').addClass('animation')
         $('.services__column.third').addClass('animation')
         $('.header__link.first').removeClass('activeLink')
         $('.header__link.second').removeClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1300) {
         $('.header__link.second').addClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1500) {
         $('.devices__tablet').addClass('animation')
         $('.devices__phone').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 2000) {
         $('.header__link.second').removeClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 2700) {
         $('.spoiler__image').addClass('animation')
         $('.spoiler__block').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 3300) {
         $('.slider').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 3700) {
         $('.team__item.first').addClass('animation')
         $('.team__item.second').addClass('animation')
         $('.team__item.third').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 4100) {
         $('.logos__row.first').addClass('animation')
         $('.logos__row.second').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 4700) {
         $('.header__link.third').removeClass('activeLink')

      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 4800) {
         $('.header__link.third').addClass('activeLink')

      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 5300) {
         $('.slider-person').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 5700) {
         $('.header__link.third').removeClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 5900) {
         $('.clients__row.first').addClass('animation')
         $('.clients__row.second').addClass('animation')
         $('.header__link.third').removeClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 6500) {
         $('.stories__item').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 6700) {
         $('.header__link.forth').removeClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 6800) {
         $('.header__link.forth').addClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 7300) {
         $('.header__link.forth').removeClass('activeLink')
         $('.header__link.fifth').removeClass('activeLink')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 7400) {
         $('.blogs').addClass('animation')
         $('.header__link.fifth').addClass('activeLink')
      }
   });


   // Burger
   $(document).ready(function () {
      $('.header__burger').click(function (event) {
         $('.header__burger, .header__menu').toggleClass('active');
      });
   });

   //Spoiler
   $(document).ready(function () {
      $('.spoiler__title').click(function (event) {
         if ($('.spoiler__block').hasClass('one')) {
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text').not($(this).next()).slideUp(300);
         }
         $(this).toggleClass('active').next().slideToggle(300);
      });
   });

   //Sliders

   $(document).ready(function () {
      $('.slider').slick({
         arrows: true,
         draggable: false,
         swipe: false,
         adaptiveHeight: true,
         infinite: true,
         speed: 800,
      });
   });

   $(document).ready(function () {
      $('.slider-person').slick({
         arrows: true,
         draggable: false,
         swipe: false,
         adaptiveHeight: true,
         infinite: true,
         speed: 800,
      });
   });

   //Smooth Scroll
   $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      var blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;
      
      $("html, body").animate({
         scrollTop: blockOffset
      }, 500);
      });