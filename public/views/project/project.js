(function(){
  'use strict';
  angular.module('portfolio')
  .controller('ProjectCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
    var name = $stateParams.name;
    $scope.project = {};
    $scope.projects = [];

    $http.get('/public/data/projects.json').success(function(results){
      $scope.projects = results;
      $scope.project = $scope.projects.filter(function(p){
        return p.name.toLowerCase() === name.toLowerCase();
      })[0];
    });
  }]);
})();
