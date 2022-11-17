$(document).ready(function(){
   $('.carousel__inner').slick({
      speed: 1200,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="carousel_prev"><img src="icons/carousel__button_left.png"></button>',
      nextArrow: '<button type="button" class="carousel_next"><img src="icons/carousel__button_right.png"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
               arrows: false
            }
         }
      ]
    });
 });