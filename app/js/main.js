
$(function(){

  $('.people-slider__items').slick({
    dots: false,
    infinite: true,
    // fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 15.28 15.281" width="18" height="18" fill="#d9e2ec"><use xlink:href="images/sprite.svg#left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 15.28 15.281" width="18" height="18" fill="#d9e2ec"><use xlink:href="images/sprite.svg#right-arrow"></use></svg></button>'
  });


  $('.looks-slider__items').each(function() {
    $(this).slick({
      dots: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      arrow: false,
  });
});



$('.questions__subtitle').click(function () {
  if ($('.questions__item').hasClass('one')) {
      $('.questions__subtitle').not($(this)).removeClass('active');
      $('.questions__text').not($(this).next()).slideUp(300);
    
  }
  $(this).toggleClass('active').next().slideToggle(300);
  
})
  
});