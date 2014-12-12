(function(){
  'use strict';

  $(document).on('ready', function(){
    $(document).on('scroll',function(){
      if($(document).scrollTop()>100){
        $('.row1').removeClass('large').addClass('small');
      } else{
        $('.row1').removeClass('small').addClass('large');
      }
    });

    $('.nav').prepend($('<div class="nav-mobile"></div>'));
    $('.nav-mobile').click(function(){
      $('.nav-list').slideToggle();
    });
  });


})();
