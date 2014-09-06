'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:PostCtrl
 * @description Handles retrieval and display of individual posts.
 * # PostCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
  .controller('PostCtrl', ['$scope', '$http', '$route', 'dbApiFactory', function ($scope, $http, $route, dbApiFactory) {

      $scope.filename = $route.current.params.filename;

      $scope.post = dbApiFactory.getPost($scope.filename);

      // get the post from dbApiFactory.getPost() then attach the promise to the scope
      
    }]);
  
