$(function () {
  $(".star").rateYo({
    rating: 5.0,
    starWidth: "14px",
    normalFill: "#ececec",
    ratedFill: "#FFA858",
    spacing: "3px",
    readOnly: true,
    starSvg: ' <svg width = "15"height = "14"viewBox = "0 0 15 14" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><path d = "M6.82942 0.781287C7.13702 -0.122413 8.41509 -0.122403 8.72279 0.781287L9.70629 3.67075C9.84419 4.07602 10.2248 4.34853 10.6529 4.34853H13.7331C14.7131 4.34853 15.1083 5.61178 14.303 6.17025L11.8923 7.84218C11.5254 8.09662 11.3717 8.56342 11.5155 8.98612L12.455 11.7462C12.7658 12.6594 11.7311 13.4399 10.9385 12.8901L8.34599 11.0922C8.00319 10.8544 7.54893 10.8544 7.20619 11.0922L4.61371 12.8901C3.82104 13.4399 2.78632 12.6594 3.09715 11.7462L4.03664 8.98612C4.18051 8.56342 4.02675 8.09662 3.65987 7.84218L1.24913 6.17025C0.443886 5.61178 0.839076 4.34853 1.81902 4.34853H4.89923C5.32733 4.34853 5.70795 4.07602 5.8459 3.67075L6.82942 0.781287Z "fill = "#FFA858"/></svg>'
  });

  $('.header__btn, .nav__logo, .nav__link--mobile').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.nav__list').toggleClass('nav__list--active');
    $('.body').toggleClass('body--active');
  });

  $('.button--offers').on('click', function () {
    $('.catalog__item--hidden').toggleClass('catalog__item--active');
  });

  $('.button--news').on('click', function () {
    $('.news__item--hidden').toggleClass('news__item--active');
  });

  $(".logo, .nav__logo, .nav__link").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  
  AOS.init({
    once: true,
    disable: 'tablet',
  });
});