'use strict';

/**
 * @ngdoc overview
 * @name dropblogsApp
 * @description
 * # dropblogsApp
 *
 * Main module of the application.
 */
angular
  .module('dropblogsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/post/:filename', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
