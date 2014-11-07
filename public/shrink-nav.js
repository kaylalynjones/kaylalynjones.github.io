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
    var $position = $('.nav-list').position();

    $('.nav-mobile').click(function(){
      $('.nav-list').toggle();

      $('.row1').removeClass('large');
      $('.row1').removeClass('small');
      $('.nav-list').addClass('mobile');
      if($position.top === 0){
        $('.nav-list').addClass('home-out');
      } else {
        $('#content').addClass('home-in');
      }

    });
  });


})();
