$(function () {
  $('.menu_btn').hover(function () {
    $('.menu_down_menu').slideDown(300);
  });
  $('.menu_btn').mouseout(function () {
    $('.menu_down_menu').slideUp(300);
  });
  //full_down_menu

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

  /*const tab_season = $('.season_box .season .season_tab li');
  const sheet_season = $('.season_box .season .season_sheet>div');
  let season_index = 0;

  tab_season.click(function () {
    tab_season.removeClass('on_season');
    $(this).addClass('on_season');

    season_index = $(this).index();

    sheet_season.removeClass('on_season_sheet');
    sheet_season.eq(season_index).addClass('on_season_sheet');
  });

  const tab_bg = $('.season_box .season .season_tab');

  $('#spring').click(function(){
    tab_bg.attr('src','./img/spring.jpg').css('display','block');
  });
  */

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

  const tab_season = $('.season_box_event .season_event_box .season_tab li');
  const sheet_season = $('.season_box_event .season_event_box .season_sheet>div');
  let season_event_index = 0;
  tab_season.click(function () {
    tab_season.removeClass('on_season');
    $(this).addClass('on_season');

    season_event_index = $(this).index();

    sheet_season.removeClass('on_season_sheet');
    sheet_season.eq(season_event_index).addClass('on_season_sheet');
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
});
