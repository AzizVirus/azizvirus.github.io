$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }     
  });

  // Scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      $('#return-to-top').fadeIn(200);
    } else {
      $('#return-to-top').fadeOut(200);
    }
  });

  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 500);
  });
  
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});