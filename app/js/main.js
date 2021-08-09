
$(function(){


  if ($(window).scrollTop() > 1){
    $('.header').addClass("sticky");
    }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });


    $('.header__burger, .menu').click(function (){
     $('.header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });

     $(".menu a, .header__logo, .footer-menu a, .footer__logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});


  $('.people-slider__items').slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 15.28 15.281" width="18" height="18" fill="#d9e2ec"><use xlink:href="images/sprite.svg#left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 15.28 15.281" width="18" height="18" fill="#d9e2ec"><use xlink:href="images/sprite.svg#right-arrow"></use></svg></button>',
  });


  $('.looks-slider__items').each(function() {
    $(this).slick({
      dots: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      arrow: false,
      focusOnSelect: true,
      pauseOnDotsHover: true,
          responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1,
       }
     },
   {
   }]
  });
});


$('.questions__subtitle').click(function () {
  if ($('.questions__item').hasClass('one')) {
      $('.questions__subtitle').not($(this)).removeClass('active');
      $('.questions__text').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('active').next().slideToggle(300);
});


$('.contact__sort').styler();


$('.jq-selectbox__select').click(function () {
    $(this).toggleClass('active');
  }
);


function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

});