'use strict';

/**
 * @ngdoc service
 * @name dropblogsApp.dbApi
 * @description
 * # dbApiFactory
 * Factory in the dropblogsApp.
 */
angular.module('dropblogsApp')
  .factory('dbApiFactory', ['$http', '$q', 'apiConfig', function ($http, $q, apiConfig) {
    // Service logic
    // ...

    // configure and get access key
    var configs = apiConfig;

    // Public API here
    return {
      // retrieves standard configs
      isAccessTokenValid: function() {
        return (configs.accessToken != '__ACCESS_TOKEN_HERE');
      },
      getConfigs: function() {
        return configs;
      },
      // generic Dropbox API GET call to url
      apiCallGet: function(url) {
        var ret = $q.defer();
        $http.get(url, {params: {'access_token': configs.accessToken}})
        .success(function (response) {
          ret.resolve(response);
        });
        return ret.promise;
      },
      // Dropbox API call to retrieve individual post
      getFile: function(path) {
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
        $http.get('https://api.dropbox.com/1/metadata/auto/' + path,
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          ret.resolve(response);
        });
        return ret.promise;
      },
      getPost: function(filename) {
        var filePath = configs.postsPath + filename;
        var getFileFn = this.getFile;
        var ret = {};

        this.getPostMetadata(filePath)
        .then(function (postMetadata) {
          ret.title = postMetadata.path.replace(configs.postsPath,'');
          ret.uploadDate = Date.parse(postMetadata.client_mtime);
          getFileFn(filePath)
            .then(function (post){
              ret.content = post;
            });
        });

        return ret;
      },
      // Dropbox API call to retrieve the `posts` folder metadata, then process it into a prettified list of posts
      // messier than grabbing the metadata list and mapping it into a list of filenames, then running getPost() on each file name, but more optimized
      getPostList: function() {
        var ret = $q.defer();
        var getPostFn = this.getFile;
        $http.get('https://api.dropbox.com/1/metadata/auto/' + configs.postsPath,
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          var postList = response.contents.map(function(post){
            // grabs the file list and maps each of them into an object containint title, date, and content
            var postEntry = {
              title: post.path,
              path: post.path.replace('/dropblogs/posts/',''),
              uploadDate: Date.parse(post.client_mtime),
            };

            // make separate Dropbox API call for each file
            getPostFn(post.path).then(function (postFile) {
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
