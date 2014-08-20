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
    $scope.isAccessTokenValid = dbApiFactory.isAccessTokenValid(); // check with the API factory to see if blog is set up

    $scope.startPost = 0; // points at the beginning of the post list
    $scope.maxPagePosts = 10; // max 10 posts per page

    // attach the list of posts from dbApiFactory.getPostList() to scope
    dbApiFactory.getPostList()
      .then(function (postList) {
        $scope.posts = postList;
        $scope.numPosts = postList.length;

        console.log($scope.numPosts);
        $scope.numPages = Math.ceil((1.0*$scope.numPosts) / $scope.maxPagePosts); // set number of pages as ceil of |posts|/maxPagePosts

        $scope.pageNumbers = [];
        for (var i = 0; i < $scope.numPages; i++) // generate the list of page numbers
          $scope.pageNumbers.push(i);
      });
  }]);
