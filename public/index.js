var smoothScroll, FastClick;

(function(){
  'use strict';
  angular.module('portfolio', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');


    $stateProvider
    .state('home', {
      url: '/',
      views: {
        'home': {
          templateUrl : 'public/views/home/home.html',
          controller: 'HomeCtrl'
        },
        'project': {
          templateUrl: 'public/views/project.html'
        }
      }
    })
    .state('home.featured', {
      views: {
        'project': {
          templateUrl: 'public/views/featured/featured.html'
        }
      }
    })
    .state('home.hack', {
      views: {
        'project': {
          templateUrl: 'public/views/hack/hack.html'
        }
      }
    })
    .state('home.node', {
      views: {
        'project': {
          templateUrl: 'public/views/node/node.html'
        }
      }
    })
    .state('home.mean', {
      views: {
        'project': {
          templateUrl: 'public/views/mean/mean.html'
        }
      }
    })
    .state('home.games', {
      views: {
        'project': {
          templateUrl: 'public/views/games/games.html'
        }
      }
    })
    .state('project', {
      url: '/project/:name',
      views: {
        'home': {
          templateUrl : 'public/views/project/project.html',
          controller: 'ProjectCtrl'
        }
      }
    });
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
