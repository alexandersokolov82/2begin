//Run Functions Theme
(function ($) {
  "use strict";

  // makes sure the whole site is loaded
  $(window).on('load', function() {
    $('body').addClass('body--loaded');
  });

  //sticked MENU
  $(document).ready(function(){
    var c, currentScrollTop = 0,
    navbar = $('.menu-sticked');

      $(window).scroll(function () {
         var a = $(window).scrollTop();
         var b = navbar.height();

         currentScrollTop = a;

         if (c < currentScrollTop && a > b + b) {
           navbar.addClass("scrollUp");
         } else if (c > currentScrollTop && !(a <= b)) {
           navbar.removeClass("scrollUp");
         }

         c = currentScrollTop;

     });
   });

   // Gallery modal - show clicked project image
   $(document).ready(function(){
     $('.works__gallery').on('click', function(e){
       e.preventDefault();
       var imgSrc = $(this).find('img').attr('src');
       var title = $(this).data('title') || '';
       var caption = $(this).data('caption') || '';
       $('#modalImage').attr('src', imgSrc);
       $('#modalCaption').html('<h4>' + title + '</h4><p>' + caption + '</p>');
       $('.ModalGallery').modal('show');
     });
   });

   //SCROLL
   $(document).ready(function(){
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });
   });

}) ( jQuery );
