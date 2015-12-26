(function($){  
  // ****** SCREEN HEIGHT ******
  $(".screen-height").height($(window).height());

  $(window).resize(function(){
    $(".screen-height").height($(window).height());
  });
})(jQuery);