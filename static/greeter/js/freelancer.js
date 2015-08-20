/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var evaluateScrollToTop = function()
{
  var e = $('.scroll-top');
  if(window.scrollY < 565 && e.css('opacity') == 1) {
    e.fadeOut(400, function() {
          $(this).css('opacity', 0).hide();
        });
  }
  else if(window.scrollY >= 565 && e.css("opacity") == 0) {
    e.show().fadeIn(400, function() { 
          $(this).css('opacity', 1);
        });
  }
};

//$(document).ready(function() {evaluateScrollToTop()});

// Fade out the scroll to top button when we're at the top
window.addEventListener("scroll", evaluateScrollToTop, false);
