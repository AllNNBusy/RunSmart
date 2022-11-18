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