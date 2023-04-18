const first_screen_slider = document.getElementById('reviews')
if (first_screen_slider) {
   new Swiper(first_screen_slider, {

      // Стрелки
      navigation: {
         prevEl: '.reviews-button-prev',
         nextEl: '.reviews-button-next',
      },

      //direction: 'vertical',
      //simulateTouch: false,
      //slideToClickedSlide: true,
      //observeSlideChildren: true,
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 40,
      //loop: true,
      speed: 800,
      effect: 'slide',
      /*parallax: true,
      breakpoints: {
         0: {
            slidesPerView: 2,
         },
         641: {
            slidesPerView: 3,
         },
         992: {
            slidesPerView: 2,
         }
      }*/
   });
}