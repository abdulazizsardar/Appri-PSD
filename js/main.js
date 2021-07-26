$(document).ready(function(){

 jQuery(".player").YTPlayer({
   showControls: false,
 });


  $(window).on('scroll',function() {
         var scroll = $(window).scrollTop();
         if (scroll < 50) {
          $("#sticky-header").removeClass("sticky-menu");
         }else{
          $("#sticky-header").addClass("sticky-menu");
         }
        });


$(window).scroll(function(){
  if($(this).scrollTop()>700){
    $('.goTop').fadeIn();
  }else{
  $('.goTop').fadeOut();
  }
});

$('.goTop').click(function(){
  $('html,body').animate({scrollTop:0}, 500);
});











  $('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'
  });

  $('.counter').counterUp({
      delay: 10,
      time: 1000,
      offset: 70,
      beginAt: 100,
      formatter: function (n) {
        return n.replace(/,/g, '.');
      }
  });





  $('.testimonial-active').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.image-active'
 });
 $('.image-active').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.testimonial-active',
   dots: true,
   centerMode: true,
   focusOnSelect: true,
  centerPadding: "0px",
  arrows:false,
  responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
    ]
 });

 $('.brand-active').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })

          function mainSlider() {
           var BasicSlider = $('.nav-active');
           BasicSlider.on('init', function(e, slick) {
           var $firstAnimatingElements = $('.single-nav:first-child').find('[data-animation]');
           doAnimations($firstAnimatingElements);
           });
           BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
           var $animatingElements = $('.single-nav[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
           doAnimations($animatingElements);
                   });
           BasicSlider.slick({
             autoplay: false,
             autoplaySpeed: 10000,
             dots: false,
             fade: true,
             prevArrow:'<button type="button" class="prevarrow"><span><i class="fas fa-arrow-left"></i></span></button>',
            nextArrow:'<button type="button" class="nextarrow"><span><i class="fas fa-arrow-right"></i></span></button>',
           	arrows: true,
             responsive: [
               { breakpoint: 767, settings: { dots: false, arrows: false } }
                       ]
                   });

             function doAnimations(elements) {
                 var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                 elements.each(function() {
                     var $this = $(this);
                     var $animationDelay = $this.data('delay');
                     var $animationType = 'animated ' + $this.data('animation');
                     $this.css({
                         'animation-delay': $animationDelay,
                         '-webkit-animation-delay': $animationDelay
               });
               $this.addClass($animationType).one(animationEndEvents, function() {
                   $this.removeClass($animationType);
                           });
                       });
                   }
               }
               mainSlider();































});
