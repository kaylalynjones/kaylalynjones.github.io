var smoothScroll, FastClick;

(function(){
  'use strict';
  angular.module('portfolio', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');


    $stateProvider
    .state('index',{
      views: {
        'home@': {url:'/',        templateUrl:'public/views/home/home.html', controller:'HomeCtrl'},
        'projects@': { }
      }
    });

    // .state('home',     {url:'/',        templateUrl:'public/views/home/home.html', controller:'HomeCtrl'})
    // .state('project',     {url:'',      abstract:true})
    // .state('home.games',     {url:'games',        templateUrl:'public/views/games/games.html', controller:'GameCtrl'})
    // .state('project.mean',      {url:'/mean',         templateUrl:'public/views/mean/mean.html',  controller:'MeanCtrl'})
    // .state('project.node', {url:'/node', templateUrl:'public/views/node/node.html',         controller:'NodeCtrl'})
    // .state('project.mobile', {url:'/mobile', templateUrl:'public/views/mobile/mobile.html',         controller:'MobileCtrl'})
    // .state('project.featured', {url:'/featured', templateUrl:'public/views/featured/featured.html',         controller:'FeatureCtrl'})
    // .state('project.hack', {url:'/hack', templateUrl:'public/views/hack/hack.html',         controller:'HackCtrl'});
    //.state('work', {url:'/work', templateUrl: 'public/views/work/work.html', controller:'WorkCtrl'});
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
  //Shrink on Scroll------------------------------------------------------------
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
  //Show View on tabs-----------------------------------------------------------
  $('.tabs > li').on('click', function(e){
    $('.tabs > li').removeClass('active');
    $(this).addClass('active');
  });
})();
