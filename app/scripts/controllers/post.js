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

			$scope.filename = $route.current.params.filename;

			$scope.post = {};

			var dropblogPostPath = dbApiFactory.getConfigs().dropblogPostPath;

			dbApiFactory.getPostMetadata(dropblogPostPath + $route.current.params.filename)
				.then(function (postMetadata) {
					$scope.post.title = postMetadata.path.replace(dropblogPostPath,'');
					$scope.post.uploadDate = postMetadata.client_mtime;

					dbApiFactory.getFile(dropblogPostPath + $route.current.params.filename)
						.then(function (post){
							$scope.post.content = post;
						});
				});

			// get the post from dbApiFactory.getPost() then attach the promise to the scope
			
		}]);
