'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
