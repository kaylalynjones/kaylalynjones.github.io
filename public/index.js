var smoothScroll, FastClick;

(function(){
  'use strict';
  angular.module('portfolio', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/games', {templateUrl:'public/views/games/games.html', controller:'GameCtrl'})
    .when('/mean', {templateUrl:'public/views/mean/mean.html', controller:'MeanCtrl'})
    .when('/node', {templateUrl:'public/views/node/node.html', controller:'NodeCtrl'})
    .when('/mobile', {templateUrl:'public/views/mobile/mobile.html', controller:'MobileCtrl'})
    .when('/featured', {templateUrl:'public/views/featured/featured.html', controller:'FeatureCtrl'})
    .when('/hack', {templateUrl:'public/views/hack/hack.html', controller:'HackCtrl'});
  }]);
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
