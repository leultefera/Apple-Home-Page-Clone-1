// Footer links hider jQuery

$(".footer-links-wrapper h3").click(function () {
  if ($(window).width() <= 768) {
    $(this).next("ul").slideToggle();
    // $(this).parent().children("ul").slideToggle();
    $(this).toggleClass("iconRotator");
  }
});
  