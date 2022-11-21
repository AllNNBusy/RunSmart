// $(document).ready(function(){
//    $('.carousel__inner').slick({
//       speed: 1200,
//       slidesToShow: 1,
//       adaptiveHeight: true,
//       prevArrow: '<button type="button" class="carousel_prev"><img src="icons/carousel__button_left.png"></button>',
//       nextArrow: '<button type="button" class="carousel_next"><img src="icons/carousel__button_right.png"></button>',
//       responsive: [
//          {
//             breakpoint: 992,
//             settings: {
//                dots: true,
//                arrows: false
//             }
//          }
//       ]
//     });
//  });

const slider = tns({
   container: '.carousel__inner',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   controls: false,
   nav: false,
   autoplay: false,
   autoplayButtonOutput: false,
   navPosition: "bottom",
   responsive: {
      992: {
         nav: false,
         autoplay: false,
      },
      300: {
         nav: true,
         autoplay: true
      }
   }
});

document.querySelector('.carousel_prev').addEventListener('click', function () {
   slider.goTo('prev');
});

document.querySelector('.carousel_next').addEventListener('click', function () {
   slider.goTo('next');
});

$(document).ready(function(){
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container__catalog').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   // $('.catalog-item__link').each(function(i) {
   //    $(this).on('click', function(e) {
   //       e.preventDefault();
   //       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
   //       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
   //    })
   // });

   // $('.catalog-item__back').each(function(i) {
   //    $(this).on('click', function(e) {
   //       e.preventDefault();
   //       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
   //       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
   //    })
   // })

   function toggleSlide(item) {
      $(item).each(function(i) {
         $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });
   };

   toggleSlide('.catalog-item__link');
   toggleSlide('.catalog-item__back');

   // Modal

   $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
   });
   $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
   });

   $('.button_catalog').each(function(i) {
      $(this).on('click', function() {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn();
      })
   });
   // $('.thanks_btm').on('click', function() {
   //    $('.overlay, #consultation, #order').fadeOut();
   // });
   // $('.thanks_btm').on('click', function() {
   //    $('.overlay, #thanks').fadeIn();
   // });
});

