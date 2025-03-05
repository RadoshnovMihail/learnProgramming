$(function(){
   $(".header__menu a, .footer__logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
   $('.blog__slider-inner').slick({
      dots: true,
      arrows: false
   });
   $('.menu-btn').on('click', function(){
      $('.header__menu-inner').toggleClass('header__menu-inner--active');
   });
   var mixer = mixitup('.gallery__content-inner');
    });