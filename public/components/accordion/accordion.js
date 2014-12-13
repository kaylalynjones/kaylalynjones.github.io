(function(){
  'use strict';
  angular.module('portfolio').directive('accordion', function(){
    return {
      restrict: 'E',
      scope: {
        heading: '@'
      },
      transclude: true,
      template: '<h4 class="accordion-heading">{{heading}}</h4><div class="accordion-content" ng-transclude></div>',
      link: function(scope, elem, attrs, fn){
        var $content = elem.find('.accordion-heading');
        $content.on('click', function(){
          $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
          $(this).next('.accordion-content').slideDown();
        });
      }
    };
  });
})();
