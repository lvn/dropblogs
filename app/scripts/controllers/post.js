'use strict';

/**
 * @ngdoc function
 * @name dropblogsApp.controller:PostCtrl
 * @description Handles retrieval and display of individual posts.
 * # PostCtrl
 * Controller of the dropblogsApp
 */
angular.module('dropblogsApp')
	.controller('PostCtrl', ['$scope', '$http', '$route', 'dbApiFactory', function ($scope, $http, $route, dbApiFactory) {

			// get the post from dbApiFactory.getPost() then attach the promise to the scope
			dbApiFactory.getPost('dropblogs/posts/' + $route.current.params.filename)
				.then(function (post){
					$scope.post = post;
				});
		}]);
