'use strict';

/**
 * @ngdoc directive
 * @name dropblogsApp.directive:blogPost
 * @description
 * # blogPost
 */

angular.module('dropblogsApp')
  .directive('blogPost', function () {
    return {
      templateUrl: 'views/blogpost-component.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });