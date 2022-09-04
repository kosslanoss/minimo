$(function(){

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });



  const swiper = new Swiper('.swiper', {
    loop: true,
  });


  
});