(function(){
  'use strict';
  angular.module('portfolio')
  .controller('ProjectCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
    $scope.project = $stateParams.name;

    $http.get('/public/data/projects.json').success(function(results){
      console.log(results);
    });
  }]);
})();
