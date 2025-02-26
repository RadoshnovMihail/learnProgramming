$(function(){
   $('.blog__slider-inner').slick({
      dots: true,
      arrows: false
   });
   $('.menu-btn').on('click', function(){
      $('.header__menu-inner').toggleClass('header__menu-inner--active');
   });
   var mixer = mixitup('.gallery__content-inner');
    });