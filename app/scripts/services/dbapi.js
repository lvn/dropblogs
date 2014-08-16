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

    // https://api-content.dropbox.com/1/files/auto/dropblogs/posts/test.md?grant_type=authorization_code&code=APdqGcfl5OEAAAAAAAAAsuwIWlaR4K9CXF9IusfT0aw&client_id=jo9z6w26kwj4ui1&client_secret=uweeysghqjztij3&access_token=APdqGcfl5OEAAAAAAAAAtc_xRxt_-diQ-lt5AYutd26h5jMY08pErUR-7fdPTFea&token_type=bearer&uid=32372778
    
    /* get contents from folder metadata, then get each file and sort by creation date (client_mtime) */

    /*
    var client_id = 'jo9z6w26kwj4ui1';
    var client_secret = 'uweeysghqjztij3';
    var code = 'APdqGcfl5OEAAAAAAAAAvMAlpAlWRNZBTGdkb6Us7gk';
    var access_token = '';

    $http.post('https://api.dropbox.com/1/oauth2/token', {}, 
    {
      client_id: client_id,
      client_secret: client_secret,
      code: code
    })
    .success(function(response){
      access_token = response.access_token;
    });
    */

    var configs = {
      accessToken: 'APdqGcfl5OEAAAAAAAAAv4DMublsAvwHBp-xP3Zpyy9Om41t9Xoop2jKVdkmExPA'
    };

    // Public API here
    return {
      getConfigs: function() {
        return configs;
      },
      getPost: function(path) {
        var ret = $q.defer();
        $http.get('https://api-content.dropbox.com/1/files/auto' + path,
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          ret.resolve(response);
        });
        return ret.promise;
      },
      getPostMetadata: function(path) {
        var ret = $q.defer();
        $http.get('https://api.dropbox.com/1/metadata/auto' + path,
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          ret.resolve(response);
        });
        return ret.promise;
      },
      getPostList: function() {
        var ret = $q.defer();
        var getPost = this.getPost;
        $http.get('https://api.dropbox.com/1/metadata/auto/dropblogs/posts',
          {params: {'access_token': configs.accessToken}})
        .success(function (response){
          var postList = response.contents.map(function(post){
            var postEntry = {
              title: post.path,
              uploadDate: post.client_mtime,
            };
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
