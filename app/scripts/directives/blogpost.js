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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the blogPost directive');
      }
    };
  });
