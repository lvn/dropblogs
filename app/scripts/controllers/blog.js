'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
  .controller('BlogCtrl', function ($scope, dbApiFactory) {
    /*
    $scope.posts = [
      {
        title: 'Test test first',
        uploadDate: 'Sat, 21 Aug 2010 22:31:20 +0000',
        content: 'test'
      },
      {
        title: 'The Vice of Selflessness',
        uploadDate: 'Sun, 22 Aug 2010 00:05:00 +0000',
        content: '### Hello etc. \n sdfdfsdfsdf'
      }
    ];*/

    $scope.posts = dbApiFactory.getBlogPostList();

  });
