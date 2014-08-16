'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
