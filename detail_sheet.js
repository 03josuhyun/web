$(function () {
  $('.menu_btn').hover(function () {
    $('.menu_down_menu').slideDown(300);
  });
  $('.menu_btn').mouseout(function () {
    $('.menu_down_menu').slideUp(300);
  });
  //full_down_menu


  // 메인 큰 이미지 슬라이더
  $('.item_l .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav' // 네비게이션 슬라이더와 연동
  });

  // 하단 썸네일 슬라이더
  $('.item_l .slider-nav').slick({
    slidesToShow: 3,       // 한 화면에 3개씩 보여주기
    slidesToScroll: 1,
    asNavFor: '.slider-for', // 메인 슬라이더와 연동
    dots: true,             // 하단 점(dots) 표시
    centerMode: true,       // 가운데 정렬 활성화
    focusOnSelect: true     // 썸네일을 클릭하면 해당 슬라이더로 이동
  });

  const tab = $('.detail_box .detail_tab li');
  const sheet = $('.detail_box .detail_sheet>div');
  let index = 0;

  tab.click(function(){
    tab.removeClass('on_detail');
    $(this).addClass('on_detail');

    index = $(this).index();

    sheet.removeClass('on_detail_sheet');
    sheet.eq(index).addClass('on_detail_sheet');
  });
});