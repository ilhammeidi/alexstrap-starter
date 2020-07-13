var smUp = "(min-wdth: 600px)",
    mdUp = "(min-width: 960px)",
    lgUp = "(min-width: 1280px)",
    xlUp = "(min-width: 1920px)",
    xsDown = "(max-width: 599px)",
    smDown = "(max-width: 959px)",
    mdDown = "(max-width: 1279px)",
    lgDown = "(max-width: 1919px)";

var $header = $("#header");
var $pageNav = $("#page_nav");
var sticky = header.offsetTop + 100;

function fixedNav() {
  if (window.pageYOffset > sticky) {
    $header.addClass("fixed");
  } else {
    $header.removeClass("fixed");
  }
}

function fixedFabNav() {
  if (window.pageYOffset > 500) {
    $pageNav.addClass("show");
  } else {
    $pageNav.removeClass("show");
  }
}

// Scroll fixed
window.onscroll = function() {
  fixedNav();
  fixedFabNav();
};

$(document).ready(function(){
  // Preloader
  $('#preloader').delay(1000).fadeOut('fast');
  $(".transition-page").addClass('page-fadeUp-transition-enter').delay(1000).queue(function(){
    $(this)
    .removeClass('page-fadeUp-transition-enter')
    .addClass('page-fadeUp-transition-enter-active')
    .dequeue()
    .delay(1400).queue(function(){
      $(this)
      .removeClass('page-fadeUp-transition-enter-active')
      .addClass('page-fadeUp-transition-exit')
      .dequeue();
    })
  });
  
  // Open Page scroll navigation
  $('.scrollnav').navScroll({
    scrollSpy: true,
    activeParent: true,
    activeClassName: 'current'
  });
  
  // initial wow
  new WOW().init();
  
  // initial parallax
  $('#mode_feature').enllax();
  
  // Accordion init
  $('.collapsible').collapsible();

  // Select
  $('.select').formSelect();

  // Tooltip initial
  $('.tooltipped').tooltip();

  // slick carousel config
  $('.slick-carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 30000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
