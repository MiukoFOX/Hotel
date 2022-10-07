//Инициализация
new Swiper('.image-slider', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    530: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  //Выравнивание высоты
  autoHeight: true,
  //Кол-во для показа
  slidesPerView: 3,
  //Сколько пролистывать
  slidesPerGroup: 1,

});


$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});


$(document).ready(function() {
  $('.block_faq_title').click(function(event) {
   if($('faq-list').hasClass('one')){
      $('.block_faq_title').not($(this)).removeClass('active');
      $('.block-faq-text').not($(this).next()).slideUp(300);
}
     $(this).toggleClass('active').next().slideToggle(300);
  });
});