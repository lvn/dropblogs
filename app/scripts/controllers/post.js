'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
  .controller('PostCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
