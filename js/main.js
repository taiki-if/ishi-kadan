$(function() {

  AOS.init( {
    duration: 1500,
    once: true,
  });

  //ハンバーガー
  $(".burger-btn, .nav__background").click(function(){
    $(".header-nav__items, .bar, .bar-under, body, .nav__background").toggleClass("open");
  });


  //ヘッダーリサイズ
  $(window).scroll(function(){
    if($(window).scrollTop() > 0){
      $(".header-wrap, .header-nav__item, .bar").addClass("remake");
      $(".logo-img").attr("src", "img/sub-header-logo.jpg");
    } else {
      $(".header-wrap, .header-nav__item, .bar").removeClass("remake");
      $(".logo-img").attr("src", "img/top-header-logo.jpg");
    };
  });

    if($(window).scrollTop() > 1){
      $(".header-wrap, .header-nav__item, .bar").addClass("remake");
      $(".logo-img").attr("src", "img/sub-header-logo.jpg");
    }

  //モーダル
  $(".reservation-btn").click(function() {
    $(".reservation__modal").fadeIn(500).toggleClass("open");
    $("body").addClass("open");
      $(".close-btn, .modal__background").click(function() {
        $(".reservation__modal").fadeOut(500).removeClass("open");
        $("body").removeClass("open");
      });
  });


  //タブ
  $("#other").hide();
  
  $(".tab-trigger").click(function(){
    $("#other, #info").hide();
    $($(this).attr("href")).fadeIn(1000);
    $(".current").removeClass("current");
    $(this).addClass("current");
    return false
  });

});