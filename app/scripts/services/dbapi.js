'use strict';

/**
 * @ngdoc service
 * @name dropblogsApp.dbApi
 * @description
 * # dbApiFactory
 * Factory in the dropblogsApp.
 */
angular.module('dropblogsApp')
  .factory('dbApiFactory', ['$http', '$q', function ($http, $q) {
    // Service logic
    // ...

    // standard configurations
    var configs = {
      accessToken: 'APdqGcfl5OEAAAAAAAAAv4DMublsAvwHBp-xP3Zpyy9Om41t9Xoop2jKVdkmExPA'
    };

    // Public API here
    return {
      // retrieves standard configs
      getConfigs: function() {
        return configs;
      },
      // Dropbox API call to retrieve individual post
      getPost: function(path) {
        var ret = $q.defer();
        $http.get('https://api-content.dropbox.com/1/files/auto/' + path,
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          ret.resolve(response);
        });
        return ret.promise;
      },
      // Dropbox API call to retrieve metadata for individual post
      getPostMetadata: function(path) {
        var ret = $q.defer();
        $http.get('https://api.dropbox.com/1/metadata/auto' + path,
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          ret.resolve(response);
        });
        return ret.promise;
      },
      // Dropbox API call to retrieve the `posts` folder metadata, then process it into a prettified list of posts
      getPostList: function() {
        var ret = $q.defer();
        var getPost = this.getPost;
        $http.get('https://api.dropbox.com/1/metadata/auto/dropblogs/posts',
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          var postList = response.contents.map(function(post){
            // grabs the file list and maps each of them into an object containint title, date, and content
            var postEntry = {
              title: post.path,
              path: post.path.replace('/dropblogs/posts/',''),
              uploadDate: post.client_mtime,
            };

            // make separate Dropbox API call for each file
            getPost(post.path).then(function (postFile) {
              postEntry.content = postFile;
            });
            return postEntry;
          });

          ret.resolve(postList);
        });
        return ret.promise;
      }
    };
  }]);
