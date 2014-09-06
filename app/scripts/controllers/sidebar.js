'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
  .controller('SidebarCtrl', ['$scope', 'dbApiFactory', function ($scope, dbApiFactory) {
      $scope.getSidebar = function (which) {
        if (which === 'left')
          dbApiFactory.getLeftSidebar()
            .then(function (content) {
              $scope.sidebarContent = content;
              console.log($scope.sidebarContent);
            });
        else if (which === 'right')
          dbApiFactory.getRightsidebar()
            .then(function (content) {
              $scope.sidebarContent = content;
            })


      };
    }]);
