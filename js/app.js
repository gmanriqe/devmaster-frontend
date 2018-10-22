function onReady() {

  $(window).on("load scroll", function() {
    // Menu
    var sTop = $(window).scrollTop();
    var heightMenu= $('.menu').height();
    navBar = $("#navBar");
    if (sTop >= heightMenu) {
      navBar.parent().addClass("fixed-top");
      navBar.parent().css({
        "background-color": "black"
      });
      navBar.parent().addClass('menu-animated');
    } else {
      navBar.parent().removeClass("fixed-top");
      navBar.parent().css({
        "background-color": "black"
      });
      navBar.parent().removeClass('menu-animated');
    }

    // Owl Carrousel
    $('.owl-carousel').owlCarousel();

    // To Top

    $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
      if( scroll >= 1400) {
        $('.to-top').addClass('top-block');
      }else {
        $('.to-top').removeClass('top-block');
      }
    })
    console.log($('.footer').offset().top);

    
    $('.to-top').on('click',function(){
      $('html, body').animate({ scrollTop: 0}, 700)
    });


  });
}

$(document).ready(onReady());
