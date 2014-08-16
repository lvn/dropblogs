'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
	.controller('PostCtrl', ['$scope', '$http', '$route', 'dbApiFactory', function ($scope, $http, $route, dbApiFactory) {
			dbApiFactory.getPost('/dropblogs/posts/' + $route.current.params.filename)
				.then(function (post){
					$scope.post = post;
				})
		}]);
