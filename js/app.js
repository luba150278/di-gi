$(document).ready(function () {
  let $grid = $(".grid").masonry({
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
    horizontalOrder: true,
  });

  //--reviewes section use the "Owl Carousel"
  $(".owl-carousel").owlCarousel({
    items: 1,
    center: true,
    singleItem: true
  });

  //----slow scroll-----
  $(function () {
    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault(); //cancel the standard action
      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      $("html, body").animate({ scrollTop: dn }, 1000);
    });
  });

  //scroll to top
  $(function () {
    let winHeight = document.documentElement.clientHeight;
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    scrollHeight = scrollHeight - 30 - winHeight;
    $(window).on("scroll", function (event) {
      if ($(this).scrollTop() != 0 && $(this).scrollTop() < scrollHeight) {
        $("#topNubex").fadeIn();
      } else {
        $("#topNubex").fadeOut();
      }
    });

    $("#topNubex").on("click", function (event) {
      $("body,html").animate({ scrollTop: 0 }, 700);
    });
  });
});