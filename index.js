$(function () {
  const btnOpen = $('.menu_box .menu .menu_btn');
  const btnClose = $('.menu_box .menu .menu_close');

  btnOpen.click(function () {
    $('.menu_down_menu').stop().animate({
      height: 300
    }, 300);
    btnOpen.css('display', 'none');
    btnClose.css('display', 'block');
  });
  btnClose.click(function () {
    $('.menu_down_menu').stop().animate({
      height: 0
    }, 300);
    btnClose.css('display', 'none');
    btnOpen.css('display', 'block');
  });

  /*$('.menu_btn').hover(function () {
    $('.menu_down_menu').slideDown(300);
  });
  $('.menu_btn').mouseout(function () {
    $('.menu_down_menu').slideUp(300);
  });
  //full_down_menu*/

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //

  $('.slider4').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });
  //

  const tab = $('.today .today_tab li');
  const sheet = $('.today .today_sheet>div');
  let index = 0;

  tab.click(function () {
    tab.removeClass('on');
    $(this).addClass('on');

    index = $(this).index();

    sheet.removeClass('on_sheet');
    sheet.eq(index).addClass('on_sheet');
  });

  const tab_mbti = $('.mbti_box .mbti .mbti_tab li');
  const sheet_mbti = $('.mbti_box .mbti .mbti_sheet>div');
  let mbti_index = 0;

  tab_mbti.click(function () {
    tab_mbti.removeClass('on_mbti');
    $(this).addClass('on_mbti');

    mbti_index = $(this).index();

    sheet_mbti.removeClass('on_mbti_sheet');
    sheet_mbti.eq(mbti_index).addClass('on_mbti_sheet');
  });
/*
  const tab_season = $('.season_box .season .season_tab li');
  const sheet_season = $('.season_box .season .season_sheet>div');
  let season_index = 0;

  tab_season.click(function () {
    tab_season.removeClass('on_season');
    $(this).addClass('on_season');

    season_index = $(this).index();

    sheet_season.removeClass('on_season_sheet');
    sheet_season.eq(season_index).addClass('on_season_sheet');
  });

  $('#spring').click(function () {
    $('.season_bg').css({
      'background-image': 'url("./img/spring_bg.jpg")'
    });
  });

  $('#summer').click(function () {
    $('.season_bg').css({
      'background-image': 'url("./img/summer_bg.jpg")'
    });
  });

  $('#fall').click(function () {
    $('.season_bg').css({
      'background-image': 'url("./img/fall_bg.jpg")'
    });
  });
  */
  $('#winter').click(function () {
    $('.season_bg').css({
      'background-image': 'url("./img/winter_bg.jpg")'
    });
  });
  const img_l = $('.celeb .celeb_r .celeb_img_l');
  const img_r = $('.celeb .celeb_r .celeb_img_r');
  tab_mbti.click(function () {
    tab_mbti.removeClass('on_mbti');
    $(this).addClass('on_mbti');

    mbti_index = $(this).index();

    sheet_mbti.removeClass('on_mbti_sheet');
    sheet_mbti.eq(mbti_index).addClass('on_mbti_sheet');
  });

  img_l.click(function () {
    $('#popup_celeb_l').fadeIn();
  });
  img_r.click(function () {
    $('#popup_celeb_r').fadeIn();
  });
  $('.celeb_close_l').click(function () {
    $('#popup_celeb_l').fadeOut();
  });
  $('.celeb_close_r').click(function () {
    $('#popup_celeb_r').fadeOut();
  });

  $('.cart').click(function () {
    $('#popup').fadeIn();
  });

  $('.heart').click(function () {
    $('#popup_heart').fadeIn();
  });
  $('.close').click(function () {
    $('#popup').fadeOut();
  });
  $('.close_heart').click(function () {
    $('#popup_heart').fadeOut();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $('.wing_box').fadeIn(300);
    } else {
      $('.wing_box').fadeOut(300);
    }
  });

});
