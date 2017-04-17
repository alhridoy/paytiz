// jQuery(document).ready(function($) {  



// // Responsive Menu
// $("ul.nav.navbar-nav li a").click(function() {
//     $(".navbar-collapse").removeClass("in");
// });

// // data-scroll-to//

//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
//   //scroll to top//
//   // Back Top Link
// var offset = 200;
// var duration = 500;
// $(window).scroll(function() {
//     if ($(this).scrollTop() > offset) {
//       $('.scroll-to-top').fadeIn(400);
//     } else {
//       $('.scroll-to-top').fadeOut(400);
//     }
//     });
//     $('.scroll-to-top').click(function(event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: 0
//     }, 600);
//     return false;
// });
//     // jQuery Smooth Scroll
// $('.page-scroll').on('click', function(event) {
//     var $anchor = $(this),
//         headerH = '55';
//     $('html , body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
//     }, 1200, 'easeInOutExpo');

//     event.preventDefault();
// });
//    // -------------------------------------------------------------
//     //  Owl Carousel
//     // -------------------------------------------------------------


//     (function() {

//         $("#featured-slider").owlCarousel({
//             items:3,
//             nav:true,
//             autoplay:true,
//             dots:true,
//             autoplayHoverPause:true,
//             nav:true,
//             navText: [
//               "<i class='fa fa-angle-left'></i>",
//               "<i class='fa fa-angle-right'></i>"
//             ],
//             responsive: {
//                 0: {
//                     items: 1,
//                     slideBy:1
//                 },
//                 500: {
//                     items: 2,
//                     slideBy:1
//                 },
//                 991: {
//                     items: 2,
//                     slideBy:1
//                 },
//                 1200: {
//                     items: 3,
//                     slideBy:1
//                 },
//             }            

//         });

//     }());


//     (function() {

//         $("#featured-slider-two").owlCarousel({
//             items:4,
//             nav:true,
//             autoplay:true,
//             dots:true,
//             autoplayHoverPause:true,
//             nav:true,
//             navText: [
//               "<i class='fa fa-angle-left '></i>",
//               "<i class='fa fa-angle-right'></i>"
//             ],
//             responsive: {
//                 0: {
//                     items: 1,
//                     slideBy:1
//                 },
//                 480: {
//                     items: 2,
//                     slideBy:1
//                 },
//                 991: {
//                     items: 3,
//                     slideBy:1
//                 },
//                 1000: {
//                     items: 4,
//                     slideBy:1
//                 },
//             }            

//         });
        
        

//     }());

// });
jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    //  ScrollUp Minimum setup
    // -------------------------------------------------------------

    (function() {

        $.scrollUp();

    }());
    

    // -------------------------------------------------------------
    //  Owl Carousel
    // -------------------------------------------------------------


 (function() {

        $("#featured-slider").owlCarousel({
            items:3,
            nav:true,
            autoplay:true,
            dots:true,
            autoplayHoverPause:true,
            nav:true,
            navText: [
              "<i class='fa fa-angle-left '></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                500: {
                    items: 2,
                    slideBy:1
                },
                991: {
                    items: 2,
                    slideBy:1
                },
                1200: {
                    items: 3,
                    slideBy:1
                },
            }            

        });

    }());


    (function() {

        $("#featured-slider-two").owlCarousel({
            items:4,
            nav:true,
            autoplay:true,
            dots:true,
            autoplayHoverPause:true,
            nav:true,
            navText: [
              "<i class='fa fa-angle-left '></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 2,
                    slideBy:1
                },
                991: {
                    items: 3,
                    slideBy:1
                },
                1000: {
                    items: 4,
                    slideBy:1
                },
            }            

        });
        
        

    }());

    (function() {

        $(".testimonial-carousel").owlCarousel({
            items:1,
            autoplay:true,
            autoplayHoverPause:true
        });

    }());

    (function() {

        $(".car-slider").owlCarousel({
            items:1,
            autoplay:true,
            autoplayHoverPause:true
        });

    }());


    // -------------------------------------------------------------
    //  Slider
    // -------------------------------------------------------------

    (function() {

        $('#price').slider();

    }());   
    
    
   
    
    // -------------------------------------------------------------
    //  language Select
    // -------------------------------------------------------------

   (function() {

        $('.language-dropdown').on('click', '.language-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.language-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

        $('.category-dropdown').on('click', '.category-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.category-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

    }());


    // -------------------------------------------------------------
    //  Tooltip
    // -------------------------------------------------------------

    (function() {

        $('[data-toggle="tooltip"]').tooltip();

    }());


    // -------------------------------------------------------------
    // Accordion
    // -------------------------------------------------------------

        (function () {  
            $('.collapse').on('show.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
                $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
            });

            $('.collapse').on('hide.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
                $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
            });
        }());


    // -------------------------------------------------------------
    //  Checkbox Icon Change
    // -------------------------------------------------------------

    (function () {

        $('input[type="checkbox"]').change(function(){
            if($(this).is(':checked')){
                $(this).parent("label").addClass("checked");
            } else {
                $(this).parent("label").removeClass("checked");
            }
        });

    }()); 
    
    
     // -------------------------------------------------------------
    //  select-category Change
    // -------------------------------------------------------------
    $('.select-category.post-option ul li a').on('click', function() {
        $('.select-category.post-option ul li.link-active').removeClass('link-active');
        $(this).closest('li').addClass('link-active');
    });

    $('.subcategory.post-option ul li a').on('click', function() {
        $('.subcategory.post-option ul li.link-active').removeClass('link-active');
        $(this).closest('li').addClass('link-active');
    });
    
    // -------------------------------------------------------------
    //   Show Mobile Number
    // -------------------------------------------------------------  

    (function () {

        $('.show-number').on('click', function() {
            $('.hide-text').fadeIn(500, function() {
              $(this).addClass('hide');
            });  
            $('.hide-number').fadeIn(500, function() {
              $(this).addClass('show');
            });             
        });


    }());
    
   
// script end
});

 
