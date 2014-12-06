/*************************************************************/
///////////////////////////////////////////////////////////////
////                                                       ////
////  Simple Jquery Hover Dropdown Solution For Bootstrap  ////
////                                                       ////
///////////////////////////////////////////////////////////////
//////// nanoshrine - v1.0  //~~// www.nanoshrine.com /////////
///////////////////////////////////////////////////////////////
/*************************************************************/

jQuery(document).ready(function ($) {

    // ~ Optional If you use Modernizer ~ //    
    //if (Modernizr.mq('only all and (max-width: 768px)')){

    if ($(window).width() < 769) { // If Mobile Disable

    } else {

        $('.dropdown').hover(function () {
            $(this).toggleClass('open'); // Adds Hover Open Class
        });
        $('.dropdown').click(function () {
            $(this).removeClass('open'); // Removes Click Open Class
        });

    }

});