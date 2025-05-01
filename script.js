$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  //   toogle menu / navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

// animação de escrita

var Typed1 = new Typed(".typing", {
  strings: ["Desenvolvedor Web", "Freelancer", " Desenvolvedor Front-End"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var Typed2 = new Typed(".typing-2", {
  strings: ["Desenvolvedor Web", "Freelancer", " Desenvolvedor Front-End"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
