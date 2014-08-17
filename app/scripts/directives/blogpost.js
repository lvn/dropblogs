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
      template: '<h3><a href="#/post/{{post.path}}">{{post.title}}</a></h3>
      {{post.path}}
      <p>{{post.uploadDate}}</p>
      <code>{{post.content}}</code>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the blogPost directive');
      }
    };
  });
