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

    dbApiFactory.getPostList()
      .then(function (postList) {
        $scope.posts = postList;
      });
  }]);
