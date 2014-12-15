(function(){
  'use strict';
  angular.module('portfolio')
  .controller('ProjectCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
    $scope.project = $stateParams.name;
    $scope.projects = [];

    $http.get('/public/data/projects.json').success(function(results){
      $scope.projects = results;
      console.log($scope.projects);
    });
  }]);
})();
