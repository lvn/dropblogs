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
			$http.get('https://api-content.dropbox.com/1/files/auto/dropblogs/posts/' + $route.current.params.filename,
				{params: {'access_token': dbApiFactory.getConfigs().accessToken}})
			.success(function (response){
				$scope.post = response;
			});
		}]);
