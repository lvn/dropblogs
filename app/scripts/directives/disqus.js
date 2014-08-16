'use strict';

/**
 * @ngdoc directive
 * @name dropblogsApp.directive:disqus
 * @description
 * # disqus
 */
angular.module('dropblogsApp')
  .directive('disqus', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the disqus directive');
      }
    };
  });

