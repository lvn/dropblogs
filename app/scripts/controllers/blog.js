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
    ];


    $http.get('https://api.dropbox.com/1/metadata/auto/dropblogs/posts?access_token=APdqGcfl5OEAAAAAAAAAv4DMublsAvwHBp-xP3Zpyy9Om41t9Xoop2jKVdkmExPA')
      .success(function (response) {
        $scope.posts = response.contents;
      });
    */
    $http.get('https://api.dropbox.com/1/metadata/auto/dropblogs/posts/',
      {params: {'access_token': dbApiFactory.getConfigs().accessToken}})
    .success(function (response) {
      $scope.posts = response.contents;
    })
  }]);
