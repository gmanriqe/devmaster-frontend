function onReady() {
  console.log("carga exitosa");
  //    $(window).on(scroll,function(){
  console.log($(window).scrollTop());
  //    if( >= 200 ) {
  //        $('#navBar').addClass('fixed-top');
  //    }else {
  //     $('#navBar').removeClass('fixed-top');
  //    }
  //    })

  $(window).on("scroll", function() {
    var sTop = $(window).scrollTop();
    navBar = $("#navBar");
    if (sTop >= 400) {
      navBar.addClass("fixed-top");
      navBar.css({
        "background-color": "black"
      });
    } else {
      navBar.removeClass("fixed-top");
      navBar.css({
        "background-color": "transparent"
      });
    }
  });
}

$(document).ready(onReady());
