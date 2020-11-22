(function($) {
  "use strict";
  // Mobile nenu
  $('.humg-btn').click(function(){
    $('.humg-btn').toggleClass('humgbMenu')
  });
  $('.humg-btn').click(function(){
    $('.mobile-menu').toggleClass('menuActivve')
  }); 
  // sticky nav
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
        $('header').addClass("sticky")  
    }
    else{
        $('header').removeClass("sticky")
    }
  });

  // scroll to bottom
  $(function(){$("#button").click(function(){$("html,body").animate({scrollTop:$(".choice-area").offset().top},"1000");return false})})


  // owlCarousel
  $(".choice-blks").owlCarousel({
    loop: true,
    margin: 80,
    items: 3,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    center: true,
    autoplay:true,
    smartSpeed:1000,
    nav: true, 
    responsive: {
      0: {
        items: 1,
        center: false,
        nav:false
      },
      767: {
        items: 2,
        nav:false
      },
      992: {
        items: 3
      }
    }
  });
 

  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
 
 
  // Nice-select
  $('select').niceSelect();
  
  // AOS animation
  AOS.init();
 

})(jQuery);
