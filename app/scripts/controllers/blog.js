'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
  .controller('BlogCtrl', ['$scope', '$http', 'dbApiFactory', function ($scope, $http, dbApiFactory) {

    // attach the list of posts from dbApiFactory.getPostList() to scope
    dbApiFactory.getPostList()
      .then(function (postList) {
        $scope.posts = postList;
        $scope.firstPostShown = postList[0]; // pointer for pagination
      });
  }]);
