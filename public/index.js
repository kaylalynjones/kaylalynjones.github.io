var smoothScroll, FastClick;
(function(){
  'use strict';
  //smooth scrolling------------------------------------------------------------
  smoothScroll.init({
    speed: 500,
    easing: 'easeInOutCubic',
    updateURL: true,
    offset: 0,
    callbackBefore: function(toggle, anchor){}, // Function to run before scrolling
    callbackAfter: function(toggle, anchor){} // Function to run after scrolling
  });
  //FastClick-------------------------------------------------------------------
  window.addEventListener('load', function(){
    FastClick.attach(document.body);
  }, false);
  //-------------------
  function init(){
    window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 300,
          nav = document.querySelector('nav');
      if (distanceY > shrinkOn){
        $(nav).addClass('smaller');
      } else {
        if (('smaller')){
          $(nav).removeClass('smaller');
        }
      }
    });
  }
  window.onload = init();
})();
